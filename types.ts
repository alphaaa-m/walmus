export interface Division {
  id: string;
  name: string;
  fullName: string;
  description: string;
  industry: string;
  productsOrServices: string;
  targetCustomers: string;
  team: string;
  expansionPlans: string;
  status: 'Launching Soon' | 'In Setup Phase';
  path: string;
  color: string;
  iconName: 'Activity' | 'Utensils' | 'Shirt' | 'Code' | 'GraduationCap';
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
