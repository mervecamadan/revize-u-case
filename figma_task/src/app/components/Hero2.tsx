"use client";
import React from "react";
import Image from "next/image";

const Hero2: React.FC = () => {
    return (
        <div className="Hero2-container relative max-w-[1440px] mx-auto">

            <div className="relative flex flex-col items-center space-y-6 md:space-y-12 lg:space-y-16">


                <div className="absolute left-0 top-[-48px] ml-10 hidden lg:block">
                    <Image
                        src="/orange_objects.png"
                        alt="orange-object"
                        width={65}
                        height={169.95}
                        className="opacity-100"
                    />
                </div>


                <div className="Gorseller gap-4 sm:gap-6 lg:gap-10">
                    <Image className="group-image"
                        src="/Group.png"
                        alt="group-1"
                        width={211.83}
                        height={32}
                    />
                    <Image className="group-image"
                        src="/Group_2.png"
                        alt="group-2"
                        width={113.06}
                        height={32}
                    />
                    <Image className="group-image"
                        src="/Group_3.png"
                        alt="group-3"
                        width={188.6}
                        height={32}
                    />
                    <Image className="group-image"
                        src="/Group_4.png"
                        alt="group-4"
                        width={102.53}
                        height={32}
                    />
                    <Image className="group-image"
                        src="/Group_5.png"
                        alt="group-5"
                        width={173.57}
                        height={32}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero2;
