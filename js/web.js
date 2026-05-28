// Foodie — Web Demo
var currentView = 'home';
var selectedCategory = 'all';
var currentRestaurant = null;
var searchTimer = null;

// ===== THEME =====
function toggleThemeWeb() {
  var html = document.documentElement;
  var newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  updateThemeIcon();
  localStorage.setItem('foodie-theme', newTheme);
}

function updateThemeIcon() {
  var isLight = document.documentElement.getAttribute('data-theme') === 'light';
  var icon = document.getElementById('themeIcon');
  if (icon) icon.querySelector('use').setAttribute('href', isLight ? '#icon-moon' : '#icon-sun');
}

// ===== LANGUAGE =====
function switchLang(lang) {
  window.CURRENT_LANG = lang;
  localStorage.setItem('foodie-lang', lang);
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  updateThemeIcon();
  if (currentView === 'restaurant' && currentRestaurant) showRestaurant(currentRestaurant);
  else showHome();
}

// ===== INIT =====
(function init() {
  var savedTheme = localStorage.getItem('foodie-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon();
  document.getElementById('langLabel').textContent = window.CURRENT_LANG.toUpperCase();

  var search = document.getElementById('searchInput');
  if (search) search.addEventListener('input', function() {
    clearTimeout(searchTimer);
    var q = this.value;
    searchTimer = setTimeout(function() { handleSearch(q); }, 300);
  });

  if (typeof appData === 'undefined') {
    document.getElementById('mainContent').innerHTML = '<div style="padding:40px;text-align:center;color:var(--error)">Data not loaded</div>';
    return;
  }
  navigateTo(window.location.hash ? window.location.hash.slice(1) : '/');
})();

function renderCategoryBar() { /* unused - cuisines are in showGrid */ }

function navigateTo(path) {
  try {
    if (path === '/' || path === '') {
      selectedCategory = 'all';
      showHome();
    } else if (path.indexOf('/restaurant/') === 0) {
      var id = parseInt(path.split('/')[2], 10);
      if (id && !isNaN(id)) showRestaurant(id);
    }
    window.location.hash = path;
  } catch(e) {
    document.getElementById('mainContent').innerHTML = '<div style="padding:40px;text-align:center;color:var(--error)"><h3>Error</h3><p>' + e.message + '</p></div>';
  }
}

// ===== CATEGORY BAR =====
function renderCategoryBar() {
  var bar = document.getElementById('categoryBar');
  var html = '<button class="web-cat-chip active" data-cat="all" onclick="selectCategory(\'all\', this)">' + t('nav_home') + '</button>';
  appData.categories.forEach(function(c) {
    var count = appData.restaurants.filter(function(r) { return r.cuisine === c.id; }).length;
    html += '<button class="web-cat-chip" data-cat="' + c.id + '" onclick="selectCategory(\'' + c.id + '\', this)">' + c.icon + ' ' + c.name + ' <span style="opacity:0.5;font-weight:400">' + count + '</span></button>';
  });
  bar.innerHTML = html;
}

function selectCategory(catId) {
  selectedCategory = catId;
  currentView = 'home';
  showGrid();
  window.location.hash = '/';
}

function highlightCategory(catId) { /* handled by showGrid re-render */ }

// ===== HOME / GRID =====
function showHome() {
  currentView = 'home';
  showGrid();
}

function showGrid() {
  try {
  var content = document.getElementById('mainContent');
  if (!content) return;
  var restaurants = selectedCategory === 'all'
    ? appData.restaurants
    : appData.restaurants.filter(function(r) { return r.cuisine === selectedCategory; });

  var html = '';

  // Cuisine cards
  html += '<div class="web-cuisine-section">';
  html += '<h2 class="web-section-title">' + t('home_categories') + '</h2>';
  html += '<div class="web-cuisine-grid">';
  html += '<div class="web-cuisine-card' + (selectedCategory === 'all' ? ' active' : '') + '" onclick="selectCategory(\'all\')">' +
    '<span class="cuisine-icon">🍽️</span>' +
    '<div class="cuisine-name">' + t('nav_home') + '</div>' +
    '<div class="cuisine-count">' + appData.restaurants.length + ' ' + t('home_places') + '</div>' +
  '</div>';
  appData.categories.forEach(function(c) {
    var count = appData.restaurants.filter(function(r) { return r.cuisine === c.id; }).length;
    html += '<div class="web-cuisine-card' + (selectedCategory === c.id ? ' active' : '') + '" onclick="selectCategory(\'' + c.id + '\')">' +
      '<span class="cuisine-icon">' + c.icon + '</span>' +
      '<div class="cuisine-name">' + c.name + '</div>' +
      '<div class="cuisine-count">' + count + ' ' + t('home_places') + '</div>' +
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

  var content = document.getElementById('mainContent');
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
  var bg = r.image ? 'background-image:url(' + r.image + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

  return '<div class="web-card" onclick="navigateTo(\'/restaurant/' + r.id + '\')">' +
    '<div class="web-card-img" style="' + bg + '">' +
      '<button class="web-card-fav" style="color:' + (isFav ? 'var(--primary)' : '#fff') + '" onclick="event.stopPropagation();toggleFav(' + r.id + ', this)">' +
        '<svg style="width:20px;height:20px"><use href="#icon-heart"/></svg>' +
      '</button>' +
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
  var bg = r.image ? 'background-image:url(' + r.image + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

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

  // Menu
  html += '<h3 style="margin-bottom:16px">' + t('restaurant_full_menu') + '</h3>';
  menuCategories.forEach(function(cat) {
    html += '<h4 style="margin:20px 0 10px;color:var(--primary);font-size:16px">' + cat + '</h4>';
    r.menu.filter(function(m) { return m.category === cat; }).forEach(function(item) {
      html += '<div class="web-menu-item">' +
        '<div style="flex:1">' +
          '<h4>' + loc(item.name, item.nameRu) + '</h4>' +
          '<p>' + item.description + '</p>' +
        '</div>' +
        '<span class="price">$' + item.price + '</span>' +
      '</div>';
    });
  });

  html += '</div>'; // end main

  // Sidebar
  html += '<div class="web-sidebar">';
  html += '<div class="web-info-card">' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-location"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Адрес' : 'Address') + '</span><span class="web-info-value">' + r.address + '</span></div>' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-clock"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Часы' : 'Hours') + '</span><span class="web-info-value">' + r.hours + '</span></div>' +
    '<div class="web-info-row"><span class="web-info-label"><svg style="width:16px;height:16px"><use href="#icon-phone"/></svg> ' + (window.CURRENT_LANG === 'ru' ? 'Телефон' : 'Phone') + '</span><span class="web-info-value">' + r.phone + '</span></div>' +
  '</div>';

  html += '<button class="web-book-btn" onclick="showBookingForm(' + r.id + ')">' +
    '<svg style="width:22px;height:22px"><use href="#icon-check"/></svg> ' + t('restaurant_book_table') +
  '</button>';

  html += '</div>'; // end sidebar
  html += '</div>'; // end grid
  html += '</div>'; // end center-col

  document.getElementById('mainContent').innerHTML = html;
  window.scrollTo(0, 0);
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

  document.getElementById('mainContent').innerHTML = html;
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

  document.getElementById('mainContent').innerHTML = html;
}
