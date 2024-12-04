"use client";
import React from "react";
import Image from "next/image";

const Keyfeatures = () => {
    return (
        <div className="relative flex flex-wrap justify-center items-center px-8 md:px-16 lg:px-24 mb-24">
            <div className="relative z-10 w-full md:w-1/2 max-w-[400px] mb-10 md:mb-0 md:mr-8">
                <div className="text-left mb-12">
                    <p className="text-mypink font-bold text-sm md:text-base">
                        KEY FEATURES
                    </p>
                    <p className="text-black font-semibold text-2xl md:text-4xl mt-4">
                        We offer best services
                    </p>
                    <p className="text-mygray text-sm mt-4 leading-relaxed">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            icon: "/turuncu_konum.png",
                            title: "We offer best services",
                            description: "Lorem Ipsum is not simply random text",
                        },
                        {
                            icon: "/sarı_takvim.png",
                            title: "Schedule your trip",
                            description: "It has roots in a piece of classical",
                        },
                        {
                            icon: "/pembe_ikon.png",
                            title: "Get discounted coupons",
                            description: "Lorem Ipsum is not simply random text",
                        },
                    ].map((item, index) => (
                        <div className="flex items-center" key={index}>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="rounded-tl-2xl"
                            />
                            <div className="ml-4">
                                <p className="text-black font-semibold text-sm md:text-base">
                                    {item.title}
                                </p>
                                <p className="text-mygray text-xs md:text-sm mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full md:w-1/2 flex items-center justify-center">

                <div className="relative z-10 w-72 h-96 md:w-[300px] md:h-[448px] rounded-[48px] overflow-hidden">
                    <Image
                        src="/rectangle_9.png"
                        alt="Rectangle 9"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[48px]"
                    />

                    <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 flex items-center">
                        <Image
                            src="/turuncumap.png"
                            alt="Location Icon"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <span className="text-black text-sm font-semibold">
                            Paradise on Earth
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-6 md:translate-x-12 md:translate-y-12 w-44 h-56 md:w-[237px] md:h-[333px] rounded-[48px] overflow-hidden z-10">
                    <Image
                        src="/rectangle_10.png"
                        alt="Rectangle 10"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[48px]"
                    />
                </div>

                <div className="absolute -top-8 md:-top-12 -right-8 md:-right-12 w-44 h-28 md:w-[300px] md:h-[180px] bg-[url('/key_turuncusari.png')] bg-cover z-0"></div>
            </div>
        </div>
    );
};

export default Keyfeatures;
