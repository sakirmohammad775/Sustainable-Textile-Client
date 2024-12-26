import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import coverImg from '../assets/1_W34LpsdOb7TbOyKctoSm6w.jpg'
import useItem from '../Hooks/useItem';
import ProductsCategory from './ProductsCategory/ProductsCategory';
import SectionTitle from '../Component/SectionTitle/SectionTitle';
import polyesterImg from '../assets/IMG-Biodegradable-Textile.webp'
const OurProducts = () => {
    const [item] = useItem();

    const popular = item.filter(item => item.category === "Popular")
    const cotton = item.filter(item => item.category === "Cotton")
    const polyester = item.filter(item => item.category === "Polyester")
    const nylon = item.filter(item => item.category === "nylon")
    const denim = item.filter(item => item.category === "denim")
    return (
        <div className=''>
            <Helmet>
                <title>Sustainable|| Our Products</title>
            </Helmet>
            {/* Main Cover */}
            <Cover img={coverImg} title="Our Products" />

            {/* Popular Section */}
            <SectionTitle subHeading="Popular" heading="We Deliver Our Best" />
            <ProductsCategory items={popular} title="Popular Products" coverImg={coverImg} />

           
            <ProductsCategory items={cotton} title="Cotton Products" coverImg={coverImg} />
             <ProductsCategory items={polyester} title="Polyester Products" coverImg={polyesterImg} />
             <ProductsCategory items={denim} title="Polyester Products" coverImg={polyesterImg} />
             <ProductsCategory items={nylon} title="Polyester Products" coverImg={polyesterImg} />







        </div>
    );
};

export default OurProducts;