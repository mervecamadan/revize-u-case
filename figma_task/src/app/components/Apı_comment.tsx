"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface Comment {
    id: number;
    body: string;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
        imageUrl: string;
    };
}

const ApiComment = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/comments");
                setComments(response.data.comments);
                setLoading(false);
            } catch (err) {
                setError(
                    axios.isAxiosError(err) && err.response?.data
                        ? err.response.data.message
                        : "Yorumlar yüklenemedi!"
                );
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    const renderStars = (likes: number) => {
        const stars = [];
        for (let i = 0; i < likes; i++) {
            stars.push(
                <span
                    key={i}
                    className="text-yellow-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="min-h-screen pb-36 px-4 py-12 max-w-[1440px] mx-auto">
            <div className="text-center mb-10">
                <p className="text-mypink uppercase font-semibold text-sm sm:text-base md:text-base lg:text-base xl:text-lg tracking-wide">
                    Testimonials
                </p>
                <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-mydarkgray mt-3">
                    Trust our clients
                </p>
            </div>

            <div className="relative mt-9">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                >
                    {loading ? (
                        <p className="text-center text-mygray">Loading comments...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : (
                        comments.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <div className="flex flex-col items-center space-y-4 px-4 md:px-9 py-6">
                                    <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                                        <Image
                                            src={comment.user.imageUrl || "/user.png"}
                                            alt={comment.user.username}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>

                                    <p className="text-center">
                                        <span className="text-myorange text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                                            {comment.user.fullName || "Unknown User"}
                                        </span>
                                        <span className="text-mygray text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium">
                                            {" "}
                                            / {comment.user.username}
                                        </span>
                                    </p>

                                    <div className="text-yellow-400 text-sm sm:text-md md:text-base lg:text-lg xl:text-xl">
                                        {renderStars(comment.likes)}
                                    </div>

                                    <p className="text-mygray text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg mt-2 leading-relaxed">
                                        {comment.body}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default ApiComment;