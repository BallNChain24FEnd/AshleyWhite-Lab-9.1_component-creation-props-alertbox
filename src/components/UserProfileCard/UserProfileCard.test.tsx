
import { test, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import UserProfileCard from "./UserProfileCard";

// Clear component after each test
afterEach(() => cleanup());

// Create sample user
const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer"
};

// Test user name
test("displays user name", () => {
  render(<UserProfileCard user={user} />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
});

// Test user email
test("displays user email", () => {
  render(<UserProfileCard user={user} showEmail={true} />);

  expect(screen.getByText("Email: john.doe@example.com")).toBeInTheDocument();
});

// Test hidden role
test("hides user role", () => {
  render(<UserProfileCard user={user} showRole={false} />);

  expect(screen.queryByText("Role: Software Engineer")).not.toBeInTheDocument();
});
