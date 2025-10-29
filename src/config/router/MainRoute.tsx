// ** React Imports
import { lazy } from "react";

// ** Third Party Components
import { createBrowserRouter } from "react-router-dom";

// ** Layouts Imports
import MainLayout from "../../app/layouts/MainLayout";

// ** Pages Imports
const ProductsPage = lazy(() => import("../../components/pages/products-page"));

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <ProductsPage /> }],
  },
]);
