// Foodie — Web Demo (embedded)
var currentView = 'home';
var selectedCategory = 'all';
var currentRestaurant = null;
var searchTimer = null;

// ===== LANGUAGE =====
function switchLang(lang) {
  window.CURRENT_LANG = lang;
  localStorage.setItem('foodie-lang', lang);
  var lbl = document.getElementById('webLangLabel');
  if (lbl) lbl.textContent = lang.toUpperCase();
  updateWebThemeIcon();
  if (currentView === 'restaurant' && currentRestaurant) showRestaurant(currentRestaurant);
  else showHome();
}

// ===== INIT (runs when web.js loads) =====
(function init() {
  var lbl = document.getElementById('webLangLabel');
  if (lbl) lbl.textContent = window.CURRENT_LANG.toUpperCase();

  var search = document.getElementById('webSearchInput');
  if (search) search.addEventListener('input', function() {
    clearTimeout(searchTimer);
    var q = this.value;
    searchTimer = setTimeout(function() { handleSearch(q); }, 300);
  });

  updateCartBadge();
})();

function showWebChat() {
  var content = document.getElementById('webContent');
  var html = '<div class="web-center-col">';
  html += '<button class="web-back-btn" onclick="showHome()"><svg style="width:18px;height:18px"><use href="#icon-arrow-left"/></svg> ' + t('landing_exit') + '</button>';
  html += '<h2>' + t('chat_title') + '</h2>';
  html += '<div style="display:flex;flex-direction:column;gap:12px;margin-top:20px">';
  appData.chats.forEach(function(c) {
    html += '<div class="web-info-card" style="padding:16px;display:flex;align-items:center;gap:16px;cursor:pointer">' +
      '<div style="width:48px;height:48px;border-radius:50%;background:var(--bg-light);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">' + c.icon + '</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div style="font-weight:600;font-size:15px;margin-bottom:2px">' + c.name + '</div>' +
        '<div style="font-size:13px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + c.lastMsg + '</div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">' +
        '<span style="font-size:12px;color:var(--text-muted)">' + c.time + '</span>' +
        (c.unread > 0 ? '<span style="background:var(--primary);color:#fff;font-size:10px;min-width:18px;height:18px;border-radius:9px;display:flex;align-items:center;justify-content:center;padding:0 5px;font-weight:600">' + c.unread + '</span>' : '') +
      '</div>' +
    '</div>';
  });
  html += '</div></div>';
  content.innerHTML = html;
}

function navigateTo(path) {
  try {
    if (path === '/' || path === '') {
      selectedCategory = 'all';
      showHome();
    } else if (path.indexOf('/restaurant/') === 0) {
      var id = parseInt(path.split('/')[2], 10);
      if (id && !isNaN(id)) showRestaurant(id);
    }
  } catch(e) {
    document.getElementById('webContent').innerHTML = '<div style="padding:40px;text-align:center;color:var(--error)"><h3>Error</h3><p>' + e.message + '</p></div>';
  }
}

function selectCategory(catId) {
  selectedCategory = catId;
  currentView = 'home';
  showGrid();
}

function highlightCategory(catId) { /* handled by showGrid re-render */ }

// ===== HOME / GRID =====
function showHome() {
  currentView = 'home';
  showGrid();
}

function showGrid() {
  try {
  var content = document.getElementById('webContent');
  if (!content) return;
  var restaurants = selectedCategory === 'all'
    ? appData.restaurants
    : appData.restaurants.filter(function(r) { return r.cuisine === selectedCategory; });

  var html = '';

  // Cuisine scroll (UberEats/DoorDash style circular icons)
  html += '<div class="web-cuisine-section">';
  html += '<h2 class="web-section-title">' + t('home_categories') + '</h2>';
  html += '<div class="web-cuisine-scroll">';
  html += '<div class="web-cuisine-item' + (selectedCategory === 'all' ? ' active' : '') + '" onclick="selectCategory(\'all\')">' +
    '<div class="web-cuisine-circle"><span class="emoji">🍽️</span></div>' +
    '<div class="web-cuisine-label">' + t('nav_home') + '</div>' +
  '</div>';
  appData.categories.forEach(function(c) {
    var count = appData.restaurants.filter(function(r) { return r.cuisine === c.id; }).length;
    html += '<div class="web-cuisine-item' + (selectedCategory === c.id ? ' active' : '') + '" onclick="selectCategory(\'' + c.id + '\')">' +
      '<div class="web-cuisine-circle"><span class="emoji">' + c.icon + '</span></div>' +
      '<div class="web-cuisine-label">' + c.name + '</div>' +
    '</div>';
  });
  html += '</div></div>';

  // Restaurant grid
  html += '<h2 class="web-section-title">' + (selectedCategory === 'all' ? t('explore_all_restaurants') : cName()) + '</h2>';
  html += '<div class="web-grid">';
  if (restaurants.length === 0) {
    html += '<div class="web-empty"><p style="color:var(--text-muted);font-size:18px">' + t('search_no_results') + '</p></div>';
  } else {
    restaurants.forEach(function(r) { html += renderCard(r); });
  }
  html += '</div>';
  content.innerHTML = html;
  } catch(e) {
    content.innerHTML = '<div style="padding:40px;color:var(--error);text-align:center"><h3>Grid Error</h3><p>' + e.message + '</p></div>';
  }
}

function cName() {
  var c = appData.categories.find(function(c) { return c.id === selectedCategory; });
  return c ? c.name : '';
}

function handleSearch(query) {
  if (!query || query.length < 1) {
    currentView = 'home';
    showGrid();
    return;
  }
  currentView = 'search';
  var q = query.toLowerCase();
  var matched = appData.restaurants.filter(function(r) {
    return r.name.toLowerCase().indexOf(q) > -1 ||
           r.cuisine.toLowerCase().indexOf(q) > -1 ||
           r.description.toLowerCase().indexOf(q) > -1 ||
           (r.nameRu && r.nameRu.toLowerCase().indexOf(q) > -1) ||
           (r.descriptionRu && r.descriptionRu.toLowerCase().indexOf(q) > -1) ||
           r.menu.some(function(m) { return m.name.toLowerCase().indexOf(q) > -1; });
  });

  var content = document.getElementById('webContent');
  var html = '<h2 class="web-section-title">' + t('nav_search') + ': "' + query + '"</h2>';
  html += '<div class="web-grid">';
  if (matched.length === 0) {
    html += '<div class="web-empty"><p style="color:var(--text-muted);font-size:18px">' + t('search_no_results') + '</p></div>';
  } else {
    matched.forEach(function(r) { html += renderCard(r); });
  }
  html += '</div>';
  content.innerHTML = html;
}

// ===== CARD =====
function renderCard(r) {
  var isFav = appData.favorites.indexOf(r.id) > -1;
  var name = loc(r.name, r.nameRu);
  var desc = loc(r.description, r.descriptionRu);
  var features = (r.featuresRu && window.CURRENT_LANG === 'ru') ? r.featuresRu : r.features;
  var bg = r.image ? 'background-image:url(\'' + r.image + '\');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

  return '<div class="web-card" onclick="navigateTo(\'/restaurant/' + r.id + '\')">' +
    '<div class="web-card-img" style="' + bg + '">' +
      '<button class="web-card-fav" style="color:' + (isFav ? 'var(--primary)' : '#fff') + '" onclick="event.stopPropagation();toggleFav(' + r.id + ', this)">' +
        '<svg style="width:20px;height:20px"><use href="#icon-heart"/></svg>' +
      '</button>' +
      (hasDelivery(r.id) ? '<span style="position:absolute;bottom:14px;left:14px;background:var(--success);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:8px;z-index:1">Delivery</span>' : '') +
    '</div>' +
    '<div class="web-card-body">' +
      '<div class="web-card-title">' + name + '</div>' +
      '<div class="web-card-meta">' +
        '<span class="rating"><svg style="width:16px;height:16px"><use href="#icon-star"/></svg> ' + r.rating + '</span>' +
        '<span style="color:var(--text-muted)">(' + r.reviews + ')</span>' +
        '<span class="price">' + r.price + '</span>' +
        '<span style="color:var(--text-muted);font-size:12px">' + r.priceRange + '</span>' +
      '</div>' +
      '<div class="web-card-desc">' + desc + '</div>' +
      '<div class="web-card-tags">' + features.slice(0, 3).map(function(f) { return '<span class="web-card-tag">' + f + '</span>'; }).join('') + '</div>' +
    '</div>' +
  '</div>';
}

function toggleFav(id, btn) {
  var idx = appData.favorites.indexOf(id);
  var isNowFav;
  if (idx > -1) { appData.favorites.splice(idx, 1); isNowFav = false; }
  else { appData.favorites.push(id); isNowFav = true; }
  btn.style.color = isNowFav ? 'var(--primary)' : '#fff';
  // Update the same card in the other fav button too
  if (currentView === 'restaurant' && currentRestaurant === id) {
    var heroFav = document.querySelector('.web-detail-hero .web-card-fav');
    if (heroFav) heroFav.style.color = isNowFav ? 'var(--primary)' : '#fff';
  }
}

// ===== RESTAURANT DETAIL =====
function showRestaurant(id) {
  currentView = 'restaurant';
  currentRestaurant = id;
  var r = appData.restaurants.find(function(r) { return r.id === id; });
  if (!r) return;

  navigateTo('/restaurant/' + id);

  var isFav = appData.favorites.indexOf(id) > -1;
  var name = loc(r.name, r.nameRu);
  var desc = loc(r.description, r.descriptionRu);
  var features = (r.featuresRu && window.CURRENT_LANG === 'ru') ? r.featuresRu : r.features;
  var popular = (r.popularRu && window.CURRENT_LANG === 'ru') ? r.popularRu : r.popular;
  var bg = r.image ? 'background-image:url(\'' + r.image + '\');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

  var menuCategories = [];
  var seen = {};
  r.menu.forEach(function(m) {
    if (!seen[m.category]) { seen[m.category] = true; menuCategories.push(m.category); }
  });

  var html = '<div class="web-center-col">';

  html += '<button class="web-back-btn" onclick="navigateTo(\'/\')"><svg style="width:18px;height:18px"><use href="#icon-arrow-left"/></svg> ' + t('landing_exit') + '</button>';

  html += '<div class="web-detail-hero" style="' + bg + '">' +
    '<div class="web-detail-hero-info">' +
      '<h1>' + name + '</h1>' +
      '<div class="meta">' +
        '<span style="display:flex;align-items:center;gap:5px"><svg style="width:18px;height:18px;color:var(--accent)"><use href="#icon-star"/></svg> <strong>' + r.rating + '</strong></span>' +
        '<span>' + r.reviews + ' ' + t('restaurant_reviews') + '</span>' +
        '<span>' + r.price + ' &bull; ' + r.priceRange + '</span>' +
      '</div>' +
    '</div>' +
    '<button class="web-card-fav" style="color:' + (isFav ? 'var(--primary)' : '#fff') + '" onclick="event.stopPropagation();toggleFav(' + r.id + ', this)">' +
      '<svg style="width:20px;height:20px"><use href="#icon-heart"/></svg>' +
    '</button>' +
  '</div>';

  html += '<div class="web-detail-grid">';
  html += '<div class="web-detail-main">';

  // Features
  html += '<h3>' + t('restaurant_features') + '</h3>';
  html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">' +
    features.map(function(f) { return '<span style="font-size:14px;padding:8px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:20px">' + f + '</span>'; }).join('') +
  '</div>';

  // Popular
  html += '<h3>' + t('restaurant_popular') + '</h3>';
  html += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px">' +
    popular.map(function(p) { return '<span style="padding:8px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:14px;font-size:14px">' + p + '</span>'; }).join('') +
  '</div>';

  // Description
  html += '<p class="web-detail-desc">' + desc + '</p>';

  // Menu with tabs
  html += '<div class="web-menu-tabs" id="menuTabs">';
  menuCategories.forEach(function(cat, i) {
    var sectionId = 'menu-' + cat.replace(/[^a-zA-Z0-9]/g, '');
    html += '<button class="web-menu-tab' + (i === 0 ? ' active' : '') + '" data-section="' + sectionId + '" onclick="scrollToMenu(\'' + sectionId + '\', this)">' + cat + '</button>';
  });
  html += '</div>';

  menuCategories.forEach(function(cat) {
    var sectionId = 'menu-' + cat.replace(/[^a-zA-Z0-9]/g, '');
    html += '<div class="web-menu-section" id="' + sectionId + '">';
    html += '<h4>' + cat + '</h4>';
    r.menu.filter(function(m) { return m.category === cat; }).forEach(function(item) {
      html += '<div class="web-menu-item">' +
        '<div style="flex:1">' +
          '<h4>' + loc(item.name, item.nameRu) + '</h4>' +
          '<p>' + item.description + '</p>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:12px">' +
          '<span class="price">$' + item.price + '</span>' +
          '<button onclick="event.stopPropagation();addToCart(appData.restaurants[' + (r.id - 1) + '],' + JSON.stringify({name:item.name,nameRu:item.nameRu,price:item.price}).replace(/"/g, '&quot;') + ')" style="width:32px;height:32px;border-radius:10px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--primary);cursor:pointer;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0" onmouseover="this.style.background=\'var(--primary)\';this.style.color=\'#fff\';this.style.borderColor=\'var(--primary)\'" onmouseout="this.style.background=\'\';this.style.color=\'var(--primary)\'">+</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
  });

  html += '</div>'; // end main

  // Sidebar
  html += '<div class="web-sidebar">';
  html += '<div class="web-info-card">' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-location"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Адрес' : 'Address') + '</span><span class="web-info-value">' + r.address + '</span></div>' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-clock"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Часы' : 'Hours') + '</span><span class="web-info-value">' + r.hours + '</span></div>' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-phone"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Телефон' : 'Phone') + '</span><span class="web-info-value">' + r.phone + '</span></div>';

  if (hasDelivery(r.id)) {
    var del = getDelivery(r.id);
    html += '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-check"/></svg> Delivery</span><span class="web-info-value" style="color:var(--success)">$' + del.fee.toFixed(2) + ' &bull; ' + del.time + ' min</span></div>';
  }
  html += '</div>';

  html += '<button class="web-book-btn" onclick="showBookingForm(' + r.id + ')">' +
    '<svg style="width:22px;height:22px"><use href="#icon-check"/></svg> ' + t('restaurant_book_table') +
  '</button>';

  if (hasDelivery(r.id)) {
    html += '<button class="web-book-btn" style="background:linear-gradient(135deg, var(--success), #1abc9c);margin-top:12px" onclick="showCart()">' +
      '<svg style="width:22px;height:22px"><use href="#icon-check"/></svg> Order Delivery' +
    '</button>';
  }

  html += '</div>'; // end sidebar
  html += '</div>'; // end grid
  html += '</div>'; // end center-col

  document.getElementById('webContent').innerHTML = html;
  window.scrollTo(0, 0);
}

function scrollToMenu(sectionId, btn) {
  var el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelectorAll('.web-menu-tab').forEach(function(t) { t.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

// Scroll spy for menu tabs
if (typeof window._menuSpyAdded === 'undefined') {
  window._menuSpyAdded = true;
  window.addEventListener('scroll', function() {
    var tabs = document.querySelectorAll('.web-menu-tab');
    if (!tabs.length) return;
    var sections = document.querySelectorAll('.web-menu-section');
    var current = '';
    sections.forEach(function(s) {
      var rect = s.getBoundingClientRect();
      if (rect.top <= 160) current = s.id;
    });
    if (current) {
      tabs.forEach(function(t) {
        t.classList.toggle('active', t.getAttribute('data-section') === current);
      });
    }
  });
}

// ===== BOOKING FORM =====
function showBookingForm(restaurantId) {
  var r = appData.restaurants.find(function(r) { return r.id === restaurantId; });
  if (!r) return;

  var html = '<div class="web-center-col">';
  html += '<button class="web-back-btn" onclick="showRestaurant(' + r.id + ')"><svg style="width:18px;height:18px"><use href="#icon-arrow-left"/></svg> ' + t('landing_exit') + '</button>';

  html += '<h2 style="margin-bottom:24px">' + t('book_title') + ' ' + loc(r.name, r.nameRu) + '</h2>';

  html += '<div class="web-info-card" style="max-width:500px">';
  html += '<div class="web-form-group"><label>' + t('book_date') + '</label><input type="date" id="bkDate" value="' + new Date().toISOString().split('T')[0] + '"></div>';
  html += '<div class="web-form-group"><label>' + t('book_time') + '</label><select id="bkTime">';
  ['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].forEach(function(t) { html += '<option' + (t==='19:00'?' selected':'') + '>' + t + '</option>'; });
  html += '</select></div>';
  html += '<div class="web-form-group"><label>' + t('book_guests') + '</label><select id="bkGuests">';
  for (var i = 1; i <= 8; i++) html += '<option' + (i===2?' selected':'') + '>' + i + '</option>';
  html += '</select></div>';
  html += '<div class="web-form-group"><label>' + t('book_special') + '</label><input type="text" id="bkSpecial" placeholder="' + t('book_special_placeholder') + '"></div>';

  html += '<button class="web-book-btn" style="margin-top:8px" onclick="confirmWebBooking(' + r.id + ')">' + t('book_confirm') + '</button>';
  html += '</div></div>';

  document.getElementById('webContent').innerHTML = html;
}

function confirmWebBooking(restaurantId) {
  var r = appData.restaurants.find(function(r) { return r.id === restaurantId; });
  if (!r) return;

  var dateVal = document.getElementById('bkDate').value;
  var formattedDate = new Date(dateVal + 'T00:00:00').toLocaleDateString(
    window.CURRENT_LANG === 'ru' ? 'ru-RU' : 'en-US',
    { month: 'short', day: 'numeric', year: 'numeric' }
  );

  appData.bookings.push({
    id: Date.now(),
    restaurantId: r.id,
    restaurantName: r.name,
    date: formattedDate,
    time: document.getElementById('bkTime').value,
    guests: parseInt(document.getElementById('bkGuests').value),
    status: 'confirmed',
    special: document.getElementById('bkSpecial').value
  });

  var html = '<div class="web-center-col web-success">';
  html += '<svg style="width:80px;height:80px;color:var(--success);margin-bottom:20px"><use href="#icon-check"/></svg>';
  html += '<h2 style="margin-bottom:12px">' + t('book_confirmed_title') + '</h2>';
  html += '<p style="color:var(--text-muted);font-size:16px;margin-bottom:8px">' + loc(r.name, r.nameRu) + '</p>';
  html += '<p style="color:var(--text-muted);font-size:15px;margin-bottom:24px">' + formattedDate + ' &bull; ' + document.getElementById('bkTime').value + ' &bull; ' + document.getElementById('bkGuests').value + ' ' + t('book_guests').toLowerCase() + '</p>';
  html += '<button class="web-back-btn" onclick="navigateTo(\'/\')" style="font-size:15px;padding:12px 24px;border:1.5px solid var(--border)">' + t('landing_exit') + '</button>';
  html += '</div>';

  document.getElementById('webContent').innerHTML = html;
}

// ===== CART & DELIVERY =====
function hasDelivery(restaurantId) {
  return !!appData.delivery[restaurantId];
}

function getDelivery(restaurantId) {
  return appData.delivery[restaurantId] || { fee: 0, time: '—' };
}

function addToCart(restaurant, item) {
  var existing = -1;
  for (var i = 0; i < appData.cart.length; i++) {
    if (appData.cart[i].restaurantId === restaurant.id && appData.cart[i].name === item.name) {
      existing = i; break;
    }
  }
  if (existing > -1) {
    appData.cart[existing].qty++;
  } else {
    appData.cart.push({
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      name: item.name,
      nameRu: item.nameRu,
      price: item.price,
      qty: 1
    });
  }
  updateCartBadge();
}

function updateCartBadge() {
  var badge = document.getElementById('webCartBadge');
  if (!badge) return;
  var count = appData.cart.reduce(function(s, i) { return s + i.qty; }, 0);
  badge.textContent = count > 0 ? count : '';
}

function showCart() {
  var content = document.getElementById('webContent');
  var cart = appData.cart;
  var subtotal = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var restaurantId = cart.length > 0 ? cart[0].restaurantId : null;
  var del = restaurantId ? getDelivery(restaurantId) : { fee: 0, time: '—' };
  var fee = cart.length > 0 ? del.fee : 0;
  var total = subtotal + fee;

  var html = '<div class="web-center-col">';
  html += '<button class="web-back-btn" onclick="showHome()"><svg style="width:18px;height:18px"><use href="#icon-arrow-left"/></svg> ' + t('landing_exit') + '</button>';

  if (cart.length === 0) {
    html += '<div class="web-empty"><p style="color:var(--text-muted);font-size:18px">Cart is empty</p></div>';
  } else {
    html += '<h2>Your Order</h2>';
    html += '<p style="color:var(--text-muted);margin-bottom:24px">from <strong>' + cart[0].restaurantName + '</strong></p>';

    html += '<div class="web-info-card">';
    cart.forEach(function(item, i) {
      html += '<div class="web-menu-item">' +
        '<div style="flex:1">' +
          '<h4>' + loc(item.name, item.nameRu) + '</h4>' +
          '<div style="display:flex;align-items:center;gap:8px;margin-top:4px">' +
            '<button onclick="changeCartQty(' + i + ',-1)" style="width:28px;height:28px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text);cursor:pointer;font-size:16px;line-height:1">&minus;</button>' +
            '<span style="font-weight:600;min-width:20px;text-align:center">' + item.qty + '</span>' +
            '<button onclick="changeCartQty(' + i + ',1)" style="width:28px;height:28px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text);cursor:pointer;font-size:16px;line-height:1">+</button>' +
          '</div>' +
        '</div>' +
        '<span class="price">$' + (item.price * item.qty).toFixed(2) + '</span>' +
      '</div>';
    });
    html += '</div>';

    html += '<div class="web-info-card" style="margin-top:16px">';
    html += '<div class="web-info-row"><span>Subtotal</span><span class="web-info-value">$' + subtotal.toFixed(2) + '</span></div>';
    html += '<div class="web-info-row"><span>Delivery</span><span class="web-info-value">$' + fee.toFixed(2) + '</span></div>';
    html += '<div class="web-info-row" style="border-bottom:none"><strong>Total</strong><strong style="color:var(--primary);font-size:18px">$' + total.toFixed(2) + '</strong></div>';
    html += '</div>';

    html += '<div class="web-info-card" style="margin-top:16px">';
    html += '<div class="web-form-group"><label>Delivery Address</label><input type="text" id="delAddress" value="' + (appData.profile.address || '') + '"></div>';
    html += '<p style="font-size:12px;color:var(--text-muted);margin-bottom:16px"><svg style="width:14px;height:14px;vertical-align:middle;margin-right:4px"><use href="#icon-clock"/></svg> Estimated delivery: ' + del.time + ' min</p>';
    html += '<button class="web-book-btn" onclick="placeOrder()">Place Order &bull; $' + total.toFixed(2) + '</button>';
    html += '</div>';
  }

  html += '</div>';
  content.innerHTML = html;
}

function changeCartQty(index, delta) {
  appData.cart[index].qty += delta;
  if (appData.cart[index].qty <= 0) appData.cart.splice(index, 1);
  updateCartBadge();
  showCart();
}

function placeOrder() {
  var address = document.getElementById('delAddress').value;
  var cart = appData.cart;
  if (cart.length === 0) return;

  var subtotal = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var del = getDelivery(cart[0].restaurantId);
  var total = subtotal + del.fee;

  appData.orders.push({
    id: Date.now(),
    restaurantName: cart[0].restaurantName,
    items: cart.slice(),
    subtotal: subtotal,
    deliveryFee: del.fee,
    total: total,
    address: address,
    status: 'confirmed',
    time: new Date().toLocaleString()
  });

  appData.cart = [];
  updateCartBadge();

  var content = document.getElementById('webContent');
  content.innerHTML = '<div class="web-center-col web-success">' +
    '<svg style="width:80px;height:80px;color:var(--success);margin-bottom:20px"><use href="#icon-check"/></svg>' +
    '<h2 style="margin-bottom:12px">Order Placed!</h2>' +
    '<p style="color:var(--text-muted);font-size:16px;margin-bottom:8px">' + cart[0].restaurantName + '</p>' +
    '<p style="color:var(--text-muted);font-size:15px;margin-bottom:4px">$' + total.toFixed(2) + ' &bull; Delivery: ' + del.time + ' min</p>' +
    '<p style="color:var(--text-muted);font-size:14px;margin-bottom:24px">' + address + '</p>' +
    '<button class="web-back-btn" onclick="navigateTo(\'/\')" style="font-size:15px;padding:12px 24px;border:1.5px solid var(--border)">' + t('landing_exit') + '</button>' +
  '</div>';
}
