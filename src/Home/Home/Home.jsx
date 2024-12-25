
import React from 'react';
import HeroSection from '../Hero/HeroSection';
import PopularItem from '../PopularItem/PopularItem';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <>
       <HeroSection></HeroSection>
       {/* <Swiper></Swiper> */}
       <PopularItem></PopularItem>
       <FeaturedItem></FeaturedItem>
       {/* <Testimonials></Testimonials> */}
        </>
    );
};

export default Home;