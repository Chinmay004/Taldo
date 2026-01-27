import YouTubeShorts from "@/components/webinar/YouTubeShorts";
import UpcomingWebinars from "@/components/webinar/UpcomingWebinars";

// Force dynamic rendering to avoid build-time fetch issues
export const dynamic = 'force-dynamic';

async function getWebinars() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/webinars`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        // During build time, API may not be available
        console.log('Error fetching webinars during build, using empty array:', error);
        return [];
    }
}

export default async function Webinar() {
    const webinars = await getWebinars();

    return (
        <section className="w-full bg-white">
            {/* <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20 py-6 md:py-8 lg:py-10">
                <h2 className="mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left">
                    Webinar
                </h2>
                <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 text-center md:text-left max-w-3xl">
                    Explore our collection of YouTube Shorts featuring quick tips, insights, and highlights from our programs.
                </p>
            </div> */}

            {/* YouTube Shorts Component */}
            <YouTubeShorts webinars={webinars} />

            {/* Upcoming Webinars Section */}
            <UpcomingWebinars />

        </section>
    )
}