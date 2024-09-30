import Home from "../pages/Home";
import Categories from "../pages/Categories";
import ProductDetail from "../components/ProductDetail";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Cart from "../pages/Cart";
import NotFound from "../components/NotFound";
import Comment from "../pages/Comment";
import Returns from "../components/Returns";

export const router = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/product",
    element: <Categories/>,
    name: "category",
  },
  {
    path: "/product/:id",
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
  {
    path: "/comment",
    element: <Comment />,
    name: "comment",
  },
  {
    path: "/returns",
    element: <Returns />,
    name: "comment",
  },
  {
    path: "*",
    element: <NotFound/>,
    name: "",
  },
];
