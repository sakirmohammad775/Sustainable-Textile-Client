import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const location =useLocation()
    const noFooter=location.pathname.includes('signIn')
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
       {noFooter|| <Footer></Footer>}
        </>
    );
};

export default Main;