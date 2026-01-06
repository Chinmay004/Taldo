import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
        {/* Hero Container with rounded corners */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-2xl lg:rounded-3xl bg-primary-light px-6 sm:px-8 lg:px-10">
          {/* Left Content */}
          <div className="flex max-w-full lg:max-w-xl flex-col gap-4 sm:gap-6 py-8 sm:py-12 lg:py-16 text-center lg:text-left items-center lg:items-start">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Build Your Nursing Career in Germany with Confidence
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
                India's most transparent and ethical pathway for nurses to work in Germany. Your journey starts with <b>Gateway to Germany by Taldo.</b>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">

            {/* CTA Button */}
            <Link
              href="#contact"
              className="flex w-fit items-center gap-3 rounded-full bg-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-900 transition-all hover:bg-white/90 hover:shadow-lg"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
              Book your free consultation now
            </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[496px] w-full lg:w-[485px] shrink-0 lg:-mb-10">
            <Image
              src="/home/hero-img.webp"
              alt="Nurse with clipboard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
