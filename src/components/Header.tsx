import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/images/Fifthlab Logo 2024.png";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className="bg-white border px-4 md:px-20 flex justify-between py-4 md:py-6 items-center shadow-md relative">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Fifthlab Logo"
          className="w-28 sm:w-auto hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 rounded focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation */}
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`
          flex-col md:flex-row md:flex gap-8 md:gap-10 items-center sm:text-lg
          absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-20
          transition-all duration-300
          ${menuOpen ? "flex" : "hidden"} md:flex
        `}
      >
        {navItems.map((item) =>
          item.name === "Products" ? (
            <DropdownMenu key={item.name}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 py-3 md:py-0 text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg md:text-base">
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="gap-3 px-5 py-2 grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
                <DropdownMenuItem asChild>
                  <a href="/products/smerpgo" className="hover:underline">
                    SmerpGO
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/kuleanpay" className="hover:underline">
                    KuleanPay
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/finedge" className="hover:underline">
                    Finedge
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/pesso" className="hover:underline">
                    PESSO
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/bulkwave" className="hover:underline">
                    Bulkwave
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/products/ucp" className="hover:underline">
                    UCP
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 py-3 md:py-0 text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg md:text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          )
        )}

        {/* Button for mobile */}
        <div className="md:hidden w-full flex justify-center pb-4">
          <Button
            variant="outline"
            className="w-fit mx-auto bg-[#00B4D8] rounded-full text-white py-5 px-5 hover:bg-[#0077B6] transition-colors duration-300"
          >
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Button for desktop */}
      <div className="hidden md:block">
        <Button
          variant="outline"
          className="bg-[#00B4D8] rounded-full text-white p-6 hover:bg-[#0077B6] transition-colors duration-300"
        >
          Get in touch
        </Button>
      </div>
    </header>
  );
}
