import { Star, MoveRight } from "lucide-react";
import { Button } from "../components/ui/button";
import bgc from "@/images/Landing Page Abstract 2024.svg";
import image from "@/images/Hero Section Animation Figma 2024.svg";

function Main() {
  return (
    <div
      className="grid sm:grid-cols-2 justify-center items-center bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${bgc})` }}
    >
      {/* left section*/}
      <div className="grid items-center gap-1 px-20 py-5">
        <div className="flex items-center gap-1 text-sm bg-[#E6F8FB] w-fit px-5 py-2 rounded-full">
          <p className="font-semibold flex items-center">
            <Star size={18} strokeWidth={0} fill="20px" />
            <span>4.8</span>
          </p>
          <span className="text-muted-foreground">(1824 reviews)</span>
        </div>
        {/* 2 */}
        <div className="mt-4 flex flex-col gap-2">
          <p className="sm:text-6xl font-bold ">
            Ecosystem of Solutions That Work.
          </p>
          <p className="text-muted-foreground sm:w-1/2">
            Empowering Your Business Growth With User-Centric solutions that
            makelife and business easy
          </p>
        </div>

        {/* 3 */}
        <div className="mt-6 flex items-center gap-4">
          <Button className="bg-[#00B4D8] rounded-full">
            See our Solutions
          </Button>
          <button className="bg-none font-semibold flex items-center gap-2">
            <span> Book a Demo</span> <MoveRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* right section */}
      <div>
        <img src={image} alt="" className="px-12" />
      </div>
    </div>
  );
}

export default Main;
