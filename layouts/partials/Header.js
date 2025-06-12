"use client";

import menu from "../../config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import config from "../../config/config.json";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className="header bg-transparent absolute top-0 left-0 w-full z-30 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        {/* <div className="order-0">
          <Logo src={logo} />
        </div> */}

        {/* Nav Center */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          <ul className="flex items-center space-x-6 text-white text-sm font-medium">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="relative group">
                    <span className="inline-flex items-center cursor-pointer">
                      {menu.name}
                      <svg
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                      </svg>
                    </span>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-96 bg-[#4B2615] text-white rounded-lg py-4 px-6 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                      <div className="flex flex-col space-y-2 max-h-[400px] overflow-y-auto">
                        {menu.children.map((child, j) => (
                          <Link
                            key={`child-${j}`}
                            href={child.url}
                            className="text-sm hover:underline whitespace-nowrap"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`hover:underline ${pathname === menu.url ? "font-semibold" : ""}`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* Search + CTA + Language Switch */}
        <div className="order-2 hidden md:flex items-center space-x-8">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className="text-white hover:underline">EN</button>
            <div className="absolute right-0 mt-2 bg-[#4B2615] text-white rounded-md shadow-md py-2 px-4 hidden group-hover:block z-50">
              <Link href="/ar" className="block text-sm py-1 hover:underline">
                AR
              </Link>
              <Link href="/en" className="block text-sm py-1 hover:underline">
                EN
              </Link>
            </div>
          </div>

          <button className="text-white text-lg hover:text-gray-300">
            <FiSearch />
          </button>

          {enable && (
            <Link
              className="rounded-md border border-white text-white px-6 py-2 hover:bg-white hover:text-[#4B2615] transition"
              href={link}
            >
              {label}
            </Link>
          )}
        </div>

        {/* Mobile Toggler */}
        <button
          id="show-button"
          className="order-3 flex cursor-pointer items-center md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
