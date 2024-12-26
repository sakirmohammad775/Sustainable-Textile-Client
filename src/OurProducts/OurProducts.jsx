import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../assets/IMG-Sustainable-Textile-G01.webp'
const OurProducts = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Sustainable|| Our Products</title>
            </Helmet>
            <Cover img={img}title="Our Products"></Cover>
            
            
            
        </div>
    );
};

export default OurProducts;