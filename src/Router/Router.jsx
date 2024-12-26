import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import OurProducts from "../OurProducts/OurProducts";
import BlogPage from "../BlogPage/BlogPage";
import ContactUs from "../ContactUs/ContactUs";
import Order from "../Order/Order";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/ourProducts',
          element:<OurProducts></OurProducts>
        },
        {

          path:'/blogPage',
          element:<BlogPage></BlogPage>
        },
        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    },
  ]);