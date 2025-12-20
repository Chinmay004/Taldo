import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogs from '@/data/blogs.json';
import OtherBlogs from '@/components/OtherBlogs';
import ShareButtons from '@/components/blog/ShareButtons';

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
                <ShareButtons title={blog.title} variant="desktop" />

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
                <ShareButtons title={blog.title} variant="mobile" />
            </div>

            {/* Other Blogs Section */}
            <OtherBlogs blogs={blogs} currentBlogId={id} heading='Other Blogs' limit={6} />
        </main>
    );
}
