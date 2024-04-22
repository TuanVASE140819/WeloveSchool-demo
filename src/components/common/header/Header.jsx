import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

import human2 from "../../../assets/Icon/human2.png";
import human3 from "../../../assets/Icon/human3.png";
import home from "../../../assets/Icon/home.png";
import search from "../../../assets/Icon/search.png";

import Logo from "../../../assets/Logo/Logo.png";

import { notification } from "../../../Data/top10";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("dataUser");
    window.location.reload(); // refresh trang
  };

  const dataUser = localStorage.getItem("dataUser");
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 sticky top-0 z-50 flex justify-between items-center">
          <div className="flex items-center lg:ml-10 md:ml-1 sm:ml-1">
            <a href="/" className="flex items-center">
              <img
                src={Logo}
                className="h-6 sm:h-9 object-contain"
                alt="WeloveSchool Logo"
              />
            </a>
          </div>
          <ul className="hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/allSchool"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div className="flex items-center">
                  <img src={home} className="w-6 h-6 mr-1" alt="home" />
                  {/* <i className="fa-solid fa-school-flag w-6 h-6 mr-2"></i> */}
                  <span>Trường của tôi</span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div className="flex items-center">
                  <img src={search} className="w-6 h-6" alt="home" />
                  <span>Tìm kiếm</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex items-center lg:order-2 lg:mr-10 md:mr-1 sm:mr-1">
            <div className="relative inline-block text-left">
              {/* nếu nameLocal khác null thì hiển thị tên người dùng  */}
              {dataUser !== null ? (
                <div className="dropdown">
                  <div>
                    <button
                      type="button"
                      className="text-[#3D92D1] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-bold"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full ">
                        <svg
                          className="absolute w-10 h-10 text-gray-400 -left-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="dropdown-content">
                    <div
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      // tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        <button
                          // href="/login"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                          onClick={handleSignOut}
                        >
                          Đăng xuất
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="dropdown">
                    <div>
                      <button
                        type="button"
                        className="text-[#3D92D1] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-bold"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <div className="dropdown-content">
                      <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        // tabindex="-1"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="/login"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-0"
                          >
                            Đăng nhập
                          </a>
                          <a
                            href="/register"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-0"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              className="text-[#3D92D1] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-bold"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full ">
                <svg
                  className="absolute w-6 h-6 text-gray-400  top-[5px] left-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                </svg>
              </div>
            </button>
            {/* nút chuyển đổi ngôn ngữ */}
            <button className="ml-8 text-sm text-[#3D92D1] hidden lg:block">
              VN
            </button>
            <span className="mx-2 hidden lg:block">|</span>
            <button className="hidden text-sm lg:block">EN</button>
            <button
              onClick={handleMenuToggle}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          className={
            isMobileMenuOpen
              ? "justify-between items-center w-full lg:hidden z-50 bg-white border-gray-200 px-4 lg:px-6 py-2.5"
              : "hidden"
          }
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div className="flex items-center">
                  <img src={home} className="w-6 h-6" alt="home" />
                  <span>Trường của tôi</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div className="flex items-center">
                  <img src={human2} className="w-6 h-6" alt="home" />
                  <span>bạn bè</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              >
                <div className="flex items-center">
                  <img src={human3} className="w-6 h-6" alt="home" />
                  <span>Hội Nhóm</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                <div className="flex items-center">
                  <img src={search} className="w-6 h-6" alt="home" />
                  <span>Tìm kiếm</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block"></div>
      </header>
    </>
  );
};

export default Header;
