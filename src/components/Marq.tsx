import access from "@/images/banks/access.png";
import bankly from "@/images/banks/bankly.png";
import FirstBank from "@/images/banks/firstbank.png";
import itex from "@/images/banks/itex.png";
import stanbic from "@/images/banks/stanbic.png";
import trust from "@/images/banks/trust.png";
import uba from "@/images/banks/uba.png";
import wema from "@/images/banks/wema.png";

function Marq() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F2F2F2B2] py-4 px-20">
      <h1 className="text-xs text-center text-[#47478a] font-semibold">
        We are currently used and trusted by
      </h1>
      <div className="flex items-center justify-around w-full  ">
        <img src={access} className="w-22" alt="" />
        <img src={bankly} className="w-22" alt="" />
        <img src={FirstBank} className="w-22" alt="" />
        <img src={itex} className="w-22" alt="" />
        <img src={stanbic} className="w-22" alt="" />
        <img src={wema} className="w-15" alt="" />
        <img src={trust} className="w-22" alt="" />
        <img src={uba} className="w-15" alt="" />
      </div>
    </div>
  );
}

export default Marq;
