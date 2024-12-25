import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featuredImg from '../../../Assets/IMG-Sustainable-Textile-G01.webp';
import './Featured.css';

const FeaturedItem = () => {
    return (
        <div
            className="featured-item bg-fixed bg-cover bg-center relative text-white pt-8 my-20"
            style={{
                backgroundImage: `url(${featuredImg})`,
                opacity: 0.9, // Adjust opacity if necessary
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay */}
            <div className="relative z-10 py-8 px-16">
                <SectionTitle subHeading="Check it out" heading="Featured Item" />
                <div className="md:flex justify-center items-center pb-20 pt-12 py-20 px-36">
                    <div>
                        <img
                            src={featuredImg}
                            alt=""
                            className="rounded-lg shadow-lg border border-gray-300"
                        />
                    </div>
                    <div className="md:ml-10 text-white">
                        <h2 className="text-2xl font-bold">Get Your Products</h2>
                        <p className="uppercase text-gray-300">Where You Can Get</p>
                        <p className="mt-4 text-gray-200">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Pariatur velit deleniti possimus error laborum doloremque facere
                            harum, molestias magni modi. In obcaecati ea blanditiis quo, quia
                            ipsam aperiam mollitia impedit!
                        </p>
                        <button className='btn btn-outline border-0 border-b-4 mt'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
