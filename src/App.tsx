
import { useState } from "react";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

// Create sample user
const user: User = {
  id: "1",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  role: "Software Engineer"
};

// Create sample product
const product: Product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "Wireless headphones with noise cancellation.",
  inStock: true
};

export default function App() {

  // Track alert visibility
  const [showAlert, setShowAlert] = useState(false);

  // Track products added to cart
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Handle add to cart click
  const handleAddToCart = (productId: string) => {
    setCartItems((prevItems) => [...prevItems, productId]);
    setShowAlert(true);
  };

  // Handle edit profile click
  const handleEdit = (userId: string) => {
    alert(`Editing user ${userId}`);
  };

  // Display component library
  return (
    <div style={{ padding: "20px" }}>

      <h1>Lab 9.1 Component Library</h1>

      {/* Display cart count */}
      <p>Cart Items: {cartItems.length}</p>

      {/* Show alert after adding product */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        >
          <p>Your cart has been updated.</p>
        </AlertBox>
      )}

      {/* Display user profile */}
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={handleEdit}
      >
        <p>Last login: 2 hours ago</p>
      </UserProfileCard>

      {/* Display product details */}
      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={handleAddToCart}
      >
        <p>Free shipping available</p>
      </ProductDisplay>

    </div>
  );
}
