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

import schooldemo from "../../assets/School/schooldemo.png";

import dmx from "../../assets/School/dmx.jpg";
import tuyensinh from "../../assets/School/tuyensinh.jpg";

import Rmit from "../../assets/Logo/rmit.jpg";

import iconchat from "../../assets/Icon/iconchat.png";

import FPT from "../../assets/DetailShool/FPT.png";
import BG_FPT from "../../assets/DetailShool/bgfpt.png";
import NEW_FPT from "../../assets/DetailShool/new_fpt.png";

import Ads1 from "../../assets/Ads/Ads1.png";
import Ads2 from "../../assets/Ads/Ads2.png";

import Comsoon from "../comsoon/comsoon";
const DetailSchool = () => {
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
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
    {
      name: "ĐẠI HỌC RMIT",
      image: RMIT,
      icon1: humanblue,
      icon2: Startblue,
    },
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
          <div className="border-b-[1px] border-gray-300">
            <div className="flex flex-row">
              <div className="basis-1/6">
                <div className="flex flex-col">
                  <div className="pt-6 pl-10">
                    <svg
                      stroke="#6B7280"
                      height="30px"
                      width="30px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 297 297"
                    >
                      <g>
                        <path
                          d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
		c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
		C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
		c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"
                        />
                        <path
                          d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
		c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
		c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
		C179.265,127.948,165.464,141.901,148.5,141.901z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="pt-24 pl-10">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 15.5002H7M6 18.5002H7M17 18.5002H18M17 15.5002H18M10 22.0002V18.0002C10 16.8956 10.8954 16.0002 12 16.0002C13.1046 16.0002 14 16.8956 14 18.0002V22.0002M12 5H16.84C16.896 5 16.924 5 16.9454 4.9891C16.9642 4.97951 16.9795 4.96422 16.9891 4.9454C17 4.92401 17 4.89601 17 4.84V2.16C17 2.10399 17 2.07599 16.9891 2.0546C16.9795 2.03578 16.9642 2.02049 16.9454 2.0109C16.924 2 16.896 2 16.84 2H12.16C12.104 2 12.076 2 12.0546 2.0109C12.0358 2.02049 12.0205 2.03578 12.0109 2.0546C12 2.07599 12 2.10399 12 2.16V5ZM12 5V7.69092M12.03 12.25H12.0375M12 7.69092C12.1947 7.69092 12.3895 7.71935 12.5779 7.77623C13.0057 7.90536 13.3841 8.24585 14.1407 8.92681L17 11.5002L18.5761 11.8942C19.4428 12.1109 19.8761 12.2192 20.1988 12.4608C20.4834 12.674 20.7061 12.9592 20.8439 13.2871C21 13.6587 21 14.1053 21 14.9987V18.8002C21 19.9203 21 20.4804 20.782 20.9082C20.5903 21.2845 20.2843 21.5905 19.908 21.7822C19.4802 22.0002 18.9201 22.0002 17.8 22.0002H6.2C5.0799 22.0002 4.51984 22.0002 4.09202 21.7822C3.71569 21.5905 3.40973 21.2845 3.21799 20.9082C3 20.4804 3 19.9203 3 18.8002V14.9987C3 14.1053 3 13.6587 3.15613 13.2871C3.29388 12.9592 3.51657 12.674 3.80124 12.4608C4.12389 12.2192 4.55722 12.1109 5.42388 11.8942L7 11.5002L9.85931 8.92681C10.6159 8.24584 10.9943 7.90536 11.4221 7.77623C11.6105 7.71935 11.8053 7.69092 12 7.69092ZM12.03 13C11.6158 13 11.28 12.6642 11.28 12.25C11.28 11.8358 11.6158 11.5 12.03 11.5C12.4442 11.5 12.78 11.8358 12.78 12.25C12.78 12.6642 12.4442 13 12.03 13Z"
                        stroke="#6B7280"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="basis-5/6">
                <div className="max-w-sm mx-auto mb-2 pt-5 px-5 border-b-1 border-gray-300">
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                  >
                    <option selected>Chọn tỉnh</option>
                  </select>
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                  >
                    <option selected>Chọn quận huyện</option>
                  </select>
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                  >
                    <option selected>Chọn phường xã</option>
                  </select>
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                  >
                    <option selected>Chọn trường</option>
                  </select>
                  {/* grid grid-cols-2 */}
                  <div className="grid grid-cols-2 gap-5">
                    <select
                      id="underline_select"
                      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                    >
                      <option selected>Chọn lớp</option>
                    </select>
                    <select
                      id="underline_select"
                      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200    "
                    >
                      <option selected>Chọn khóa học</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 mb-2
                  inline-flex items-center py-2 px-[7rem]  text-sm font-medium text-white bg-[#0487D9] rounded-lg border border-[#0487D9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  {/* <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg> */}
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
          <div className="px-5 py-5 border-b border-gray-300 ">
            <div className="text-sm font-bold text-[#6B7280]">
              Bảng xếp hạng trường học <br />
              <span className="text-[#0487D9] text-sm font-bold">
                Truyền Cảm Hứng
              </span>
            </div>

            <select
              // disabled
              id="underline_select"
              className="mt-5 bg-[#F8F8F8] border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1 px-4"
              // class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            >
              <option selected>Tháng 1</option>
              <option>Tháng 2</option>
              <option>Tháng 3</option>
              <option>Tháng 4</option>
              <option>Tháng 5</option>
              <option>Tháng 6</option>
              <option>Tháng 7</option>
              <option>Tháng 8</option>
              <option>Tháng 9</option>
              <option>Tháng 10</option>
              <option>Tháng 11</option>
              <option>Tháng 12</option>
            </select>

            <div className=" mt-5 pb-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-b border-gray-300 mt-5 pb-3">
                  <div className="grid grid-cols-10 gap-5 mt-5">
                    <div className="col-span-2 flex items-center justify-center text-center">
                      <img src={top1} alt="top1" className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col col-span-6 align-items-left">
                      <h3 className="text-sm font-bold text-left text-[#808080]">
                        Đại học RMIT
                      </h3>
                      <div className="grid grid-cols-2 gap-1">
                        <div class="flex flex-row">
                          <div class="basis-1/2">
                            <div className="text-[#0487D9]">8815</div>
                          </div>
                          <div class="basis-1/2">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="white" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                fill="#0487D9"
                              />
                              <path
                                d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                fill="#0487D9"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                fill="#0487D9"
                              />
                              <path
                                d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                fill="#0487D9"
                              />
                            </svg>
                          </div>
                        </div>

                        <div class="flex flex-row">
                          <div class="basis-1/2">
                            <div className="text-[#0487D9]">8815</div>
                          </div>
                          <div class="basis-1/2">
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>start-favorite</title>
                              <desc>Created with Sketch Beta.</desc>
                              <defs></defs>
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Icon-Set-Filled"
                                  transform="translate(-154.000000, -881.000000)"
                                  fill="#0487D9"
                                >
                                  <path
                                    d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                                    id="start-favorite"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center text-center">
                      <img src={FPT} alt="top1" className="w-10 h-10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-bold leading-none text-gray-900 ">
                  Góc kết nối bạn cũ
                </h5>
              </div>
              <a href="/" className="hover:underline ">
                <button className="text-sm text-white p-2.5 bg-[#0487D9] rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Tham gia
                </button>
              </a>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 ">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src=" https://i.pravatar.cc/300"
                          alt="random avatar"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          Hồ Lê Bảo Hân
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          1 phút trước
                        </p>
                      </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {/* chat */}
                        <img
                          src={iconchat}
                          alt="iconchat"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <h3>
                      <span className="text-sm font-bold text-gray-900 ">
                        "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                      </span>
                      <br />
                      <span className="text-sm  text-gray-500 ">
                        Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu,
                        xin hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một
                        lời nhắn...
                      </span>
                    </h3>
                  </li>

                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src=" https://i.pravatar.cc/300"
                          alt="random avatar"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          Hồ Lê Bảo Hân
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          1 phút trước
                        </p>
                      </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {/* chat */}
                        <img
                          src={iconchat}
                          alt="iconchat"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <h3>
                      <span className="text-sm font-bold text-gray-900 ">
                        "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                      </span>
                      <br />
                      <span className="text-sm  text-gray-500 ">
                        Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu,
                        xin hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một
                        lời nhắn...
                      </span>
                    </h3>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src=" https://i.pravatar.cc/300"
                          alt="random avatar"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          Hồ Lê Bảo Hân
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          1 phút trước
                        </p>
                      </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {/* chat */}
                        <img
                          src={iconchat}
                          alt="iconchat"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <h3>
                      <span className="text-sm font-bold text-gray-900 ">
                        "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                      </span>
                      <br />
                      <span className="text-sm  text-gray-500 ">
                        Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu,
                        xin hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một
                        lời nhắn...
                      </span>
                    </h3>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src=" https://i.pravatar.cc/300"
                          alt="random avatar"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          Hồ Lê Bảo Hân
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          1 phút trước
                        </p>
                      </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {/* chat */}
                        <img
                          src={iconchat}
                          alt="iconchat"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <h3>
                      <span className="text-sm font-bold text-gray-900 ">
                        "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                      </span>
                      <br />
                      <span className="text-sm  text-gray-500 ">
                        Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu,
                        xin hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một
                        lời nhắn...
                      </span>
                    </h3>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src=" https://i.pravatar.cc/300"
                          alt="random avatar"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                          Hồ Lê Bảo Hân
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                          1 phút trước
                        </p>
                      </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {/* chat */}
                        <img
                          src={iconchat}
                          alt="iconchat"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <h3>
                      <span className="text-sm font-bold text-gray-900 ">
                        "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                      </span>
                      <br />
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                      Nulla Quam Velit, Vulputate Eu Pharetra Nec, Mattis Ac
                      Neque.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div
          className="basis-3/5 mx-auto px-20 pt-5"
          // SKHI SCROLL XUỐNG KHÔNG ẢNH HƯỞNG ĐẾN LEFT VÀ RIGHT  và ẩn thanh scroll
          // style={{
          //   overflowY: "auto",
          //   maxHeight: "calc(100vh - 4rem)",
          //   overflowX: "hidden",
          // }}
        >
          <div className="">
            {/* banner 1 */}
            <div className="banner_school min-h-[10rem] relative shadow-lg rounded-lg">
              <img src={BG_FPT} alt="FPT" className="w-full h-full" />
              {/* dùng  flex chia 3 cột */}
              <div className="flex flex-row justify-start py-5 bg-[#FCFCFC]">
                <div className="basis-1/6">
                  <div
                    className="bg-white p-2 rounded-lg w-40 h-40  rounded-full object-cover"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-355%,-0%)",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={FPT}
                      alt="FPT"
                      className="w-30 h-30  rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="basis-4/6  justify-start">
                  <div className="text-2xl font-bold text-[#0487D9]">
                    Trường Đại học FPT Thành phố Hồ Chí Minh
                  </div>
                  <div className="text-[#6B6B6B] mt-4">
                    <div
                      className="
                    w-28 h-10 inline-block mr-2"
                    >
                      <div class="flex flex-row items-center justify-center">
                        <div class="basis-1/3">
                          <div className="text-[#A3A3A3] font-bold">8815</div>
                        </div>
                        <div class="basis-2/3">
                          <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" fill="white" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                              fill="#A3A3A3"
                            />
                            <path
                              d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                              fill="#A3A3A3"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                              fill="#A3A3A3"
                            />
                            <path
                              d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                              fill="#A3A3A3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                    w-28 h-10 inline-block mr-2"
                    >
                      <div class="flex flex-row items-center justify-center">
                        <div class="basis-1/3">
                          <div className="text-[#A3A3A3] font-bold">8815</div>
                        </div>
                        <div class="basis-2/3">
                          <svg
                            width="28px"
                            height="28px"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>start-favorite</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs></defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                id="Icon-Set-Filled"
                                transform="translate(-154.000000, -881.000000)"
                                fill="#A3A3A3"
                              >
                                <path
                                  d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                                  id="start-favorite"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/6 text-right  mr-5 ">
                  <div className="text-right  mb-5 text-[#ED7D29]">
                    <div className="flex flex-row ml-16">
                      <div className="flex items-end">Đánh giá</div>
                      <div className="ml-2">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#ED7D29"
                            d="M16 1.25L20.6 10.6L30.5 11.6L22.7 18.9L24.8 28.8L16 23.6L7.2 28.8L9.3 18.9L1.5 11.6L11.4 10.6L16 1.25Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#05AFF2] text-white rounded-full p-2 px-[2.5rem] ml-2">
                    Flollow
                  </button>
                </div>
              </div>
            </div>
            {/* title school */}
            <div className="my-5">
              <div className="title_school text-[#6B6B6B] ">
                Trường Đại học FPT là một trong những cơ sở giáo dục hàng đầu
                tại Việt Nam, với sứ mệnh cung cấp môi trường học tập và nền
                tảng công nghệ tiên tiến cho sinh viên. Với hơn 20 năm hoạt
                động, trường đã xây dựng được uy tín vững chắc trong lĩnh vực
                đào tạo Công nghệ thông tin và các ngành liên quan
              </div>
              <div className="address_school  border-l-4 border-[#6B6B6B] pl-5 mt-5  text-[#6B6B6B] italic">
                {/* <div className="ml-5"> */}
                <h3>
                  Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP.
                  Thủ Đức, TP. Hồ Chí Minh
                </h3>
                <h3>028 7300 1866</h3>
                <h3>daihocfpt@fpt.edu.vn</h3>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* Bài đăng phổ biến */}
          <div className="popular_post  min-h-[10rem]  bg-[#0487D9] p-10 rounded-lg">
            <h3 className="text-white text-font-bold pb-5">
              Bài đăng phổ biến
            </h3>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <div className="max-w-sm bg-white rounded-lg shadow">
                  <a href="/">
                    <img className="rounded-t-lg" src={NEW_FPT} alt="" />
                  </a>
                  <div className="p-3 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-[#6B6B6B] ">
                        Dưới đây là một số hướng dẫn và lời khuyên để bạn có một
                        khởi đầu suôn sẻ và thành...
                      </h5>
                    </a>
                  </div>

                  <div class="flex ">
                    <div class="flex-none w-24 h-24">
                      <img
                        src={FPT}
                        alt="FPT"
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    <div class="grow h-14 mt-2">
                      <h3 className="text-sm font-bold text-[#6B6B6B]">FPT</h3>
                      <h3 className="text-sm">Niêm khóa K23</h3>

                      <h3 className="text-sm">15/03/2024 lúc 2PM</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white rounded-lg shadow">
                  <a href="/">
                    <img className="rounded-t-lg" src={NEW_FPT} alt="" />
                  </a>
                  <div className="p-3 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-[#6B6B6B] ">
                        Dưới đây là một số hướng dẫn và lời khuyên để bạn có một
                        khởi đầu suôn sẻ và thành...
                      </h5>
                    </a>
                  </div>

                  <div class="flex ">
                    <div class="flex-none w-24 h-24">
                      <img
                        src={FPT}
                        alt="FPT"
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    <div class="grow h-14 mt-2">
                      <h3 className="text-sm font-bold text-[#6B6B6B]">FPT</h3>
                      <h3 className="text-sm">Niêm khóa K23</h3>

                      <h3 className="text-sm">15/03/2024 lúc 2PM</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white rounded-lg shadow">
                  <a href="/">
                    <img className="rounded-t-lg" src={NEW_FPT} alt="" />
                  </a>
                  <div className="p-3 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-[#6B6B6B] ">
                        Dưới đây là một số hướng dẫn và lời khuyên để bạn có một
                        khởi đầu suôn sẻ và thành...
                      </h5>
                    </a>
                  </div>

                  <div class="flex ">
                    <div class="flex-none w-24 h-24">
                      <img
                        src={FPT}
                        alt="FPT"
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    <div class="grow h-14 mt-2">
                      <h3 className="text-sm font-bold text-[#6B6B6B]">FPT</h3>
                      <h3 className="text-sm">Niêm khóa K23</h3>

                      <h3 className="text-sm">15/03/2024 lúc 2PM</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bảng tin mới */}
          <div className="news py-5">
            <h3 className="font-bold text-[#6B6B6B]">Bảng tin mới</h3>
            <div className="grid grid-cols-5 gap-5 my-6">
              <div className="col-span-2">
                <img src={nui} alt="nui" className="w-full h-full rounded-lg" />
              </div>
              <div className="px-5 col-span-3">
                <h3 className="text-xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-sm pb-10">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullam
                </p>
                <p className="mt-10 text-sm text-[#6B6B6B]">
                  15/03/2024 lúc 2PM
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-5 my-6">
              <div className="col-span-2">
                <img src={nui} alt="nui" className="w-full h-full rounded-lg" />
              </div>
              <div className="px-5 col-span-3">
                <h3 className="text-xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-sm pb-10">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullam
                </p>
                <p className="mt-10 text-sm text-[#6B6B6B]">
                  15/03/2024 lúc 2PM
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-5 my-6">
              <div className="col-span-2">
                <img src={nui} alt="nui" className="w-full h-full rounded-lg" />
              </div>
              <div className="px-5 col-span-3">
                <h3 className="text-xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-sm pb-10">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullam
                </p>
                <p className="mt-10 text-sm text-[#6B6B6B]">
                  15/03/2024 lúc 2PM
                </p>
              </div>
            </div>
          </div>
          {/* nút thêm xem thêm */}
          <div
            className="flex justify-center mt-5 mb-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="bg-[#0487D9] text-white rounded-lg p-2.5 px-[4rem]"
              // onClick={this.handleLoadMore}
            >
              Xem thêm bảng tin
            </button>
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
          <div className="block w-full bg-white text-surface shadow-secondary-1 border-b border-gray-300 p-5">
            <ul className="w-full">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                <div className="flex">
                  <div className="basis-1/6">
                    <svg
                      version="1.1"
                      id="PAGE"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 1800 1800"
                      enable-background="new 0 0 1800 1800"
                    >
                      <g>
                        <path
                          fill="#333333"
                          d="M1720.335,5.563H85.245c-43.937,0-79.679,35.739-79.679,79.667v1635.1c0,43.928,35.743,79.67,79.679,79.67
		h1635.09c43.927,0,79.665-35.742,79.665-79.67V85.23C1800,41.302,1764.262,5.563,1720.335,5.563z M85.245,68.575h1635.09
		c9.182,0,16.653,7.473,16.653,16.655v195.532H68.578V85.23C68.578,76.048,76.055,68.575,85.245,68.575z M1720.335,1736.988H85.245
		c-9.19,0-16.667-7.472-16.667-16.658V343.774h1668.41V1720.33C1736.988,1729.517,1729.517,1736.988,1720.335,1736.988z"
                        />
                        <path
                          fill="#333333"
                          d="M1518.679,1150.928H333.948c-47.154,0-85.517,38.363-85.517,85.517v315.061
		c0,47.152,38.363,85.516,85.517,85.516h1184.73c47.154,0,85.518-38.363,85.518-85.516v-315.061
		C1604.196,1189.291,1565.833,1150.928,1518.679,1150.928z M1541.184,1551.505c0,12.403-10.096,22.504-22.505,22.504H333.948
		c-12.409,0-22.504-10.101-22.504-22.504v-315.061c0-12.412,10.096-22.505,22.504-22.505h1184.73
		c12.409,0,22.505,10.093,22.505,22.505V1551.505z"
                        />
                        <path
                          fill="#333333"
                          d="M333.948,913.886h305.565c47.153,0,85.517-38.365,85.517-85.519V522.802
		c0-47.154-38.363-85.516-85.517-85.516H333.948c-47.154,0-85.517,38.362-85.517,85.516v305.565
		C248.432,875.521,286.794,913.886,333.948,913.886z M311.444,522.802c0-12.408,10.096-22.504,22.504-22.504h305.565
		c12.408,0,22.505,10.096,22.505,22.504v305.565c0,12.408-10.097,22.505-22.505,22.505H333.948
		c-12.409,0-22.504-10.097-22.504-22.505V522.802z"
                        />
                        <path
                          fill="#333333"
                          d="M1572.689,996.396H279.938c-17.401,0-31.506,14.108-31.506,31.505c0,17.406,14.105,31.507,31.506,31.507
		h1292.751c17.401,0,31.507-14.101,31.507-31.507C1604.196,1010.505,1590.091,996.396,1572.689,996.396z"
                        />
                        <path
                          fill="#333333"
                          d="M1572.689,832.116H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505
		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,846.222,1590.091,832.116,1572.689,832.116z"
                        />
                        <path
                          fill="#333333"
                          d="M1572.689,643.081H858.558c-17.402,0-31.507,14.105-31.507,31.506c0,17.401,14.105,31.505,31.507,31.505
		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,657.186,1590.091,643.081,1572.689,643.081z"
                        />
                        <path
                          fill="#333333"
                          d="M1572.689,454.044H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505
		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,468.15,1590.091,454.044,1572.689,454.044z"
                        />
                        <circle
                          fill="#333333"
                          cx="204.913"
                          cy="171.616"
                          r="50.635"
                        />
                        <circle
                          fill="#333333"
                          cx="364.694"
                          cy="171.616"
                          r="50.635"
                        />
                        <circle
                          fill="#333333"
                          cx="524.474"
                          cy="171.616"
                          r="50.635"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="basis-4/6 font-bold text-[#6B6B6B]">
                    Hãy đăng tin của bạn
                  </div>
                </div>
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                <div className="flex">
                  <div className="basis-1/6">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="2.5"
                        stroke="#222222"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205"
                        stroke="#222222"
                      />
                      <path
                        d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205"
                        stroke="#222222"
                      />
                      <path
                        d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z"
                        stroke="#222222"
                        stroke-linecap="round"
                      />
                      <path
                        d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z"
                        fill="#222222"
                      />
                      <path
                        d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z"
                        fill="#222222"
                      />
                    </svg>
                  </div>
                  <div className="basis-4/6 font-bold text-[#6B6B6B]">
                    Cộng đồng
                  </div>
                </div>
              </li>
              <li className="w-full p-4">
                <div className="flex">
                  <div className="basis-1/6">
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
                        fill="#222222"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 10L16 10"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 18L16 18"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 14L12 14"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="basis-4/6 font-bold text-[#6B6B6B]">
                    Thông tin hữu ích
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
        <h4 className="text-2xl font-bold mt-5  pb-3">
          Gợi ý một số trường khác
        </h4>
        {/* grid grid-cols-4 */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
            <img src={schooldemo} alt="top1" className="w-full h-[15rem]" />
            <h1>Logo</h1>
            <div className="mt-2 text-sm font-bold">
              Trường THPT Lê Quý Đôn - Long Bình Tân
            </div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
            <img src={schooldemo} alt="top1" className="w-full h-[15rem]" />
            <h1>Logo</h1>
            <div className="mt-2 text-sm font-bold">Trường THCS Hòa Bình</div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
            <img src={schooldemo} alt="top1" className="w-full h-[15rem]" />
            <h1>Logo</h1>
            <div className="mt-2 text-sm font-bold">
              Trường THPT Lương Thế Vinh
            </div>
          </div>
          <div className="col-span-1 p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center">
            <img src={schooldemo} alt="top1" className="w-full h-[15rem]" />
            <h1>Logo</h1>
            <div className="mt-2 text-sm font-bold">
              Trường THPT chuyên Lê Hồng Phong
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSchool;
