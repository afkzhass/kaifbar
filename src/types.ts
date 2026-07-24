export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number; // base price in KZT (тг)
  displayPrice?: string; // e.g. "2790 / 2990 / 3190" or "1 590 тг"
  description?: string;
  image: string;
  tags?: ('hit' | 'spicy' | 'new' | 'chef' | 'vegetarian')[];
  variants?: Variant[];
  weightOrVolume?: string; // e.g. "1 кг", "0.4 кг", "50 мл", "1 л"
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
  type: 'food' | 'bar' | 'sets' | 'hookah' | 'other';
  image?: string;
  items: MenuItem[];
}

export interface CartItem {
  cartId: string; // unique ID including selected variant
  item: MenuItem;
  selectedVariant?: Variant;
  quantity: number;
  note?: string;
}

export type ActiveFilter = 'all' | 'food' | 'bar' | 'hits' | 'spicy';
