// Foodie — Restaurant Finder Demo App

function loc(fieldEn, fieldRu) {
  if (window.CURRENT_LANG === 'ru' && fieldRu !== undefined && fieldRu !== '') return fieldRu;
  return fieldEn;
}

function switchLang(lang) {
  window.CURRENT_LANG = lang;
  localStorage.setItem('foodie-lang', lang);
  window.location.reload();
}

// appData is in js/data.js

let pageNav = ['home'];

// Theme management
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  updateThemeIcons(newTheme);
  localStorage.setItem('foodie-theme', newTheme);
}

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) {
      use.setAttribute('href', theme === 'light' ? '#icon-moon' : '#icon-sun');
    }
  });
}

function loadTheme() {
  const saved = localStorage.getItem('foodie-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcons(saved);
}

// Navigation
function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('webApp').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('foodie_appOpen', 'true');
  updateBookingBadge();
  updateChatBadge();
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  pageNav = ['home'];
  localStorage.setItem('foodie_appOpen', 'false');
}

function openWebApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('webApp').classList.remove('hidden');
  localStorage.setItem('foodie_webAppOpen', 'true');
  if (typeof showGrid === 'function') showGrid();
}

function closeWebApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('webApp').classList.add('hidden');
  localStorage.setItem('foodie_webAppOpen', 'false');
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }

  pageNav.push(pageName);
  updateHeader(pageName);
  renderContent(pageName);

  localStorage.setItem('foodie_lastPage', pageName);
  localStorage.setItem('foodie_history', JSON.stringify(pageNav));

  document.getElementById('backBtn').classList.toggle('hidden', pageNav.length <= 1);
}

function goBack() {
  if (pageNav.length > 1) {
    pageNav.pop();
    const prevPage = pageNav[pageNav.length - 1];

    const navPages = ['home', 'explore', 'favorites', 'bookings', 'chat'];
    if (navPages.includes(prevPage)) {
      document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
      const navBtns = document.querySelectorAll('.nav-item');
      const idx = navPages.indexOf(prevPage);
      if (navBtns[idx]) navBtns[idx].classList.add('active');
    }

    updateHeader(prevPage);
    renderContent(prevPage);

    localStorage.setItem('foodie_lastPage', prevPage);
    localStorage.setItem('foodie_history', JSON.stringify(pageNav));
    document.getElementById('backBtn').classList.toggle('hidden', pageNav.length <= 1);
  }
}

function updateHeader(pageName) {
  const titleKeys = {
    home: 'nav_home',
    explore: 'nav_explore',
    favorites: 'nav_favorites',
    bookings: 'nav_bookings',
    chat: 'nav_chat',
    profile: 'nav_profile',
    search: 'nav_search',
    restaurant: 'nav_restaurant',
    menu: 'nav_menu'
  };
  const key = titleKeys[pageName];
  document.getElementById('appTitle').textContent = key ? t(key) : '';
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  if (pageName === 'home') content.innerHTML = renderHome();
  else if (pageName === 'explore') content.innerHTML = renderExplore();
  else if (pageName === 'favorites') content.innerHTML = renderFavorites();
  else if (pageName === 'bookings') content.innerHTML = renderBookings();
  else if (pageName === 'chat') content.innerHTML = renderChat();
  else if (pageName === 'profile') content.innerHTML = renderProfile();
  else if (pageName === 'search') content.innerHTML = renderSearch();
  else if (pageName.startsWith('restaurant-')) {
    const id = parseInt(pageName.split('-')[1]);
    content.innerHTML = renderRestaurant(id);
  }
  else if (pageName.startsWith('menu-')) {
    const id = parseInt(pageName.split('-')[1]);
    content.innerHTML = renderMenu(id);
  }
}

// ============ HOME ============
function renderHome() {
  const featured = [...appData.restaurants].sort((a, b) => b.rating - a.rating).slice(0, 3);
  const favCount = appData.favorites.length;
  const upcomingBooking = appData.bookings.find(b => b.status === 'confirmed');

  let html = '<div class="page-content">';

  // Quick stats
  html += `
    <div class="dashboard-grid">
      <div class="dashboard-card" onclick="showPage('favorites')">
        <svg class="icon"><use href="#icon-heart"/></svg>
        <h4>${t('home_favorites')}</h4>
        <p>${favCount} ${t('home_saved')}</p>
      </div>
      <div class="dashboard-card" onclick="showPage('bookings')">
        <svg class="icon"><use href="#icon-calendar"/></svg>
        <h4>${t('home_bookings')}</h4>
        <p>${appData.bookings.length} ${t('home_total')}</p>
      </div>
    </div>
  `;

  // Upcoming booking reminder
  if (upcomingBooking) {
    const upRest = appData.restaurants.find(r => r.id === upcomingBooking.restaurantId);
    const upName = upRest ? loc(upcomingBooking.restaurantName, upRest.nameRu) : upcomingBooking.restaurantName;
    html += `
      <div class="dashboard-card wide accent" style="margin-top:12px" onclick="showPage('bookings')">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="icon" style="font-size:32px"><use href="#icon-calendar"/></svg>
          <div>
            <h4>${t('home_upcoming')}</h4>
            <div style="font-size:18px;font-weight:600">${upName}</div>
            <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">${upcomingBooking.date} at ${upcomingBooking.time} &bull; ${upcomingBooking.guests} ${t('home_guests')}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Categories
  html += `
    <div style="margin:20px 0 12px">
      <h3 style="display:flex;justify-content:space-between;align-items:center">
        ${t('home_categories')}
        <span style="font-size:12px;color:var(--primary);cursor:pointer" onclick="showPage('explore')">${t('home_see_all')}</span>
      </h3>
    </div>
    <div class="modules-scroll">
      ${appData.categories.slice(0, 8).map(c => `
        <div class="module-tile" onclick="filterExplore('${c.id}')">
          <div style="font-size:24px">${c.icon}</div>
          <span>${c.name}</span>
        </div>
      `).join('')}
    </div>
  `;

  // Featured
  html += `
    <h3 style="margin:16px 0 12px">${t('home_featured')}</h3>
    ${featured.map(r => renderRestaurantCard(r)).join('')}
  `;

  html += '</div>';
  return html;
}

function renderRestaurantCard(r) {
  const isFav = appData.favorites.includes(r.id);
  const name = loc(r.name, r.nameRu);
  const desc = loc(r.description, r.descriptionRu);
  const feats = window.CURRENT_LANG === 'ru' && r.featuresRu ? r.featuresRu : r.features;
  return `
    <div class="dashboard-card" style="margin-bottom:12px;padding:0;overflow:hidden" onclick="showPage('restaurant-${r.id}')">
      <div style="height:140px;${r.image ? `background-image:url('${r.image}');background-size:cover;background-position:center;` : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card));'}display:flex;align-items:flex-end;justify-content:flex-end;padding:12px">
        <button style="background:rgba(0,0,0,0.5);border:none;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:${isFav ? 'var(--primary)' : '#fff'};cursor:pointer;z-index:1" onclick="event.stopPropagation();toggleFavorite(${r.id})">
          <svg style="width:20px;height:20px"><use href="#icon-heart"/></svg>
        </button>
      </div>
      <div style="padding:16px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
          <h4 style="margin:0;font-size:16px">${name}</h4>
          <span style="font-size:11px;font-weight:600;color:var(--primary)">${r.price}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="display:flex;align-items:center;gap:4px;color:var(--accent);font-weight:600;font-size:13px">
            <svg style="width:14px;height:14px"><use href="#icon-star"/></svg>
            ${r.rating}
          </span>
          <span style="font-size:12px;color:var(--text-muted)">(${r.reviews})</span>
          <span style="font-size:12px;color:var(--text-muted)">&bull;</span>
          <span style="font-size:12px;color:var(--text-muted)">${r.hours}</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin:0;line-height:1.4">${desc.substring(0, 100)}...</p>
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">
          ${feats.slice(0, 3).map(f => `
            <span style="font-size:10px;padding:2px 8px;background:var(--bg-light);border-radius:10px;color:var(--text-muted)">${f}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function toggleFavorite(id) {
  const idx = appData.favorites.indexOf(id);
  if (idx > -1) {
    appData.favorites.splice(idx, 1);
  } else {
    appData.favorites.push(id);
  }
  const lastPage = localStorage.getItem('foodie_lastPage') || 'home';
  const content = document.getElementById('content');
  if (lastPage === 'home') content.innerHTML = renderHome();
  else if (lastPage === 'favorites') content.innerHTML = renderFavorites();
  else if (lastPage === 'explore') content.innerHTML = renderExplore();
  else if (lastPage.startsWith('restaurant-')) {
    const id = parseInt(lastPage.split('-')[1]);
    content.innerHTML = renderRestaurant(id);
  }
}

// ============ EXPLORE ============
function renderExplore() {
  let html = '<div class="page-content">';

  // Search bar
  html += `
    <div class="dashboard-card" style="margin-bottom:16px;padding:8px 16px">
      <div style="display:flex;align-items:center;gap:12px" onclick="showPage('search')">
        <svg class="icon" style="width:20px;height:20px;color:var(--text-muted)"><use href="#icon-search"/></svg>
        <span style="color:var(--text-muted);font-size:15px">${t('explore_search')}</span>
      </div>
    </div>
  `;

  // All categories
  html += `<h3 style="margin:16px 0 12px">${t('explore_all_categories')}</h3>`;
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px">`;
  appData.categories.forEach(c => {
    const count = appData.restaurants.filter(r => r.cuisine === c.id).length;
    html += `
      <div class="dashboard-card" style="padding:14px 10px;text-align:center;cursor:pointer" onclick="filterExplore('${c.id}')">
        <div style="font-size:24px;margin-bottom:6px">${c.icon}</div>
        <div style="font-size:13px;font-weight:600">${c.name}</div>
        <div style="font-size:11px;color:var(--text-muted)">${count} ${t('home_places')}</div>
      </div>
    `;
  });
  html += '</div>';

  // All restaurants
  html += `<h3 style="margin:16px 0 12px">${t('explore_all_restaurants')}</h3>`;
  html += `<div id="restaurantList">`;
  appData.restaurants.forEach(r => {
    html += renderRestaurantCard(r);
  });
  html += '</div>';

  html += '</div>';
  return html;
}

function filterExplore(cuisineId) {
  const category = appData.categories.find(c => c.id === cuisineId);
  updateHeader('explore');

  const filtered = appData.restaurants.filter(r => r.cuisine === cuisineId);
  const content = document.getElementById('content');

  let html = '<div class="page-content">';
  html += `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
      <span style="font-size:24px">${category.icon}</span>
      <h3 style="margin:0">${category.name}</h3>
      <span style="font-size:12px;color:var(--text-muted)">(${filtered.length} ${t('home_places')})</span>
    </div>
  `;
  filtered.forEach(r => {
    html += renderRestaurantCard(r);
  });
  html += '</div>';
  content.innerHTML = html;

  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const navBtns = document.querySelectorAll('.nav-item');
  if (navBtns[1]) navBtns[1].classList.add('active');
}

// ============ FAVORITES ============
function renderFavorites() {
  const favs = appData.restaurants.filter(r => appData.favorites.includes(r.id));
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-heart"/></svg>' + t('favorites_title') + '</h3>';

  if (favs.length === 0) {
    html += `
      <div style="text-align:center;padding:40px 20px">
        <svg class="icon" style="width:64px;height:64px;opacity:0.3;margin-bottom:16px"><use href="#icon-heart"/></svg>
        <p style="color:var(--text-muted)">${t('favorites_empty')}</p>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:20px">${t('favorites_empty_hint')}</p>
        <button onclick="showPage('explore')" style="padding:14px 32px;background:linear-gradient(135deg, var(--primary), var(--primary-light));color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px var(--glow);transition:all 0.2s" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform=''">${t('favorites_browse')}</button>
      </div>
    `;
  } else {
    favs.forEach(r => { html += renderRestaurantCard(r); });
  }

  html += '</div>';
  return html;
}

// ============ BOOKINGS ============
function renderBookings() {
  const active = appData.bookings.filter(b => b.status !== 'completed');
  const past = appData.bookings.filter(b => b.status === 'completed');

  let html = '<div class="page-content"><h3>' + t('bookings_title') + '</h3>';

  if (active.length > 0) {
    html += '<h4 style="margin:16px 0 12px;font-size:14px;color:var(--text-muted)">' + t('bookings_active') + '</h4>';
    active.forEach(b => {
      const r = appData.restaurants.find(r => r.id === b.restaurantId);
      const bName = r ? loc(b.restaurantName, r.nameRu) : b.restaurantName;
      const statusLabel = t('status_' + b.status) || b.status;
      html += `
        <div class="dashboard-card" style="margin-bottom:12px" onclick="showPage('restaurant-${b.restaurantId}')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
            <div>
              <div style="font-weight:600;font-size:15px">${bName}</div>
              <div style="font-size:13px;color:var(--text-muted);margin-top:4px">${b.date} at ${b.time}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${b.guests} ${t('bookings_guests')}${b.special ? ' &bull; ' + b.special : ''}</div>
            </div>
            <span style="font-size:11px;padding:4px 10px;border-radius:12px;background:${b.status === 'confirmed' ? 'rgba(39,174,96,0.15)' : 'rgba(243,156,18,0.15)'};color:${b.status === 'confirmed' ? 'var(--success)' : 'var(--warning)'};font-weight:600">
              ${statusLabel}
            </span>
          </div>
          ${r ? `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--primary)"><svg style="width:14px;height:14px"><use href="#icon-location"/></svg>${r.address}</div>` : ''}
        </div>
      `;
    });
  }

  if (past.length > 0) {
    html += '<h4 style="margin:20px 0 12px;font-size:14px;color:var(--text-muted)">' + t('bookings_past') + '</h4>';
    past.forEach(b => {
      const r = appData.restaurants.find(r => r.id === b.restaurantId);
      const bName = r ? loc(b.restaurantName, r.nameRu) : b.restaurantName;
      html += `
        <div class="dashboard-card" style="margin-bottom:12px;opacity:0.7">
          <div style="font-weight:600;font-size:14px">${bName}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${b.date} &bull; ${b.guests} ${t('bookings_guests')}</div>
        </div>
      `;
    });
  }

  if (active.length === 0 && past.length === 0) {
    html += `
      <div style="text-align:center;padding:40px 20px">
        <p style="color:var(--text-muted)">${t('bookings_empty')}</p>
      </div>
    `;
  }

  html += '</div>';
  return html;
}

function updateBookingBadge() {
  const pending = appData.bookings.filter(b => b.status === 'pending' || b.status === 'confirmed').length;
  const badge = document.querySelector('.bottom-nav [onclick*="bookings"] .chat-badge');
  if (badge) {
    badge.textContent = pending;
    badge.style.display = pending > 0 ? '' : 'none';
  }
}

// ============ CHAT ============
function renderChat() {
  let html = '<div class="page-content"><h3>' + t('chat_title') + '</h3><div class="chat-list">';
  appData.chats.forEach(c => {
    html += `
      <div class="chat-item">
        <div class="chat-avatar" style="background:none;font-size:28px">${c.icon}</div>
        <div class="chat-info">
          <h4>${c.name}</h4>
          <p>${c.lastMsg}</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
          <div class="chat-time">${c.time}</div>
          ${c.unread > 0 ? `<span style="background:var(--primary);color:#fff;font-size:10px;min-width:18px;height:18px;border-radius:9px;display:flex;align-items:center;justify-content:center;padding:0 5px;font-weight:600">${c.unread}</span>` : ''}
        </div>
      </div>
    `;
  });
  html += '</div></div>';
  return html;
}

function updateChatBadge() {
  const unread = appData.chats.reduce((sum, c) => sum + c.unread, 0);
  const badge = document.querySelector('.bottom-nav [onclick*="chat"] .chat-badge');
  if (badge) {
    badge.textContent = unread;
    badge.style.display = unread > 0 ? '' : 'none';
  }
}

// ============ SEARCH ============
function renderSearch() {
  let html = '<div class="page-content">';
  html += `
    <div class="dashboard-card" style="margin-bottom:16px;padding:8px 16px">
      <div style="display:flex;align-items:center;gap:12px">
        <svg class="icon" style="width:20px;height:20px;color:var(--text-muted)"><use href="#icon-search"/></svg>
        <input type="text" placeholder="${t('search_placeholder')}" oninput="performSearch(this.value)" style="flex:1;background:none;border:none;color:var(--text);font-size:15px;outline:none" autofocus>
      </div>
    </div>
    <div id="searchResults"></div>
  `;
  html += '</div>';
  return html;
}

function performSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query || query.length < 1) {
    results.innerHTML = '';
    return;
  }

  const q = query.toLowerCase();
  const matched = appData.restaurants.filter(r =>
    r.name.toLowerCase().includes(q) ||
    (r.nameRu && r.nameRu.toLowerCase().includes(q)) ||
    r.cuisine.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q) ||
    (r.descriptionRu && r.descriptionRu.toLowerCase().includes(q)) ||
    r.features.some(f => f.toLowerCase().includes(q)) ||
    (r.featuresRu && r.featuresRu.some(f => f.toLowerCase().includes(q))) ||
    r.menu.some(m => m.name.toLowerCase().includes(q) || (m.nameRu && m.nameRu.toLowerCase().includes(q)))
  );

  if (matched.length === 0) {
    results.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">' + t('search_no_results') + '</div>';
  } else {
    results.innerHTML = matched.map(r => renderRestaurantCard(r)).join('');
  }
}

// ============ RESTAURANT DETAIL ============
function renderRestaurant(id) {
  const r = appData.restaurants.find(r => r.id === id);
  if (!r) return '<div class="page-content"><p>' + t('restaurant_not_found') + '</p></div>';

  const isFav = appData.favorites.includes(id);
  const name = loc(r.name, r.nameRu);
  const desc = loc(r.description, r.descriptionRu);
  const feats = window.CURRENT_LANG === 'ru' && r.featuresRu ? r.featuresRu : r.features;
  const pops = window.CURRENT_LANG === 'ru' && r.popularRu ? r.popularRu : r.popular;

  let html = '<div class="page-content">';

  // Hero image placeholder
  html += `
      <div style="height:180px;${r.image ? `background-image:url('${r.image}');background-size:cover;background-position:center;` : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card));'}border-radius:16px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;position:relative">
      <button style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;color:${isFav ? 'var(--primary)' : '#fff'};cursor:pointer;z-index:1" onclick="toggleFavorite(${r.id})">
        <svg style="width:22px;height:22px"><use href="#icon-heart"/></svg>
      </button>
      <div style="font-size:64px;opacity:0.3">${appData.categories.find(c => c.id === r.cuisine)?.icon || '🍽️'}</div>
    </div>
  `;

  // Restaurant info
  html += `
    <h2 style="margin:0 0 4px">${name}</h2>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">
      <span style="display:flex;align-items:center;gap:4px;color:var(--accent);font-weight:600">
        <svg style="width:16px;height:16px"><use href="#icon-star"/></svg> ${r.rating}
      </span>
      <span style="font-size:13px;color:var(--text-muted)">(${r.reviews} ${t('restaurant_reviews')})</span>
      <span style="color:var(--text-muted)">&bull;</span>
      <span style="font-weight:600;color:var(--primary)">${r.price}</span>
      <span style="color:var(--text-muted)">${r.priceRange}</span>
    </div>

    <p style="font-size:14px;line-height:1.6;color:var(--text-muted);margin-bottom:16px">${desc}</p>

    <div class="profile-info" style="margin-bottom:16px">
      <div class="info-row">
        <span class="info-label"><svg class="icon" style="width:16px;height:16px;vertical-align:middle"><use href="#icon-location"/></svg></span>
        <span class="info-value">${r.address}</span>
      </div>
      <div class="info-row">
        <span class="info-label"><svg class="icon" style="width:16px;height:16px;vertical-align:middle"><use href="#icon-clock"/></svg></span>
        <span class="info-value">${r.hours}</span>
      </div>
      <div class="info-row">
        <span class="info-label"><svg class="icon" style="width:16px;height:16px;vertical-align:middle"><use href="#icon-phone"/></svg></span>
        <span class="info-value">${r.phone}</span>
      </div>
    </div>
  `;

  // Features
  html += `
    <h4 style="margin-bottom:8px">${t('restaurant_features')}</h4>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">
      ${feats.map(f => `
        <span style="font-size:12px;padding:6px 14px;background:var(--bg-card);border-radius:20px">${f}</span>
      `).join('')}
    </div>
  `;

  // Popular dishes
  html += `
    <h4 style="margin-bottom:8px">${t('restaurant_popular')}</h4>
    <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px">
      ${pops.map(p => `
        <div style="flex-shrink:0;padding:8px 16px;background:var(--bg-card);border-radius:12px;font-size:13px">${p}</div>
      `).join('')}
    </div>
  `;

  // Action buttons
  html += `
    <div style="margin-top:8px;display:flex;flex-direction:column;gap:10px">
      <button onclick="quickBook(${r.id})" style="width:100%;padding:18px 24px;background:linear-gradient(135deg, var(--primary), var(--primary-light));color:#fff;border:none;border-radius:16px;font-size:16px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 4px 15px var(--glow);transition:all 0.2s;letter-spacing:-0.2px" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 24px var(--glow)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 15px var(--glow)'">
        <svg class="icon" style="width:22px;height:22px"><use href="#icon-calendar"/></svg> ${t('restaurant_book_table')}
      </button>
      <button onclick="showPage('menu-${r.id}')" style="width:100%;padding:15px 24px;background:transparent;color:var(--text);border:1.5px solid var(--border);border-radius:16px;font-size:15px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:all 0.2s" onmouseover="this.style.borderColor='var(--primary)';this.style.color='var(--primary)';this.style.background:'var(--bg-card-hover)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='';this.style.background=''">
        <svg class="icon" style="width:20px;height:20px"><use href="#icon-food"/></svg> ${t('restaurant_full_menu')}
      </button>
    </div>
  `;

  html += '</div>';
  return html;
}

function quickBook(restaurantId) {
  const r = appData.restaurants.find(r => r.id === restaurantId);
  if (!r) return;

  const name = loc(r.name, r.nameRu);
  const content = document.getElementById('content');
  let html = '<div class="page-content">';
  html += `<h3>${t('book_title')} ${name}</h3>`;

  html += `
    <div class="dashboard-card" style="margin-bottom:16px;padding:16px">
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">${t('book_date')}</label>
        <input type="date" id="bookDate" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px" value="2026-05-29">
      </div>
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">${t('book_time')}</label>
        <select id="bookTime" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
          <option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">${t('book_guests')}</label>
        <select id="bookGuests" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
          <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>
        </select>
      </div>
      <div style="margin-bottom:16px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">${t('book_special')}</label>
        <input type="text" id="bookSpecial" placeholder="${t('book_special_placeholder')}" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
      </div>
      <button onclick="confirmBooking(${r.id})" style="width:100%;padding:18px;background:linear-gradient(135deg, var(--primary), var(--primary-light));color:#fff;border:none;border-radius:16px;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px var(--glow);transition:all 0.2s;letter-spacing:-0.2px" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 24px var(--glow)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 15px var(--glow)'">
        ${t('book_confirm')}
      </button>
    </div>
  `;
  html += '</div>';
  content.innerHTML = html;
}

function confirmBooking(restaurantId) {
  const r = appData.restaurants.find(r => r.id === restaurantId);
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;
  const guests = parseInt(document.getElementById('bookGuests').value);
  const special = document.getElementById('bookSpecial').value;

  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const name = loc(r.name, r.nameRu);

  appData.bookings.push({
    id: Date.now(),
    restaurantId: r.id,
    restaurantName: r.name,
    date: formattedDate,
    time: time,
    guests: guests,
    status: 'confirmed',
    special: special
  });

  updateBookingBadge();

  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="page-content" style="text-align:center;padding-top:40px">
      <svg class="icon" style="width:64px;height:64px;color:var(--success)"><use href="#icon-check"/></svg>
      <h3 style="margin:16px 0 8px">${t('book_confirmed_title')}</h3>
      <p style="color:var(--text-muted);margin-bottom:16px">${name}<br>${formattedDate} at ${time}<br>${guests} ${t('home_guests')}</p>
      <button onclick="showPage('bookings')" style="padding:14px 32px;background:linear-gradient(135deg, var(--primary), var(--primary-light));color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px var(--glow);transition:all 0.2s" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform=''">${t('bookings_view')}</button>
    </div>
  `;
}

// ============ MENU ============
function renderMenu(id) {
  const r = appData.restaurants.find(r => r.id === id);
  if (!r) return '<div class="page-content"><p>' + t('restaurant_not_found') + '</p></div>';

  const name = loc(r.name, r.nameRu);
  const categories = [...new Set(r.menu.map(m => m.category))];

  let html = '<div class="page-content">';
  html += `<h3>${name} ${t('menu_at')}</h3>`;

  categories.forEach(cat => {
    const items = r.menu.filter(m => m.category === cat);
    html += `<h4 style="margin:16px 0 8px;color:var(--primary)">${cat}</h4>`;
    items.forEach(item => {
      const itemName = loc(item.name, item.nameRu);
      html += `
        <div class="dashboard-card" style="margin-bottom:8px;padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${itemName}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${item.description}</div>
            </div>
            <div style="font-weight:700;color:var(--success);font-size:16px;margin-left:12px">$${item.price}</div>
          </div>
        </div>
      `;
    });
  });

  html += `
    <div style="margin-top:24px">
      <button onclick="quickBook(${r.id})" style="width:100%;padding:18px 24px;background:linear-gradient(135deg, var(--primary), var(--primary-light));color:#fff;border:none;border-radius:16px;font-size:16px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 4px 15px var(--glow);transition:all 0.2s;letter-spacing:-0.2px" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 24px var(--glow)'" onmouseout="this.style.transform='';this.style.boxShadow='0 4px 15px var(--glow)'">
        <svg class="icon" style="width:22px;height:22px"><use href="#icon-calendar"/></svg> ${t('restaurant_book_table')}
      </button>
    </div>
  `;

  html += '</div>';
  return html;
}

// ============ PROFILE ============
function renderProfile() {
  const p = appData.profile;
  return `
    <div class="page-content">
      <div class="profile-card">
        <div class="profile-avatar">${p.avatar}</div>
        <h3>${p.name}</h3>
        <p class="profile-group">${t('profile_name_label')}</p>
      </div>

      <div class="profile-info">
        <div class="info-row">
          <span class="info-label">${t('profile_email')}</span>
          <span class="info-value">${p.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('profile_phone')}</span>
          <span class="info-value">${p.phone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">${t('profile_dietary')}</span>
          <span class="info-value">${p.dietary.join(', ')}</span>
        </div>
      </div>

      <h4 style="margin:20px 0 12px;font-size:16px">${t('profile_language')}</h4>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button class="btn-primary" style="padding:10px 20px;background:${window.CURRENT_LANG === 'en' ? 'var(--primary)' : 'var(--bg-card)'};color:${window.CURRENT_LANG === 'en' ? '#fff' : 'var(--text)'};border:none;border-radius:8px;cursor:pointer;font-size:14px" onclick="switchLang('en')">${t('profile_lang_en')}</button>
        <button class="btn-primary" style="padding:10px 20px;background:${window.CURRENT_LANG === 'ru' ? 'var(--primary)' : 'var(--bg-card)'};color:${window.CURRENT_LANG === 'ru' ? '#fff' : 'var(--text)'};border:none;border-radius:8px;cursor:pointer;font-size:14px" onclick="switchLang('ru')">${t('profile_lang_ru')}</button>
      </div>

      <h4 style="margin:20px 0 12px;font-size:16px">${t('profile_fav_cuisines')}</h4>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${p.favoriteCuisines.map(c => `<span style="font-size:13px;padding:8px 16px;background:var(--bg-card);border-radius:20px">${c}</span>`).join('')}
      </div>

      <div class="dashboard-grid" style="margin-top:20px">
        <div class="dashboard-card" onclick="showPage('favorites')">
          <svg class="icon"><use href="#icon-heart"/></svg>
          <h4>${appData.favorites.length}</h4>
          <p>${t('home_favorites')}</p>
        </div>
        <div class="dashboard-card" onclick="showPage('bookings')">
          <svg class="icon"><use href="#icon-calendar"/></svg>
          <h4>${appData.bookings.length}</h4>
          <p>${t('home_bookings')}</p>
        </div>
      </div>
    </div>
  `;
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();

  const wasAppOpen = localStorage.getItem('foodie_appOpen');
  if (wasAppOpen === 'true') {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    const lastPage = localStorage.getItem('foodie_lastPage');
    const savedHistory = localStorage.getItem('foodie_history');

    if (lastPage && savedHistory) {
      try {
        pageNav = JSON.parse(savedHistory);
        if (pageNav.length > 0) {
          updateHeader(lastPage);
          renderContent(lastPage);
          document.getElementById('backBtn').classList.toggle('hidden', pageNav.length <= 1);
        }
      } catch (e) {
        showPage('home');
      }
    } else {
      showPage('home');
    }
  }
});
