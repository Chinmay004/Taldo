import Link from 'next/link';
import Image from 'next/image';
import blogs from '@/data/blogs.json';

export default function BlogListingPage() {
    return (
        <main className="flex flex-col w-full bg-white">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 py-12 md:py-16">
                <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mb-8 md:mb-12 lg:mb-16 text-center md:text-left">
                    Our Blog
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.id}`}
                            className="group flex flex-col gap-4 hover:opacity-80 transition-opacity"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-gray-200">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-normal text-sm md:text-base leading-relaxed text-gray-text">
                                    {blog.date}
                                </p>
                                <h2 className="font-medium text-lg md:text-xl lg:text-2xl leading-tight text-gray-900">
                                    {blog.title}
                                </h2>
                                <p className="font-normal text-sm md:text-base lg:text-lg leading-relaxed text-gray-text line-clamp-2">
                                    {blog.content.intro}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
