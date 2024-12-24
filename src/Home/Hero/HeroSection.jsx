
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/hero-1.webp';
import img2 from '../../assets/IMG-Biodegradable-Textile-G01.webp';
import img3 from '../../assets/IMG-Biodegradable-Textile.webp';
import img4 from '../../assets/IMG-Sustainable-Textile-G01.webp';

const HeroSection = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>

    </>
  );
};

export default HeroSection;
