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
    <footer className="bg-[#121212] text-white px-6 py-12 md:px-16 md:py-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {/* Column 1: Logo and Socials */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Fifthlab Logo" className="h-6 md:h-8" />
            <span className="font-bold text-xl md:text-2xl">fifthlab</span>
          </div>
          <p className="text-[#6F6C90] text-sm md:text-base mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-white hover:text-[#695ACD]" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-white hover:text-[#695ACD]" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-white hover:text-[#695ACD]" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-white hover:text-[#695ACD]" />
            </a>
          </div>
          <img
            src={comply}
            alt="NDPR Audit Compliant 2023"
            className="h-12 md:h-16"
          />
        </div>

        {/* Column 2: Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div>
            <h4 className="font-semibold mb-3 text-base md:text-lg">Product</h4>
            <ul className="space-y-2 text-[#6F6C90] text-sm md:text-base">
              <li>
                <a href="#" className="hover:underline">
                  Bulkwave
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FinEdge
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pesso
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kulean Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Smerp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UCP
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base md:text-lg">Company</h4>
            <ul className="space-y-2 text-[#6F6C90] text-sm md:text-base">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Insights
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-base md:text-lg">
            Contact Us
          </h4>
          <ul className="space-y-4 text-[#6F6C90] text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hello@thefifthlab.com"
                className="hover:underline"
              >
                Hello@thefifthlab.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +234 816 235 2009
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                7 Joshua Ebun Ojo Cl,
                <br />
                Lekki Phase I, Lekki 106104,
                <br />
                Lagos, Nigeria.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm md:text-base text-[#6F6C90] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p>© 2024 Fifthlab</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#"
            className="hover:underline hover:text-white whitespace-nowrap"
          >
            All Rights Reserved
          </a>
          <a
            href="#"
            className="hover:underline hover:text-white whitespace-nowrap"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            className="hover:underline hover:text-white whitespace-nowrap"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
