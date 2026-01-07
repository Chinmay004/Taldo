"use client";

import { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { useEffect } from "react";

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
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handlePlay = (currentIndex: number) => {
        playersRef.current.forEach((player, index) => {
            if (player && index !== currentIndex) {
                player.pause();
            }
        });
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < maxScroll);
    };

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const scrollAmount = 320; // roughly one card width

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });

        setTimeout(handleScroll, 300);
    };

    useEffect(() => {
        handleScroll(); // initialize arrows on mount
        window.addEventListener("resize", handleScroll);
        return () => window.removeEventListener("resize", handleScroll);
    }, []);


    return (
        <section id="testimonials" className="w-full bg-white py-6 md:py-8 lg:py-2 mb-15">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">

                {/* Heading + Arrows */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">
  
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left">
    Testimonials
  </h2>

  {/* Navigation arrows */}
  <div className="flex items-center justify-center gap-3">
    {/* Left Arrow */}
    <button
      onClick={() => scroll("left")}
      disabled={!canScrollLeft}
      className={`
        flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all
        ${canScrollLeft
          ? "border-accent text-accent hover:bg-gray-700 hover:text-white"
          : "border-gray-300 text-gray-300 cursor-not-allowed"
        }
        md:opacity-40 md:pointer-events-none
      `}
      aria-label="Scroll left"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => scroll("right")}
      disabled={!canScrollRight}
      className={`
        flex h-12 w-12 items-center justify-center rounded-full transition-all
        ${canScrollRight
          ? "bg-accent text-white hover:bg-gray-800"
          : "bg-gray-300 text-white cursor-not-allowed"
        }
        md:opacity-40 md:pointer-events-none
      `}
      aria-label="Scroll right"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</div>

                <div className="relative -mx-4 sm:-mx-6 lg:mx-0 ">

                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-0 md:grid md:grid-cols-3 md:gap-26 md:overflow-visible">
                        {testimonials.map((video, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 shrink-0 w-[280px] sm:w-[300px] md:w-auto"
                            >
                                <div className="relative aspect-[9/16] w-full max-w-[330px] overflow-hidden rounded-xl border border-gray-200">
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