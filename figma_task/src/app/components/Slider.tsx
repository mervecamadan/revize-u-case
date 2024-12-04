"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";

const Slider: React.FC = () => {
    return (
        <div className="container relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-24 py-24">

            <div className="text-left max-w-[280px] mx-auto md:mx-0">
                <p className="text-mypink font-bold text-sm">TOP DESTINATION</p>
                <h3 className="text-black font-semibold text-2xl lg:text-2xl mt-2">
                    Explore top destination
                </h3>
            </div>

            <div className="relative mt-12">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >

                    {[
                        {
                            id: 1,
                            title: "Paradise Beach, Bantayan Island",
                            price: "$550.16",
                            location: "Rome, Italy",
                            rating: 4.8,
                            image: "/rectangle_6.png",
                        },
                        {
                            id: 2,
                            title: "Ocean with full of Colors",
                            price: "$20.99",
                            location: "Maldives",
                            rating: 4.5,
                            image: "/rectangle_6.2.png",
                        },
                        {
                            id: 3,
                            title: "Mountain View, Above the cloud",
                            price: "$150.99",
                            location: "United Arab Emirates",
                            rating: 5.0,
                            image: "/rectangle_6.3.png",
                        },
                        {
                            id: 4,
                            title: "Paradise Beach, Bantayan Island",
                            price: "$550.16",
                            location: "Rome, Italy",
                            rating: 4.8,
                            image: "/rectangle_6.png",
                        },
                        {
                            id: 5,
                            title: "Ocean with full of Colors",
                            price: "$20.99",
                            location: "Maldives",
                            rating: 4.5,
                            image: "/rectangle_6.2.png",
                        },
                        {
                            id: 6,
                            title: "Mountain View, Above the cloud",
                            price: "$150.99",
                            location: "United Arab Emirates",
                            rating: 5.0,
                            image: "/rectangle_6.3.png",
                        },
                    ].map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="w-[280px] h-[572px] mx-auto">

                                <div
                                    className="w-full h-[280px] bg-cover bg-center rounded-t-3xl"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>

                                <div className="bg-white rounded-b-3xl shadow-md px-4 py-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-black font-bold text-sm lg:text-base">
                                            {slide.title}
                                        </p>
                                        <p className="text-mypink font-bold text-sm lg:text-base">
                                            {slide.price}
                                        </p>
                                    </div>
                                    <p className="text-gray-500 text-xs lg:text-sm mt-2">
                                        {slide.location}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <p className="text-myorange font-semibold text-sm lg:text-base">
                                            {slide.rating}
                                        </p>
                                        <FaStar className="text-myorange ml-2" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-prev text-mypink text-xl lg:text-2xl absolute top-1/2 transform -translate-y-1/2 z-10"></div>
                <div className="swiper-button-next text-mypink text-xl lg:text-2xl absolute top-1/2 transform -translate-y-1/2 z-10"></div>
            </div>
        </div>
    );
};

export default Slider;