export const business = {
  phone: '+61 429 013 944', tel: '+61429013944',
  address: '380 Canning Highway, Bicton WA 6157',
  maps: 'https://www.google.com/maps?cid=4854403087101542406',
  booking: 'https://www.google.com/maps/reserve/v/dine/c/kj07Xi1Zp5Y',
};
export type Dish = {id:string; name:string; vietnamese:string; category:string; price:number; description:string; image?:string; option?:string};
export const dishes: Dish[] = [
  {id:'pho-rare',name:'Rare beef phở',vietnamese:'Phở tái',category:'Noodle bowls',price:18,description:'Traditional beef broth, rice noodles, rare beef and fresh herbs.',image:'map-8',option:'Gluten-free option'},
  {id:'pho-combination',name:'Combination beef phở',vietnamese:'Phở đặc biệt',category:'Noodle bowls',price:20,description:'A generous bowl of beef, rice noodles and fragrant broth, with herbs on the side.',image:'map-4',option:'Gluten-free option'},
  {id:'pho-chicken',name:'Chicken phở',vietnamese:'Phở gà',category:'Noodle bowls',price:18,description:'Chicken with rice noodles, spring onion and coriander.',image:'map-7',option:'Gluten-free option'},
  {id:'bun-bo',name:'Bún bò Huế',vietnamese:'Huế-style spicy noodle soup',category:'Noodle bowls',price:19,description:'Pork and beef spicy soup with thick rice vermicelli and fresh herbs.',option:'Gluten-free option'},
  {id:'bun-pork',name:'Grilled pork & spring roll vermicelli',vietnamese:'Bún thịt nướng',category:'Noodle bowls',price:19,description:'Fine vermicelli, fresh salad, crushed peanuts and fish sauce dressing.',image:'map-5'},
  {id:'bun-tofu',name:'Lemongrass tofu vermicelli',vietnamese:'Bún đậu hũ',category:'Noodle bowls',price:18,description:'Lemongrass tofu, vermicelli and fresh salad.',option:'Vegan option'},
  {id:'rice-pork',name:'Grilled pork chop rice',vietnamese:'Cơm sườn nướng',category:'Rice dishes',price:20,description:'Marinated pork chop, fried rice, fried egg, salad and clear soup.',image:'map-3'},
  {id:'rice-chicken',name:'Grilled chicken rice',vietnamese:'Cơm gà nướng',category:'Rice dishes',price:20,description:'Marinated chicken thigh, fried rice, fried egg, salad and clear soup.',image:'map-6'},
  {id:'rice-crispy',name:'Crispy chicken rice',vietnamese:'Cơm gà giòn',category:'Rice dishes',price:18,description:'Crispy skin Maryland chicken, fried rice, salad, hoisin dipping sauce and clear soup.'},
  {id:'rice-duck',name:'Roast duck rice',vietnamese:'Cơm vịt quay',category:'Rice dishes',price:21,description:'Roast duck, fried rice, salad, house hoisin dipping sauce and clear soup.',option:'Gluten-free option'},
  {id:'rice-beef',name:'Shakin’ beef rice',vietnamese:'Cơm bò lúc lắc',category:'Rice dishes',price:25,description:'Diced beef steak tossed over high flame, fried rice, salad and lime pepper salt.',option:'Gluten-free option'},
  {id:'rice-green',name:'Việt Quán green fried rice',vietnamese:'Cơm chiên ngọc bích',category:'Rice dishes',price:24,description:'Our signature green fried rice with egg, prawn, squid and vegetables.',option:'Gluten-free option'},
];
export const menuPages = [
  {src:'menu-2.webp',name:'Entrées & soups'}, {src:'menu-5.webp',name:'Noodle bowls'},
  {src:'menu-3.webp',name:'Rice dishes'}, {src:'menu-4.webp',name:'Stir-fried noodles'},
  {src:'menu-1.webp',name:'Dietary information'},
];
