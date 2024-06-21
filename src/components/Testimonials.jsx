import React, { useRef, useState } from 'react';
import myimg from '../assets/Resume_image.jpg';
import AllTestimonials from '../Testi-Model';
import { TestiCard } from './Testi-Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiper.css'

// import required modules
import { EffectCards } from 'swiper/modules';

function Testimonials() {

    return (

        <div data-scroll data-scroll-speed="0.3"
            className='z-[2] px-[5.5vw] flex flex-col items-center relative w-full bg-[#181818] text-[#e9e9e9] font-["Clash"] rounded-[2.2vw] py-[10vh] pb-[100px] mt-[-110px]'>
            {/* <div className='sectionTitle w-full'>
                <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold'>What my</h1>
                <div className='flex items-center gap-[8px]'>
                    <h1 className='text-[4vw] leading-none font-semibold font-[tiny]'> cleints</h1>
                    <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold '>say</h1>
                </div>
            </div> */}
            <div className='flex items-center gap-[8px]'>
                <h1 className='text-[4vw] leading-none font-semibold font-[tiny]'>Cleint</h1>
                <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold '>Reviews</h1>
            </div>
            <div className="CardContainer mt-[4vw]">
                <Swiper effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">
                    {AllTestimonials.map((item) => {
                        return <SwiperSlide>
                            <TestiCard
                                key={item.id}
                                image={item.image}
                                review={item.review}
                                name={item.name}
                                post={item.post}
                            />
                        </SwiperSlide>;
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default Testimonials;
