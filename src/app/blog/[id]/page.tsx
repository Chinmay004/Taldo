import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogs from '@/data/blogs.json';
import OtherBlogs from '@/components/OtherBlogs';

interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    content: {
        intro: string;
        paragraphs: string[];
        bulletPoints: string[];
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id) as BlogPost | undefined;

    if (!blog) {
        notFound();
    }

    return (
        <main className="flex flex-col w-full bg-white min-h-screen">
            <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 pt-8 md:pt-12 pb-12 md:pb-16 lg:pb-20">
                {/* Share Section - Desktop Only */}
                <div className="hidden xl:flex absolute right-6 top-32 flex-col gap-4 items-center z-10">
                    <p className="font-normal text-base leading-relaxed text-gray-900 mb-1">
                        Share
                    </p>
                    <button
                        className="w-10 h-10 md:w-11 md:h-11 hover:opacity-70 transition-opacity"
                        aria-label="Share on Twitter"
                    >
                        <Image
                            src="/blog/Twitter.svg"
                            alt="Twitter"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-10 h-10 md:w-11 md:h-11 hover:opacity-70 transition-opacity"
                        aria-label="Share on Facebook"
                    >
                        <Image
                            src="/blog/Facebook.svg"
                            alt="Facebook"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-10 h-10 md:w-11 md:h-11 hover:opacity-70 transition-opacity"
                        aria-label="Share on LinkedIn"
                    >
                        <Image
                            src="/blog/LinkedIn.svg"
                            alt="LinkedIn"
                            width={46}
                            height={46}
                        />
                    </button>
                    <button
                        className="w-10 h-10 md:w-11 md:h-11 hover:opacity-70 transition-opacity"
                        aria-label="Share via Email"
                    >
                        <Image
                            src="/blog/Mail.svg"
                            alt="Mail"
                            width={46}
                            height={46}
                        />
                    </button>
                </div>

                {/* Main Content */}
                <article className="max-w-4xl">
                    {/* Title */}
                    <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-gray-900 mb-3 md:mb-4 lg:mb-6">
                        {blog.title}
                    </h1>

                    {/* Date */}
                    <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-gray-900 mb-8 md:mb-10 lg:mb-14">
                        {blog.date}
                    </p>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-10 lg:mb-14 bg-gray-200">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                        {/* Intro */}
                        <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-900 mb-6 md:mb-8 lg:mb-10">
                            {blog.content.intro}
                        </p>

                        {/* Paragraphs */}
                        {blog.content.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-gray-900 mb-6 md:mb-8 lg:mb-10"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Bullet Points */}
                        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mt-2">
                            {blog.content.bulletPoints.map((point, index) => (
                                <div key={index} className="flex items-start gap-3 md:gap-4">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-900 mt-2.5 md:mt-3 shrink-0" />
                                    <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-gray-900">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Mobile Share Section */}
                <div className="xl:hidden flex flex-row gap-4 items-center justify-center mt-10 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-gray-300">
                    <p className="font-normal text-sm md:text-base leading-relaxed text-gray-900">
                        Share:
                    </p>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 hover:opacity-70 transition-opacity"
                        aria-label="Share on Twitter"
                    >
                        <Image
                            src="/blog/Twitter.svg"
                            alt="Twitter"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 hover:opacity-70 transition-opacity"
                        aria-label="Share on Facebook"
                    >
                        <Image
                            src="/blog/Facebook.svg"
                            alt="Facebook"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 hover:opacity-70 transition-opacity"
                        aria-label="Share on LinkedIn"
                    >
                        <Image
                            src="/blog/LinkedIn.svg"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        className="w-8 h-8 md:w-10 md:h-10 hover:opacity-70 transition-opacity"
                        aria-label="Share via Email"
                    >
                        <Image
                            src="/blog/Mail.svg"
                            alt="Mail"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </div>

            {/* Other Blogs Section */}
            <OtherBlogs blogs={blogs} currentBlogId={id} heading='Other Blogs' limit={6} />
        </main>
    );
}
