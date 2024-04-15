import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./pages/Cart";

const Grocery = lazy(() => import("../src/components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error/>,
    children: [
      {
        path: "/",
        // index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<p>Fetching the data...Please wait</p>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
