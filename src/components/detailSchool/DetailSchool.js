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
        <div className="basis-1/6 border-r border-gray-300">
          <div className="border-b-[1px] border-gray-300">
            <div className="max-w-sm mx-auto mb-2 pt-5 px-5 border-b-1 border-gray-300">
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
              >
                <option selected>Chọn tỉnh</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
              >
                <option selected>Chọn quận huyện</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
              >
                <option selected>Chọn phường xã</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
              >
                <option selected>Chọn trường</option>
              </select>
              {/* grid grid-cols-2 */}
              <div className="grid grid-cols-2 gap-5">
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
                >
                  <option selected>Chọn trường</option>
                </select>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none  "
                >
                  <option selected>Chọn trường</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 mb-2 mr-2 inline-flex items-center py-2 px-[5rem] ml-2 text-sm font-medium text-white bg-[#0487D9] rounded-lg border border-[#0487D9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
          <div className="px-5 py-5 border-b border-gray-300 ">
            <div className="text-sm font-bold">
              Bảng xếp hạng trường học <br />
              <span className="text-[#0487D9] text-sm">Truyền Cảm Hứng</span>
            </div>

            <select
              // disabled
              id="underline_select"
              className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 px-4"
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
                <a href="/" className="hover:underline ">
                  <button className="text-sm text-white p-2.5 bg-[#0487D9] rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Tham gia
                  </button>
                </a>
              </div>
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
        <div className="basis-4/6 mx-auto p-10">
          <div className="">
            {/* banner 1 */}
            <div className="banner_school min-h-[10rem] relative shadow-lg rounded-lg">
              <img src={BG_FPT} alt="FPT" className="w-full h-full" />
              {/* dùng  flex chia 3 cột */}
              <div className="flex flex-row justify-start py-5 bg-[#FCFCFC]">
                <div className="basis-1/6">
                  {/* <div
                    className="bg-white p-2 rounded-lg w-30 h-30"
                    style={{
                      transform: "translateY(-60%)",
                      marginLeft: "20%",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={FPT}
                      alt="FPT"
                      className="w-30 h-30  rounded-full object-cover"
                    />
                  </div> */}
                </div>
                <div className="basis-4/6  justify-start">
                  <div className="text-2xl font-bold text-[#0487D9]">
                    Trường Đại học FPT Thành phố Hồ Chí Minh
                  </div>
                  <div className="text-[#6B6B6B] mt-4">
                    <span className="mr-5">4415 người dùng</span>
                    <span>8814 đánh giá</span>
                  </div>
                </div>
                <div className="basis-1/6 text-right  mr-5 ">
                  <div className="text-right mr-3 mb-5 text-[#ED7D29]">
                    Đánh giá ?
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
                  <div className="p-5 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-[#6B6B6B] ">
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
                      <h3 className="text-xl font-bold text-[#6B6B6B]">FPT</h3>
                      <h3>Niêm khóa K23</h3>
                      <h3>15/03/2024 lúc 2PM</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white rounded-lg shadow">
                  <a href="/">
                    <img className="rounded-t-lg" src={NEW_FPT} alt="" />
                  </a>
                  <div className="p-5 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-[#6B6B6B] ">
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
                      <h3 className="text-xl font-bold text-[#6B6B6B]">FPT</h3>
                      <h3>Niêm khóa K23</h3>
                      <h3>15/03/2024 lúc 2PM</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white rounded-lg shadow">
                  <a href="/">
                    <img className="rounded-t-lg" src={NEW_FPT} alt="" />
                  </a>
                  <div className="p-5 border-b-[1px] border-[#D1D1D1]">
                    <a href="/">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-[#6B6B6B] ">
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
                      <h3 className="text-xl font-bold text-[#6B6B6B]">FPT</h3>
                      <h3>Niêm khóa K23</h3>
                      <h3>15/03/2024 lúc 2PM</h3>
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
                <h3 className="text-2xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-xl pb-10">
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
                <h3 className="text-2xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-xl pb-10">
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
                <h3 className="text-2xl font-bold pb-5">
                  "Góc Nhỏ Trường Học: Khoảnh Khắc Đón Chờ Bạn Cũ Quay Trở Lại"
                </h3>
                <p className="text-xl pb-10">
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
            className="flex justify-center mt-5"
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
        <div className="basis-1/6 border-l border-gray-300">
          <div className="block w-full max-w-[18rem] bg-white text-surface shadow-secondary-1 border-b border-gray-300 p-5">
            <ul className="w-full">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                Hãy đăng tin của bạn
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4  dark:border-white/10">
                Cộng đồng
              </li>
              <li className="w-full p-4">Thông tin hữu ích</li>
            </ul>
          </div>
          <div className="Ads border-b border-gray-300 p-5">
            <img src={Ads1} alt="Ads" className="w-full h-full" />
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

export default DetailSchool;
