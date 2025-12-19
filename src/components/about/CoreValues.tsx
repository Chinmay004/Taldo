export default function CoreValues() {
    const values = [
        {
            title: "Integrity",
            description: "We do what we say, and we honour every commitment."
        },
        {
            title: "Transparency",
            description: "Every step, fee, and requirement is documented and explained upfront."
        },
        {
            title: "Empathy",
            description: "We support each nurse as an individual, understanding the emotional and professional challenges of relocating abroad."
        },
        {
            title: "Accountability",
            description: "We take responsibility for the outcomes of our training, processes, and candidate support."
        },
        {
            title: "Impact",
            description: "We focus on life-changing opportunities that strengthen careers and healthcare systems."
        }
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-20 py-8 md:py-10 w-full max-w-[1400px] mx-auto bg-white">
            <div className="flex flex-col gap-6 md:gap-8">
                {/* Heading */}
                <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight text-gray-900 text-center md:text-left">
                    Our <span className="text-accent">Core Values</span>
                </h2>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
                    {values.map((value, index) => (
                        <div key={index} className="flex-1">
                            <div className="bg-primary-light rounded-xl md:rounded-2xl p-4 md:p-5 h-full flex flex-col gap-2 items-center text-center text-white">
                                <h3 className="font-medium text-lg md:text-xl lg:text-2xl leading-tight tracking-tight">
                                    {value.title}
                                </h3>
                                <p className="font-normal text-sm md:text-base lg:text-lg leading-relaxed tracking-tight">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
