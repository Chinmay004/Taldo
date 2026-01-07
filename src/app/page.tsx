import Hero from "@/components/home/Hero";
import WhyGermany from "@/components/home/WhyGermany";
// import StartCareer from "@/components/home/StartCareer";
import SuccessStories from "@/components/home/SuccessStories";
import ProgramOverview from "@/components/home/ProgramOverview";
import FAQ from "@/components/FAQ";
// import Webinar from "@/app/webinar/page";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <WhyGermany />
      {/* <StartCareer /> */}
      <ProgramOverview />
      <Testimonials/>
      <SuccessStories/>
      <FAQ/>
      {/* <Webinar/> */}
    </main>
  );
}

