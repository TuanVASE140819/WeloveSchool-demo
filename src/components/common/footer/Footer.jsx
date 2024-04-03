import React from "react";
import logo from "../../../assets/Logo/Logo.png";
import Copyright from "../copyright/Copyright";

import facebook from "../../../assets/Icon/facebook.png";
import instagram from "../../../assets/Icon/instagram.png";
import tiktok from "../../../assets/Icon/tiktok.png";
import shoppe from "../../../assets/Icon/shoppe.png";

const Footer = () => {
  return (
    <>
      <footer
        className="relative z-10 bg-gray-50
       pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="/#"
                  className="mb-6 inline-block max-w-[160px] text-center"
                >
                  {/* <img
                    src={logo}
                    alt="logo"
                    className="max-w-full dark:hidden "
                  /> */}
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                <p className="mb-7 text-base text-body-color font-semibold text-center">
                  031-36 03 97
                  <br />
                  weloveschool@edu.vn
                </p>
              </div>
            </div>

            <LinkGroup header="About Us" className="text-blue-500">
              <NavLink link="/#" label="Home" />
              <NavLink link="/#" label="Feature" />
              <NavLink link="/#" label="How its work" />
              <NavLink link="/#" label="Goal & Missions" />
              <NavLink link="/#" label="Event" />
            </LinkGroup>
            <LinkGroup header="Chính sách">
              <NavLink link="/#" label="Home" />
              <NavLink link="/#" label="Feature" />
              <NavLink link="/#" label="How its work" />
              <NavLink link="/#" label="Goal & Missions" />
              <NavLink link="/#" label="Event" />
            </LinkGroup>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark  ">
                  Social
                </h4>
                <div className="mb-6 flex items-center justify-center space-x-4">
                  <a href="/#">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="/#">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="/#">
                    <img src={tiktok} alt="tiktok" />
                  </a>
                  <a href="/#">
                    <img src={shoppe} alt="shoppe" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark  ">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
