// "use client";

// import Image from "next/image";
// import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "564fcbe0-e0c3-486f-bcb9-666afc1b413f",
          subject: "New Newsletter Subscriber",
          email: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: "success",
          text: "Thanks for subscribing!",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Connection failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

//   return (
//     <section className="w-full bg-white py-12 md:py-16 lg:py-20">
//       <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-20">
//         {/* Left Content */}
//         <div className="flex max-w-full lg:max-w-xl flex-col text-center lg:text-left items-center lg:items-start">
//           {/* Title */}
//           <h2 className="mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
//             Discover Articles
//             <br />
//             & Blogs daily
//           </h2>

//           {/* Subtitle */}
//           <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-900">
//             Subscribe and get weekly email with{" "}
//             <span className="font-semibold">latest articles</span>
//           </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 md:h-14 lg:h-16 w-full sm:w-72 md:w-80 lg:w-96 rounded-md border border-gray-400 bg-white px-4 md:px-6 text-base text-gray-900 placeholder:text-gray-500 focus:border-accent focus:outline-none"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-12 md:h-14 lg:h-16 rounded-full bg-accent px-8 md:px-10 text-base font-medium text-white transition-all hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {message && (
              <div
                className={`text-sm font-medium ${message.type === "success" ? "text-green-600" : "text-red-500"
                  }`}
              >
                {message.text}
              </div>
            )}
          </form>
        </div>

//         {/* Right Image */}
//         <div className="relative h-56 sm:h-64 md:h-80 lg:h-[362px] w-full lg:w-[510px] shrink-0 overflow-hidden rounded-2xl lg:rounded-3xl">
//           <Image
//             src="/home/newsletter.webp"
//             alt="People studying"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
