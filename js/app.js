// Foodie — Restaurant Finder Demo App

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
      features: ['Outdoor seating', 'Wine bar', 'Private dining', 'Vegetarian options'],
      popular: ['Truffle Risotto', 'Margherita Pizza', 'Tiramisu'],
      menu: [
        { name: 'Bruschetta Classica', price: 12, category: 'Starters', description: 'Toasted bread with fresh tomatoes, basil & garlic' },
        { name: 'Margherita Pizza', price: 18, category: 'Mains', description: 'San Marzano tomatoes, mozzarella, fresh basil' },
        { name: 'Truffle Risotto', price: 28, category: 'Mains', description: 'Carnaroli rice with black truffle & parmesan' },
        { name: 'Osso Buco', price: 34, category: 'Mains', description: 'Braised veal shank with gremolata' },
        { name: 'Tiramisu', price: 14, category: 'Desserts', description: 'Classic coffee-soaked ladyfingers with mascarpone' },
        { name: 'Panna Cotta', price: 12, category: 'Desserts', description: 'Vanilla cream with berry compote' }
      ]
    },
    {
      id: 2,
      name: 'Sakura Garden',
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
      features: ['Omakase', 'Sake bar', 'Garden terrace', 'Private tatami rooms'],
      popular: ['Omakase Tasting', 'Salmon Sashimi', 'Matcha Tiramisu'],
      menu: [
        { name: 'Edamame', price: 8, category: 'Starters', description: 'Steamed soybeans with sea salt' },
        { name: 'Gyoza', price: 14, category: 'Starters', description: 'Pan-fried pork & vegetable dumplings' },
        { name: 'Omakase 10-piece', price: 85, category: 'Tasting', description: 'Chef selection of premium nigiri' },
        { name: 'Dragon Roll', price: 24, category: 'Mains', description: 'Eel, avocado, cucumber, unagi sauce' },
        { name: 'Matcha Tiramisu', price: 16, category: 'Desserts', description: 'Green tea layered dessert' }
      ]
    },
    {
      id: 3,
      name: 'El Sol Kitchen',
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
      features: ['Live music', 'Outdoor patio', 'Happy hour', 'Gluten-free options'],
      popular: ['Street Tacos', 'Tableside Guacamole', 'Churros'],
      menu: [
        { name: 'Guacamole & Chips', price: 12, category: 'Starters', description: 'Made fresh at your table' },
        { name: 'Queso Fundido', price: 14, category: 'Starters', description: 'Melted cheese with chorizo & tortillas' },
        { name: 'Street Tacos (3)', price: 16, category: 'Mains', description: 'Choice of carne asada, al pastor, or pollo' },
        { name: 'Enchiladas Verdes', price: 18, category: 'Mains', description: 'Chicken enchiladas with tomatillo sauce' },
        { name: 'Churros', price: 9, category: 'Desserts', description: 'Cinnamon sugar with chocolate dip' }
      ]
    },
    {
      id: 4,
      name: 'Le Petit Cafe',
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
      features: ['Free WiFi', 'Pet-friendly', 'Brunch menu', 'Outdoor seating'],
      popular: ['Avocado Toast', 'Flat White', 'Croissants'],
      menu: [
        { name: 'Flat White', price: 5, category: 'Coffee', description: 'Double ristretto with velvety milk' },
        { name: 'Matcha Latte', price: 6, category: 'Coffee', description: 'Ceremonial grade matcha' },
        { name: 'Avocado Toast', price: 14, category: 'Food', description: 'Sourdough, smashed avocado, poached egg' },
        { name: 'Croissant', price: 5, category: 'Bakery', description: 'Buttery, flaky French croissant' },
        { name: 'Banana Bread', price: 7, category: 'Bakery', description: 'House-made with walnuts' }
      ]
    },
    {
      id: 5,
      name: 'Ocean & Co.',
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
      features: ['Waterfront view', 'Oyster bar', 'Tasting menu', 'Wine pairing'],
      popular: ['Oyster Platter', 'Lobster Thermidor', 'Seared Tuna'],
      menu: [
        { name: 'Oyster Platter (6)', price: 24, category: 'Starters', description: 'Fresh shucked with mignonette' },
        { name: 'Tuna Tartare', price: 22, category: 'Starters', description: 'Sesame, avocado, wonton crisps' },
        { name: 'Lobster Thermidor', price: 68, category: 'Mains', description: 'Butter-poached with gruyere crust' },
        { name: 'Pan-Seared Halibut', price: 42, category: 'Mains', description: 'Lemon beurre blanc, asparagus' },
        { name: 'Key Lime Pie', price: 16, category: 'Desserts', description: 'Classic tangy with graham crust' }
      ]
    },
    {
      id: 6,
      name: 'Spice Route',
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
      features: ['Tandoor oven', 'Vegetarian menu', 'Lunch buffet', 'Takeaway'],
      popular: ['Butter Chicken', 'Lamb Vindaloo', 'Garlic Naan'],
      menu: [
        { name: 'Samosas (2)', price: 9, category: 'Starters', description: 'Crispy pastry with spiced potatoes' },
        { name: 'Butter Chicken', price: 22, category: 'Mains', description: 'Creamy tomato curry with tandoori chicken' },
        { name: 'Lamb Vindaloo', price: 24, category: 'Mains', description: 'Spicy Goan curry with tender lamb' },
        { name: 'Paneer Tikka Masala', price: 19, category: 'Mains', description: 'Grilled paneer in spiced tomato sauce' },
        { name: 'Garlic Naan', price: 5, category: 'Breads', description: 'Clay oven baked with garlic butter' },
        { name: 'Gulab Jamun', price: 8, category: 'Desserts', description: 'Milk dumplings in rose syrup' }
      ]
    },
    {
      id: 7,
      name: 'Burger Republic',
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
      features: ['Craft beer', 'Late night', 'Kids menu', 'Takeaway'],
      popular: ['Double Smash Burger', 'Truffle Fries', 'Oreo Shake'],
      menu: [
        { name: 'Smash Burger', price: 14, category: 'Burgers', description: 'Double patty, American cheese, special sauce' },
        { name: 'BBQ Bacon Burger', price: 17, category: 'Burgers', description: 'Smoked bacon, cheddar, onion rings' },
        { name: 'Truffle Fries', price: 9, category: 'Sides', description: 'Parmesan, truffle oil, garlic aioli' },
        { name: 'Chicken Wings', price: 13, category: 'Sides', description: 'Choice of buffalo or BBQ sauce' },
        { name: 'Oreo Milkshake', price: 8, category: 'Drinks', description: 'Thick shake with crushed Oreos' }
      ]
    },
    {
      id: 8,
      name: 'Green Lotus',
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
      features: ['Family-run', 'Vegan options', 'BYOB', 'Cozy atmosphere'],
      popular: ['Pad Thai', 'Green Curry', 'Mango Sticky Rice'],
      menu: [
        { name: 'Spring Rolls (4)', price: 8, category: 'Starters', description: 'Crispy vegetable rolls with sweet chili' },
        { name: 'Tom Yum Soup', price: 11, category: 'Starters', description: 'Hot & sour shrimp soup with lemongrass' },
        { name: 'Pad Thai', price: 17, category: 'Mains', description: 'Rice noodles with shrimp, tofu, peanuts' },
        { name: 'Green Curry', price: 19, category: 'Mains', description: 'Coconut curry with chicken and vegetables' },
        { name: 'Mango Sticky Rice', price: 10, category: 'Desserts', description: 'Sweet mango with coconut sticky rice' }
      ]
    },
    {
      id: 9,
      name: 'Bistro Parisien',
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
      features: ['Tasting menu', 'Wine pairing', 'Romantic', 'Outdoor terrace'],
      popular: ['French Onion Soup', 'Coq au Vin', 'Crème Brûlée'],
      menu: [
        { name: 'French Onion Soup', price: 14, category: 'Starters', description: 'Caramelized onions, gruyère, crusty bread' },
        { name: 'Escargots', price: 18, category: 'Starters', description: 'Burgundy snails with garlic butter & parsley' },
        { name: 'Coq au Vin', price: 32, category: 'Mains', description: 'Braised chicken in red wine with mushrooms' },
        { name: 'Steak Frites', price: 38, category: 'Mains', description: 'Pan-seared ribeye with béarnaise, crispy frites' },
        { name: 'Crème Brûlée', price: 13, category: 'Desserts', description: 'Classic vanilla custard with caramelized sugar' }
      ]
    },
    {
      id: 10,
      name: 'Dragon Palace',
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
      features: ['Dim sum', 'Private rooms', 'Large groups', 'Delivery'],
      popular: ['Peking Duck', 'Xiao Long Bao', 'Kung Pao Chicken'],
      menu: [
        { name: 'Har Gow (4)', price: 10, category: 'Dim Sum', description: 'Steamed shrimp dumplings with translucent wrapper' },
        { name: 'Xiao Long Bao (6)', price: 13, category: 'Dim Sum', description: 'Soup dumplings with pork & ginger' },
        { name: 'Peking Duck', price: 48, category: 'Mains', description: 'Crispy skin, pancakes, hoisin, serves 2' },
        { name: 'Kung Pao Chicken', price: 19, category: 'Mains', description: 'Wok-fried with peanuts, chili & Sichuan pepper' },
        { name: 'Egg Tarts (3)', price: 8, category: 'Desserts', description: 'Flaky pastry with silky egg custard' }
      ]
    },
    {
      id: 11,
      name: 'Azure Mediterranean',
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
      features: ['Rooftop dining', 'Mezze bar', 'Gluten-free', 'Vegetarian'],
      popular: ['Mezze Platter', 'Grilled Octopus', 'Baklava'],
      menu: [
        { name: 'Hummus & Pita', price: 10, category: 'Mezze', description: 'Creamy chickpea, tahini, olive oil, warm pita' },
        { name: 'Mezze Platter', price: 24, category: 'Mezze', description: 'Hummus, baba ganoush, falafel, dolmades, olives' },
        { name: 'Grilled Octopus', price: 28, category: 'Mains', description: 'Charcoal-grilled with lemon, oregano & capers' },
        { name: 'Lamb Kofta', price: 26, category: 'Mains', description: 'Spiced lamb skewers with tzatziki & rice' },
        { name: 'Baklava', price: 11, category: 'Desserts', description: 'Layers of phyllo, walnuts, honey syrup' }
      ]
    },
    {
      id: 12,
      name: 'Smoke & Barrel',
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
      features: ['Live blues', 'Bourbon bar', 'Outdoor yard', 'Large groups'],
      popular: ['Beef Brisket', 'Baby Back Ribs', 'Mac & Cheese'],
      menu: [
        { name: 'Smoked Wings', price: 14, category: 'Starters', description: 'Dry-rubbed, smoked, choice of sauce' },
        { name: 'Beef Brisket', price: 26, category: 'Mains', description: '14-hour smoked, peppery bark, 200g slice' },
        { name: 'Baby Back Ribs', price: 28, category: 'Mains', description: 'Full rack, fall-off-the-bone, house glaze' },
        { name: 'Pulled Pork', price: 22, category: 'Mains', description: 'Carolina-style with vinegar slaw & cornbread' },
        { name: 'Mac & Cheese', price: 9, category: 'Sides', description: 'Four-cheese blend, crispy breadcrumb top' }
      ]
    },
    {
      id: 13,
      name: 'Vino & Forno',
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
      features: ['Natural wine', 'Wood-fired oven', 'Late night', 'Pet-friendly'],
      popular: ['Margherita DOP', 'Diavola', 'Natural Wine Flight'],
      menu: [
        { name: 'Margherita DOP', price: 16, category: 'Pizza', description: 'San Marzano DOP, buffalo mozzarella, basil' },
        { name: 'Diavola', price: 19, category: 'Pizza', description: 'Spicy salami, nduja, chili honey' },
        { name: 'Tartufo', price: 22, category: 'Pizza', description: 'Mushroom cream, truffle oil, parmesan flakes' },
        { name: 'Burrata Salad', price: 15, category: 'Starters', description: 'Creamy burrata, heirloom tomatoes, balsamic' },
        { name: 'Natural Wine Flight', price: 22, category: 'Drinks', description: '3 glasses from our curated selection' }
      ]
    },
    {
      id: 14,
      name: 'Hop & Hearth',
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
      features: ['Craft beer', 'Brunch', 'Sports TV', 'Late night'],
      popular: ['Pub Burger', 'Fish & Chips', 'Pretzel Board'],
      menu: [
        { name: 'Pretzel Board', price: 15, category: 'Starters', description: 'Giant soft pretzel, beer cheese, mustard' },
        { name: 'Pub Burger', price: 17, category: 'Mains', description: 'House-ground patty, aged cheddar, bacon jam' },
        { name: 'Fish & Chips', price: 19, category: 'Mains', description: 'Beer-battered cod, triple-cooked chips, tartar' },
        { name: 'Wings (10)', price: 16, category: 'Sides', description: 'Choice of buffalo, BBQ, or gochujang glaze' },
        { name: 'Sticky Toffee Pudding', price: 11, category: 'Desserts', description: 'Warm date cake, toffee sauce, vanilla ice cream' }
      ]
    },
    {
      id: 15,
      name: 'Pasta & Co.',
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
      features: ['Handmade pasta', 'Express lunch', 'Takeaway', 'Counter seating'],
      popular: ['Cacio e Pepe', 'Pumpkin Ravioli', 'Pistachio Cannoli'],
      menu: [
        { name: 'Arancini', price: 10, category: 'Starters', description: 'Crispy risotto balls with mozzarella center' },
        { name: 'Cacio e Pepe', price: 16, category: 'Pasta', description: 'Pecorino, black pepper, tonnarelli' },
        { name: 'Pumpkin Ravioli', price: 19, category: 'Pasta', description: 'Sage butter, amaretti crumble' },
        { name: 'Linguine Vongole', price: 22, category: 'Pasta', description: 'Fresh clams, white wine, chili, garlic' },
        { name: 'Pistachio Cannoli', price: 10, category: 'Desserts', description: 'Sicilian ricotta-filled crispy pastry' }
      ]
    },
    {
      id: 16,
      name: 'Ramen Dojo',
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
      features: ['Counter dining', 'Quick service', 'Late night', 'Takeaway'],
      popular: ['Tonkotsu Ramen', 'Spicy Miso', 'Pork Gyoza'],
      menu: [
        { name: 'Tonkotsu Ramen', price: 15, category: 'Ramen', description: 'Creamy pork bone broth, chashu, soft egg' },
        { name: 'Spicy Miso Ramen', price: 16, category: 'Ramen', description: 'Fermented miso, chili oil, ground pork' },
        { name: 'Shoyu Ramen', price: 14, category: 'Ramen', description: 'Clear soy broth, chicken chashu, bamboo shoots' },
        { name: 'Pork Gyoza (6)', price: 9, category: 'Sides', description: 'Pan-fried dumplings with ponzu dipping sauce' },
        { name: 'Japanese Cheesecake', price: 8, category: 'Desserts', description: 'Light and fluffy cotton cheesecake' }
      ]
    },
    {
      id: 17,
      name: 'Sushi Dokoro',
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
      features: ['Counter only', 'Reservations', 'Omakase', 'Sake'],
      popular: ['Omakase 12-piece', 'Chutoro Nigiri', 'Uni Hand Roll'],
      menu: [
        { name: 'Omakase 12-piece', price: 75, category: 'Tasting', description: 'Chef selection of seasonal nigiri' },
        { name: 'Chutoro Nigiri (2)', price: 16, category: 'Nigiri', description: 'Medium fatty tuna belly' },
        { name: 'Salmon Aburi (2)', price: 12, category: 'Nigiri', description: 'Torched salmon belly with yuzu kosho' },
        { name: 'Uni Hand Roll', price: 18, category: 'Maki', description: 'Fresh sea urchin, shiso, warm rice' },
        { name: 'Miso Soup', price: 5, category: 'Sides', description: 'Traditional with silken tofu & wakame' }
      ]
    },
    {
      id: 18,
      name: 'Taqueria Calle',
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
      features: ['Late night', 'Quick bite', 'Vegetarian tacos', 'Cheap eats'],
      popular: ['Al Pastor Taco', 'Carne Asada Burrito', 'Elote'],
      menu: [
        { name: 'Taco al Pastor', price: 3.5, category: 'Tacos', description: 'Spit-roasted pork, pineapple, cilantro' },
        { name: 'Taco de Carnitas', price: 3.5, category: 'Tacos', description: 'Slow-cooked pork shoulder, pickled onion' },
        { name: 'Burrito Supreme', price: 12, category: 'Burritos', description: 'Rice, beans, choice of meat, guac, sour cream' },
        { name: 'Elote', price: 6, category: 'Sides', description: 'Grilled corn, mayo, cotija, chili powder' },
        { name: 'Churros & Chocolate', price: 7, category: 'Desserts', description: 'Fresh fried churros with warm chocolate dip' }
      ]
    },
    {
      id: 19,
      name: 'Cantina Verde',
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
      features: ['Rooftop', 'Mezcal bar', 'Date night', 'Private events'],
      popular: ['Mole Poblano', 'Lobster Tacos', 'Mezcal Flight'],
      menu: [
        { name: 'Tableside Guacamole', price: 16, category: 'Starters', description: 'Made fresh with lime, cilantro, serrano' },
        { name: 'Lobster Tacos (2)', price: 24, category: 'Mains', description: 'Butter-poached lobster, chipotle crema' },
        { name: 'Mole Poblano', price: 26, category: 'Mains', description: 'Chicken in 20-ingredient dark mole sauce' },
        { name: 'Ceviche Tropical', price: 18, category: 'Starters', description: 'Citrus-cured fish, mango, habanero' },
        { name: 'Tres Leches Cake', price: 12, category: 'Desserts', description: 'Three-milk soaked sponge, whipped cream' }
      ]
    },
    {
      id: 20,
      name: 'Golden Chopsticks',
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
      features: ['No reservations', 'Quick turnover', 'Family-style', 'Cash only'],
      popular: ['Wonton Noodle Soup', 'Beef Chow Fun', 'Char Siu'],
      menu: [
        { name: 'Wonton Noodle Soup', price: 12, category: 'Noodles', description: 'Shrimp & pork wontons, egg noodles, broth' },
        { name: 'Beef Chow Fun', price: 16, category: 'Noodles', description: 'Wide rice noodles, wok-seared beef' },
        { name: 'Char Siu Pork', price: 15, category: 'Mains', description: 'Honey-roasted BBQ pork with steamed rice' },
        { name: 'Szechuan Mapo Tofu', price: 13, category: 'Mains', description: 'Silken tofu in spicy minced pork sauce' },
        { name: 'Egg Custard Bun (3)', price: 7, category: 'Desserts', description: 'Steamed buns with molten sweet custard' }
      ]
    },
    {
      id: 21,
      name: 'Dumpling Empress',
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
      features: ['Open kitchen', 'Vegetarian', 'Frozen to-go', 'Small plates'],
      popular: ['Pork & Chive Dumplings', 'Xiao Long Bao', 'Shrimp Har Gow'],
      menu: [
        { name: 'Steamed Pork & Chive', price: 13, category: 'Dumplings', description: '10 pieces, soy-vinegar dip' },
        { name: 'Pan-fried Chicken', price: 14, category: 'Dumplings', description: 'Crispy bottom, juicy ginger-chicken filling' },
        { name: 'Xiao Long Bao', price: 14, category: 'Dumplings', description: '8 soup dumplings, pork & crab' },
        { name: 'Vegetable Potstickers', price: 12, category: 'Dumplings', description: 'Mushroom, cabbage, glass noodle' },
        { name: 'Red Bean Bao', price: 8, category: 'Desserts', description: 'Sweet steamed buns with red bean paste' }
      ]
    },
    {
      id: 22,
      name: 'La Patisserie',
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
      features: ['Bakery', 'Breakfast', 'Takeaway', 'Award-winning'],
      popular: ['Butter Croissant', 'Almond Pain au Chocolat', 'Lemon Tart'],
      menu: [
        { name: 'Butter Croissant', price: 5, category: 'Viennoiserie', description: '84-layer lamination, French AOP butter' },
        { name: 'Pain au Chocolat', price: 6, category: 'Viennoiserie', description: 'Double chocolate batons in flaky dough' },
        { name: 'Lemon Meringue Tart', price: 8, category: 'Patisserie', description: 'Tangy lemon curd, torched Italian meringue' },
        { name: 'Éclair', price: 7, category: 'Patisserie', description: 'Choux pastry, vanilla cream, chocolate glaze' },
        { name: 'Quiche Lorraine', price: 11, category: 'Savory', description: 'Smoked bacon, gruyère, custard in shortcrust' }
      ]
    },
    {
      id: 23,
      name: 'Chez Marc',
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
      features: ['Tasting menu', 'Wine cellar', 'Romantic', 'Michelin-starred'],
      popular: ['7-Course Tasting', 'Foie Gras Torchon', 'Wine Pairing'],
      menu: [
        { name: '7-Course Tasting', price: 120, category: 'Tasting', description: 'Seasonal menu, changes weekly' },
        { name: 'Foie Gras Torchon', price: 32, category: 'Starters', description: 'Brioche, fig compote, fleur de sel' },
        { name: 'Lobster Bisque', price: 26, category: 'Starters', description: 'Cognac cream, tarragon oil' },
        { name: 'Canard à l\'Orange', price: 48, category: 'Mains', description: 'Duck breast, Grand Marnier sauce' },
        { name: 'Soufflé au Chocolat', price: 22, category: 'Desserts', description: 'Rich chocolate, vanilla crème anglaise' }
      ]
    },
    {
      id: 24,
      name: 'The Roastery',
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
      features: ['Specialty coffee', 'Beans for sale', 'Laptop-friendly', 'Quiet'],
      popular: ['Ethiopian Pour-over', 'Cold Brew', 'Cinnamon Bun'],
      menu: [
        { name: 'Single Origin Pour-over', price: 6, category: 'Coffee', description: 'Rotating selection, brewed to order' },
        { name: 'Nitro Cold Brew', price: 7, category: 'Coffee', description: 'Smooth, creamy, infused with nitrogen' },
        { name: 'Flat White', price: 5, category: 'Coffee', description: 'Double ristretto, microfoam milk' },
        { name: 'Cinnamon Bun', price: 6, category: 'Pastry', description: 'Fresh baked, cream cheese frosting' },
        { name: 'Avocado Smash', price: 13, category: 'Food', description: 'Sourdough, feta, chili flakes, lime' }
      ]
    },
    {
      id: 25,
      name: 'Bubble & Tea House',
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
      features: ['Boba tea', 'Desserts', 'Board games', 'Student hangout'],
      popular: ['Brown Sugar Milk Tea', 'Mango Pomelo Sago', 'Matcha Waffle'],
      menu: [
        { name: 'Brown Sugar Boba Milk', price: 6.5, category: 'Milk Tea', description: 'Caramelized brown sugar, fresh milk, tapioca' },
        { name: 'Mango Pomelo Sago', price: 8, category: 'Dessert', description: 'Creamy mango, pomelo pulp, sago pearls' },
        { name: 'Matcha Waffle', price: 9, category: 'Dessert', description: 'Crispy bubble waffle, matcha ice cream' },
        { name: 'Taro Latte', price: 7, category: 'Specialty', description: 'Creamy taro, coconut milk, no caffeine' },
        { name: 'Spring Rolls (4)', price: 6, category: 'Snacks', description: 'Crispy veggie rolls, sweet chili dip' }
      ]
    },
    {
      id: 26,
      name: 'Oyster Bar & Grill',
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
      features: ['Happy hour', 'Raw bar', 'Seafood tower', 'Nautical vibe'],
      popular: ['Oyster Happy Hour', 'Lobster Roll', 'Clam Chowder'],
      menu: [
        { name: 'Oyster Happy Hour (6)', price: 12, category: 'Raw Bar', description: 'Chef selection, mignonette, lemon' },
        { name: 'Seafood Tower', price: 65, category: 'Raw Bar', description: 'Oysters, clams, shrimp, lobster, crab' },
        { name: 'Lobster Roll', price: 32, category: 'Mains', description: 'Butter-toasted brioche, mayo or butter' },
        { name: 'Clam Chowder', price: 14, category: 'Starters', description: 'New England style, bacon, oyster crackers' },
        { name: 'Fish & Chips', price: 22, category: 'Mains', description: 'Beer-battered haddock, tartar, slaw' }
      ]
    },
    {
      id: 27,
      name: 'Pesca Fresca',
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
      features: ['Sustainable', 'Casual', 'Fish tacos', 'Outdoor deck'],
      popular: ['Fish Tacos', 'Grilled Mahi-Mahi', 'Shrimp Ceviche'],
      menu: [
        { name: 'Shrimp Ceviche', price: 15, category: 'Starters', description: 'Lime-cured shrimp, avocado, tortilla chips' },
        { name: 'Fish Tacos (3)', price: 16, category: 'Mains', description: 'Baja-style battered cod, slaw, chipotle mayo' },
        { name: 'Grilled Mahi-Mahi', price: 24, category: 'Mains', description: 'Charcoal-grilled with mango salsa & rice' },
        { name: 'Calamari Fritti', price: 13, category: 'Starters', description: 'Crispy squid, marinara, lemon aioli' },
        { name: 'Key Lime Parfait', price: 9, category: 'Desserts', description: 'Tangy key lime cream, graham crumble' }
      ]
    },
    {
      id: 28,
      name: 'Tandoori Nights',
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
      features: ['Tandoor show', 'Live music', 'Banquet menu', 'Delivery'],
      popular: ['Chicken Tikka', 'Lamb Biryani', 'Palak Paneer'],
      menu: [
        { name: 'Chicken Tikka', price: 16, category: 'Tandoor', description: 'Yogurt-marinated, clay oven charred' },
        { name: 'Seekh Kebab', price: 15, category: 'Tandoor', description: 'Spiced minced lamb skewers' },
        { name: 'Lamb Biryani', price: 24, category: 'Mains', description: 'Aromatic rice, tender lamb, saffron, raita' },
        { name: 'Palak Paneer', price: 17, category: 'Mains', description: 'Creamed spinach, fresh paneer cubes' },
        { name: 'Kulfi', price: 8, category: 'Desserts', description: 'Frozen cardamom ice cream with pistachios' }
      ]
    },
    {
      id: 29,
      name: 'Curry Leaf Garden',
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
      features: ['Vegetarian', 'Dosa bar', 'Family-friendly', 'Cheap eats'],
      popular: ['Masala Dosa', 'Idli Sambar', 'Filter Coffee'],
      menu: [
        { name: 'Masala Dosa', price: 14, category: 'Dosa', description: 'Crispy rice crepe, spiced potato filling' },
        { name: 'Idli Sambar (4)', price: 11, category: 'Breakfast', description: 'Steamed rice cakes, lentil stew' },
        { name: 'Medu Vada (3)', price: 9, category: 'Breakfast', description: 'Crispy lentil doughnuts, coconut chutney' },
        { name: 'Vegetable Thali', price: 19, category: 'Thali', description: 'Complete meal: rice, bread, 3 curries, dessert' },
        { name: 'Filter Coffee', price: 5, category: 'Drinks', description: 'Traditional South Indian drip coffee' }
      ]
    },
    {
      id: 30,
      name: 'Caspian Grill',
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
      features: ['Kebab grill', 'Saffron rice', 'Elegant', 'Private dining'],
      popular: ['Lamb Shank', 'Koobideh Kebab', 'Saffron Ice Cream'],
      menu: [
        { name: 'Kashk-e Bademjan', price: 13, category: 'Starters', description: 'Eggplant dip, caramelized onion, whey' },
        { name: 'Lamb Shank', price: 32, category: 'Mains', description: 'Slow-braised in saffron-tomato broth' },
        { name: 'Koobideh Kebab', price: 24, category: 'Mains', description: 'Two skewers of seasoned minced lamb' },
        { name: 'Zereshk Polo', price: 22, category: 'Mains', description: 'Barberry rice, saffron chicken' },
        { name: 'Bastani Sonnati', price: 9, category: 'Desserts', description: 'Saffron ice cream, rosewater, pistachios' }
      ]
    },
    {
      id: 31,
      name: 'Olea Street Food',
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
      features: ['Street food', 'Quick service', 'Halal', 'Vegan options'],
      popular: ['Chicken Shawarma', 'Falafel Wrap', 'Hummus Bowl'],
      menu: [
        { name: 'Chicken Shawarma', price: 11, category: 'Wraps', description: 'Spit-roasted, garlic toum, pickles, pita' },
        { name: 'Falafel Wrap', price: 9, category: 'Wraps', description: 'Crispy falafel, tahini, Israeli salad' },
        { name: 'Hummus Bowl', price: 12, category: 'Bowls', description: 'Creamy hummus, lamb shawarma, pine nuts' },
        { name: 'Sabich', price: 10, category: 'Wraps', description: 'Fried eggplant, hard-boiled egg, amba sauce' },
        { name: 'Baklava Box (4)', price: 7, category: 'Desserts', description: 'Assorted baklava with pistachios & walnuts' }
      ]
    },
    {
      id: 32,
      name: 'Bangkok 88',
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
      features: ['Street food', 'Boat noodles', 'Spicy', 'Quick service'],
      popular: ['Boat Noodles', 'Crispy Pork Belly', 'Papaya Salad'],
      menu: [
        { name: 'Boat Noodles', price: 12, category: 'Noodles', description: 'Rich dark broth, pork, bean sprouts' },
        { name: 'Crispy Pork Belly', price: 16, category: 'Mains', description: 'Twice-cooked with chili-garlic sauce' },
        { name: 'Som Tum', price: 10, category: 'Salad', description: 'Green papaya, lime, fish sauce, peanuts' },
        { name: 'Pad Kra Pao', price: 15, category: 'Mains', description: 'Holy basil stir-fry with minced pork, fried egg' },
        { name: 'Mango Sticky Rice', price: 9, category: 'Desserts', description: 'Ripe mango, coconut cream, warm sticky rice' }
      ]
    },
    {
      id: 33,
      name: 'Thai Terrace',
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
      features: ['Terrace dining', 'Royal Thai', 'Chili scale', 'Cocktails'],
      popular: ['Massaman Curry', 'Whole Fish Chili Lime', 'Coconut Ice Cream'],
      menu: [
        { name: 'Mieng Kham', price: 14, category: 'Starters', description: 'Betel leaf wraps with coconut, lime, ginger' },
        { name: 'Massaman Curry', price: 26, category: 'Mains', description: 'Slow-braised beef, potatoes, peanuts' },
        { name: 'Whole Fish Chili Lime', price: 38, category: 'Mains', description: 'Steamed sea bass, spicy lime broth' },
        { name: 'Soft Shell Crab', price: 28, category: 'Mains', description: 'Crispy crab with green mango salad' },
        { name: 'Coconut Ice Cream', price: 11, category: 'Desserts', description: 'Served in coconut shell with tropical toppings' }
      ]
    },
    {
      id: 34,
      name: 'Blue Smoke BBQ',
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
      features: ['Competition team', 'Kansas City style', 'Patio', 'Family packs'],
      popular: ['Burnt Ends', 'St. Louis Ribs', 'Banana Pudding'],
      menu: [
        { name: 'Burnt Ends', price: 18, category: 'Specials', description: 'Crispy bark, melt-in-your-mouth brisket tips' },
        { name: 'St. Louis Ribs', price: 26, category: 'Mains', description: 'Full rack, dry-rubbed, smoked 6 hours' },
        { name: 'Sausage Plate', price: 16, category: 'Mains', description: 'House-made jalapeño cheddar sausage' },
        { name: 'Collard Greens', price: 7, category: 'Sides', description: 'Slow-cooked with smoked turkey' },
        { name: 'Banana Pudding', price: 8, category: 'Desserts', description: 'Layered with Nilla wafers, whipped cream' }
      ]
    },
    {
      id: 35,
      name: 'Pig & Pit',
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
      features: ['Whole hog', 'Carolina style', 'Picnic tables', 'Live music'],
      popular: ['Whole Hog Plate', 'Pulled Pork Sandwich', 'Hush Puppies'],
      menu: [
        { name: 'Whole Hog Plate', price: 19, category: 'Mains', description: 'Mixed cuts, crackling, classic vinegar sauce' },
        { name: 'Pulled Pork Sandwich', price: 12, category: 'Sandwiches', description: 'Mustard slaw, brioche bun' },
        { name: 'Smoked Chicken', price: 15, category: 'Mains', description: 'Half bird, Alabama white sauce' },
        { name: 'Hush Puppies', price: 6, category: 'Sides', description: 'Crispy cornmeal fritters, honey butter' },
        { name: 'Peach Cobbler', price: 9, category: 'Desserts', description: 'Hot cobbler with vanilla ice cream' }
      ]
    },
    {
      id: 36,
      name: 'Route 66 Roadhouse',
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
      features: ['All-day breakfast', 'Milkshakes', 'Jukebox', 'Retro vibes'],
      popular: ['Stacked Pancakes', 'Patty Melt', 'Cherry Pie'],
      menu: [
        { name: 'Stacked Pancakes', price: 12, category: 'Breakfast', description: 'Buttermilk stack, maple syrup, berries' },
        { name: 'Patty Melt', price: 15, category: 'Burgers', description: 'Rye bread, Swiss cheese, grilled onions' },
        { name: 'Chicken & Waffles', price: 17, category: 'Mains', description: 'Crispy fried chicken, Belgian waffle, hot honey' },
        { name: 'Chocolate Milkshake', price: 8, category: 'Drinks', description: 'Thick, hand-spun, whipped cream' },
        { name: 'Cherry Pie', price: 9, category: 'Desserts', description: 'Lattice-top, served warm à la mode' }
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

    // Highlight correct nav tab
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
  const titles = {
    home: 'Home',
    explore: 'Explore',
    favorites: 'Favorites',
    bookings: 'Bookings',
    chat: 'Messages',
    profile: 'Profile',
    search: 'Search',
    restaurant: 'Restaurant',
    menu: 'Menu'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || '';
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
        <h4>Favorites</h4>
        <p>${favCount} saved</p>
      </div>
      <div class="dashboard-card" onclick="showPage('bookings')">
        <svg class="icon"><use href="#icon-calendar"/></svg>
        <h4>Bookings</h4>
        <p>${appData.bookings.length} total</p>
      </div>
    </div>
  `;

  // Upcoming booking reminder
  if (upcomingBooking) {
    html += `
      <div class="dashboard-card wide accent" style="margin-top:12px" onclick="showPage('bookings')">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="icon" style="font-size:32px"><use href="#icon-calendar"/></svg>
          <div>
            <h4>Upcoming</h4>
            <div style="font-size:18px;font-weight:600">${upcomingBooking.restaurantName}</div>
            <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">${upcomingBooking.date} at ${upcomingBooking.time} &bull; ${upcomingBooking.guests} guests</p>
          </div>
        </div>
      </div>
    `;
  }

  // Categories
  html += `
    <div style="margin:20px 0 12px">
      <h3 style="display:flex;justify-content:space-between;align-items:center">
        Categories
        <span style="font-size:12px;color:var(--primary);cursor:pointer" onclick="showPage('explore')">See all &rarr;</span>
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
    <h3 style="margin:16px 0 12px">Featured</h3>
    ${featured.map(r => renderRestaurantCard(r)).join('')}
  `;

  html += '</div>';
  return html;
}

function renderRestaurantCard(r) {
  const isFav = appData.favorites.includes(r.id);
  return `
    <div class="dashboard-card" style="margin-bottom:12px;padding:0;overflow:hidden" onclick="showPage('restaurant-${r.id}')">
      <div style="height:140px;${r.image ? `background-image:url('${r.image}');background-size:cover;background-position:center;` : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card));'}display:flex;align-items:flex-end;justify-content:flex-end;padding:12px">
        <button style="background:rgba(0,0,0,0.5);border:none;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:${isFav ? '#ef4444' : '#fff'};cursor:pointer;z-index:1" onclick="event.stopPropagation();toggleFavorite(${r.id})">
          <svg style="width:20px;height:20px"><use href="#icon-heart"/></svg>
        </button>
      </div>
      <div style="padding:16px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
          <h4 style="margin:0;font-size:16px">${r.name}</h4>
          <span style="font-size:11px;font-weight:600;color:var(--primary)">${r.price}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="display:flex;align-items:center;gap:4px;color:#f59e0b;font-weight:600;font-size:13px">
            <svg style="width:14px;height:14px"><use href="#icon-star"/></svg>
            ${r.rating}
          </span>
          <span style="font-size:12px;color:var(--text-muted)">(${r.reviews})</span>
          <span style="font-size:12px;color:var(--text-muted)">&bull;</span>
          <span style="font-size:12px;color:var(--text-muted)">${r.hours}</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin:0;line-height:1.4">${r.description.substring(0, 100)}...</p>
        <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">
          ${r.features.slice(0, 3).map(f => `
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
  // Rerender current page
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
        <span style="color:var(--text-muted);font-size:15px">Search restaurants, cuisines...</span>
      </div>
    </div>
  `;

  // All categories
  html += `<h3 style="margin:16px 0 12px">All Categories</h3>`;
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px">`;
  appData.categories.forEach(c => {
    const count = appData.restaurants.filter(r => r.cuisine === c.id).length;
    html += `
      <div class="dashboard-card" style="padding:14px 10px;text-align:center;cursor:pointer" onclick="filterExplore('${c.id}')">
        <div style="font-size:24px;margin-bottom:6px">${c.icon}</div>
        <div style="font-size:13px;font-weight:600">${c.name}</div>
        <div style="font-size:11px;color:var(--text-muted)">${count} places</div>
      </div>
    `;
  });
  html += '</div>';

  // All restaurants
  html += `<h3 style="margin:16px 0 12px">All Restaurants</h3>`;
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
      <span style="font-size:12px;color:var(--text-muted)">(${filtered.length} places)</span>
    </div>
  `;
  filtered.forEach(r => {
    html += renderRestaurantCard(r);
  });
  html += '</div>';
  content.innerHTML = html;

  // Activate explore nav tab
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const navBtns = document.querySelectorAll('.nav-item');
  if (navBtns[1]) navBtns[1].classList.add('active');
}

// ============ FAVORITES ============
function renderFavorites() {
  const favs = appData.restaurants.filter(r => appData.favorites.includes(r.id));
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-heart"/></svg>Saved Places</h3>';

  if (favs.length === 0) {
    html += `
      <div style="text-align:center;padding:40px 20px">
        <svg class="icon" style="width:64px;height:64px;opacity:0.3;margin-bottom:16px"><use href="#icon-heart"/></svg>
        <p style="color:var(--text-muted)">No favorites yet</p>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:20px">Tap the heart on restaurants you love</p>
        <button class="btn-primary" onclick="showPage('explore')">Browse Restaurants</button>
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

  let html = '<div class="page-content"><h3>Bookings</h3>';

  if (active.length > 0) {
    html += '<h4 style="margin:16px 0 12px;font-size:14px;color:var(--text-muted)">ACTIVE</h4>';
    active.forEach(b => {
      const r = appData.restaurants.find(r => r.id === b.restaurantId);
      html += `
        <div class="dashboard-card" style="margin-bottom:12px" onclick="showPage('restaurant-${b.restaurantId}')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
            <div>
              <div style="font-weight:600;font-size:15px">${b.restaurantName}</div>
              <div style="font-size:13px;color:var(--text-muted);margin-top:4px">${b.date} at ${b.time}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${b.guests} guests${b.special ? ' &bull; ' + b.special : ''}</div>
            </div>
            <span style="font-size:11px;padding:4px 10px;border-radius:12px;background:${b.status === 'confirmed' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'};color:${b.status === 'confirmed' ? '#10B981' : '#F59E0B'};font-weight:600">
              ${b.status}
            </span>
          </div>
          ${r ? `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--primary)"><svg style="width:14px;height:14px"><use href="#icon-location"/></svg>${r.address}</div>` : ''}
        </div>
      `;
    });
  }

  if (past.length > 0) {
    html += '<h4 style="margin:20px 0 12px;font-size:14px;color:var(--text-muted)">PAST</h4>';
    past.forEach(b => {
      html += `
        <div class="dashboard-card" style="margin-bottom:12px;opacity:0.7">
          <div style="font-weight:600;font-size:14px">${b.restaurantName}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${b.date} &bull; ${b.guests} guests</div>
        </div>
      `;
    });
  }

  if (active.length === 0 && past.length === 0) {
    html += `
      <div style="text-align:center;padding:40px 20px">
        <p style="color:var(--text-muted)">No bookings yet</p>
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
  let html = '<div class="page-content"><h3>Messages</h3><div class="chat-list">';
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
        <input type="text" placeholder="Search restaurants, cuisines, dishes..." oninput="performSearch(this.value)" style="flex:1;background:none;border:none;color:var(--text);font-size:15px;outline:none" autofocus>
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
    r.cuisine.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q) ||
    r.features.some(f => f.toLowerCase().includes(q)) ||
    r.menu.some(m => m.name.toLowerCase().includes(q))
  );

  if (matched.length === 0) {
    results.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No results found</div>';
  } else {
    results.innerHTML = matched.map(r => renderRestaurantCard(r)).join('');
  }
}

// ============ RESTAURANT DETAIL ============
function renderRestaurant(id) {
  const r = appData.restaurants.find(r => r.id === id);
  if (!r) return '<div class="page-content"><p>Restaurant not found</p></div>';

  const isFav = appData.favorites.includes(id);

  let html = '<div class="page-content">';

  // Hero image placeholder
  html += `
      <div style="height:180px;${r.image ? `background-image:url('${r.image}');background-size:cover;background-position:center;` : 'background:linear-gradient(135deg, var(--bg-light), var(--bg-card));'}border-radius:16px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;position:relative">
      <button style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;color:${isFav ? '#ef4444' : '#fff'};cursor:pointer;z-index:1" onclick="toggleFavorite(${r.id})">
        <svg style="width:22px;height:22px"><use href="#icon-heart"/></svg>
      </button>
      <div style="font-size:64px;opacity:0.3">${appData.categories.find(c => c.id === r.cuisine)?.icon || '🍽️'}</div>
    </div>
  `;

  // Restaurant info
  html += `
    <h2 style="margin:0 0 4px">${r.name}</h2>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">
      <span style="display:flex;align-items:center;gap:4px;color:#f59e0b;font-weight:600">
        <svg style="width:16px;height:16px"><use href="#icon-star"/></svg> ${r.rating}
      </span>
      <span style="font-size:13px;color:var(--text-muted)">(${r.reviews} reviews)</span>
      <span style="color:var(--text-muted)">&bull;</span>
      <span style="font-weight:600;color:var(--primary)">${r.price}</span>
      <span style="color:var(--text-muted)">${r.priceRange}</span>
    </div>

    <p style="font-size:14px;line-height:1.6;color:var(--text-muted);margin-bottom:16px">${r.description}</p>

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
    <h4 style="margin-bottom:8px">Features</h4>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">
      ${r.features.map(f => `
        <span style="font-size:12px;padding:6px 14px;background:var(--bg-card);border-radius:20px">${f}</span>
      `).join('')}
    </div>
  `;

  // Popular dishes
  html += `
    <h4 style="margin-bottom:8px">Popular</h4>
    <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px">
      ${r.popular.map(p => `
        <div style="flex-shrink:0;padding:8px 16px;background:var(--bg-card);border-radius:12px;font-size:13px">${p}</div>
      `).join('')}
    </div>
  `;

  // Action buttons
  html += `
    <div style="display:flex;gap:12px;margin-top:4px">
      <button class="btn-primary" style="flex:1;justify-content:center" onclick="showPage('menu-${r.id}')">
        <svg class="icon" style="width:20px;height:20px"><use href="#icon-food"/></svg> Full Menu
      </button>
      <button class="btn-primary" style="flex:1;justify-content:center;background:var(--success)" onclick="quickBook(${r.id})">
        <svg class="icon" style="width:20px;height:20px"><use href="#icon-calendar"/></svg> Book Table
      </button>
    </div>
  `;

  html += '</div>';
  return html;
}

function quickBook(restaurantId) {
  const r = appData.restaurants.find(r => r.id === restaurantId);
  if (!r) return;

  // Simple booking form
  const content = document.getElementById('content');
  let html = '<div class="page-content">';
  html += `<h3>Book at ${r.name}</h3>`;

  html += `
    <div class="dashboard-card" style="margin-bottom:16px;padding:16px">
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">Date</label>
        <input type="date" id="bookDate" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px" value="2026-05-29">
      </div>
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">Time</label>
        <select id="bookTime" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
          <option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option><option>20:00</option><option>20:30</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">Guests</label>
        <select id="bookGuests" style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
          <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>
        </select>
      </div>
      <div style="margin-bottom:16px">
        <label style="font-size:13px;color:var(--text-muted);display:block;margin-bottom:6px">Special requests</label>
        <input type="text" id="bookSpecial" placeholder="Window table, anniversary..." style="width:100%;padding:12px;background:var(--bg-input);border:none;border-radius:8px;color:var(--text);font-size:14px">
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="confirmBooking(${r.id})">
        Confirm Booking
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
      <h3 style="margin:16px 0 8px">Booking Confirmed!</h3>
      <p style="color:var(--text-muted);margin-bottom:16px">${r.name}<br>${formattedDate} at ${time}<br>${guests} guests</p>
      <button class="btn-primary" onclick="showPage('bookings')">View My Bookings</button>
    </div>
  `;
}

// ============ MENU ============
function renderMenu(id) {
  const r = appData.restaurants.find(r => r.id === id);
  if (!r) return '<div class="page-content"><p>Not found</p></div>';

  const categories = [...new Set(r.menu.map(m => m.category))];

  let html = '<div class="page-content">';
  html += `<h3>${r.name} Menu</h3>`;

  categories.forEach(cat => {
    const items = r.menu.filter(m => m.category === cat);
    html += `<h4 style="margin:16px 0 8px;color:var(--primary)">${cat}</h4>`;
    items.forEach(item => {
      html += `
        <div class="dashboard-card" style="margin-bottom:8px;padding:14px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${item.name}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${item.description}</div>
            </div>
            <div style="font-weight:700;color:var(--success);font-size:16px;margin-left:12px">$${item.price}</div>
          </div>
        </div>
      `;
    });
  });

  html += `
    <div style="margin-top:20px">
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="quickBook(${r.id})">
        <svg class="icon" style="width:20px;height:20px"><use href="#icon-calendar"/></svg> Book a Table
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
        <p class="profile-group">Food Enthusiast</p>
      </div>

      <div class="profile-info">
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${p.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone</span>
          <span class="info-value">${p.phone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Dietary</span>
          <span class="info-value">${p.dietary.join(', ')}</span>
        </div>
      </div>

      <h4 style="margin:20px 0 12px;font-size:16px">Favorite Cuisines</h4>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${p.favoriteCuisines.map(c => `<span style="font-size:13px;padding:8px 16px;background:var(--bg-card);border-radius:20px">${c}</span>`).join('')}
      </div>

      <div class="dashboard-grid" style="margin-top:20px">
        <div class="dashboard-card" onclick="showPage('favorites')">
          <svg class="icon"><use href="#icon-heart"/></svg>
          <h4>${appData.favorites.length}</h4>
          <p>Favorites</p>
        </div>
        <div class="dashboard-card" onclick="showPage('bookings')">
          <svg class="icon"><use href="#icon-calendar"/></svg>
          <h4>${appData.bookings.length}</h4>
          <p>Bookings</p>
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
