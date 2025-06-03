import img1 from "../images/solutions/1.png";
import img2 from "../images/solutions/2.png";
import img3 from "../images/solutions/3.png";
import img4 from "../images/solutions/4.png";
import img5 from "../images/solutions/5.png";
import img6 from "../images/solutions/6.png";
import phones from "../images/phones.png";
import { ArrowUpRight } from "lucide-react";

function Solutions() {
  return (
    <div className="my-20 text-center px-4 sm:px-10 lg:px-28">
      <div className="flex flex-col gap-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#0E0E0E] font-semibold">
          Our Solutions
        </h1>
        <p className="text-[#A7A7A7] text-xs sm:text-sm md:text-base leading-relaxed">
          This is just a randomly generated text to be included in a later date{" "}
          <br className="hidden sm:block" />
          based on a final draft to be decided by the content team.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`solution-${index + 1}`}
              className="object-cover bg-[#EEF6FF] px-3 py-2 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
            />
          ))}
        </div>

        {/* SmerpGo Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-10 rounded-2xl shadow-lg bg-white text-left">
          <div className="flex flex-col gap-4 max-w-md">
            <p className="text-black text-lg sm:text-xl md:text-2xl font-bold">
              SmerpGo
            </p>
            <p className="text-[#828282] text-xs sm:text-sm md:text-base leading-relaxed">
              Take control of your business operations with SMERP, our
              comprehensive Enterprise Resource Planning (ERP) software. SMERP
              streamlines tasks like inventory management, financial reporting,
              and customer relationship management, allowing you to focus on
              what matters most - growing your business.
            </p>
            <div className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full hover:outline hover:outline-2 hover:outline-blue-300 w-fit">
              <button className="text-xs sm:text-sm md:text-base">
                Visit Website
              </button>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <img
              src={phones}
              alt="phones"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
