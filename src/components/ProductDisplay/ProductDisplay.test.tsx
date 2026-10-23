
import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import ProductDisplay from "./ProductDisplay";

// Clear component after each test
afterEach(() => cleanup());

// Create sample product
const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "Wireless headphones with noise cancellation.",
  inStock: true
};

// Test product name
test("displays product name", () => {
  render(<ProductDisplay product={product} />);

  expect(screen.getByText("Wireless Headphones")).toBeInTheDocument();
});

// Test product price
test("displays product price", () => {
  render(<ProductDisplay product={product} />);

  expect(screen.getByText("Price: $199.99")).toBeInTheDocument();
});

// Test stock status
test("displays out of stock message", () => {
  render(
    <ProductDisplay
      product={{ ...product, inStock: false }}
    />
  );

  expect(screen.getByText("Out of Stock")).toBeInTheDocument();
});
