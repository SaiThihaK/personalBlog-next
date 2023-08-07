"use client"
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';

export default function Slider() {
    const data: string[] = ['PHP', 'Javascript', 'ReactJs', 'Laravel', 'NextJs', 'VueJs', 'Go', 'Node', 'Express']

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} loop={true} breakpoints={{
                '@0.00': {
                    slidesPerView: 4,
                    spaceBetween: 1,
                },
                '@0.75': {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
                '@1.00': {
                    slidesPerView: 8,
                    spaceBetween: 10,
                }
            }} spaceBetween={20} className="mySwiper ">
                {
                    data.map((item: string, index: number) => {

                        return (
                            <SwiperSlide key={index}>{item}</SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
