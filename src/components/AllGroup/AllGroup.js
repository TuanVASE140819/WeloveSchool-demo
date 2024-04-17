import React, { useEffect, useState } from "react";
import RMIT from "../../assets/School/RMIT.jpg";
import Startblue from "../../assets/Icon/Startblue.jpg";
import humanblue from "../../assets/Icon/humanblue.jpg";

import top1 from "../../assets/Home/Top1.png";
import top2 from "../../assets/Home/Top2.png";
import top3 from "../../assets/Home/Top3.png";

import nui from "../../assets/More/nui2.png";
import nui2 from "../../assets/More/nui.png";
import song from "../../assets/More/song.png";
import xilo from "../../assets/More/xilo.png";
import FPT from "../../assets/DetailShool/FPT.png";

import dmx from "../../assets/School/dmx.jpg";
import tuyensinh from "../../assets/School/tuyensinh.jpg";

import Rmit from "../../assets/Logo/rmit.jpg";

import iconchat from "../../assets/Icon/iconchat.png";
import Ads1 from "../../assets/Ads/Ads1.png";
import Ads2 from "../../assets/Ads/Ads2.png";

import Comsoon from "../comsoon/comsoon";
const AllGroup = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = [
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
    { name: "ĐẠI HỌC RMIT", image: RMIT, icon1: humanblue, icon2: Startblue },
  ];

  if (isMobile) {
    return (
      <div className="">
        <Comsoon />
        {/* <Banner2 /> */}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="">
        <Comsoon />
      </div>
    );
  }
  return (
    <>
      <div className=" flex flex-row  border-b border-gray-300">
        {/* left */}
        <div className="basis-1/5 border-r border-gray-300 bg-gray-50">
          <div className="px-5 py-5 border-b border-gray-300 ">
            <div className="text-sm font-bold text-[#6B7280]">
              Cuộc trò chuyện nhóm
            </div>

            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src=" https://i.pravatar.cc/500"
                  alt="random avatar"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-bold text-gray-500 truncate ">
                  Hội họa
                </p>
                <p className="text-sm text-gray-500 truncate ">Niêm khóa K23</p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src=" https://i.pravatar.cc/500"
                  alt="random avatar"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-bold text-gray-500 truncate ">
                  Hội họa
                </p>
                <p className="text-sm text-gray-500 truncate ">Niêm khóa K23</p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src=" https://i.pravatar.cc/500"
                  alt="random avatar"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-bold text-gray-500 truncate ">
                  Hội họa
                </p>
                <p className="text-sm text-gray-500 truncate ">Niêm khóa K23</p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src=" https://i.pravatar.cc/500"
                  alt="random avatar"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-bold text-gray-500 truncate ">
                  Hội họa
                </p>
                <p className="text-sm text-gray-500 truncate ">Niêm khóa K23</p>
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="basis-3/5 mx-auto px-5 pt-5 max-w-7xl">
          <div className="list-group">
            <div className=" mx-10  h-[12rem] bg-slate-50 rounded-lg">
              {/* chia lamf 2 row dung flex */}
              <div className="flex flex-col p-5">
                <div className="basis-1/2">
                  <div className="flex flex-row">
                    <div className="basis-1/5">
                      <img
                        src={RMIT}
                        alt="RMIT"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <h1 className="text-2xl font-bold text-gray-900 ">
                        Diễn đàn hội nhóm đời sống
                      </h1>
                      <p className="text-sm text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* flex cols-3 */}
                  <div className="flex flex-row">
                    <div className="basis-1/2">
                      {/* flex row */}
                      <div className="flex flex-row">
                        <div className="basis-1/3">
                          {" "}
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <a
                              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/"
                            >
                              +99
                            </a>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="flex flex-row">
                            <h3 className=" mt-2 text-sm  text-gray-600 ">
                              8815
                            </h3>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#666666"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#666666"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-1/2 flex justify-end">
                      <button className="text-xs text-white px-4 bg-[#4ABC96] rounded-full">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 mx-10  h-[12rem] bg-slate-50 rounded-lg">
              {/* chia lamf 2 row dung flex */}
              <div className="flex flex-col p-5">
                <div className="basis-1/2">
                  <div className="flex flex-row">
                    <div className="basis-1/5">
                      <img
                        src={RMIT}
                        alt="RMIT"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <h1 className="text-2xl font-bold text-gray-900 ">
                        Diễn đàn hội nhóm đời sống
                      </h1>
                      <p className="text-sm text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* flex cols-3 */}
                  <div className="flex flex-row">
                    <div className="basis-1/2">
                      {/* flex row */}
                      <div className="flex flex-row">
                        <div className="basis-1/3">
                          {" "}
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <a
                              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/"
                            >
                              +99
                            </a>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="flex flex-row">
                            <h3 className=" mt-2 text-sm  text-gray-600 ">
                              8815
                            </h3>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#666666"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#666666"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-1/2 flex justify-end">
                      <button className="text-xs text-white px-4 bg-[#4ABC96] rounded-full">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 mx-10  h-[12rem] bg-slate-50 rounded-lg">
              {/* chia lamf 2 row dung flex */}
              <div className="flex flex-col p-5">
                <div className="basis-1/2">
                  <div className="flex flex-row">
                    <div className="basis-1/5">
                      <img
                        src={RMIT}
                        alt="RMIT"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <h1 className="text-2xl font-bold text-gray-900 ">
                        Diễn đàn hội nhóm đời sống
                      </h1>
                      <p className="text-sm text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* flex cols-3 */}
                  <div className="flex flex-row">
                    <div className="basis-1/2">
                      {/* flex row */}
                      <div className="flex flex-row">
                        <div className="basis-1/3">
                          {" "}
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <a
                              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/"
                            >
                              +99
                            </a>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="flex flex-row">
                            <h3 className=" mt-2 text-sm  text-gray-600 ">
                              8815
                            </h3>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#666666"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#666666"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-1/2 flex justify-end">
                      <button className="text-xs text-white px-4 bg-[#4ABC96] rounded-full">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 mx-10  h-[12rem] bg-slate-50 rounded-lg">
              {/* chia lamf 2 row dung flex */}
              <div className="flex flex-col p-5">
                <div className="basis-1/2">
                  <div className="flex flex-row">
                    <div className="basis-1/5">
                      <img
                        src={RMIT}
                        alt="RMIT"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <h1 className="text-2xl font-bold text-gray-900 ">
                        Diễn đàn hội nhóm đời sống
                      </h1>
                      <p className="text-sm text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* flex cols-3 */}
                  <div className="flex flex-row">
                    <div className="basis-1/2">
                      {/* flex row */}
                      <div className="flex flex-row">
                        <div className="basis-1/3">
                          {" "}
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <a
                              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/"
                            >
                              +99
                            </a>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="flex flex-row">
                            <h3 className=" mt-2 text-sm  text-gray-600 ">
                              8815
                            </h3>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#666666"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#666666"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-1/2 flex justify-end">
                      <button className="text-xs text-white px-4 bg-[#4ABC96] rounded-full">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 mx-10  h-[12rem] bg-slate-50 rounded-lg">
              {/* chia lamf 2 row dung flex */}
              <div className="flex flex-col p-5">
                <div className="basis-1/2">
                  <div className="flex flex-row">
                    <div className="basis-1/5">
                      <img
                        src={RMIT}
                        alt="RMIT"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    <div className="basis-4/5">
                      <h1 className="text-2xl font-bold text-gray-900 ">
                        Diễn đàn hội nhóm đời sống
                      </h1>
                      <p className="text-sm text-gray-500 ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {/* flex cols-3 */}
                  <div className="flex flex-row">
                    <div className="basis-1/2">
                      {/* flex row */}
                      <div className="flex flex-row">
                        <div className="basis-1/3">
                          {" "}
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <img
                              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                              src="https://i.pravatar.cc/300"
                              alt=""
                            />
                            <a
                              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/"
                            >
                              +99
                            </a>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="flex flex-row">
                            <h3 className=" mt-2 text-sm  text-gray-600 ">
                              8815
                            </h3>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#666666"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#666666"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#666666"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="basis-1/2 flex justify-end">
                      <button className="text-xs text-white px-4 bg-[#4ABC96] rounded-full">
                        Tham gia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div
          className="basis-1/5 border-l border-gray-300 bg-gray-50"
          // style={{
          //   overflowY: "auto",
          //   maxHeight: "calc(100vh - 4rem)",
          //   //KHI SCROLL XUỐNG HẾT THÌ CỐ ĐỊNH
          //   position: "sticky",
          // }}
        >
          <div className="Ads border-b border-gray-300 p-5">
            <img
              src="https://daihoc.fpt.edu.vn/wp-content/uploads/2021/03/tien_phong_tuyen_sinh_jzut-373x206.jpg"
              alt="Ads"
              className="w-full h-full"
            />
            <h5 className=" text-[#6B6B6B] ">fpt.edu</h5>
            <h5 className="text-bold ">Tuyển sinh khóa K25 - 2024</h5>
          </div>
          <div className="Ads border-b border-gray-300 p-5">
            <img src={Ads2} alt="Ads" className="w-full h-full" />
            <h5 className=" text-[#6B6B6B] ">dmx.com</h5>
            <h5 className="text-bold ">Nóng quá!!!!</h5>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h4 className="text-2xl font-bold mt-5  pb-3">Bài viết khác</h4>
        {/* grid grid-cols-4 */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 p-4 border border-gray-300 rounded-lg">
            <img src={nui} alt="top1" className="w-full h-[15rem]" />

            <div className="mt-2 text-sm font-bold">
              "Du lịch cùng Xilo: Hành trình khám phá vẻ đẹp của Núi Đá Bia và
              Đồi Chè Cầu Đất - Bảo Lộc - Lâm Đồng, Việt Nam "
            </div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300  rounded-lg">
            <img src={song} alt="top1" className="w-full h-[15rem]" />

            <div className="mt-2 text-sm font-bold">
              "Du lịch cùng Xilo: Hành trình khám phá vẻ đẹp của Núi Đá Bia và
              Đồi Chè Cầu Đất - Bảo Lộc - Lâm Đồng, Việt Nam "
            </div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300  rounded-lg">
            <img src={nui2} alt="top1" className="w-full h-[15rem]" />

            <div className="mt-2 text-sm font-bold">
              "Du lịch cùng Xilo: Hành trình khám phá vẻ đẹp của Núi Đá Bia và
              Đồi Chè Cầu Đất - Bảo Lộc - Lâm Đồng, Việt Nam "
            </div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300  rounded-lg">
            <img src={xilo} alt="top1" className="w-full h-[15rem]" />

            <div className="mt-2 text-sm font-bold">
              "Du lịch cùng Xilo: Hành trình khám phá vẻ đẹp của Núi Đá Bia và
              Đồi Chè Cầu Đất - Bảo Lộc - Lâm Đồng, Việt Nam "
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGroup;
