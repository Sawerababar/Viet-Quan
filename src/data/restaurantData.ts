import { MenuItem } from '../types';

export const RESTAURANT_DETAILS = {
  name: "Viet Quan",
  vietnameseName: "Việt Quán",
  tagline: "Authentic Vietnamese Family Noodle House",
  owner: "Trinh",
  address: "Shop 20, Hawaiian’s Melville Shopping Centre, 380 Canning Hwy, Bicton WA 6157, Australia",
  shortAddress: "Shop 20, Hawaiian’s Melville, Bicton WA",
  phone: "+61 429 013 944",
  phoneRaw: "+61429013944",
  instagram: "@vietquan.perth",
  instagramUrl: "https://instagram.com/vietquan.perth",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Viet+Quan+Hawaiian%27s+Melville+380+Canning+Hwy+Bicton+WA+6157",
  mapsPhotosUrl: "https://www.google.com/maps/search/?api=1&query=Viet+Quan+Hawaiian%27s+Melville+380+Canning+Hwy+Bicton+WA+6157",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.597793392471!2d115.78452507641257!3d-32.02980187398327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a39281a8c9e5%3A0x6b63d7e7e60c8724!2sHawaiian&#39;s%20Melville!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau",
  rating: 4.7,
  reviewCount: "100+",
  priceRange: "$18 – $24 AUD",
  hours: [
    { day: "Monday", hours: "Closed", isOpen: false },
    { day: "Tuesday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
    { day: "Wednesday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
    { day: "Thursday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
    { day: "Friday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
    { day: "Saturday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
    { day: "Sunday", hours: "11:00 AM – 9:00 PM", isOpen: true, openHour: 11, closeHour: 21 },
  ],
  serviceOptions: [
    "Dine-in with indoor seating",
    "Licensed alfresco outdoor dining",
    "Quick takeaway for pickup",
    "Walk-ins always welcome"
  ],
  features: [
    "Dine-in & Quick Takeaway",
    "Casual, Family-Friendly Dining",
    "Indoor & Outdoor Alfresco Seating",
    "Complimentary 3-Hour Shopping Centre Parking (460+ bays)",
    "Wheelchair-Accessible Entrance & Amenities",
    "Contactless & Card Payments (Apple Pay & Google Pay)",
    "Licensed Dining"
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'rare-beef-pho',
    name: 'Traditional Rare Beef Phở',
    vietnameseName: 'Phở Tái',
    category: 'soups-pho',
    price: 19.50,
    description: 'Slow-simmered 12-hour aromatic beef marrow bone broth infused with star anise and cinnamon, silky rice noodles, thinly sliced rare Australian beef, fresh bean sprouts, Thai basil, fresh chili, and lime.',
    tags: ['Popular', 'Chef Special', 'GF'],
  },
  {
    id: 'special-combination-pho',
    name: 'Special Combination Beef Phở',
    vietnameseName: 'Phở Đặc Biệt',
    category: 'soups-pho',
    price: 21.50,
    description: 'The complete noodle bowl featuring rare beef slices, tender slow-braised beef brisket, and Vietnamese beef meatballs in rich aromatic bone broth with fresh herbs.',
    tags: ['Popular', 'GF'],
  },
  {
    id: 'chicken-pho',
    name: 'Vietnamese Chicken Noodle Soup',
    vietnameseName: 'Phở Gà / Canh Gà',
    category: 'soups-pho',
    price: 18.50,
    description: 'Delicate golden free-range chicken broth, shredded tender chicken, aromatic sliced ginger, fresh coriander, and scallions over soft rice noodles.',
    tags: ['GF'],
  },
  {
    id: 'crispy-chicken-rice',
    name: 'Signature Crispy Chicken Rice',
    vietnameseName: 'Cơm Gà Da Giòn',
    category: 'rice-mains',
    price: 20.50,
    description: 'Golden, crackling crispy-skin chicken served alongside fragrant seasoned garlic rice, tangy house-pickled vegetables, fresh cucumber slices, clear chicken broth, and house sweet chili-garlic dipping sauce.',
    tags: ['Popular', 'Chef Special'],
  },
  {
    id: 'lemongrass-chicken',
    name: 'Lemongrass & Chili Chicken',
    vietnameseName: 'Gà Xào Sả Ớt',
    category: 'rice-mains',
    price: 20.00,
    description: 'Tender chicken fillet wok-tossed with finely minced fresh lemongrass, red bird’s eye chili, sweet sliced onions, and savory fish sauce reduction. Served with steamed jasmine rice.',
    tags: ['Spicy', 'GF'],
    isSpicy: true,
    spiceLevel: 2,
  },
  {
    id: 'vietnamese-beef-curry',
    name: 'Vietnamese Beef Curry',
    vietnameseName: 'Cà Ri Bò',
    category: 'rice-mains',
    price: 21.00,
    description: 'Slow-cooked tender beef chunks simmered in a fragrant coconut milk curry infused with lemongrass, turmeric, carrots, and tender potatoes. Served with jasmine rice.',
    tags: ['Chef Special'],
    spiceLevel: 1,
  },
  {
    id: 'roast-duck-rice',
    name: 'Roast Duck with Steamed Rice',
    vietnameseName: 'Cơm Vịt Quay',
    category: 'rice-mains',
    price: 23.50,
    description: 'Succulent five-spice marinated roast duck with golden glazed skin and tender meat, drizzled with spiced duck reduction and served with steamed Asian greens and rice.',
    tags: ['Popular'],
  },
  {
    id: 'viet-quan-fried-rice',
    name: 'Viet Quan House Fried Rice',
    vietnameseName: 'Cơm Chiên Đặc Biệt',
    category: 'rice-mains',
    price: 18.50,
    description: 'Wok-charred fragrant jasmine rice with Vietnamese lap cheong sausage, prawns, free-range egg, sweet green peas, scallions, and toasted sesame oil aroma.',
    tags: ['Popular'],
  },
  {
    id: 'seafood-laksa',
    name: 'Signature Seafood Laksa',
    vietnameseName: 'Bún Laksa Hải Sản',
    category: 'noodles-laksa',
    price: 22.50,
    description: 'Hearty, rich coconut curry broth with plump king prawns, tender calamari, fish cakes, fried tofu puffs, bean sprouts, and a satisfying mix of thick noodles and rice vermicelli.',
    tags: ['Popular', 'Spicy', 'Chef Special'],
    isSpicy: true,
    spiceLevel: 2,
  },
  {
    id: 'chicken-laksa',
    name: 'Fragrant Chicken Laksa',
    vietnameseName: 'Bún Laksa Gà',
    category: 'noodles-laksa',
    price: 20.50,
    description: 'Aromatic and creamy coconut curry soup loaded with tender sliced chicken fillet, fried tofu puffs, boiled egg, bean sprouts, and fresh mint.',
    tags: ['Spicy'],
    isSpicy: true,
    spiceLevel: 2,
  },
  {
    id: 'mi-xao-chicken-beef',
    name: 'Mì Xào Stir-Fried Egg Noodles',
    vietnameseName: 'Mì Xào Thịt Bò / Gà',
    category: 'noodles-laksa',
    price: 19.50,
    description: 'Wok-tossed egg noodles with marinated tender beef or chicken, crisp bok choy, carrots, bean sprouts, and savory oyster sauce reduction with intense wok-hei aroma.',
    tags: ['Popular'],
  },
  {
    id: 'spring-rolls',
    name: 'Crispy Vietnamese Spring Rolls',
    vietnameseName: 'Chả Giò Heo',
    category: 'starters',
    price: 11.50,
    description: 'Four pieces of golden crispy fried spring rolls filled with seasoned pork, wood-ear mushrooms, glass noodles, and carrots. Served with house nước chấm dipping sauce and crisp lettuce.',
    tags: ['Popular'],
  },
  {
    id: 'rice-paper-rolls',
    name: 'Fresh Rice Paper Rolls (Gỏi Cuốn)',
    vietnameseName: 'Gỏi Cuốn Tôm Thịt',
    category: 'starters',
    price: 12.00,
    description: 'Three freshly hand-rolled translucent rice paper rolls packed with steamed king prawns, pork slices, fresh mint, crisp cucumber, and rice vermicelli. Served with rich hoisin-peanut sauce.',
    tags: ['Popular', 'GF'],
  },
  {
    id: 'chicken-satay-skewers',
    name: 'Grilled Chicken Satay Skewers',
    vietnameseName: 'Gà Nướng Sa Tế (4 sticks)',
    category: 'starters',
    price: 12.50,
    description: 'Four flame-grilled tender chicken skewers marinated in aromatic Southeast Asian spices, served with warm roasted peanut dipping sauce and pickled cucumber.',
    tags: ['Chef Special'],
  },
  {
    id: 'salt-pepper-squid',
    name: 'Savoury Salt & Pepper Squid',
    vietnameseName: 'Mực Rang Muối Tiêu',
    category: 'starters',
    price: 15.50,
    description: 'Tender calamari flash-fried to a crisp golden crunch, tossed with cracked black pepper, sea salt, chopped scallions, fresh red chili, and fresh lime.',
    tags: ['Popular', 'Chef Special'],
  },
  {
    id: 'vietnamese-iced-coffee',
    name: 'Vietnamese Iced Coffee',
    vietnameseName: 'Cà Phê Sữa Đá',
    category: 'beverages',
    price: 6.50,
    description: 'Authentic slow-drip dark roast Vietnamese Robusta coffee blended with sweet creamy condensed milk and poured over crushed ice. Rich, bold, and refreshing.',
    tags: ['Popular', 'GF', 'Vegetarian'],
  },
  {
    id: 'young-coconut-juice',
    name: 'Fresh Young Coconut Juice',
    vietnameseName: 'Nước Dừa Tươi',
    category: 'beverages',
    price: 6.50,
    description: 'Chilled natural coconut water served with tender coconut pulp. Pure, hydrating, and lightly sweet.',
    tags: ['GF', 'Vegetarian'],
  },
  {
    id: 'jasmine-peach-iced-tea',
    name: 'Iced Peach Jasmine Tea',
    vietnameseName: 'Trà Đào Hoa Lài',
    category: 'beverages',
    price: 6.00,
    description: 'Freshly brewed fragrant jasmine green tea infused with sweet peach essence, fresh mint leaves, and peach slices over ice.',
    tags: ['Vegetarian', 'GF'],
  },
  {
    id: 'hot-vietnamese-coffee',
    name: 'Traditional Hot Phin Coffee',
    vietnameseName: 'Cà Phê Phin Nóng',
    category: 'beverages',
    price: 6.00,
    description: 'Served in a traditional stainless steel phin filter slowly dripping over sweetened condensed milk at your table.',
    tags: ['Vegetarian', 'GF'],
  },
  {
    id: 'cold-soft-drinks',
    name: 'Chilled Soft Drinks',
    category: 'beverages',
    price: 4.00,
    description: 'Coke, Coke Zero, Sprite, Solo Lemon, or Sparkling Mineral Water.',
    tags: ['Vegetarian', 'GF'],
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus D.",
    location: "Bicton · Google Maps Review",
    rating: 5,
    text: "The best Phở broth in the Melville / Fremantle area hands down. You can taste the depth and hours of simmering—not powdery stock like other spots. And the crispy chicken rice is legendary. Quick friendly service every time.",
    dish: "Traditional Rare Beef Phở & Crispy Chicken Rice",
    date: "Verified Google Review"
  },
  {
    id: 2,
    name: "Sophie C.",
    location: "Palmyra · Google Maps Review",
    rating: 5,
    text: "Authentic, generous portions, and lovely staff. We come here every Friday evening with the kids. The seafood laksa has a wonderful rich broth with heaps of prawns and tofu. Easy 3-hour parking at Hawaiian's Melville makes it stress-free!",
    dish: "Seafood Laksa & Spring Rolls",
    date: "Verified Google Review"
  },
  {
    id: 3,
    name: "David & Brenda T.",
    location: "East Fremantle · Google Maps Review",
    rating: 5,
    text: "Viet Quan is our go-to for weekday takeaway and casual Sunday dinners. Crispy skin chicken is cooked to perfection, fresh rice paper rolls are crisp and refreshing, and the iced coffee is as strong and authentic as in Saigon.",
    dish: "Crispy Chicken Rice & Cà Phê Sữa Đá",
    date: "Verified Google Review"
  },
  {
    id: 4,
    name: "Liam O.",
    location: "Attadale · Google Maps Review",
    rating: 5,
    text: "Remarkable value for money! In an era where dining out is getting expensive, Viet Quan serves huge, steaming bowls of noodles and hearty rice plates around $20. Clean, bright, and wheelchair accessible.",
    dish: "Mì Xào Stir-Fried Egg Noodles",
    date: "Verified Google Review"
  }
];

export const FAQS = [
  {
    q: "Where exactly is Viet Quan located in Hawaiian's Melville?",
    a: "We are located at Shop 20 inside Hawaiian’s Melville Shopping Centre, 380 Canning Highway in Bicton WA 6157. You will find us near the central open courtyard area."
  },
  {
    q: "What are your opening hours?",
    a: "We are open Tuesday through Sunday from 11:00 AM to 9:00 PM for both lunch and dinner. We are closed on Mondays."
  },
  {
    q: "Is parking available at the shopping centre?",
    a: "Yes! Hawaiian's Melville provides free parking for up to 3 hours with over 460 car spaces right outside, including ACROD accessible bays and street parking along Canning Highway."
  },
  {
    q: "How can I view real photos of the food and restaurant?",
    a: "You can view authentic, customer-uploaded photos directly on our official Google Maps listing by clicking 'View Photos on Google Maps' or checking our interactive map section."
  },
  {
    q: "Do you offer takeaway and dine-in?",
    a: "Yes, we offer casual indoor air-conditioned dining, licensed alfresco outdoor seating, and fast takeaway collection. You can place your takeaway order directly through our website or by calling us."
  },
  {
    q: "Are gluten-free and vegetarian options available?",
    a: "Yes! Traditional Vietnamese phở (made with pure rice noodles), fresh rice paper rolls (Gỏi Cuốn), and many stir-fry dishes can be prepared gluten-free or vegetarian upon request."
  }
];

