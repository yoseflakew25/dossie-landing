"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    const debouncedScroll = () => {
      let timeoutId;
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };
    };
    window.addEventListener("scroll", debouncedScroll());
    return () => {
      window.removeEventListener("scroll", debouncedScroll());
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      aria-label="Site Header"
      className={`bg-[#FAFCFF] sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled ? "bg-opacity-70 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between h-20 max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src={logo}
              alt="Logo"
              className="w-48"
              width={192}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Site Nav"
          className="items-end justify-end hidden gap-8 text-md font-medium lg:flex lg:w-0 lg:flex-1"
        >
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`relative transition-colors hover:text-blue-600 ${
              pathname === href
                ? "text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-blue-500 after:content-[''] after:transition-all after:duration-300"
                : "opacity-75 hover:opacity-100"
            }`}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Mobile Menu"
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden p-2 text-gray-800 hover:text-blue-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-[#FAFCFF] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile Site Nav" className="flex flex-col gap-4 p-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`block transition-colors hover:text-blue-600 ${
              pathname === href ? "text-blue-600" : "opacity-75 hover:opacity-100"
            }`}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}