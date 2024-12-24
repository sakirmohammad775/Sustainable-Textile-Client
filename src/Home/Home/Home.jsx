import { Button, Checkbox, Label, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import HeroSection from '../Hero/HeroSection';
import Swiper from '../Swiper/Swiper';

const Home = () => {
    return (
        <>
       <HeroSection></HeroSection>
       <Swiper></Swiper>
        </>
    );
};

export default Home;