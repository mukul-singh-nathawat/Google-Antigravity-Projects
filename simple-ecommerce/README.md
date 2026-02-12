# Simple E-commerce Application

This is a simple e-commerce application built with Vite + React.

## Prerequisites

- **Node.js**: You need to have Node.js installed.
  - Download from: [nodejs.org](https://nodejs.org/)
- **Git Bash** or **PowerShell**

## Setup Instructions

1.  **Install Dependencies**
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Run the Application**
    Start the development server:
    ```bash
    npm run dev
    ```
    Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Features

- **Product Listing**: Browse available products.
- **Authentication**: Sign up and Log in (mocked using local storage).
- **Wishlist**: Save items for later.
- **Cart**: Add items, adjust quantities, and checkout.
- **Orders**: View your order history.

## Project Structure

- `src/components`: UI components (Navbar, ProductCard).
- `src/pages`: Application pages.
- `src/context`: State management (Auth, Shop).
- `src/index.css`: Global styles.
