# Foodie — Restaurant Finder Demo

Vanilla JS SPA with mobile app shell for discovering and booking restaurants and cafes.

## Features

- Dark/light theme toggle with persistence
- Landing page with animated hero
- Browse 12 cuisine categories, 8 detailed restaurants with full menus
- Search by name, cuisine, or dish
- Save favorites with heart toggle
- Table booking form with confirmation
- Chat messages with restaurants
- SVG icon system
- State persistence via localStorage (theme, last page, favorites)

## How to Use

1. **Edit data** — Replace the restaurant data in `js/app.js` (the `appData` object). Add restaurants, menu items, bookings.
2. **Add SVG icons** — Icons are defined as `<symbol>` elements in `index.html`. Reference with `<use href="#icon-name"/>`.
3. **Customize styles** — Edit `css/app.css`. CSS variables for theming.
4. **Open** — No build step needed. Open `index.html` directly or serve with any static server.

## File Structure

```
index.html          — Entry point with SVG icons and page shell
js/app.js           — Data model, render functions, navigation, theme logic
js/main.js          — Landing page GSAP animations (optional)
css/app.css         — App shell styles, theme variables, component CSS
css/main.css        — Landing page styles
images/             — Image assets placeholder
```

## Browser Support

Modern browsers (ES6+). No build step required.
