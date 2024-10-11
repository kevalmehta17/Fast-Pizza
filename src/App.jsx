import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Error from "./UI/Error";
import AppLayout from "./UI/AppLayout";

//new way to implement the React router through the createBrowserRoute and providing the Applayout first and then other things as a child route, first it render the Applayout then likewise it goes to one by one all route according to  the user need

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

//Providing the all router through RouterProvider
function App() {
  return <RouterProvider router={router} />;
}

export default App;
