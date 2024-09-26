import Home from "../pages/Home";
import Categories from "../pages/Categories";
import ProductDetail from "../components/ProductDetail";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Cart from "../pages/Cart";

export const router = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/category",
    element: <Categories/>,
    name: "category",
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    name: "product-name",
  },
  {
    path: "/cart",
    element: <Cart/>,
    name: "cart",
  },
  {
    path: "/login",
    element: <Login />,
    name: "kirish",
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    name: "kirish",
  },
];
