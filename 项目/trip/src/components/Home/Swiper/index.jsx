import React from 'react';
import { Swiper, Image } from 'react-vant';
import { images } from './images';
import './images.css';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper 
        autoplay={3000}
        indicator
        loop
        width="100%"
        height={200}
      >
        {images.map((image, index) => (
          <Swiper.Item key={index}>
            <Image 
 
              src={image}
              width="100%"
              height="100%"
              fit="cover"
            />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};