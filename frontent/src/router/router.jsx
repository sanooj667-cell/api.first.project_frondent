import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout/layout";
import Hero from "../pages/hero";
import About from "../pages/About";
import ErrorPage from "../pages/error_pages";
import Login from "../pages/login";
import Register from "../pages/Register";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage />,

    children: [
        {
            path : "/",
            element : <Hero />,
            
        },

        {
            path : "about",
            element : <About />
        },

        {
            path : "login",
            element : <Login />
        },

        {
            path : "about",
            element : <Register />
        },
        
    ]
  },
]);
