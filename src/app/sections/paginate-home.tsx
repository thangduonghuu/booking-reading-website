'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";


export default function PaginateHome() {
    return (
        <div className="w-full flex items-center justify-center">
            <Swiper
                pagination={true} modules={[Pagination]} className="w-[675px] h-[500px]"
            >
                <SwiperSlide >
                    <div className="relative w-full h-full flex items-center justify-center ">
                        <Image
                            src="/images/home-background-1.png"
                            alt="Home"
                            fill
                            className="object-contain !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative w-full h-full flex items-center justify-center ">

                        <Image
                            src="/images/home-background-2.png"
                            alt="Home"
                            fill
                            className="object-contain !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative w-full h-full flex items-center justify-center ">

                        <Image
                            src="/images/home-background-3.png"
                            alt="Home"
                            fill
                            className="object-contain !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}