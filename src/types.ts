export type DishCategory = 
  | 'all'
  | 'soups-pho'
  | 'rice-mains'
  | 'starters'
  | 'noodles-laksa'
  | 'beverages';

export type DietaryTag = 'GF' | 'Vegetarian' | 'Spicy' | 'Chef Special' | 'Popular';

export interface MenuItem {
  id: string;
  name: string;
  vietnameseName?: string;
  category: 'soups-pho' | 'rice-mains' | 'starters' | 'noodles-laksa' | 'beverages';
  price: number; // in AUD
  description: string;
  image?: string;
  tags: DietaryTag[];
  isSpicy?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
}

export interface CartItem {
  cartId: string;
  menuItem: MenuItem;
  quantity: number;
  spiceLevel?: string;
  addonNotes?: string;
}

export interface Reservation {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor' | 'outdoor' | 'any';
  specialRequests?: string;
  createdAt: string;
}
