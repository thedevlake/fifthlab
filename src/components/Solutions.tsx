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
    <div className="my-20 text-center mx-auto px-28">
      <div className="flex flex-col  gap-7">
        <h1 className="text-3xl text-[#0E0E0E] font-semibold">Our Solutions</h1>
        <p className="text-[#A7A7A7] text-base mt-2">
          This is just a randomly generated text to be included in a later date{" "}
          <br />
          based on a final draft to be decided by the content team.
        </p>
        {/*  */}
        <div className="flex justify-center gap-10">
          <img
            src={img1}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
          <img
            src={img2}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
          <img
            src={img3}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
          <img
            src={img4}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
          <img
            src={img5}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
          <img
            src={img6}
            alt=""
            className="object-cover bg-[#EEF6FF] px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
        </div>
        {/*  */}
        <div className=" mt-4 grid grid-cols-2 place-items-center mx-auto px-10 pt-15 pb-12 rounded-2xl shadow-lg gap-10 bg-white">
          {/*  */}
          <div className="justify-start items-start text-left gap-y-5 w-[400px] flex flex-col">
            <p className="text-black text-2xl font-bold">SmerpGo</p>
            <p className="text-[#828282] text-sm">
              Take control of your business operations with SMERP, our
              comprehensive Enterprise Resource Planning (ERP) software.  SMERP
              streamlines tasks like inventory management, financial reporting,
              and customer relationship management, allowing you to focus on
              what matters most - growing your business.
            </p>
            <div className="flex items-center gap-3 bg-black text-white p-3 rounded-full hover:outline-3 hover:outline-blue-300">
              <button className="text-sm">Visit Website</button>

              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-[#695ACD] rounded-lg">
            <img src={phones} alt="" className="pt-20 px-8" />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
