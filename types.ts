
export interface Category {
  name: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
} 