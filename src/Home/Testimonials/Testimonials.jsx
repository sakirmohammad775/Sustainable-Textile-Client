import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
const Testimonials = () => {
    return (
        <section>
            <SectionTitle subHeading="What Our Client say" heading="Testimonials"></SectionTitle>

            <Swiper>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;