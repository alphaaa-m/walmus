export interface Division {
  id: string;
  name: string;
  description: string;
  path: string;
  color: string;
  iconName: 'Activity' | 'Utensils' | 'Shirt';
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
