import React from 'react';
import Home from '../Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const Main = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    );
};

export default Main;