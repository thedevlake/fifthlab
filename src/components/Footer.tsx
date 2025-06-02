import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../images/logo.png";
import comply from "../images/comply.png";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-8 py-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 ml-30">
        {/* Column 1: Logo and Socials */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Fifthlab Logo" className="h-6" />
            <span className="font-bold text-xl">fifthlab</span>
          </div>
          <p className="text-[#6F6C90] text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#">
              <Facebook fill="white" stroke="black" />
            </a>
            <a href="#">
              <Twitter fill="white" stroke="black" />
            </a>
            <a href="#">
              <Instagram fill="white" stroke="black" />
            </a>
            <a href="#">
              <Linkedin fill="white" stroke="black" />
            </a>
          </div>
          <img src={comply} alt="NDPR Audit Compliant 2023" className="h-16" />
        </div>

        {/* Column 2: Links */}
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-[#6F6C90] text-sm">
              <li>
                <a href="#">Bulkwave</a>
              </li>
              <li>
                <a href="#">FinEdge</a>
              </li>
              <li>
                <a href="#">Pesso</a>
              </li>
              <li>
                <a href="#">Kulean Pay</a>
              </li>
              <li>
                <a href="#">Smerp</a>
              </li>
              <li>
                <a href="#">UCP</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-[#6F6C90] text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Insights</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contacts us</h4>
          <ul className="space-y-4 text-[#6F6C90] text-sm">
            <li className="flex items-center gap-2">
              <Mail />
              <a
                href="mailto:hello@thefifthlab.com"
                className="hover:underline"
              >
                Hello@thefifthlab.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone /> +234 816 235 2009
            </li>
            <li className="flex items-center gap-2">
              <MapPin /> 7 Joshua Ebun Ojo Cl,
              <br />
              Lekki Phase I, Lekki 106104,
              <br />
              Lagos, Nigeria.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-[#6F6C90] flex flex-col md:flex-row justify-between items-center mx-30">
        <p>Copyright © 2024 Fifthlab</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline hover:text-white">
            All Rights Reserved
          </a>
          <a href="#" className="hover:underline hover:text-white ">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
