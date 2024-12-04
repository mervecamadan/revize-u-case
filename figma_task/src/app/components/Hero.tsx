"use client";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className="herogenel lg:flex-row lg:px-16  lg:py-20  max-w-[1440px] mx-auto">

            <div className="flex flex-col items-start space-y-6 md:space-y-12 max-w-lg">
                <div className="flex items-center space-x-3 bg-[#FFEFF5] text-mypink px-5 py-3 rounded-full shadow-sm">
                    <span className="text-sm md:text-base font-bold">Explore the world!</span>
                    <FaShoppingBag />
                </div>

                <h1 className="buyukbaslik xl:text-6xl">
                    Travel <span className="text-mypink">top <br /> destination<br /></span> of the world
                </h1>

                <p className="altbaslik md:text-base ">
                    We always make our customer happy by providing<br /> as many choices as possible.
                </p>

                <div className="flex space-x-4 md:space-x-6">
                    <button className="purplebutton w-[151px] shadow-md">
                        Get Started
                    </button>
                    <button className="purplebutton w-[185px] shadow-md bg-white text-mypurple ">
                        <AiFillPlayCircle />
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>


            <div className="herogorseller lg:flex-row lg:justify-end items-center lg:gap-8">

                <div className="relative flex flex-col space-y-6">
                    <Image
                        src="/layer.png"
                        alt="Layer background"
                        width={772}
                        height={287.38}
                        className="absolute z-0 -left-16 top-0 "
                    />

                    <Image
                        src="/rectangle_1.png"
                        alt="Beautiful destination"
                        width={200}
                        height={250}
                        className="rounded-3xl z-10 sm:w-[272px] sm:h-[300px]"
                    />

                    <Image
                        src="/send_ikon.png"
                        alt="Send Ikon"
                        width={64}
                        height={64}
                        className="absolute right-60 top-64 p-2 z-20 "
                    />

                    <Image
                        src="/rectangle_2.png"
                        alt="Mountain traveler"
                        width={200}
                        height={250}
                        className="rounded-3xl z-10 sm:w-[272px] sm:h-[300px]"
                    />
                </div>

                <div className="flex flex-col py-8 px-6 sm:py-24 sm:px-8">
                    <Image
                        src="/rectangle_3.png"
                        alt="City explorer"
                        width={200}
                        height={350}
                        className="rounded-3xl z-10 sm:w-[272px] sm:h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;