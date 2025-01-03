import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import OurProducts from "../OurProducts/OurProducts";
import BlogPage from "../BlogPage/BlogPage";
import ContactUs from "../ContactUs/ContactUs";
import Order from "../Order/Order";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";
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
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);