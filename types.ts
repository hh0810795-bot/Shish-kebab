export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isOffer?: boolean;
  oldPrice?: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}