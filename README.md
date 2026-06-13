# AURA - Modern Fashion E-Commerce

AURA is a premium, modern, and highly interactive fashion e-commerce web application. Designed with a sleek aesthetic, smooth animations, and high performance in mind.

## 🌟 Features

- **Modern UI/UX**: Premium high-fashion aesthetic with a dark mode experience.
- **Smooth Animations**: Integrated with `framer-motion` for page transitions and scroll-based entrance animations.
- **Smooth Scrolling**: Fluid browsing experience powered by `lenis`.
- **Responsive Design**: Fully responsive layout across mobile, tablet, and desktop viewports, using Tailwind CSS.
- **E-Commerce Functionality**: Product details, shopping cart management, wishlist, and filtering options.
- **Interactive Elements**: Custom cursor and magnetic buttons for enhanced user engagement.
- **Admin & User Dashboards**: Complete product management and user data visualization interfaces.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19) via [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Manthan-Sinojiya/AURA.git
   cd AURA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, ProductCard, CustomCursor, etc.)
- `src/pages/`: Main application pages (Home, About, Menu, ProductDetails, Cart, AdminDashboard, etc.)
- `src/context/`: React context providers (e.g., ShopContext)
- `src/assets/`: Static assets like images and global CSS
- `src/App.jsx`: Main application routing and setup

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist/` directory containing the optimized static assets ready for deployment.
