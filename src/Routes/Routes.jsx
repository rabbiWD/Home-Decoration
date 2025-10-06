import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import MainLayout from "../Layouts/MainLayout";

// named exports
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
        index: true,
         element: <Home></Home>
        },
           {
    path: '/products',
    element: <Products></Products>
  },
    ]
  },
  
])

export default router