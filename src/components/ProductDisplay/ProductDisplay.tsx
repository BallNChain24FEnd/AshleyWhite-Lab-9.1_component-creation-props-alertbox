
import type { ProductDisplayProps } from "../../types";

// Create product display component
export default function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}: ProductDisplayProps) {

  // Style product card
  const style = {
    border: "2px solid gray",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px"
  };

  // Display product information
  return (
    <div style={style}>

      {/* Show image if provided */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width="150"
        />
      )}

      {/* Display product name */}
      <h2>{product.name}</h2>

      {/* Display product price */}
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Show description if enabled */}
      {showDescription && (
        <p>{product.description}</p>
      )}

      {/* Show stock status if enabled */}
      {showStockStatus && (
        <p>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Show add to cart button if provided */}
      {onAddToCart && (
        <button
          type="button"
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}

      {/* Display additional content */}
      {children}
    </div>
  );
}
