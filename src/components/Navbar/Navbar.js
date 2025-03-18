"use client";
import { useGetCountry } from "@/utils/hooks/useGetCountry";
import { useGSAP } from "@gsap/react";
import { Switch } from "@mui/material";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";

const Navbar = () => {
  const country = useGetCountry();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const upperCaseCountry = country?.toUpperCase();
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const path = usePathname();
  const router = useRouter();

  const NavLinks = [
    { url: `/${country ?? "/IN"}`, name: "Home" },
    { url: `/${country ?? "/IN"}/gallery`, name: "Gallery" },
    { url: `/${country ?? "/IN"}/gallery/stories`, name: "Stories" }, // Add this line
    { url: `/${country ?? "/IN"}/about`, name: "About" },
    { url: `/${country ?? "/IN"}/contact`, name: "Contact" },
  ];

  console.log(NavLinks);

  // Handle scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Reset initial states
        gsap.set([logoRef.current, navRef.current.children], { opacity: 0 });

        // Create timeline for smooth sequencing
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
        });

        tl.fromTo(
          logoRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.8)" }
        ).fromTo(
          navRef.current.children,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.5" // Start slightly before logo animation ends
        );
      });

      return () => ctx.revert(); // Cleanup
    },
    { scope: containerRef } // Empty dependencies to ensure animation runs only on mount
  );

  const toggleCountry = () => {
    const newCountry = upperCaseCountry === "UK" ? "IN" : "UK";
    const newRoute = path.replace(country, newCountry);
    router.push(newRoute);
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <div className="flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <section className="md:w-full flex justify-center p-3" ref={logoRef}>
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="w-[100px] md:w-[140px] md:h-[140px] object-contain"
          />
        </section>

        <div className="flex gap-1 items-center">
          {/* Country Toggle for Mobile */}
          <div className="md:hidden flex items-center space-x-2 mr-4">
            <span
              className={`text-sm ${upperCaseCountry === "UK" ? "font-bold" : ""
                }`}
            >
              UK
            </span>
            <Switch
              checked={upperCaseCountry === "IN"}
              onChange={toggleCountry}
              size="small"
              color="default"
            />
            <span
              className={`text-sm ${upperCaseCountry === "IN" ? "font-bold" : ""
                }`}
            >
              IN
            </span>
          </div>
          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex justify-evenly items-center space-x-4"
        ref={navRef}
      >
        {NavLinks.map((link) => (
          <>{link.url != "/IN/gallery/stories" && <Link
            key={link.name}
            href={link.url}
            className={`relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-black before:bottom-[-2px] before:left-1 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left ${path == link.url && "before:scale-x-100 before:origin-left"
              }`}
          >
            {link.name}
          </Link>}</>
        ))}
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm relative ${upperCaseCountry === "UK"
              ? "before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-black before:bottom-[-2px] before:left-0"
              : ""
              }`}
          >
            UK
          </span>
          <Switch
            checked={upperCaseCountry === "IN"}
            onChange={toggleCountry}
            size="small"
            color="default"
          />
          <span
            className={`text-sm relative ${upperCaseCountry === "IN"
              ? "before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-black before:bottom-[-2px] before:left-0"
              : ""
              }`}
          >
            IN
          </span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 md:hidden
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={`flex flex-col items-center justify-center h-full space-y-8 p-4
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:bottom-[-2px] before:left-1 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default memo(Navbar);
