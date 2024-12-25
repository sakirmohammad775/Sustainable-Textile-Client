import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section>
            <SectionTitle subHeading="What Our Clients Say" heading="Testimonials" />

            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="testimonial-slide">
                        <p>
                            "This service is amazing! It has completely transformed the way I work. Highly recommend!"
                        </p>
                        <h4>- John Doe</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-slide">
                        <p>
                            "Excellent customer support and a great experience overall. Five stars from me!"
                        </p>
                        <h4>- Jane Smith</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-slide">
                        <p>
                            "Their commitment to sustainability and quality is unmatched. Truly inspiring."
                        </p>
                        <h4>- Emily Johnson</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;
