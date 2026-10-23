# Lab 9.1 — Component Creation & Props

## Description
This React TypeScript project creates reusable components for displaying alerts, user profiles, and product information.

## Features
1. AlertBox displays success, error, warning, and info messages.
2. UserProfileCard displays user information with optional details.
3. ProductDisplay shows product details and stock availability.
4. Add to Cart updates cart count and displays a success alert.
5. TypeScript interfaces define props, and automated tests check component behavior.

## How to Run
```bash
npm install
npm run dev
```
Open the localhost link in your browser.

Run tests:
```bash
npm run test
```

## Component Usage
Components are imported into `App.tsx`. Props customize displayed information, and children allow additional content.

## Reflection
**1. How did you handle optional props?**  
I used `?` in interfaces, default values, and conditional rendering.

**2. What influenced your interface design?**  
I focused on required information, optional features, and reusability.

**3. How did you ensure type safety?**  
I used TypeScript interfaces and checked for compilation errors.

**4. What challenges came with composition?**  
Passing props and connecting button events took practice. Testing helped verify functionality.

## References
React documentation, Vite documentation, and instructor examples.