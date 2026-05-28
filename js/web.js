// Foodie — Web Demo
var currentView = 'home';
var selectedCategory = 'all';
var currentRestaurant = null;

function themeIcon() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? '#icon-moon' : '#icon-sun';
}

function toggleTheme() {
  var html = document.documentElement;
  var newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.querySelector('use').setAttribute('href', themeIcon());
  localStorage.setItem('foodie-theme', newTheme);
}

function switchLang(lang) {
  window.CURRENT_LANG = lang;
  localStorage.setItem('foodie-lang', lang);
  window.location.reload();
}

(function init() {
  var saved = localStorage.getItem('foodie-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  renderCategoryBar();
  showHome();
})();

function renderCategoryBar() {
  var bar = document.getElementById('categoryBar');
  var html = '<button class="web-category-chip active" onclick="filterCategory(\'all\', this)">' + t('nav_home') + '</button>';
  appData.categories.forEach(function(c) {
    var count = appData.restaurants.filter(function(r) { return r.cuisine === c.id; }).length;
    html += '<button class="web-category-chip" onclick="filterCategory(\'' + c.id + '\', this)">' + c.icon + ' ' + c.name + ' <span style="opacity:0.6;font-weight:400">' + count + '</span></button>';
  });
  bar.innerHTML = html;
}

function filterCategory(catId, btn) {
  selectedCategory = catId;
  document.querySelectorAll('.web-category-chip').forEach(function(c) { c.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  showHome();
}

function showHome() {
  currentView = 'home';
  var content = document.getElementById('mainContent');
  var restaurants = selectedCategory === 'all'
    ? appData.restaurants
    : appData.restaurants.filter(function(r) { return r.cuisine === selectedCategory; });

  var html = '<div class="web-grid">';
  if (restaurants.length === 0) {
    html += '<div class="web-empty"><p>' + t('search_no_results') + '</p></div>';
  } else {
    restaurants.forEach(function(r) { html += renderCard(r); });
  }
  html += '</div>';
  content.innerHTML = html;
}

function handleSearch(query) {
  if (!query || query.length < 1) {
    showHome();
    return;
  }
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
  var html = '<div class="web-grid">';
  if (matched.length === 0) {
    html += '<div class="web-empty"><p>' + t('search_no_results') + '</p></div>';
  } else {
    matched.forEach(function(r) { html += renderCard(r); });
  }
  html += '</div>';
  content.innerHTML = html;
}

function renderCard(r) {
  var isFav = appData.favorites.indexOf(r.id) > -1;
  var name = loc(r.name, r.nameRu);
  var desc = loc(r.description, r.descriptionRu);
  var features = (r.featuresRu && window.CURRENT_LANG === 'ru') ? r.featuresRu : r.features;
  var bg = r.image ? 'background-image:url(' + r.image + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

  return '<div class="web-card" onclick="showRestaurant(' + r.id + ')">' +
    '<div class="web-card-img" style="' + bg + '">' +
      '<button class="web-card-fav" style="color:' + (isFav ? 'var(--primary)' : '#fff') + '" onclick="event.stopPropagation();toggleFavorite(' + r.id + ')">' +
        '<svg style="width:18px;height:18px"><use href="#icon-heart"/></svg>' +
      '</button>' +
    '</div>' +
    '<div class="web-card-body">' +
      '<div class="web-card-title">' + name + '</div>' +
      '<div class="web-card-meta">' +
        '<span class="rating"><svg style="width:14px;height:14px"><use href="#icon-star"/></svg> ' + r.rating + '</span>' +
        '<span>' + r.reviews + ' ' + t('restaurant_reviews') + '</span>' +
        '<span>&bull;</span>' +
        '<span>' + r.price + '</span>' +
      '</div>' +
      '<div class="web-card-desc">' + desc + '</div>' +
      '<div class="web-card-tags">' + features.slice(0, 3).map(function(f) { return '<span class="web-card-tag">' + f + '</span>'; }).join('') + '</div>' +
    '</div>' +
  '</div>';
}

function toggleFavorite(id) {
  var idx = appData.favorites.indexOf(id);
  if (idx > -1) { appData.favorites.splice(idx, 1); }
  else { appData.favorites.push(id); }
  if (currentView === 'home') showHome();
  else if (currentView === 'restaurant' && currentRestaurant) showRestaurant(currentRestaurant);
}

function showRestaurant(id) {
  currentView = 'restaurant';
  currentRestaurant = id;
  var r = appData.restaurants.find(function(r) { return r.id === id; });
  if (!r) return;

  var isFav = appData.favorites.indexOf(id) > -1;
  var name = loc(r.name, r.nameRu);
  var desc = loc(r.description, r.descriptionRu);
  var features = (r.featuresRu && window.CURRENT_LANG === 'ru') ? r.featuresRu : r.features;
  var popular = (r.popularRu && window.CURRENT_LANG === 'ru') ? r.popularRu : r.popular;
  var bg = r.image ? 'background-image:url(' + r.image + ');background-size:cover;background-position:center' : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card))';

  // Group menu by category
  var menuCategories = [];
  var seen = {};
  r.menu.forEach(function(m) {
    if (!seen[m.category]) { seen[m.category] = true; menuCategories.push(m.category); }
  });

  var html = '';
  html += '<button class="web-back" onclick="showHome()"><svg style="width:18px;height:18px"><use href="#icon-arrow-left"/></svg> ' + t('landing_exit') + '</button>';

  html += '<div class="web-detail-hero" style="' + bg + '">' +
    '<div class="web-detail-hero-info">' +
      '<h1>' + name + '</h1>' +
      '<div style="display:flex;align-items:center;gap:12px;font-size:15px">' +
        '<span style="display:flex;align-items:center;gap:4px;color:var(--accent)"><svg style="width:16px;height:16px"><use href="#icon-star"/></svg> ' + r.rating + '</span>' +
        '<span>' + r.reviews + ' ' + t('restaurant_reviews') + '</span>' +
        '<span>' + r.price + ' &bull; ' + r.priceRange + '</span>' +
      '</div>' +
    '</div>' +
    '<button class="web-card-fav" style="color:' + (isFav ? 'var(--primary)' : '#fff') + '" onclick="event.stopPropagation();toggleFavorite(' + r.id + ')">' +
      '<svg style="width:18px;height:18px"><use href="#icon-heart"/></svg>' +
    '</button>' +
  '</div>';

  html += '<div class="web-detail-body">';

  // Main content
  html += '<div class="web-detail-main">';
  html += '<h3>' + t('restaurant_features') + '</h3>';
  html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:24px">' +
    features.map(function(f) { return '<span style="font-size:13px;padding:6px 14px;background:var(--bg-card);border-radius:20px">' + f + '</span>'; }).join('') +
    '</div>';

  html += '<h3>' + t('restaurant_popular') + '</h3>';
  html += '<div style="display:flex;gap:8px;margin-bottom:24px">' +
    popular.map(function(p) { return '<span style="padding:6px 14px;background:var(--bg-card);border-radius:12px;font-size:13px">' + p + '</span>'; }).join('') +
    '</div>';

  html += '<p class="web-detail-desc">' + desc + '</p>';

  html += '<h3>' + (window.CURRENT_LANG === 'ru' ? 'Меню' : 'Menu') + '</h3>';
  menuCategories.forEach(function(cat) {
    html += '<h4 style="margin:16px 0 8px;color:var(--primary);font-size:15px">' + cat + '</h4>';
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
  html += '</div>';

  // Sidebar
  html += '<div class="web-detail-sidebar">';
  html += '<div class="web-sidebar-card">' +
    '<div class="info-row"><span class="info-label"><svg style="width:16px;height:16px"><use href="#icon-location"/></svg> Address</span><span class="info-value">' + r.address + '</span></div>' +
    '<div class="info-row"><span class="info-label"><svg style="width:16px;height:16px"><use href="#icon-clock"/></svg> Hours</span><span class="info-value">' + r.hours + '</span></div>' +
    '<div class="info-row"><span class="info-label"><svg style="width:16px;height:16px"><use href="#icon-phone"/></svg> Phone</span><span class="info-value">' + r.phone + '</span></div>' +
    '<div class="info-row"><span class="info-label"><svg style="width:16px;height:16px"><use href="#icon-star"/></svg> Rating</span><span class="info-value" style="color:var(--accent)">' + r.rating + ' / 5.0</span></div>' +
  '</div>';

  html += '<button class="web-book-btn" onclick="quickBook(' + r.id + ')">' +
    '<svg style="width:20px;height:20px"><use href="#icon-check"/></svg> ' + t('restaurant_book_table') +
  '</button>';
  html += '</div>';

  html += '</div>'; // close web-detail-body

  document.getElementById('mainContent').innerHTML = html;
  window.scrollTo(0, 0);
}

function quickBook(id) {
  var r = appData.restaurants.find(function(r) { return r.id === id; });
  if (!r) return;

  var newId = Date.now();
  appData.bookings.push({
    id: newId,
    restaurantId: r.id,
    restaurantName: r.name,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    time: '19:00',
    guests: 2,
    status: 'confirmed',
    special: ''
  });

  document.getElementById('mainContent').innerHTML =
    '<div style="text-align:center;padding:60px 20px">' +
      '<svg style="width:64px;height:64px;color:var(--success)"><use href="#icon-check"/></svg>' +
      '<h2 style="margin:16px 0 8px">' + t('book_confirmed_title') + '</h2>' +
      '<p style="color:var(--text-muted);margin-bottom:24px;font-size:16px">' + r.name + '</p>' +
      '<button class="web-book-btn" style="max-width:300px;margin:0 auto" onclick="showHome()">' + t('bookings_view') + '</button>' +
    '</div>';
}
