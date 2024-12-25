
import React from 'react';
import HeroSection from '../Hero/HeroSection';
import PopularItem from '../PopularItem/PopularItem';
import FeaturedItem from './FeaturedItem/FeaturedItem';


const Home = () => {
    return (
        <>
       <HeroSection></HeroSection>
       {/* <Swiper></Swiper> */}
       <PopularItem></PopularItem>
       <FeaturedItem></FeaturedItem>
        </>
    );
};

export default Home;