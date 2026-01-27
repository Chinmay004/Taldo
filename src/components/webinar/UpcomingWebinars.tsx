"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface LiveWebinar {
    id: string;
    title: string;
    date: string; // ISO string
    image: string;
    link?: string;
}

export default function UpcomingWebinars() {
    const [webinars, setWebinars] = useState<LiveWebinar[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWebinars() {
            try {
                const res = await fetch("/api/live-webinars");
                if (res.ok) {
                    const data = await res.json();
                    setWebinars(data);
                }
            } catch (error) {
                console.error("Failed to fetch webinars", error);
            } finally {
                setLoading(false);
            }
        }
        fetchWebinars();
    }, []);

    if (loading) {
        return <div className="py-12 text-center text-gray-500">Loading events...</div>;
    }

    if (webinars.length === 0) {
        return null; // Don't show section if no webinars
    }

    return (
        <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900 text-center md:text-left mb-2">
                            Upcoming Webinars
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                            Join our live sessions.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webinars.map((webinar) => (
                        <div
                            key={webinar.id}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                                <Image
                                    src={webinar.image}
                                    alt={webinar.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                                    {webinar.title}
                                </h3>

                                {/* Date & Time */}
                                <div className="flex flex-col gap-2 mb-6 text-gray-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>
                                            {new Date(webinar.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                            {new Date(webinar.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                                        </span>
                                    </div>
                                </div>

                                {/* Join Button (Only if Link is present) */}
                                {webinar.link && (
                                    <div className="mt-auto">
                                        <Link
                                            href={webinar.link || "#"}
                                            className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-xl transition-colors"
                                        >
                                            Join Now
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
