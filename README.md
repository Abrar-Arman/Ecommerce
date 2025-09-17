# E-Commerce  

## 📄 Project Overview

This is a **React + Redux Toolkit-based e-commerce application** where users can browse products, add them to a shopping cart or wishlist, and filter/search items. All cart and wishlist data are stored locally using **localStorage**, allowing the app to function fully without a backend.

Redux Toolkit is used for **global state management**, making it easy to handle the cart, wishlist, and other shared state efficiently.

---

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components (Shadcn components)
├── myComponents/    # Project-specific components built by combining custom code with Shadcn UI components
├── pages/           # Application pages and views
├── layouts/         # Layout components for wrapping pages (header, footer)
├── hooks/           # Custom React hooks for logic reuse
├── utils/           # Helper functions and utilities
├── types/           # TypeScript type definitions
├── my-routes/       # Application routes and route definitions
├── slices/          # Redux Toolkit slices for global state management (cart, wishlist)
├── constant/        # Static constant data (services, nav links, features)
├── main.jsx         # Entry point
├── store.ts         # Redux store setup 
└── index.css        # Global Tailwind styles


## ⚡ Key Features

- **Homepage**: Browse products, service and contact section.
- **Product** : Browse products,filter and search.
- **Product Details**: Full product info with options to add to Cart or Wishlist.
- **Shopping Cart**:
  - Add/remove items and adjust quantities.
  - Display total price.
  - Data persisted using **localStorage**.
- **Wishlist**: Save favorite products and move them to the cart.    
- **About**: Display Story and Features sections

## ⚡ Performance & Optimization

- **Lazy Loading**: improve initial load time.
- **React Query**: Handles data fetching with built-in caching, ensuring fast and efficient updates.

## 🖱 User Interaction & Navigation
- **Sharable URLs**: Users can share filtered product views via unique URLs ```useSearchParam```.
- **Pagination**: Products are paginated for easier browsing.
- **Alerts & Dialogs**: Confirmation dialogs and alerts are shown when removing items or performing important actions.

## 🆕 React 19 Features
This project leverages **React 19** features to improve performance and developer experience:

### ⚡ Automatic Memoization
- React 19 automatically memoizes components and values where possible, reducing unnecessary re-renders.  
- Improves performance **without manually using `useMemo` or `useCallback`**.  
- Helps your UI stay fast and responsive, especially when rendering product lists or cart items.

### 📝 Document Meta Support
- Built-in support for managing page `<title>` and `<meta>` tags directly in components.  
- Enables **dynamic meta updates per route**, improving SEO and social sharing experience.

### 🛠 React Compiler
- This project uses **React Compiler** for faster builds, enforce React rule, and better error overlays.  
- To check that your code does not violate React rules, run:  
  ```bash
  npx react-compiler-healthcheck@latest

