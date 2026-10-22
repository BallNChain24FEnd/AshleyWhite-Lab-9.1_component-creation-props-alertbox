
// Import ReactNode type
import type { ReactNode } from 'react';

// Define alert types
export type AlertType = 'success' | 'error' | 'warning' | 'info';

// Define AlertBox props
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: ReactNode;
}

// Define user information
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

// Define UserProfileCard props
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: ReactNode;
}

// Define product information
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

// Define ProductDisplay props
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: ReactNode;
}
