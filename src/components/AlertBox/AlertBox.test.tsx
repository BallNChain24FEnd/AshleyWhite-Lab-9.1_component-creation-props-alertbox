
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AlertBox from "./AlertBox";

// Test alert message
test("displays alert message", () => {
  render(
    <AlertBox type="success" message="Profile updated!" />
  );

  expect(screen.getByText("Profile updated!")).toBeInTheDocument();
});

// Test close button
test("displays close button", () => {
  render(
    <AlertBox
      type="error"
      message="Something went wrong!"
      onClose={() => {}}
    />
  );

  expect(screen.getByText("Close")).toBeInTheDocument();
});

// Test children content
test("displays additional content", () => {
  render(
    <AlertBox type="info" message="Information">
      <p>More details here</p>
    </AlertBox>
  );

  expect(screen.getByText("More details here")).toBeInTheDocument();
});
