"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="fixed-navbar flexBetween padding-container py-5 ">
      <Link href="/">
          <Image
            src="/logo-modelacao.png"
            alt="logo"
            width={200}
            height={0}
          />
      </Link>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden" onClick={toggleNav}>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>

      {/* Links for mobile and desktop */}
      <div
        className={`absolute bg-gray-120 rounded-2xl mt-2 top-full left-0 w-full ${
          isNavVisible ? "block" : "hidden"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="text-center">
              <Link href={link.href} passHref legacyBehavior>
                <a
                  className={`text-green-50 cursor-pointer pb-1.5 transition-all ${
                    pathname === link.href ? "font-bold text-red" : ""
                  }`}
                  onClick={() => setIsNavVisible(false)}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
          {/* Here we keep the button style for the 'Contact' */}
          <li>
            <Link href="/contato" passHref legacyBehavior>
              <a onClick={() => setIsNavVisible(false)}>
                <Button
                  type="button"
                  title="Contato"
                  icon="/phone-call.png"
                  variant="btn_dark_green"
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Links and Contact Button */}
      <ul className="hidden lg:flex items-center h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} passHref legacyBehavior>
              <a
                className={`text-green-50 flexCenter cursor-pointer pb-1.5 transition-all ${
                  pathname === link.href
                    ? "font-bold text-red"
                    : "hover:font-bold"
                }`}
              >
                {link.label}
              </a>
            </Link>
          </li>
        ))}
        <li className="lg:flexCenter hidden">
          <Link href="/contato" passHref legacyBehavior>
            <a>
              <Button
                type="button"
                title="Contato"
                icon="/phone-call.png"
                variant="btn_dark_green"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
