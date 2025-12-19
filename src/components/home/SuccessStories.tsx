"use client";

import { useState, useRef } from "react";

const stories = [
  {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    title: "Success Story 1",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    title: "Success Story 2",
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    title: "Success Story 3",
  },
  {
    id: 4,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
    title: "Success Story 4",
  },
  {
    id: 5,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    title: "Success Story 5",
  },
  {
    id: 6,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
    title: "Success Story 6",
  },
  {
    id: 7,
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_7",
    title: "Success Story 7",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 283;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Header - contained */}
      <div className="mx-auto mb-6 md:mb-8 flex max-w-[1400px] items-center justify-center md:justify-between flex-col md:flex-row gap-4 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left">
          Success <span className="text-accent">Stories</span>
        </h2>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 transition-all ${canScrollLeft
              ? "border-accent text-accent hover:bg-accent hover:text-white"
              : "border-gray-300 text-gray-300 cursor-not-allowed"
              }`}
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
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
            className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full transition-all ${canScrollRight
              ? "bg-accent text-white hover:bg-primary-dark"
              : "bg-gray-300 text-white cursor-not-allowed"
              }`}
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
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

      {/* Stories Carousel - respects container alignment */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide"
        style={{
          paddingLeft: 'max(1rem, calc((100vw - 1400px) / 2 + 5rem))'
        }}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative h-80 sm:h-96 md:h-[420px] lg:h-[462px] w-52 sm:w-56 md:w-64 lg:w-[258px] shrink-0 overflow-hidden rounded-xl md:rounded-2xl bg-card-bg"
          >
            {/* YouTube Embed Placeholder */}
            <iframe
              src={story.embedUrl}
              title={story.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
        {/* Right spacer */}
        <div className="w-4 sm:w-6 lg:w-20 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
