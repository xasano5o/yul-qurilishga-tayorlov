import React from 'react';
import { Carousel } from 'antd';

import Yul  from "../../../assets/download.jpeg"
const contentStyle = {
    margin: 0,
    height: '55vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CaruselCom = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel autoplay autoplaySpeed={2000} afterChange={onChange}>
    
            <div>
                <h3 style={contentStyle}>
                    <img className='w-full h-full responsice-carusel-img' src={'https://yulqurilish.uz/images/slides/slide1.jpg'} alt="" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img className='w-full h-full' src={'https://yulqurilish.uz/images/slides/slide3.jpg'} alt="" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img className='w-full h-full' src={'https://yulqurilish.uz/images/slides/slide2.jpg'} alt="" />
                </h3>
            </div>

        </Carousel>
    );
};
export default CaruselCom;