import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

import human2 from "../../../assets/Icon/human2.png";
import human3 from "../../../assets/Icon/human3.png";
import home from "../../../assets/Icon/home.png";
import search from "../../../assets/Icon/search.png";

import Logo from "../../../assets/Logo/Logo.png";
const Header = () => {
  const [navList, setNavList] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 sticky top-0 z-50 flex justify-between items-center">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img src={Logo} class="mr-3 h-6 sm:h-9" alt="WeloveSchool Logo" />
            </a>
          </div>
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {/* <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 " aria-current="page">Trường của tôi</a>
                    </li> */}
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={home} class="w-6 h-6" alt="home" />
                  <span>Trường của tôi</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={human2} class="w-6 h-6" alt="home" />
                  <span>bạn bè</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                <div class="flex items-center">
                  <img src={human3} class="w-6 h-6" alt="home" />
                  <span>Hội Nhóm</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={search} class="w-6 h-6" alt="home" />
                  <span>Tìm kiếm</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="flex items-center lg:order-2">
            <a
              href="/"
              class="text-blue-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 text-blue-500"
            >
              Đăng nhập
            </a>
            <i class="fa-solid fa-bell text-blue-500"></i>
            {/* nút chuyển đổi ngôn ngữ */}
            <button class="ml-8 text-blue-500 hidden lg:block">VN</button>
            <span class="mx-2 hidden lg:block">|</span>
            <button class="hidden lg:block">EN</button>
            <button
              onClick={handleMenuToggle}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          class={
            isMobileMenuOpen
              ? "justify-between items-center w-full lg:hidden"
              : "hidden"
          }
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {/* <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 " aria-current="page">Trường của tôi</a>
                    </li> */}
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={home} class="w-6 h-6" alt="home" />
                  <span>Trường của tôi</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={human2} class="w-6 h-6" alt="home" />
                  <span>bạn bè</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                <div class="flex items-center">
                  <img src={human3} class="w-6 h-6" alt="home" />
                  <span>Hội Nhóm</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div class="flex items-center">
                  <img src={search} class="w-6 h-6" alt="home" />
                  <span>Tìm kiếm</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block"></div>
      </header>
    </>
  );
};

export default Header;
