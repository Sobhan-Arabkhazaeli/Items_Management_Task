# ITEMS-MANAGEMENT-TASK

 ## Built with ❤️ for SavvyTech Team

A modern, full-featured Product Management Interface built with **React + TypeScript**, featuring real-time CRUD operations, product comparisons, advanced filtering, and a beautiful glassmorphism UI design.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

### 📝 Product Management (CRUD)
- **Create, Read, Update, Delete** products with intuitive modal interfaces
- **Real-Time Updates** - Instant UI synchronization with backend changes
- **Form Validation** - Robust validation using Yup schemas
- **Image Support** - Product image upload and display capabilities

### 🔍 Advanced Search & Filtering
- **Smart Search** - Real-time product search by title and description
- **Multi-criteria Sorting** - Sort by date, name, or custom parameters
- **Pagination** - Efficient data loading with customizable page sizes
- **Filter System** - Combine multiple filters for precise results

### ⚖️ Product Comparison
- **Side-by-Side Comparison** - Compare two products in a dedicated modal
- **Feature Comparison** - Visual diff highlighting for product attributes
- **Smart Selection** - Intuitive product selection for comparison

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effects throughout
- **Dark/Light Mode** - Seamless theme switching with persistence
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - CSS transitions and micro-interactions
- **Loading States** - Skeleton loaders and progress indicators

### 🔧 Technical Excellence
- **TypeScript** - Full type safety and better developer experience
- **React Query** - Optimized data fetching and caching
- **Redux Toolkit** - Predictable state management
- **Component Architecture** - Reusable and maintainable code structure
- **Custom Hooks** - Modular logic encapsulation

## 🏗️ Project Structure

```
ITEMS-MANAGEMENT-TASK/
├── public/
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── App.tsx
│   │   └── ProviderApp.tsx
│   ├── assets/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── buttons/
│   │   │   │   └── DarkModeButton.tsx
│   │   │   ├── compare-modal/
│   │   │   │   └── index.tsx
│   │   │   ├── CompareButton/
│   │   │   │   └── index.tsx
│   │   │   ├── CompareToggleButton/
│   │   │   │   └── index.tsx
│   │   │   ├── confirm-delete-modal/
│   │   │   │   └── index.tsx
│   │   │   ├── form-product/
│   │   │   │   └── index.tsx
│   │   │   └── navbar/
│   │   │       ├── Navbar.tsx
│   │   │       └── NavBarDropDown.tsx
│   │   ├── pagination/
│   │   │   └── index.tsx
│   │   ├── product-card/
│   │   │   ├── CardButtons.tsx
│   │   │   ├── CardFooter.tsx
│   │   │   ├── CardHeader.tsx
│   │   │   └── index.tsx
│   │   ├── section-top-content/
│   │   │   ├── query-boxes/
│   │   │   │   ├── RowsOfPageSelect.tsx
│   │   │   │   ├── SearchInput.tsx
│   │   │   │   └── SortSelect.tsx
│   │   │   └── index.tsx
│   │   ├── select-input/
│   │   │   └── index.tsx
│   │   ├── skeleton/
│   │   │   └── UserCard_Skeleton.tsx
│   │   ├── title-section/
│   │   │   └── index.tsx
│   │   ├── upsert-product-modal/
│   │   │   └── index.tsx
│   │   └── wrapper-cards/
│   │       └── index.tsx
│   ├── config/
│   │   ├── react-query/
│   │   │   └── index.tsx
│   │   └── router/
│   │       └── MainRoute.tsx
│   ├── core/
│   │   ├── constants/
│   │   │   ├── local-storage/
│   │   │   │   └── index.tsx
│   │   │   └── menu-navbar/
│   │   │       └── index.tsx
│   │   ├── hooks/
│   │   │   ├── local-storage/
│   │   │   │   └── useLocalStorage.ts
│   │   │   └── theme/
│   │   │       └── useTheme.ts
│   │   ├── models/
│   │   │   └── production.ts
│   │   ├── services/
│   │   │   └── APIs/
│   │   │       ├── delete-api/
│   │   │       │   └── DeleteProducts.ts
│   │   │       ├── get-api/
│   │   │       │   └── GetAllProducts.ts
│   │   │       ├── post-api/
│   │   │       │   └── CreateProducts.ts
│   │   │       ├── put-api/
│   │   │       │   └── UpdateProducts.ts
│   │   │       └── interceptor/
│   │   │           └── index.ts
│   │   ├── types/
│   │   │   ├── api/
│   │   │   │   └── productsParams.ts
│   │   │   ├── components/
│   │   │   │   ├── formProducts.ts
│   │   │   │   └── navbar.ts
│   │   │   └── models/
│   │   ├── utils/
│   │   │   └── format-date/
│   │   │       └── index.ts
│   │   └── validation/
│   │       ├── index.ts
│   │       └── product.validation.ts
│   ├── pages/
│   │   └── products-page/
│   │       ├── partials/
│   │       │   ├── header-section/
│   │       │   │   ├── menu-box/
│   │       │   │   │   ├── AddProductButton.tsx
│   │       │   │   │   └── index.tsx
│   │       │   │   └── index.tsx
│   │       │   └── index.tsx
│   │       └── index.tsx
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── ChangeTheme.ts
│   │   │   ├── CompareProducts.ts
│   │   │   ├── ProductsParams.ts
│   │   │   └── store.ts
│   │   └── index.ts
│   ├── index.css
│   ├── main.tsx
│   └── hero.ts
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/items-management-task.git

# Navigate to project directory
cd items-management-task

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling & Glassmorphism |
| **Redux Toolkit** | State Management |
| **React Query** | Data Fetching |
| **React Router** | Navigation |
| **HeroUI** | UI Components |
| **Yup** | Form Validation |
| **React Icons** | Icon Library |

## 💡 Key Components

### Product Management
```tsx
// Add new product
<AddProductButton />

// Edit existing product
<UpsertProductModal product={product} />

// Delete confirmation
<ConfirmDeleteModal />
```

### Search & Filter
```tsx
// Search input
<SearchInput setSearch={setSearch} />

// Sort selection
<SortSelect value={sortBy} onChange={setSortBy} />

// Pagination
<Pagination currentPage={page} totalPages={totalPages} />
```

### Product Display
```tsx
// Product card with glassmorphism effect
<ProductCard item={product} />

// Card skeleton during loading
<UserCard_Skeleton />
```

## 🎨 UI Features

### Glassmorphism Design
The application features a modern glassmorphism design with:
- Backdrop blur effects
- Semi-transparent backgrounds
- Multi-layer shadows
- Smooth transitions

### Dark/Light Theme
- System preference detection
- Manual toggle with persistence
- Smooth theme transitions
- Consistent color scheme across components

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized navigation for mobile devices

## 🔧 Custom Hooks

### useTheme
```tsx
const { theme, toggleTheme } = useTheme();
```

### useLocalStorage
```tsx
const [value, setValue] = useLocalStorage('key', 'default');
```

### useProducts
```tsx
const { data, isLoading, error } = useProducts({
  page,
  limit,
  sortBy,
  search
});
```

## 📱 API Integration

The application connects to a real backend with:
- RESTful API endpoints
- Request/response interceptors
- Error handling
- Loading states
- Optimistic updates

## 👨‍💻 Author

**Sobhan ArabKhazaeli**
- Developed for SavvyTech Team
- Built with React.js and TypeScript

---
## 🆘 Support

**For support and questions:**

 - Create an issue in the repository
 - Check the documentation

**⭐ Star this repo if you found it helpful!**
