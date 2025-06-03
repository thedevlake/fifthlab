import { memo } from "react";
import { Star, MoveRight } from "lucide-react";
import { Button } from "../components/ui/button";
import bgc from "@/images/Landing Page Abstract 2024.svg";
import image from "@/images/Hero Section Animation Figma 2024.svg";

function Main() {
  return (
    <section
      className="grid sm:grid-cols-2 justify-center items-center bg-cover bg-no-repeat bg-center px-6 md:px-20 py-10"
      style={{ backgroundImage: `url(${bgc})` }}
      role="region"
      aria-label="Hero section"
    >
      {/* Left section */}
      <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-8 py-6">
        {/* Star rating */}
        <div
          className="flex items-center gap-2 text-sm bg-[#E6F8FB] w-fit px-4 py-1.5 rounded-full"
          aria-label="Customer rating"
        >
          <p className="font-semibold flex items-center gap-1 text-[#0077B6]">
            <Star size={16} strokeWidth={0} fill="20px" aria-hidden="true" />
            <span>4.8</span>
          </p>
          <span className="text-muted-foreground text-xs sm:text-sm">
            (1824 reviews)
          </span>
        </div>

        {/* Heading and subtext */}
        <div className="mt-2 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
            Ecosystem of Solutions That Work.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            Empowering your business growth with user-centric solutions that
            make life and business easy.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Button className="bg-[#00B4D8] hover:bg-[#0077B6] text-white rounded-full px-6 py-3 text-sm sm:text-base w-auto sm:w-auto">
            See our Solutions
          </Button>
          <button
            className="text-sm font-semibold flex items-center justify-center gap-2 hover:text-[#0077B6] transition-colors w-full sm:w-auto"
            aria-label="Book a demo"
          >
            <span>Book a Demo</span>
            <MoveRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex justify-center mt-10 sm:mt-0">
        <img
          src={image}
          alt="Hero animation illustration showing business growth"
          className="w-full max-w-md sm:max-w-lg px-6 sm:px-12"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default memo(Main);
