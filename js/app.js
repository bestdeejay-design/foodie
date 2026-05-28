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

const appData = {
  profile: {
    name: 'Alex Johnson',
    email: 'alex@email.com',
    phone: '+1 (555) 987-6543',
    avatar: 'AJ',
    dietary: ['Vegetarian friendly', 'No allergies'],
    favoriteCuisines: ['Italian', 'Japanese', 'Mexican']
  },

  categories: [
    { id: 'italian', name: 'Italian', icon: '🍝' },
    { id: 'japanese', name: 'Japanese', icon: '🍣' },
    { id: 'mexican', name: 'Mexican', icon: '🌮' },
    { id: 'chinese', name: 'Chinese', icon: '🥡' },
    { id: 'french', name: 'French', icon: '🥐' },
    { id: 'american', name: 'American', icon: '🍔' },
    { id: 'cafe', name: 'Cafes', icon: '☕' },
    { id: 'seafood', name: 'Seafood', icon: '🦞' },
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'mediterranean', name: 'Mediterranean', icon: '🫒' },
    { id: 'thai', name: 'Thai', icon: '🍜' },
    { id: 'bbq', name: 'BBQ & Grill', icon: '🥩' }
  ],

  restaurants: [
    {
      id: 1,
      name: 'La Trattoria Bella',
      nameRu: 'Траттория Белла',
      cuisine: 'italian',
      rating: 4.8,
      reviews: 342,
      price: '$$$',
      priceRange: '$30-60',
      address: '215 Main Street, Downtown',
      hours: '12:00 - 23:00',
      phone: '+1 (555) 111-2233',
      image: 'images/trattoria.jpg',
      description: 'Authentic Italian cuisine in a warm, rustic setting. Handmade pasta, wood-fired pizzas, and an extensive wine list curated by our sommelier.',
      descriptionRu: 'Аутентичная итальянская кухня в тёплой деревенской атмосфере. Паста ручной работы, пицца на дровах и обширная винная карта.',
      features: ['Outdoor seating', 'Wine bar', 'Private dining', 'Vegetarian options'],
      featuresRu: ['Веранда', 'Винный бар', 'Отдельный зал', 'Вегетарианские блюда'],
      popular: ['Truffle Risotto', 'Margherita Pizza', 'Tiramisu'],
      popularRu: ['Рисотто с трюфелем', 'Пицца Маргарита', 'Тирамису'],
      menu: [
        { name: 'Bruschetta Classica', nameRu: 'Брускетта Классика', price: 12, category: 'Starters', description: 'Toasted bread with fresh tomatoes, basil & garlic' },
        { name: 'Margherita Pizza', nameRu: 'Пицца Маргарита', price: 18, category: 'Mains', description: 'San Marzano tomatoes, mozzarella, fresh basil' },
        { name: 'Truffle Risotto', nameRu: 'Рисотто с трюфелем', price: 28, category: 'Mains', description: 'Carnaroli rice with black truffle & parmesan' },
        { name: 'Osso Buco', nameRu: 'Оссо Буко', price: 34, category: 'Mains', description: 'Braised veal shank with gremolata' },
        { name: 'Tiramisu', nameRu: 'Тирамису', price: 14, category: 'Desserts', description: 'Classic coffee-soaked ladyfingers with mascarpone' },
        { name: 'Panna Cotta', nameRu: 'Панна Котта', price: 12, category: 'Desserts', description: 'Vanilla cream with berry compote' }
      ]
    }
    ,
    {
      id: 2,
      name: 'Sakura Garden',
      nameRu: 'Сад Сакуры',
      cuisine: 'japanese',
      rating: 4.9,
      reviews: 521,
      price: '$$$$',
      priceRange: '$50-100',
      address: '88 Harbor View Blvd',
      hours: '11:30 - 14:30, 17:30 - 22:00',
      phone: '+1 (555) 222-3344',
      image: 'images/sakura.jpg',
      description: 'Premium Japanese dining experience. Omakase tasting menus, fresh sashimi flown daily, and a serene garden terrace.',
      descriptionRu: 'Премиальный японский ресторан. Омакасе-меню, свежайшие сашими и безмятежная терраса в саду.',
      features: ['Omakase', 'Sake bar', 'Garden terrace', 'Private tatami rooms'],
      featuresRu: ['Омакасе', 'Саке-бар', 'Садовая терраса', 'Отдельные татами-комнаты'],
      popular: ['Omakase Tasting', 'Salmon Sashimi', 'Matcha Tiramisu'],
      popularRu: ['Омакасе-дегустация', 'Сашими из лосося', 'Матча-тирамису'],
      menu: [
        { name: 'Edamame', nameRu: 'Эдамаме', price: 8, category: 'Starters', description: 'Steamed soybeans with sea salt' },
        { name: 'Gyoza', nameRu: 'Гёдза', price: 14, category: 'Starters', description: 'Pan-fried pork & vegetable dumplings' },
        { name: 'Omakase 10-piece', nameRu: 'Омакасе 10 штук', price: 85, category: 'Tasting', description: 'Chef selection of premium nigiri' },
        { name: 'Dragon Roll', nameRu: 'Дракон-ролл', price: 24, category: 'Mains', description: 'Eel, avocado, cucumber, unagi sauce' },
        { name: 'Matcha Tiramisu', nameRu: 'Матча-тирамису', price: 16, category: 'Desserts', description: 'Green tea layered dessert' }
      ]
    }
    ,
    {
      id: 3,
      name: 'El Sol Kitchen',
      nameRu: 'Кухня Эль Соль',
      cuisine: 'mexican',
      rating: 4.6,
      reviews: 189,
      price: '$$',
      priceRange: '$15-35',
      address: '42 Fiesta Avenue',
      hours: '10:00 - 22:00',
      phone: '+1 (555) 333-4455',
      image: 'images/El-Sol-Kitchen.jpg',
      description: 'Vibrant Mexican cantina with bold flavors. Street tacos, fresh guacamole made tableside, and the best margaritas in town.',
      descriptionRu: 'Яркая мексиканская кантина. Уличные тако, гуакамоле, приготовленное у столика, и лучшая маргарита в городе.',
      features: ['Live music', 'Outdoor patio', 'Happy hour', 'Gluten-free options'],
      featuresRu: ['Живая музыка', 'Уличная терраса', 'Счастливые часы', 'Безглютеновые блюда'],
      popular: ['Street Tacos', 'Tableside Guacamole', 'Churros'],
      popularRu: ['Уличные тако', 'Гуакамоле у столика', 'Чуррос'],
      menu: [
        { name: 'Guacamole & Chips', nameRu: 'Гуакамоле и чипсы', price: 12, category: 'Starters', description: 'Made fresh at your table' },
        { name: 'Queso Fundido', nameRu: 'Кесо Фундидо', price: 14, category: 'Starters', description: 'Melted cheese with chorizo & tortillas' },
        { name: 'Street Tacos (3)', nameRu: 'Уличные тако (3)', price: 16, category: 'Mains', description: 'Choice of carne asada, al pastor, or pollo' },
        { name: 'Enchiladas Verdes', nameRu: 'Энчиладас Вердес', price: 18, category: 'Mains', description: 'Chicken enchiladas with tomatillo sauce' },
        { name: 'Churros', nameRu: 'Чуррос', price: 9, category: 'Desserts', description: 'Cinnamon sugar with chocolate dip' }
      ]
    }
    ,
    {
      id: 4,
      name: 'Le Petit Cafe',
      nameRu: 'Маленькое Кафе',
      cuisine: 'cafe',
      rating: 4.7,
      reviews: 456,
      price: '$$',
      priceRange: '$5-20',
      address: '7 Bakery Lane',
      hours: '07:00 - 21:00',
      phone: '+1 (555) 444-5566',
      image: 'images/le-petit-cafe.jpg',
      description: 'Cozy neighborhood cafe with artisan coffee, fresh pastries baked daily, and light brunch fare. Perfect for remote work.',
      descriptionRu: 'Уютное районное кафе с ароматным кофе, свежей выпечкой и лёгкими бранчами. Идеально для работы.',
      features: ['Free WiFi', 'Pet-friendly', 'Brunch menu', 'Outdoor seating'],
      featuresRu: ['Бесплатный Wi-Fi', 'Можно с питомцем', 'Бранч-меню', 'Веранда'],
      popular: ['Avocado Toast', 'Flat White', 'Croissants'],
      popularRu: ['Авокадо-тост', 'Флэт-уайт', 'Круассаны'],
      menu: [
        { name: 'Flat White', nameRu: 'Флэт-уайт', price: 5, category: 'Coffee', description: 'Double ristretto with velvety milk' },
        { name: 'Matcha Latte', nameRu: 'Матча-латте', price: 6, category: 'Coffee', description: 'Ceremonial grade matcha' },
        { name: 'Avocado Toast', nameRu: 'Авокадо-тост', price: 14, category: 'Food', description: 'Sourdough, smashed avocado, poached egg' },
        { name: 'Croissant', nameRu: 'Круассан', price: 5, category: 'Bakery', description: 'Buttery, flaky French croissant' },
        { name: 'Banana Bread', nameRu: 'Банановый хлеб', price: 7, category: 'Bakery', description: 'House-made with walnuts' }
      ]
    }
    ,
    {
      id: 5,
      name: 'Ocean & Co.',
      nameRu: 'Оушен и Ко',
      cuisine: 'seafood',
      rating: 4.7,
      reviews: 278,
      price: '$$$$',
      priceRange: '$60-120',
      address: '12 Pier Street, Waterfront',
      hours: '12:00 - 15:00, 18:00 - 23:00',
      phone: '+1 (555) 555-6677',
      image: 'images/Ocean-Co.jpeg',
      description: 'Waterfront fine dining with sustainably sourced seafood. Oyster bar, seasonal tasting menus, and sunset views over the harbor.',
      descriptionRu: 'Изысканный ресторан у воды с экологичными морепродуктами. Устричный бар, сезонные дегустации и закаты над гаванью.',
      features: ['Waterfront view', 'Oyster bar', 'Tasting menu', 'Wine pairing'],
      featuresRu: ['Вид на воду', 'Устричный бар', 'Дегустационное меню', 'Винное сопровождение'],
      popular: ['Oyster Platter', 'Lobster Thermidor', 'Seared Tuna'],
      popularRu: ['Устричное плато', 'Лобстер Термидор', 'Тунец на гриле'],
      menu: [
        { name: 'Oyster Platter (6)', nameRu: 'Устричное плато (6)', price: 24, category: 'Starters', description: 'Fresh shucked with mignonette' },
        { name: 'Tuna Tartare', nameRu: 'Тартар из тунца', price: 22, category: 'Starters', description: 'Sesame, avocado, wonton crisps' },
        { name: 'Lobster Thermidor', nameRu: 'Лобстер Термидор', price: 68, category: 'Mains', description: 'Butter-poached with gruyere crust' },
        { name: 'Pan-Seared Halibut', nameRu: 'Палтус на сковороде', price: 42, category: 'Mains', description: 'Lemon beurre blanc, asparagus' },
        { name: 'Key Lime Pie', nameRu: 'Лаймовый пирог', price: 16, category: 'Desserts', description: 'Classic tangy with graham crust' }
      ]
    }
    ,
    {
      id: 6,
      name: 'Spice Route',
      nameRu: 'Путь Специй',
      cuisine: 'indian',
      rating: 4.5,
      reviews: 203,
      price: '$$',
      priceRange: '$20-40',
      address: '55 Curry Road',
      hours: '11:00 - 22:30',
      phone: '+1 (555) 666-7788',
      image: 'images/the-spice-route.jpg',
      description: 'Authentic Indian cuisine from across the subcontinent. Tandoori dishes, rich curries, and fresh naan from the clay oven.',
      descriptionRu: 'Аутентичная индийская кухня со всего субконтинента. Блюда тандури, насыщенные карри и свежий наан.',
      features: ['Tandoor oven', 'Vegetarian menu', 'Lunch buffet', 'Takeaway'],
      featuresRu: ['Печь тандур', 'Вегетарианское меню', 'Обеденный шведский стол', 'Навынос'],
      popular: ['Butter Chicken', 'Lamb Vindaloo', 'Garlic Naan'],
      popularRu: ['Цыплёнок в масляном соусе', 'Баранина Виндалу', 'Чесночный наан'],
      menu: [
        { name: 'Samosas (2)', nameRu: 'Самосы (2)', price: 9, category: 'Starters', description: 'Crispy pastry with spiced potatoes' },
        { name: 'Butter Chicken', nameRu: 'Цыплёнок в масляном соусе', price: 22, category: 'Mains', description: 'Creamy tomato curry with tandoori chicken' },
        { name: 'Lamb Vindaloo', nameRu: 'Баранина Виндалу', price: 24, category: 'Mains', description: 'Spicy Goan curry with tender lamb' },
        { name: 'Paneer Tikka Masala', nameRu: 'Панир Тикка Масала', price: 19, category: 'Mains', description: 'Grilled paneer in spiced tomato sauce' },
        { name: 'Garlic Naan', nameRu: 'Чесночный наан', price: 5, category: 'Breads', description: 'Clay oven baked with garlic butter' },
        { name: 'Gulab Jamun', nameRu: 'Гулаб Джамун', price: 8, category: 'Desserts', description: 'Milk dumplings in rose syrup' }
      ]
    }
    ,
    {
      id: 7,
      name: 'Burger Republic',
      nameRu: 'Бургерная Республика',
      cuisine: 'american',
      rating: 4.4,
      reviews: 678,
      price: '$$',
      priceRange: '$12-25',
      address: '99 Liberty Square',
      hours: '11:00 - 00:00',
      phone: '+1 (555) 777-8899',
      image: 'images/Burger-Republic.jpg',
      description: 'Craft burgers, loaded fries, and hand-spun milkshakes. A modern take on the classic American diner with local ingredients.',
      descriptionRu: 'Крафтовые бургеры, картофель с трюфелем и молочные коктейли. Современный взгляд на американскую классику.',
      features: ['Craft beer', 'Late night', 'Kids menu', 'Takeaway'],
      featuresRu: ['Крафтовое пиво', 'Допоздна', 'Детское меню', 'Навынос'],
      popular: ['Double Smash Burger', 'Truffle Fries', 'Oreo Shake'],
      popularRu: ['Дабл-смэш бургер', 'Трюфельный картофель', 'Орео-шейк'],
      menu: [
        { name: 'Smash Burger', nameRu: 'Смэш-бургер', price: 14, category: 'Burgers', description: 'Double patty, American cheese, special sauce' },
        { name: 'BBQ Bacon Burger', nameRu: 'BBQ Бекон-бургер', price: 17, category: 'Burgers', description: 'Smoked bacon, cheddar, onion rings' },
        { name: 'Truffle Fries', nameRu: 'Трюфельный картофель', price: 9, category: 'Sides', description: 'Parmesan, truffle oil, garlic aioli' },
        { name: 'Chicken Wings', nameRu: 'Куриные крылья', price: 13, category: 'Sides', description: 'Choice of buffalo or BBQ sauce' },
        { name: 'Oreo Milkshake', nameRu: 'Орео-шейк', price: 8, category: 'Drinks', description: 'Thick shake with crushed Oreos' }
      ]
    }
    ,
    {
      id: 8,
      name: 'Green Lotus',
      nameRu: 'Зелёный Лотос',
      cuisine: 'thai',
      rating: 4.6,
      reviews: 167,
      price: '$$',
      priceRange: '$15-30',
      address: '33 Bamboo Street',
      hours: '12:00 - 22:00',
      phone: '+1 (555) 888-9900',
      image: 'images/Green-Lotus.webp',
      description: 'Family-run Thai restaurant with recipes passed down three generations. Fragrant curries, wok-fired noodles, and tropical desserts.',
      descriptionRu: 'Семейный тайский ресторан с рецептами трёх поколений. Ароматные карри, лапша вок и тропические десерты.',
      features: ['Family-run', 'Vegan options', 'BYOB', 'Cozy atmosphere'],
      featuresRu: ['Семейный', 'Веганские блюда', 'Со своим алкоголем', 'Уютная атмосфера'],
      popular: ['Pad Thai', 'Green Curry', 'Mango Sticky Rice'],
      popularRu: ['Пад-тай', 'Зелёный карри', 'Манго с клейким рисом'],
      menu: [
        { name: 'Spring Rolls (4)', nameRu: 'Спринг-роллы (4)', price: 8, category: 'Starters', description: 'Crispy vegetable rolls with sweet chili' },
        { name: 'Tom Yum Soup', nameRu: 'Суп Том Ям', price: 11, category: 'Starters', description: 'Hot & sour shrimp soup with lemongrass' },
        { name: 'Pad Thai', nameRu: 'Пад-тай', price: 17, category: 'Mains', description: 'Rice noodles with shrimp, tofu, peanuts' },
        { name: 'Green Curry', nameRu: 'Зелёный карри', price: 19, category: 'Mains', description: 'Coconut curry with chicken and vegetables' },
        { name: 'Mango Sticky Rice', nameRu: 'Манго с клейким рисом', price: 10, category: 'Desserts', description: 'Sweet mango with coconut sticky rice' }
      ]
    }
    ,
    {
      id: 9,
      name: 'Bistro Parisien',
      nameRu: 'Парижское Бистро',
      cuisine: 'french',
      rating: 4.7,
      reviews: 215,
      price: '$$$',
      priceRange: '$35-65',
      address: '18 Rue de Lafayette',
      hours: '12:00 - 15:00, 18:00 - 23:00',
      phone: '+1 (555) 999-0011',
      image: 'images/le-bistro-parisien-view.jpg',
      description: 'Classic French bistro with a modern twist. Escargots, coq au vin, and the finest crème brûlée in town. Seasonal tasting menus.',
      descriptionRu: 'Классическое французское бистро на современный лад. Эскарго, coq au vin и лучший крем-брюле в городе.',
      features: ['Tasting menu', 'Wine pairing', 'Romantic', 'Outdoor terrace'],
      featuresRu: ['Дегустационное меню', 'Винное сопровождение', 'Романтика', 'Уличная терраса'],
      popular: ['French Onion Soup', 'Coq au Vin', 'Crème Brûlée'],
      popularRu: ['Французский луковый суп', 'Петух в вине', 'Крем-брюле'],
      menu: [
        { name: 'French Onion Soup', nameRu: 'Французский луковый суп', price: 14, category: 'Starters', description: 'Caramelized onions, gruyère, crusty bread' },
        { name: 'Escargots', nameRu: 'Эскарго', price: 18, category: 'Starters', description: 'Burgundy snails with garlic butter & parsley' },
        { name: 'Coq au Vin', nameRu: 'Петух в вине', price: 32, category: 'Mains', description: 'Braised chicken in red wine with mushrooms' },
        { name: 'Steak Frites', nameRu: 'Стейк-фрит', price: 38, category: 'Mains', description: 'Pan-seared ribeye with béarnaise, crispy frites' },
        { name: 'Crème Brûlée', nameRu: 'Крем-брюле', price: 13, category: 'Desserts', description: 'Classic vanilla custard with caramelized sugar' }
      ]
    }
    ,
    {
      id: 10,
      name: 'Dragon Palace',
      nameRu: 'Дворец Дракона',
      cuisine: 'chinese',
      rating: 4.5,
      reviews: 389,
      price: '$$',
      priceRange: '$15-35',
      address: '72 Golden Avenue',
      hours: '11:00 - 22:30',
      phone: '+1 (555) 888-1122',
      image: 'images/Dragon-Palace.jpg',
      description: 'Authentic Cantonese and Sichuan cuisine. Dim sum trolley on weekends, Peking duck carved tableside, and hand-pulled noodles.',
      descriptionRu: 'Аутентичная кантонская и сычуаньская кухня. Дим-самы по выходным, утка по-пекински и лапша ручной вытяжки.',
      features: ['Dim sum', 'Private rooms', 'Large groups', 'Delivery'],
      featuresRu: ['Дим-самы', 'Отдельные комнаты', 'Большие компании', 'Доставка'],
      popular: ['Peking Duck', 'Xiao Long Bao', 'Kung Pao Chicken'],
      popularRu: ['Утка по-пекински', 'Сяо Лун Бао', 'Курица Кунг Пао'],
      menu: [
        { name: 'Har Gow (4)', nameRu: 'Хар Гоу (4)', price: 10, category: 'Dim Sum', description: 'Steamed shrimp dumplings with translucent wrapper' },
        { name: 'Xiao Long Bao (6)', nameRu: 'Сяо Лун Бао (6)', price: 13, category: 'Dim Sum', description: 'Soup dumplings with pork & ginger' },
        { name: 'Peking Duck', nameRu: 'Утка по-пекински', price: 48, category: 'Mains', description: 'Crispy skin, pancakes, hoisin, serves 2' },
        { name: 'Kung Pao Chicken', nameRu: 'Курица Кунг Пао', price: 19, category: 'Mains', description: 'Wok-fried with peanuts, chili & Sichuan pepper' },
        { name: 'Egg Tarts (3)', nameRu: 'Яичные тарты (3)', price: 8, category: 'Desserts', description: 'Flaky pastry with silky egg custard' }
      ]
    }
    ,
    {
      id: 11,
      name: 'Azure Mediterranean',
      nameRu: 'Лазурное Средиземноморье',
      cuisine: 'mediterranean',
      rating: 4.6,
      reviews: 178,
      price: '$$$',
      priceRange: '$30-55',
      address: '25 Marina Bay',
      hours: '11:30 - 22:30',
      phone: '+1 (555) 777-3344',
      image: 'images/Azure.jpg',
      description: 'Sun-soaked flavors of Greece, Turkey, and Lebanon. Mezze platters, grilled seafood, and fresh herbs from our rooftop garden.',
      descriptionRu: 'Вкусы Греции, Турции и Ливана. Мезе, морепродукты на гриле и свежие травы с собственной крыши.',
      features: ['Rooftop dining', 'Mezze bar', 'Gluten-free', 'Vegetarian'],
      featuresRu: ['Терраса на крыше', 'Мезе-бар', 'Без глютена', 'Вегетарианское'],
      popular: ['Mezze Platter', 'Grilled Octopus', 'Baklava'],
      popularRu: ['Мезе-плато', 'Осьминог на гриле', 'Пахлава'],
      menu: [
        { name: 'Hummus & Pita', nameRu: 'Хумус и пита', price: 10, category: 'Mezze', description: 'Creamy chickpea, tahini, olive oil, warm pita' },
        { name: 'Mezze Platter', nameRu: 'Мезе-плато', price: 24, category: 'Mezze', description: 'Hummus, baba ganoush, falafel, dolmades, olives' },
        { name: 'Grilled Octopus', nameRu: 'Осьминог на гриле', price: 28, category: 'Mains', description: 'Charcoal-grilled with lemon, oregano & capers' },
        { name: 'Lamb Kofta', nameRu: 'Люля-кебаб из баранины', price: 26, category: 'Mains', description: 'Spiced lamb skewers with tzatziki & rice' },
        { name: 'Baklava', nameRu: 'Пахлава', price: 11, category: 'Desserts', description: 'Layers of phyllo, walnuts, honey syrup' }
      ]
    }
    ,
    {
      id: 12,
      name: 'Smoke & Barrel',
      nameRu: 'Дым и Бочка',
      cuisine: 'bbq',
      rating: 4.4,
      reviews: 521,
      price: '$$',
      priceRange: '$20-40',
      address: '8 Hickory Road',
      hours: '12:00 - 23:00',
      phone: '+1 (555) 666-5566',
      image: 'images/smokey-barrels.jpg',
      description: 'Texas-style BBQ slow-smoked over hickory for 14 hours. Brisket, ribs, house-made sauces, and craft bourbon from our barrel selection.',
      descriptionRu: 'Техасское BBQ медленного копчения. Грудинка, рёбрышки и авторские соусы из собственной бочарни.',
      features: ['Live blues', 'Bourbon bar', 'Outdoor yard', 'Large groups'],
      featuresRu: ['Живой блюз', 'Бурбон-бар', 'Уличный дворик', 'Большие компании'],
      popular: ['Beef Brisket', 'Baby Back Ribs', 'Mac & Cheese'],
      popularRu: ['Говяжья грудинка', 'Рёбрышки', 'Мак-н-чиз'],
      menu: [
        { name: 'Smoked Wings', nameRu: 'Копчёные крылья', price: 14, category: 'Starters', description: 'Dry-rubbed, smoked, choice of sauce' },
        { name: 'Beef Brisket', nameRu: 'Говяжья грудинка', price: 26, category: 'Mains', description: '14-hour smoked, peppery bark, 200g slice' },
        { name: 'Baby Back Ribs', nameRu: 'Рёбрышки', price: 28, category: 'Mains', description: 'Full rack, fall-off-the-bone, house glaze' },
        { name: 'Pulled Pork', nameRu: 'Рваная свинина', price: 22, category: 'Mains', description: 'Carolina-style with vinegar slaw & cornbread' },
        { name: 'Mac & Cheese', nameRu: 'Мак-н-чиз', price: 9, category: 'Sides', description: 'Four-cheese blend, crispy breadcrumb top' }
      ]
    }
    ,
    {
      id: 13,
      name: 'Vino & Forno',
      nameRu: 'Вино и Печь',
      cuisine: 'italian',
      rating: 4.8,
      reviews: 294,
      price: '$$',
      priceRange: '$20-40',
      address: '61 Vineyard Lane',
      hours: '17:00 - 00:00',
      phone: '+1 (555) 555-8899',
      image: 'images/Vino-Forno.jpg',
      description: 'Neapolitan pizzeria and natural wine bar. 48-hour fermented dough, San Marzano tomatoes, and 100+ labels from small producers.',
      descriptionRu: 'Неаполитанская пиццерия и винный бар. Тесто 48-часовой ферментации, томаты Сан-Марцано и 100+ этикеток натуральных вин.',
      features: ['Natural wine', 'Wood-fired oven', 'Late night', 'Pet-friendly'],
      featuresRu: ['Натуральное вино', 'Дровяная печь', 'Допоздна', 'Можно с питомцем'],
      popular: ['Margherita DOP', 'Diavola', 'Natural Wine Flight'],
      popularRu: ['Маргарита DOP', 'Дьявола', 'Дегустация натуральных вин'],
      menu: [
        { name: 'Margherita DOP', nameRu: 'Маргарита DOP', price: 16, category: 'Pizza', description: 'San Marzano DOP, buffalo mozzarella, basil' },
        { name: 'Diavola', nameRu: 'Дьявола', price: 19, category: 'Pizza', description: 'Spicy salami, nduja, chili honey' },
        { name: 'Tartufo', nameRu: 'Тартуфо', price: 22, category: 'Pizza', description: 'Mushroom cream, truffle oil, parmesan flakes' },
        { name: 'Burrata Salad', nameRu: 'Салат с бурратой', price: 15, category: 'Starters', description: 'Creamy burrata, heirloom tomatoes, balsamic' },
        { name: 'Natural Wine Flight', nameRu: 'Дегустация натуральных вин', price: 22, category: 'Drinks', description: '3 glasses from our curated selection' }
      ]
    }
    ,
    {
      id: 14,
      name: 'Hop & Hearth',
      nameRu: 'Хмель и Очаг',
      cuisine: 'american',
      rating: 4.3,
      reviews: 412,
      price: '$$',
      priceRange: '$15-30',
      address: '44 Brewery Street',
      hours: '11:00 - 01:00',
      phone: '+1 (555) 444-1122',
      image: 'images/Hop-Hearth.jpg',
      description: 'Gastropub with 24 craft taps and elevated comfort food. House-ground burgers, beer-battered fish & chips, and weekend brunch.',
      descriptionRu: 'Гастропаб с 24 крафтовыми кранами. Бургеры из фермерского мяса, фиш-н-чипс и бранчи по выходным.',
      features: ['Craft beer', 'Brunch', 'Sports TV', 'Late night'],
      featuresRu: ['Крафтовое пиво', 'Бранч', 'Спорт на ТВ', 'Допоздна'],
      popular: ['Pub Burger', 'Fish & Chips', 'Pretzel Board'],
      popularRu: ['Паб-бургер', 'Фиш-н-чипс', 'Брецель-доска'],
      menu: [
        { name: 'Pretzel Board', nameRu: 'Брецель-доска', price: 15, category: 'Starters', description: 'Giant soft pretzel, beer cheese, mustard' },
        { name: 'Pub Burger', nameRu: 'Паб-бургер', price: 17, category: 'Mains', description: 'House-ground patty, aged cheddar, bacon jam' },
        { name: 'Fish & Chips', nameRu: 'Фиш-н-чипс', price: 19, category: 'Mains', description: 'Beer-battered cod, triple-cooked chips, tartar' },
        { name: 'Wings (10)', nameRu: 'Крылья (10)', price: 16, category: 'Sides', description: 'Choice of buffalo, BBQ, or gochujang glaze' },
        { name: 'Sticky Toffee Pudding', nameRu: 'Липкий ирисовый пудинг', price: 11, category: 'Desserts', description: 'Warm date cake, toffee sauce, vanilla ice cream' }
      ]
    }
    ,
    {
      id: 15,
      name: 'Pasta & Co.',
      nameRu: 'Паста и Ко',
      cuisine: 'italian',
      rating: 4.5,
      reviews: 187,
      price: '$$',
      priceRange: '$18-35',
      address: '90 Roma Street',
      hours: '11:30 - 22:00',
      phone: '+1 (555) 333-5566',
      image: 'images/Pasta-Co.jpeg',
      description: 'Handmade pasta bar with daily changing menu. Fresh fettuccine, ravioli, and gnocchi made in-house. Quick lunch and relaxed dinner.',
      descriptionRu: 'Бар домашней пасты с ежедневно меняющимся меню. Феттучини, равиоли и ньокки ручной работы.',
      features: ['Handmade pasta', 'Express lunch', 'Takeaway', 'Counter seating'],
      featuresRu: ['Паста ручной работы', 'Экспресс-ланч', 'Навынос', 'Места у стойки'],
      popular: ['Cacio e Pepe', 'Pumpkin Ravioli', 'Pistachio Cannoli'],
      popularRu: ['Качо-э-пепе', 'Тыквенные равиоли', 'Фисташковые канноли'],
      menu: [
        { name: 'Arancini', nameRu: 'Аранчини', price: 10, category: 'Starters', description: 'Crispy risotto balls with mozzarella center' },
        { name: 'Cacio e Pepe', nameRu: 'Качо-э-пепе', price: 16, category: 'Pasta', description: 'Pecorino, black pepper, tonnarelli' },
        { name: 'Pumpkin Ravioli', nameRu: 'Тыквенные равиоли', price: 19, category: 'Pasta', description: 'Sage butter, amaretti crumble' },
        { name: 'Linguine Vongole', nameRu: 'Лингвини с вонголе', price: 22, category: 'Pasta', description: 'Fresh clams, white wine, chili, garlic' },
        { name: 'Pistachio Cannoli', nameRu: 'Фисташковые канноли', price: 10, category: 'Desserts', description: 'Sicilian ricotta-filled crispy pastry' }
      ]
    }
    ,
    {
      id: 16,
      name: 'Ramen Dojo',
      nameRu: 'Рамен Додзё',
      cuisine: 'japanese',
      rating: 4.7,
      reviews: 312,
      price: '$$',
      priceRange: '$14-25',
      address: '5 Noodle Lane',
      hours: '11:00 - 22:00',
      phone: '+1 (555) 222-9900',
      image: 'images/Ramen-Dojo.jpg',
      description: 'Authentic ramen shop with tonkotsu broth simmered 18 hours. Four signature bowls, gyoza, and Japanese craft beer on tap.',
      descriptionRu: 'Аутентичная раменная с бульоном тонкоцу 18-часового томления. Четыре фирменные чаши, гёдза и японское крафтовое пиво.',
      features: ['Counter dining', 'Quick service', 'Late night', 'Takeaway'],
      featuresRu: ['Столы-стойки', 'Быстрое обслуживание', 'Допоздна', 'Навынос'],
      popular: ['Tonkotsu Ramen', 'Spicy Miso', 'Pork Gyoza'],
      popularRu: ['Тонкоцу-рамэн', 'Острый мисо', 'Свиные гёдза'],
      menu: [
        { name: 'Tonkotsu Ramen', nameRu: 'Тонкоцу-рамэн', price: 15, category: 'Ramen', description: 'Creamy pork bone broth, chashu, soft egg' },
        { name: 'Spicy Miso Ramen', nameRu: 'Острый мисо-рамэн', price: 16, category: 'Ramen', description: 'Fermented miso, chili oil, ground pork' },
        { name: 'Shoyu Ramen', nameRu: 'Сёю-рамэн', price: 14, category: 'Ramen', description: 'Clear soy broth, chicken chashu, bamboo shoots' },
        { name: 'Pork Gyoza (6)', nameRu: 'Свиные гёдза (6)', price: 9, category: 'Sides', description: 'Pan-fried dumplings with ponzu dipping sauce' },
        { name: 'Japanese Cheesecake', nameRu: 'Японский чизкейк', price: 8, category: 'Desserts', description: 'Light and fluffy cotton cheesecake' }
      ]
    }
    ,
    {
      id: 17,
      name: 'Sushi Dokoro',
      nameRu: 'Суши Докоро',
      cuisine: 'japanese',
      rating: 4.6,
      reviews: 234,
      price: '$$$',
      priceRange: '$35-70',
      address: '112 Fish Market Road',
      hours: '12:00 - 14:30, 17:30 - 21:30',
      phone: '+1 (555) 111-3344',
      image: 'images/Sushi-Dokoro.jpg',
      description: 'Traditional Edomae sushi with fish flown daily from Tokyo\'s Toyosu market. Intimate 12-seat counter, reservation recommended.',
      descriptionRu: 'Традиционные суши эдомаэ. Рыба доставляется ежедневно с токийского рынка. 12 мест за стойкой.',
      features: ['Counter only', 'Reservations', 'Omakase', 'Sake'],
      featuresRu: ['Только стойка', 'Бронирование', 'Омакасе', 'Саке'],
      popular: ['Omakase 12-piece', 'Chutoro Nigiri', 'Uni Hand Roll'],
      popularRu: ['Омакасе 12 штук', 'Тюторо нигири', 'Хэнд-ролл с уни'],
      menu: [
        { name: 'Omakase 12-piece', nameRu: 'Омакасе 12 штук', price: 75, category: 'Tasting', description: 'Chef selection of seasonal nigiri' },
        { name: 'Chutoro Nigiri (2)', nameRu: 'Тюторо нигири (2)', price: 16, category: 'Nigiri', description: 'Medium fatty tuna belly' },
        { name: 'Salmon Aburi (2)', nameRu: 'Лосось Абури (2)', price: 12, category: 'Nigiri', description: 'Torched salmon belly with yuzu kosho' },
        { name: 'Uni Hand Roll', nameRu: 'Хэнд-ролл с уни', price: 18, category: 'Maki', description: 'Fresh sea urchin, shiso, warm rice' },
        { name: 'Miso Soup', nameRu: 'Мисо-суп', price: 5, category: 'Sides', description: 'Traditional with silken tofu & wakame' }
      ]
    }
    ,
    {
      id: 18,
      name: 'Taqueria Calle',
      nameRu: 'Такерия Калье',
      cuisine: 'mexican',
      rating: 4.4,
      reviews: 156,
      price: '$',
      priceRange: '$5-15',
      address: '23 Mission Street',
      hours: '10:00 - 23:00',
      phone: '+1 (555) 888-6677',
      image: 'images/Taqueria-Calle.webp',
      description: 'Late-night taqueria with authentic street tacos. Hand-pressed tortillas, six salsa varieties, and ice-cold horchata. No frills, all flavor.',
      descriptionRu: 'Ночная такерия с аутентичными уличными тако. Тортильи ручной лепки, шесть видов сальсы и ледяная орчата.',
      features: ['Late night', 'Quick bite', 'Vegetarian tacos', 'Cheap eats'],
      featuresRu: ['Допоздна', 'Быстрый перекус', 'Вегетарианские тако', 'Дёшево'],
      popular: ['Al Pastor Taco', 'Carne Asada Burrito', 'Elote'],
      popularRu: ['Тако аль пастор', 'Буррито с карне асада', 'Элоте'],
      menu: [
        { name: 'Taco al Pastor', nameRu: 'Тако аль пастор', price: 3.5, category: 'Tacos', description: 'Spit-roasted pork, pineapple, cilantro' },
        { name: 'Taco de Carnitas', nameRu: 'Тако де карнитас', price: 3.5, category: 'Tacos', description: 'Slow-cooked pork shoulder, pickled onion' },
        { name: 'Burrito Supreme', nameRu: 'Буррито Суприм', price: 12, category: 'Burritos', description: 'Rice, beans, choice of meat, guac, sour cream' },
        { name: 'Elote', nameRu: 'Элоте', price: 6, category: 'Sides', description: 'Grilled corn, mayo, cotija, chili powder' },
        { name: 'Churros & Chocolate', nameRu: 'Чуррос и шоколад', price: 7, category: 'Desserts', description: 'Fresh fried churros with warm chocolate dip' }
      ]
    }
    ,
    {
      id: 19,
      name: 'Cantina Verde',
      nameRu: 'Зелёная Кантина',
      cuisine: 'mexican',
      rating: 4.5,
      reviews: 198,
      price: '$$',
      priceRange: '$20-40',
      address: '67 Agave Drive',
      hours: '17:00 - 23:00',
      phone: '+1 (555) 444-8899',
      image: 'images/Cantina-Verde.jpg',
      description: 'Upscale Mexican dining with mezcaleria. tableside guacamole, mole poblano, and 60+ agave spirits. Rooftop terrace with city views.',
      descriptionRu: 'Изысканная мексиканская кухня с мескалерией. Гуакамоле у столика, моле поблано и 60+ видов агавы.',
      features: ['Rooftop', 'Mezcal bar', 'Date night', 'Private events'],
      featuresRu: ['Терраса на крыше', 'Мескаль-бар', 'Для свиданий', 'Частные мероприятия'],
      popular: ['Mole Poblano', 'Lobster Tacos', 'Mezcal Flight'],
      popularRu: ['Моле поблано', 'Тако с лобстером', 'Мескальная дегустация'],
      menu: [
        { name: 'Tableside Guacamole', nameRu: 'Гуакамоле у столика', price: 16, category: 'Starters', description: 'Made fresh with lime, cilantro, serrano' },
        { name: 'Lobster Tacos (2)', nameRu: 'Тако с лобстером (2)', price: 24, category: 'Mains', description: 'Butter-poached lobster, chipotle crema' },
        { name: 'Mole Poblano', nameRu: 'Моле поблано', price: 26, category: 'Mains', description: 'Chicken in 20-ingredient dark mole sauce' },
        { name: 'Ceviche Tropical', nameRu: 'Тропическое севиче', price: 18, category: 'Starters', description: 'Citrus-cured fish, mango, habanero' },
        { name: 'Tres Leches Cake', nameRu: 'Торт Трес Лечес', price: 12, category: 'Desserts', description: 'Three-milk soaked sponge, whipped cream' }
      ]
    }
    ,
    {
      id: 20,
      name: 'Golden Chopsticks',
      nameRu: 'Золотые Палочки',
      cuisine: 'chinese',
      rating: 4.3,
      reviews: 445,
      price: '$',
      priceRange: '$8-20',
      address: '200 Chinatown Plaza',
      hours: '10:00 - 22:00',
      phone: '+1 (555) 999-3344',
      image: 'images/Golden-Chopsticks.jpg',
      description: 'Bustling Chinatown institution since 1982. Wok-fired classics, hand-pulled noodles, and Hong Kong-style milk tea. No reservations, always a line.',
      descriptionRu: 'Знаменитый ресторан чайна-тауна с 1982 года. Классика вока, лапша ручной вытяжки и гонконгский чай с молоком.',
      features: ['No reservations', 'Quick turnover', 'Family-style', 'Cash only'],
      featuresRu: ['Без брони', 'Быстрая смена столов', 'Семейный стиль', 'Только наличные'],
      popular: ['Wonton Noodle Soup', 'Beef Chow Fun', 'Char Siu'],
      popularRu: ['Суп с вонтонами', 'Говядина чоу-фан', 'Чар-сиу'],
      menu: [
        { name: 'Wonton Noodle Soup', nameRu: 'Суп с вонтонами', price: 12, category: 'Noodles', description: 'Shrimp & pork wontons, egg noodles, broth' },
        { name: 'Beef Chow Fun', nameRu: 'Говядина чоу-фан', price: 16, category: 'Noodles', description: 'Wide rice noodles, wok-seared beef' },
        { name: 'Char Siu Pork', nameRu: 'Свинина Чар-сиу', price: 15, category: 'Mains', description: 'Honey-roasted BBQ pork with steamed rice' },
        { name: 'Szechuan Mapo Tofu', nameRu: 'Сычуаньский мапо-тофу', price: 13, category: 'Mains', description: 'Silken tofu in spicy minced pork sauce' },
        { name: 'Egg Custard Bun (3)', nameRu: 'Булочки с яичным кремом (3)', price: 7, category: 'Desserts', description: 'Steamed buns with molten sweet custard' }
      ]
    }
    ,
    {
      id: 21,
      name: 'Dumpling Empress',
      nameRu: 'Императрица Пельменей',
      cuisine: 'chinese',
      rating: 4.7,
      reviews: 289,
      price: '$$',
      priceRange: '$12-28',
      address: '54 Silk Road',
      hours: '11:00 - 21:30',
      phone: '+1 (555) 333-2211',
      image: 'images/Dumpling.jpg',
      description: 'All-dumpling specialist with glass-walled kitchen. Watch artisans fold by hand. Boiled, steamed, pan-fried — 18 varieties of dumplings.',
      descriptionRu: 'Специализированный дамплинг-бар со стеклянной кухней. 18 видов пельменей ручной лепки.',
      features: ['Open kitchen', 'Vegetarian', 'Frozen to-go', 'Small plates'],
      featuresRu: ['Открытая кухня', 'Вегетарианское', 'Замороженные навынос', 'Маленькие порции'],
      popular: ['Pork & Chive Dumplings', 'Xiao Long Bao', 'Shrimp Har Gow'],
      popularRu: ['Пельмени со свининой', 'Сяо Лун Бао', 'Креветочные хар-гау'],
      menu: [
        { name: 'Steamed Pork & Chive', nameRu: 'Паровые пельмени со свининой', price: 13, category: 'Dumplings', description: '10 pieces, soy-vinegar dip' },
        { name: 'Pan-fried Chicken', nameRu: 'Жареные пельмени с курицей', price: 14, category: 'Dumplings', description: 'Crispy bottom, juicy ginger-chicken filling' },
        { name: 'Xiao Long Bao', nameRu: 'Сяо Лун Бао', price: 14, category: 'Dumplings', description: '8 soup dumplings, pork & crab' },
        { name: 'Vegetable Potstickers', nameRu: 'Овощные потстикеры', price: 12, category: 'Dumplings', description: 'Mushroom, cabbage, glass noodle' },
        { name: 'Red Bean Bao', nameRu: 'Булочки с красной фасолью', price: 8, category: 'Desserts', description: 'Sweet steamed buns with red bean paste' }
      ]
    }
    ,
    {
      id: 22,
      name: 'La Patisserie',
      nameRu: 'Кондитерская',
      cuisine: 'french',
      rating: 4.8,
      reviews: 167,
      price: '$$',
      priceRange: '$5-18',
      address: '3 Croissant Lane',
      hours: '07:00 - 19:00',
      phone: '+1 (555) 777-0011',
      image: 'images/La-Patisserie.jpg',
      description: 'Artisan French bakery and patisserie. Viennoiserie baked at dawn, delicate entremets, and the best croissant in town — awarded three years running.',
      descriptionRu: 'Ремесленная французская пекарня. Венская выпечка на рассвете, изысканные антреме и лучший круассан в городе.',
      features: ['Bakery', 'Breakfast', 'Takeaway', 'Award-winning'],
      featuresRu: ['Пекарня', 'Завтрак', 'Навынос', 'Отмеченная наградами'],
      popular: ['Butter Croissant', 'Almond Pain au Chocolat', 'Lemon Tart'],
      popularRu: ['Сливочный круассан', 'Миндальный пэн-о-шокола', 'Лимонный тарт'],
      menu: [
        { name: 'Butter Croissant', nameRu: 'Сливочный круассан', price: 5, category: 'Viennoiserie', description: '84-layer lamination, French AOP butter' },
        { name: 'Pain au Chocolat', nameRu: 'Пэн-о-шокола', price: 6, category: 'Viennoiserie', description: 'Double chocolate batons in flaky dough' },
        { name: 'Lemon Meringue Tart', nameRu: 'Лимонный меренговый тарт', price: 8, category: 'Patisserie', description: 'Tangy lemon curd, torched Italian meringue' },
        { name: 'Éclair', nameRu: 'Эклер', price: 7, category: 'Patisserie', description: 'Choux pastry, vanilla cream, chocolate glaze' },
        { name: 'Quiche Lorraine', nameRu: 'Киш Лорен', price: 11, category: 'Savory', description: 'Smoked bacon, gruyère, custard in shortcrust' }
      ]
    }
    ,
    {
      id: 23,
      name: 'Chez Marc',
      nameRu: 'У Марка',
      cuisine: 'french',
      rating: 4.6,
      reviews: 143,
      price: '$$$$',
      priceRange: '$70-130',
      address: '9 Michelin Court',
      hours: '18:00 - 23:00, Tue-Sat',
      phone: '+1 (555) 222-7788',
      image: 'images/Chez-Marc.jpg',
      description: 'Intimate fine dining with a weekly changing 7-course tasting menu. Locally sourced ingredients, meticulous technique, and an award-winning wine cellar.',
      descriptionRu: 'Изысканный ресторан с еженедельно меняющимся дегустационным меню из 7 блюд. Локальные продукты и премиальная винная карта.',
      features: ['Tasting menu', 'Wine cellar', 'Romantic', 'Michelin-starred'],
      featuresRu: ['Дегустационное меню', 'Винный погреб', 'Романтика', 'Звезда Мишлен'],
      popular: ['7-Course Tasting', 'Foie Gras Torchon', 'Wine Pairing'],
      popularRu: ['Дегустация из 7 блюд', 'Фуа-гра торшон', 'Винное сопровождение'],
      menu: [
        { name: '7-Course Tasting', nameRu: 'Дегустация из 7 блюд', price: 120, category: 'Tasting', description: 'Seasonal menu, changes weekly' },
        { name: 'Foie Gras Torchon', nameRu: 'Фуа-гра торшон', price: 32, category: 'Starters', description: 'Brioche, fig compote, fleur de sel' },
        { name: 'Lobster Bisque', nameRu: 'Биск из лобстера', price: 26, category: 'Starters', description: 'Cognac cream, tarragon oil' },
        { name: 'Canard à l\'Orange', nameRu: 'Утка с апельсином', price: 48, category: 'Mains', description: 'Duck breast, Grand Marnier sauce' },
        { name: 'Soufflé au Chocolat', nameRu: 'Шоколадное суфле', price: 22, category: 'Desserts', description: 'Rich chocolate, vanilla crème anglaise' }
      ]
    }
    ,
    {
      id: 24,
      name: 'The Roastery',
      nameRu: 'Обжарочная',
      cuisine: 'cafe',
      rating: 4.6,
      reviews: 534,
      price: '$$',
      priceRange: '$4-16',
      address: '78 Bean Street',
      hours: '06:30 - 20:00',
      phone: '+1 (555) 111-9900',
      image: 'images/The-Roastery.jpeg',
      description: 'Specialty coffee roastery and tasting room. Single-origin pour-overs, house-roasted beans, and a quiet space for coffee lovers.',
      descriptionRu: 'Спешелти-кофейня и дегустационный зал. Пуроверы из редких сортов, собственноручно обжаренные зёрна.',
      features: ['Specialty coffee', 'Beans for sale', 'Laptop-friendly', 'Quiet'],
      featuresRu: ['Спешелти кофе', 'Зёрна на продажу', 'Можно с ноутбуком', 'Тихо'],
      popular: ['Ethiopian Pour-over', 'Cold Brew', 'Cinnamon Bun'],
      popularRu: ['Эфиопский пуровер', 'Колд-брю', 'Булочка с корицей'],
      menu: [
        { name: 'Single Origin Pour-over', nameRu: 'Моносортовой пуровер', price: 6, category: 'Coffee', description: 'Rotating selection, brewed to order' },
        { name: 'Nitro Cold Brew', nameRu: 'Нитро-колд-брю', price: 7, category: 'Coffee', description: 'Smooth, creamy, infused with nitrogen' },
        { name: 'Flat White', nameRu: 'Флэт-уайт', price: 5, category: 'Coffee', description: 'Double ristretto, microfoam milk' },
        { name: 'Cinnamon Bun', nameRu: 'Булочка с корицей', price: 6, category: 'Pastry', description: 'Fresh baked, cream cheese frosting' },
        { name: 'Avocado Smash', nameRu: 'Авокадо-смэш', price: 13, category: 'Food', description: 'Sourdough, feta, chili flakes, lime' }
      ]
    }
    ,
    {
      id: 25,
      name: 'Bubble & Tea House',
      nameRu: 'Бабл & Чай',
      cuisine: 'cafe',
      rating: 4.4,
      reviews: 345,
      price: '$',
      priceRange: '$4-12',
      address: '31 Jasmine Avenue',
      hours: '10:00 - 22:00',
      phone: '+1 (555) 666-1122',
      image: 'images/Bubble-Tea-House.jpg',
      description: 'Bubble tea and Asian dessert cafe. Freshly brewed teas, chewy boba, and Instagram-worthy desserts. Student hangout with board games.',
      descriptionRu: 'Бабл-чай и азиатские десерты. Свежезаваренный чай, жевательные шарики боба и фото-десерты.',
      features: ['Boba tea', 'Desserts', 'Board games', 'Student hangout'],
      featuresRu: ['Бабл-чай', 'Десерты', 'Настольные игры', 'Студенческая тусовка'],
      popular: ['Brown Sugar Milk Tea', 'Mango Pomelo Sago', 'Matcha Waffle'],
      popularRu: ['Молочный чай с коричневым сахаром', 'Манго-помело-саго', 'Матча-вафля'],
      menu: [
        { name: 'Brown Sugar Boba Milk', nameRu: 'Молочный чай с коричневым сахаром', price: 6.5, category: 'Milk Tea', description: 'Caramelized brown sugar, fresh milk, tapioca' },
        { name: 'Mango Pomelo Sago', nameRu: 'Манго-помело-саго', price: 8, category: 'Dessert', description: 'Creamy mango, pomelo pulp, sago pearls' },
        { name: 'Matcha Waffle', nameRu: 'Матча-вафля', price: 9, category: 'Dessert', description: 'Crispy bubble waffle, matcha ice cream' },
        { name: 'Taro Latte', nameRu: 'Таро-латте', price: 7, category: 'Specialty', description: 'Creamy taro, coconut milk, no caffeine' },
        { name: 'Spring Rolls (4)', nameRu: 'Спринг-роллы (4)', price: 6, category: 'Snacks', description: 'Crispy veggie rolls, sweet chili dip' }
      ]
    }
    ,
    {
      id: 26,
      name: 'Oyster Bar & Grill',
      nameRu: 'Устричный Бар',
      cuisine: 'seafood',
      rating: 4.5,
      reviews: 198,
      price: '$$$',
      priceRange: '$40-80',
      address: '15 Harbor Street',
      hours: '16:00 - 23:00',
      phone: '+1 (555) 888-4455',
      image: 'images/Oyster-Bar-Grill.jpg',
      description: 'Classic oyster bar with daily catch. Dollar oyster happy hour, lobster rolls, and chilled seafood towers. Nautical decor, lively atmosphere.',
      descriptionRu: 'Классический устричный бар с дневным уловом. Счастливые часы, лобстер-роллы и башни из морепродуктов.',
      features: ['Happy hour', 'Raw bar', 'Seafood tower', 'Nautical vibe'],
      featuresRu: ['Счастливые часы', 'Сырой бар', 'Башня морепродуктов', 'Морская атмосфера'],
      popular: ['Oyster Happy Hour', 'Lobster Roll', 'Clam Chowder'],
      popularRu: ['Счастливый час с устрицами', 'Лобстер-ролл', 'Клэм-чаудер'],
      menu: [
        { name: 'Oyster Happy Hour (6)', nameRu: 'Устрицы счастливый час (6)', price: 12, category: 'Raw Bar', description: 'Chef selection, mignonette, lemon' },
        { name: 'Seafood Tower', nameRu: 'Башня морепродуктов', price: 65, category: 'Raw Bar', description: 'Oysters, clams, shrimp, lobster, crab' },
        { name: 'Lobster Roll', nameRu: 'Лобстер-ролл', price: 32, category: 'Mains', description: 'Butter-toasted brioche, mayo or butter' },
        { name: 'Clam Chowder', nameRu: 'Клэм-чаудер', price: 14, category: 'Starters', description: 'New England style, bacon, oyster crackers' },
        { name: 'Fish & Chips', nameRu: 'Фиш-н-чипс', price: 22, category: 'Mains', description: 'Beer-battered haddock, tartar, slaw' }
      ]
    }
    ,
    {
      id: 27,
      name: 'Pesca Fresca',
      nameRu: 'Песка Фреска',
      cuisine: 'seafood',
      rating: 4.4,
      reviews: 156,
      price: '$$',
      priceRange: '$20-40',
      address: '50 Dockside Road',
      hours: '11:00 - 22:00',
      phone: '+1 (555) 444-6677',
      image: 'images/Pesca-Fresca.jpg',
      description: 'Casual seafood grill by the docks. Fish tacos, grilled catch of the day, and ceviche bar. All seafood traceable to sustainable fisheries.',
      descriptionRu: 'Неформальный рыбный гриль у доков. Рыбные тако, улов дня на гриле и севиче-бар. Экологичный вылов.',
      features: ['Sustainable', 'Casual', 'Fish tacos', 'Outdoor deck'],
      featuresRu: ['Экологичный вылов', 'Без формальностей', 'Рыбные тако', 'Уличная терраса'],
      popular: ['Fish Tacos', 'Grilled Mahi-Mahi', 'Shrimp Ceviche'],
      popularRu: ['Рыбные тако', 'Махи-махи на гриле', 'Креветочное севиче'],
      menu: [
        { name: 'Shrimp Ceviche', nameRu: 'Креветочное севиче', price: 15, category: 'Starters', description: 'Lime-cured shrimp, avocado, tortilla chips' },
        { name: 'Fish Tacos (3)', nameRu: 'Рыбные тако (3)', price: 16, category: 'Mains', description: 'Baja-style battered cod, slaw, chipotle mayo' },
        { name: 'Grilled Mahi-Mahi', nameRu: 'Махи-махи на гриле', price: 24, category: 'Mains', description: 'Charcoal-grilled with mango salsa & rice' },
        { name: 'Calamari Fritti', nameRu: 'Жареные кальмары', price: 13, category: 'Starters', description: 'Crispy squid, marinara, lemon aioli' },
        { name: 'Key Lime Parfait', nameRu: 'Лаймовый парфе', price: 9, category: 'Desserts', description: 'Tangy key lime cream, graham crumble' }
      ]
    }
    ,
    {
      id: 28,
      name: 'Tandoori Nights',
      nameRu: 'Ночи Тандура',
      cuisine: 'indian',
      rating: 4.5,
      reviews: 267,
      price: '$$',
      priceRange: '$18-35',
      address: '82 Masala Road',
      hours: '11:30 - 23:00',
      phone: '+1 (555) 999-5566',
      image: 'images/Tandoori-Nights.jpg',
      description: 'North Indian cuisine with a dramatic open tandoor kitchen. Sizzling kebabs, fragrant biryanis, and rich curries. Live sitar on weekends.',
      descriptionRu: 'Северо-индийская кухня с театральной кухней тандур. Шкварчащие кебабы, ароматные бирьяни и живые ситары.',
      features: ['Tandoor show', 'Live music', 'Banquet menu', 'Delivery'],
      featuresRu: ['Шоу тандур', 'Живая музыка', 'Банкетное меню', 'Доставка'],
      popular: ['Chicken Tikka', 'Lamb Biryani', 'Palak Paneer'],
      popularRu: ['Цыплёнок тикка', 'Бирьяни с бараниной', 'Палак панир'],
      menu: [
        { name: 'Chicken Tikka', nameRu: 'Цыплёнок тикка', price: 16, category: 'Tandoor', description: 'Yogurt-marinated, clay oven charred' },
        { name: 'Seekh Kebab', nameRu: 'Сикх-кебаб', price: 15, category: 'Tandoor', description: 'Spiced minced lamb skewers' },
        { name: 'Lamb Biryani', nameRu: 'Бирьяни с бараниной', price: 24, category: 'Mains', description: 'Aromatic rice, tender lamb, saffron, raita' },
        { name: 'Palak Paneer', nameRu: 'Палак панир', price: 17, category: 'Mains', description: 'Creamed spinach, fresh paneer cubes' },
        { name: 'Kulfi', nameRu: 'Кульфи', price: 8, category: 'Desserts', description: 'Frozen cardamom ice cream with pistachios' }
      ]
    }
    ,
    {
      id: 29,
      name: 'Curry Leaf Garden',
      nameRu: 'Сад Листьев Карри',
      cuisine: 'indian',
      rating: 4.3,
      reviews: 189,
      price: '$$',
      priceRange: '$15-30',
      address: '17 Temple Street',
      hours: '11:00 - 22:30',
      phone: '+1 (555) 333-7788',
      image: 'images/the-curry-leaf.jpg',
      description: 'South Indian vegetarian kitchen. Paper-thin dosas, idli, and uthappam from the griddle. Coconut chutneys ground fresh daily. Fully vegetarian.',
      descriptionRu: 'Южно-индийская вегетарианская кухня. Тончайшие досы, идли и уттапам со сковороды. Полностью вегетарианское меню.',
      features: ['Vegetarian', 'Dosa bar', 'Family-friendly', 'Cheap eats'],
      featuresRu: ['Вегетарианское', 'Доса-бар', 'Для всей семьи', 'Дёшево'],
      popular: ['Masala Dosa', 'Idli Sambar', 'Filter Coffee'],
      popularRu: ['Масала-доса', 'Идли-самбар', 'Фильтр-кофе'],
      menu: [
        { name: 'Masala Dosa', nameRu: 'Масала-доса', price: 14, category: 'Dosa', description: 'Crispy rice crepe, spiced potato filling' },
        { name: 'Idli Sambar (4)', nameRu: 'Идли-самбар (4)', price: 11, category: 'Breakfast', description: 'Steamed rice cakes, lentil stew' },
        { name: 'Medu Vada (3)', nameRu: 'Меду Вада (3)', price: 9, category: 'Breakfast', description: 'Crispy lentil doughnuts, coconut chutney' },
        { name: 'Vegetable Thali', nameRu: 'Овощной тхали', price: 19, category: 'Thali', description: 'Complete meal: rice, bread, 3 curries, dessert' },
        { name: 'Filter Coffee', nameRu: 'Фильтр-кофе', price: 5, category: 'Drinks', description: 'Traditional South Indian drip coffee' }
      ]
    }
    ,
    {
      id: 30,
      name: 'Caspian Grill',
      nameRu: 'Каспийский Гриль',
      cuisine: 'mediterranean',
      rating: 4.5,
      reviews: 134,
      price: '$$$',
      priceRange: '$30-55',
      address: '40 Olive Grove',
      hours: '12:00 - 23:00',
      phone: '+1 (555) 888-2233',
      image: 'images/Caspian-Grill.jpg',
      description: 'Persian and Mediterranean fusion. Saffron rice, slow-cooked stews, and charcoal-grilled kebabs. Elegant setting with traditional hospitality.',
      descriptionRu: 'Персидская и средиземноморская кухня. Шафрановый рис, томлёные рагу и кебабы на углях.',
      features: ['Kebab grill', 'Saffron rice', 'Elegant', 'Private dining'],
      featuresRu: ['Кебаб-гриль', 'Шафрановый рис', 'Элегантно', 'Отдельный зал'],
      popular: ['Lamb Shank', 'Koobideh Kebab', 'Saffron Ice Cream'],
      popularRu: ['Баранья ножка', 'Кубиде-кебаб', 'Шафрановое мороженое'],
      menu: [
        { name: 'Kashk-e Bademjan', nameRu: 'Кашк-э-Бадемджан', price: 13, category: 'Starters', description: 'Eggplant dip, caramelized onion, whey' },
        { name: 'Lamb Shank', nameRu: 'Баранья ножка', price: 32, category: 'Mains', description: 'Slow-braised in saffron-tomato broth' },
        { name: 'Koobideh Kebab', nameRu: 'Кубиде-кебаб', price: 24, category: 'Mains', description: 'Two skewers of seasoned minced lamb' },
        { name: 'Zereshk Polo', nameRu: 'Зерешк Поло', price: 22, category: 'Mains', description: 'Barberry rice, saffron chicken' },
        { name: 'Bastani Sonnati', nameRu: 'Бастани Соннати', price: 9, category: 'Desserts', description: 'Saffron ice cream, rosewater, pistachios' }
      ]
    }
    ,
    {
      id: 31,
      name: 'Olea Street Food',
      nameRu: 'Олеа Стрит-фуд',
      cuisine: 'mediterranean',
      rating: 4.4,
      reviews: 278,
      price: '$',
      priceRange: '$7-16',
      address: '56 Market Street',
      hours: '10:00 - 22:00',
      phone: '+1 (555) 777-5566',
      image: 'images/olea-restaurant.jpg',
      description: 'Mediterranean street food stall. Shawarma spinning on the spit, falafel fried to order, and fresh pita from the oven. Quick, fresh, affordable.',
      descriptionRu: 'Средиземноморский стрит-фуд. Шаурма с вертела, фалафель по заказу и свежая пита из печи.',
      features: ['Street food', 'Quick service', 'Halal', 'Vegan options'],
      featuresRu: ['Стрит-фуд', 'Быстрое обслуживание', 'Халяль', 'Веганские блюда'],
      popular: ['Chicken Shawarma', 'Falafel Wrap', 'Hummus Bowl'],
      popularRu: ['Шаурма с курицей', 'Фалафель-ролл', 'Хумус-боул'],
      menu: [
        { name: 'Chicken Shawarma', nameRu: 'Шаурма с курицей', price: 11, category: 'Wraps', description: 'Spit-roasted, garlic toum, pickles, pita' },
        { name: 'Falafel Wrap', nameRu: 'Фалафель-ролл', price: 9, category: 'Wraps', description: 'Crispy falafel, tahini, Israeli salad' },
        { name: 'Hummus Bowl', nameRu: 'Хумус-боул', price: 12, category: 'Bowls', description: 'Creamy hummus, lamb shawarma, pine nuts' },
        { name: 'Sabich', nameRu: 'Сабих', price: 10, category: 'Wraps', description: 'Fried eggplant, hard-boiled egg, amba sauce' },
        { name: 'Baklava Box (4)', nameRu: 'Пахлава-бокс (4)', price: 7, category: 'Desserts', description: 'Assorted baklava with pistachios & walnuts' }
      ]
    }
    ,
    {
      id: 32,
      name: 'Bangkok 88',
      nameRu: 'Бангкок 88',
      cuisine: 'thai',
      rating: 4.3,
      reviews: 201,
      price: '$$',
      priceRange: '$12-25',
      address: '88 Sukhumvit Road',
      hours: '11:30 - 22:30',
      phone: '+1 (555) 555-3344',
      image: 'images/Bangkok 88.jpg',
      description: 'Bangkok street food favorites. Boat noodles, crispy pork belly, and papaya salad pounded in a traditional mortar. Loud, fast, and deliciously messy.',
      descriptionRu: 'Бангкокская уличная еда. Лодочная лапша, хрустящая свиная грудинка и салат из папайи.',
      features: ['Street food', 'Boat noodles', 'Spicy', 'Quick service'],
      featuresRu: ['Стрит-фуд', 'Лодочная лапша', 'Острое', 'Быстрое обслуживание'],
      popular: ['Boat Noodles', 'Crispy Pork Belly', 'Papaya Salad'],
      popularRu: ['Лодочная лапша', 'Хрустящая свиная грудинка', 'Салат из папайи'],
      menu: [
        { name: 'Boat Noodles', nameRu: 'Лодочная лапша', price: 12, category: 'Noodles', description: 'Rich dark broth, pork, bean sprouts' },
        { name: 'Crispy Pork Belly', nameRu: 'Хрустящая свиная грудинка', price: 16, category: 'Mains', description: 'Twice-cooked with chili-garlic sauce' },
        { name: 'Som Tum', nameRu: 'Сом Тум', price: 10, category: 'Salad', description: 'Green papaya, lime, fish sauce, peanuts' },
        { name: 'Pad Kra Pao', nameRu: 'Пад Кра Пао', price: 15, category: 'Mains', description: 'Holy basil stir-fry with minced pork, fried egg' },
        { name: 'Mango Sticky Rice', nameRu: 'Манго с клейким рисом', price: 9, category: 'Desserts', description: 'Ripe mango, coconut cream, warm sticky rice' }
      ]
    }
    ,
    {
      id: 33,
      name: 'Thai Terrace',
      nameRu: 'Тайская Терраса',
      cuisine: 'thai',
      rating: 4.6,
      reviews: 156,
      price: '$$$',
      priceRange: '$30-55',
      address: '22 Orchid Boulevard',
      hours: '17:00 - 23:00',
      phone: '+1 (555) 666-9900',
      image: 'images/Thai-Terrace.jpeg',
      description: 'Elegant Thai dining on a lantern-lit terrace. Royal Thai cuisine with intricate presentation. Signature curries served in young coconuts.',
      descriptionRu: 'Элегантная тайская кухня на террасе с фонариками. Королевские блюда с изысканной подачей.',
      features: ['Terrace dining', 'Royal Thai', 'Chili scale', 'Cocktails'],
      featuresRu: ['Терраса', 'Королевская тайская кухня', 'Шкала остроты', 'Коктейли'],
      popular: ['Massaman Curry', 'Whole Fish Chili Lime', 'Coconut Ice Cream'],
      popularRu: ['Массаман-карри', 'Целая рыба чили-лайм', 'Кокосовое мороженое'],
      menu: [
        { name: 'Mieng Kham', nameRu: 'Миенг Кхам', price: 14, category: 'Starters', description: 'Betel leaf wraps with coconut, lime, ginger' },
        { name: 'Massaman Curry', nameRu: 'Массаман-карри', price: 26, category: 'Mains', description: 'Slow-braised beef, potatoes, peanuts' },
        { name: 'Whole Fish Chili Lime', nameRu: 'Целая рыба чили-лайм', price: 38, category: 'Mains', description: 'Steamed sea bass, spicy lime broth' },
        { name: 'Soft Shell Crab', nameRu: 'Мягкопанцирный краб', price: 28, category: 'Mains', description: 'Crispy crab with green mango salad' },
        { name: 'Coconut Ice Cream', nameRu: 'Кокосовое мороженое', price: 11, category: 'Desserts', description: 'Served in coconut shell with tropical toppings' }
      ]
    }
    ,
    {
      id: 34,
      name: 'Blue Smoke BBQ',
      nameRu: 'Голубой Дым BBQ',
      cuisine: 'bbq',
      rating: 4.6,
      reviews: 312,
      price: '$$',
      priceRange: '$18-38',
      address: '95 Hickory Hollow',
      hours: '11:30 - 22:00',
      phone: '+1 (555) 444-3344',
      image: 'images/Blue-Smoke.jpg',
      description: 'Award-winning competition BBQ team turned restaurant. Kansas City-style ribs, championship brisket, and sides made from scratch. Line forms early.',
      descriptionRu: 'Команда-чемпион BBQ-соревнований открыла ресторан. Рёбрышки по-канзасски, чемпионская грудинка и гарниры с нуля.',
      features: ['Competition team', 'Kansas City style', 'Patio', 'Family packs'],
      featuresRu: ['Команда-чемпион', 'Канзасский стиль', 'Патио', 'Семейные наборы'],
      popular: ['Burnt Ends', 'St. Louis Ribs', 'Banana Pudding'],
      popularRu: ['Обгоревшие кончики', 'Рёбрышки Сент-Луис', 'Банановый пудинг'],
      menu: [
        { name: 'Burnt Ends', nameRu: 'Обгоревшие кончики', price: 18, category: 'Specials', description: 'Crispy bark, melt-in-your-mouth brisket tips' },
        { name: 'St. Louis Ribs', nameRu: 'Рёбрышки Сент-Луис', price: 26, category: 'Mains', description: 'Full rack, dry-rubbed, smoked 6 hours' },
        { name: 'Sausage Plate', nameRu: 'Тарелка колбасок', price: 16, category: 'Mains', description: 'House-made jalapeño cheddar sausage' },
        { name: 'Collard Greens', nameRu: 'Листовая капуста', price: 7, category: 'Sides', description: 'Slow-cooked with smoked turkey' },
        { name: 'Banana Pudding', nameRu: 'Банановый пудинг', price: 8, category: 'Desserts', description: 'Layered with Nilla wafers, whipped cream' }
      ]
    }
    ,
    {
      id: 35,
      name: 'Pig & Pit',
      nameRu: 'Свинья и Яма',
      cuisine: 'bbq',
      rating: 4.2,
      reviews: 178,
      price: '$$',
      priceRange: '$15-35',
      address: '12 Ironwood Drive',
      hours: '12:00 - 00:00',
      phone: '+1 (555) 999-7788',
      image: 'images/Pig-Pit.jpg',
      description: 'Carolina whole-hog BBQ joint. Vinegar-based sauce, wood-fired pits, and the best pulled pork in the county. Outdoor picnic tables, live bluegrass.',
      descriptionRu: 'Каролинское BBQ из цельной туши. Уксусный соус, дровяные печи и лучшая рваная свинина в округе.',
      features: ['Whole hog', 'Carolina style', 'Picnic tables', 'Live music'],
      featuresRu: ['Целая туша', 'Каролинский стиль', 'Пикниковые столы', 'Живая музыка'],
      popular: ['Whole Hog Plate', 'Pulled Pork Sandwich', 'Hush Puppies'],
      popularRu: ['Тарелка из целой туши', 'Сэндвич с рваной свининой', 'Хаш-паппис'],
      menu: [
        { name: 'Whole Hog Plate', nameRu: 'Тарелка из целой туши', price: 19, category: 'Mains', description: 'Mixed cuts, crackling, classic vinegar sauce' },
        { name: 'Pulled Pork Sandwich', nameRu: 'Сэндвич с рваной свининой', price: 12, category: 'Sandwiches', description: 'Mustard slaw, brioche bun' },
        { name: 'Smoked Chicken', nameRu: 'Копчёная курица', price: 15, category: 'Mains', description: 'Half bird, Alabama white sauce' },
        { name: 'Hush Puppies', nameRu: 'Хаш-паппис', price: 6, category: 'Sides', description: 'Crispy cornmeal fritters, honey butter' },
        { name: 'Peach Cobbler', nameRu: 'Персиковый кобблер', price: 9, category: 'Desserts', description: 'Hot cobbler with vanilla ice cream' }
      ]
    }
    ,
    {
      id: 36,
      name: 'Route 66 Roadhouse',
      nameRu: 'Придорожный 66',
      cuisine: 'american',
      rating: 4.3,
      reviews: 567,
      price: '$$',
      priceRange: '$12-28',
      address: '66 Highway Strip',
      hours: '07:00 - 23:00',
      phone: '+1 (555) 222-3344',
      image: 'images/Route-66-Roadhouse.jpg',
      description: 'Classic American roadhouse diner. All-day breakfast, stacked pancakes, thick milkshakes, and proper pie. Vintage jukebox, red vinyl booths.',
      descriptionRu: 'Классический американский дайнер. Завтраки весь день, высокие панкейки, густые молочные коктейли и пироги.',
      features: ['All-day breakfast', 'Milkshakes', 'Jukebox', 'Retro vibes'],
      featuresRu: ['Завтраки весь день', 'Молочные коктейли', 'Музыкальный автомат', 'Ретро-атмосфера'],
      popular: ['Stacked Pancakes', 'Patty Melt', 'Cherry Pie'],
      popularRu: ['Стопка панкейков', 'Патти-мелт', 'Вишнёвый пирог'],
      menu: [
        { name: 'Stacked Pancakes', nameRu: 'Стопка панкейков', price: 12, category: 'Breakfast', description: 'Buttermilk stack, maple syrup, berries' },
        { name: 'Patty Melt', nameRu: 'Патти-мелт', price: 15, category: 'Burgers', description: 'Rye bread, Swiss cheese, grilled onions' },
        { name: 'Chicken & Waffles', nameRu: 'Курица и вафли', price: 17, category: 'Mains', description: 'Crispy fried chicken, Belgian waffle, hot honey' },
        { name: 'Chocolate Milkshake', nameRu: 'Шоколадный милкшейк', price: 8, category: 'Drinks', description: 'Thick, hand-spun, whipped cream' },
        { name: 'Cherry Pie', nameRu: 'Вишнёвый пирог', price: 9, category: 'Desserts', description: 'Lattice-top, served warm à la mode' }
      ]
    }
  ],

  bookings: [
    {
      id: 101,
      restaurantId: 1,
      restaurantName: 'La Trattoria Bella',
      date: 'May 28, 2026',
      time: '19:30',
      guests: 4,
      status: 'confirmed',
      special: 'Window table, anniversary celebration'
    },
    {
      id: 102,
      restaurantId: 5,
      restaurantName: 'Ocean & Co.',
      date: 'Jun 2, 2026',
      time: '20:00',
      guests: 2,
      status: 'pending',
      special: 'Birthday'
    },
    {
      id: 103,
      restaurantId: 3,
      restaurantName: 'El Sol Kitchen',
      date: 'May 25, 2026',
      time: '18:00',
      guests: 6,
      status: 'completed',
      special: ''
    }
  ],

  favorites: [1, 2, 4],

  chats: [
    {
      name: "La Trattoria Bella",
      lastMsg: 'Your table for 4 is confirmed!',
      time: '12:30',
      unread: 1,
      icon: '🍝'
    },
    {
      name: "Ocean & Co.",
      lastMsg: 'We received your booking request',
      time: 'Yesterday',
      unread: 0,
      icon: '🦞'
    },
    {
      name: "Le Petit Cafe",
      lastMsg: 'New seasonal menu is out!',
      time: 'Yesterday',
      unread: 2,
      icon: '☕'
    },
    {
      name: "Foodie Support",
      lastMsg: 'How can we help you?',
      time: 'Mon',
      unread: 0,
      icon: '💬'
    }
  ]
};

let history = ['home'];

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
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('foodie_appOpen', 'true');
  updateBookingBadge();
  updateChatBadge();
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = ['home'];
  localStorage.setItem('foodie_appOpen', 'false');
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }

  history.push(pageName);
  updateHeader(pageName);
  renderContent(pageName);

  localStorage.setItem('foodie_lastPage', pageName);
  localStorage.setItem('foodie_history', JSON.stringify(history));

  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prevPage = history[history.length - 1];

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
    localStorage.setItem('foodie_history', JSON.stringify(history));
    document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
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
        history = JSON.parse(savedHistory);
        if (history.length > 0) {
          updateHeader(lastPage);
          renderContent(lastPage);
          document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
        }
      } catch (e) {
        showPage('home');
      }
    } else {
      showPage('home');
    }
  }
});
