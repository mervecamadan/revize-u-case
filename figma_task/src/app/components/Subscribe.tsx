import React from "react";
import Image from "next/image";

const Subscribe: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center py-2 max-w-[1440px] mx-auto">

            <div className="bg-[#fffbf1] rounded-xl p-8 md:p-16 flex flex-col items-center justify-center space-y-6 w-[80%] max-w-4xl relative">

                <div className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[20%] w-[150px] h-[140px] z-10">
                    <Image
                        src="/subscribe_orange.png"
                        alt="Subscribe Orange"
                        className="object-contain"
                        fill
                    />
                </div>

                <div className="text-center">

                    <p className="text-mypink uppercase font-semibold tracking-wide text-sm sm:text-sm lg:text-lg xl:text-xl">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </p>

                    <p className="font-bold text-mydarkgray mt-2 sm:mt-4 md:mt-6 lg:mt-8 sm:text-base md:text-2xl lg:text-3xl xl:text-4xl leading-snug sm:leading-relaxed">
                        Prepare yourself & let’s explore the<br />
                        beauty of the world
                    </p>

                </div>

                <form className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full">
                    <div className="relative w-full max-w-[550px]">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5">
                            <Image
                                src="/mail_ikon.png"
                                alt="Email Icon"
                                className="object-contain"
                                fill
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full py-4 pl-12 pr-4 text-mydarkgray bg-white text-sm rounded-full font-semibold placeholder-mygray focus:outline-none focus:ring-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-4 px-6 bg-mypurple text-white text-sm font-semibold rounded-xl">
                        Subscribe
                    </button>
                </form>
            </div>

            <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8">
                <div className="w-[80px] h-[240px]">
                    <Image
                        src="/subscribe_objects.png"
                        alt="Subscribe Objects"
                        className="object-contain"
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;