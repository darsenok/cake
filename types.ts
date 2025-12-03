export interface Filling {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'bento' | 'standard' | 'premium';
}

export interface PriceItem {
  id: string;
  title: string;
  price: string;
  detail?: string;
  isHighlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
