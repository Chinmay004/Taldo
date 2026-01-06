"use client";

import { useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

const testimonials = [
    {
        playbackId: "Q2KUoAc5atc2WYtbICKJjMAsp5f4jeU6INEPEX01Q01Wo",
        name: "Lamminchong Vaiphei (Teresa)",
        description: "GNM Nursing, Manipur",
    },
    {
        playbackId: "cHnp002L7AKgq0200j2tsWjgBKlrp194X6c02L02QvLwXYjY",
        name: "Lalnundiki",
        description: "GNM Nursing, Manipur",
    },
    {
        playbackId: "dim7WsUsD97AblnXEz2MimB6Eg02HqG9o9Ru3hKyaqUk",
        name: "Shrushti Pandey",
        description: "BSC Nursing, Ahmedabad",
    },
];

export default function Testimonials() {
    const playersRef = useRef<any[]>([]);

    const handlePlay = (currentIndex: number) => {
        playersRef.current.forEach((player, index) => {
            if (player && index !== currentIndex) {
                player.pause();
            }
        });
    };

    return (
        <section id="testimonials" className="w-full bg-white py-6 md:py-8 lg:py-10 mb-15">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">

                <h2 className="mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left">
                    Testimonials
                </h2>

                <div className="relative">
                    <div className="
  flex gap-4 overflow-x-auto scrollbar-hide
  md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
">
                        {testimonials.map((video, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 shrink-0 w-[280px] sm:w-[300px] md:w-auto m-2 md:m-4"
                            >                            <div className="relative aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-xl border border-gray-200">
                                    <MuxPlayer
                                        ref={(el) => {
                                            playersRef.current[index] = el;
                                        }}
                                        playbackId={video.playbackId}
                                        streamType="on-demand"
                                        preload="none"
                                        className="h-full w-full"
                                        onPlay={() => handlePlay(index)}
                                    />
                                </div>

                                <div className="mt-2 text-center">
                                    <h3 className="font-semibold text-xl mb-1 text-gray-900">
                                        {video.name}
                                    </h3>
                                    <p className="font-normal text-gray-700">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}