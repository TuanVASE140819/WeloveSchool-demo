import React, { useEffect, useState } from "react";

import top1 from "../../assets/Home/Top1.png";


import nui from "../../assets/More/nui2.png";
import nui2 from "../../assets/More/nui.png";
import song from "../../assets/More/song.png";
import xilo from "../../assets/More/xilo.png";
import FPT from "../../assets/DetailShool/FPT.png";
import { getListSchool } from "../../api/apiServices";

import iconchat from "../../assets/Icon/iconchat.png";
import Ads2 from "../../assets/Ads/Ads2.png";

import Comsoon from "../comsoon/comsoon";
import { Link } from "react-router-dom";

import defaultLogo from "../../assets/Default/logo.jpg";

const DetailSchool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [data, setData] = useState([]);

  const [selectLevel, setSelectLevel] = useState("");
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

  // get list school : getListSchool
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getListSchool(
          "",
          "",
          "",
          "",
          selectLevel,
          1,
          20
        );
        setData(response.data);
        setIsLoading(false);
        console.log("response", response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddressChange = (type, value) => {
    setSelectLevel(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the search parameters
    const level = document.getElementById("level").value;
    const searchQuery = document.getElementById("voice-search").value;

    // Call the API
    const response = await getListSchool(searchQuery, "", "", "", level, 1, 20);
    setData(response.data);
  };

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
      <div>
        <div className=" flex flex-row  border-b border-gray-300">
          {/* left */}
          <div className="basis-1/5 border-r border-gray-300 bg-gray-50">
            <div className="border-b-[1px] border-gray-300">
              <form class="max-w-sm mx-auto p-5">
                <label for="underline_select" class="sr-only">
                  Underline select
                </label>
                <select
                  id="province"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200"
                >
                  <option selected>Chọn tỉnh </option>
                </select>
                <select
                  id="district"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200"
                >
                  <option selected>Chọn quận huyện</option>
                </select>
                <select
                  id="ward"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200"
                >
                  <option selected>Chọn phường xã</option>
                </select>
                {/* nút tìm */}
                <div class="flex justify-center items-center">
                  <button
                    type="submit"
                    class="my-2 px-20 p-2 bg-[#0487D9] text-white rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Tìm
                  </button>
                </div>
              </form>
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
                      <div className="col-span-2 flex items-center justify-center text-center px-2">
                        <img src={top1} alt="top1" className="w-10 h-10" />
                      </div>
                      <div className="flex flex-col col-span-6 align-items-left">
                        <h3 className="text-sm font-bold text-left text-[#808080]">
                          Đại học RMIT
                        </h3>
                        <div className="grid grid-cols-2 gap-1">
                          <div class="flex flex-row px-2">
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
                  <button className="text-sm text-white  w-full p-2.5 bg-[#0487D9] rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
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
          <div className="basis-3/5 mx-auto px-5 pt-5 max-w-7xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-7 ">
                <div className="col-span-1 mr-2 ">
                  <select
                    id="level"
                    value={selectLevel}
                    // disabled={!selectedWard}
                    onChange={(e) =>
                      handleAddressChange("level", e.target.value)
                    }
                    className="bg-gray-50 border border-orange-300 text-orange-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[0.69rem] mr-4"
                  >
                    <option value="" disabled className="text-[1rem]">
                      Cấp
                    </option>
                    <option value="Tiểu học">Tiểu học</option>
                    <option value="Trung học cơ sở">Trung học cơ sở</option>
                    <option value="Trung học phổ thông">
                      Trung học phổ thông
                    </option>
                    <option value="Trung cấp">Trung cấp</option>
                    <option value="Cao đẳng">Cao đẳng</option>
                    <option value="Đại học">Đại học</option>
                  </select>
                </div>
                <div className="col-span-5">
                  <div className="flex items-center">
                    <label htmlFor="voice-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full rounded-lg">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        {/* svg location */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                        >
                          <path
                            fill="#000000"
                            fill-rule="evenodd"
                            d="M574,120 C575.324428,120 580,114.054994 580,110.833333 C580,107.611672 577.313708,105 574,105 C570.686292,105 568,107.611672 568,110.833333 C568,114.054994 572.675572,120 574,120 Z M574,113.333333 C575.420161,113.333333 576.571429,112.214045 576.571429,110.833333 C576.571429,109.452621 575.420161,108.333333 574,108.333333 C572.579839,108.333333 571.428571,109.452621 571.428571,110.833333 C571.428571,112.214045 572.579839,113.333333 574,113.333333 Z"
                            transform="translate(-568 -105)"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="voice-search"
                        className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-500 italic"
                        placeholder="Tỉnh bạn muốn tìm kiếm..."
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-[3rem] ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 "
                  >
                    <svg
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
                    </svg>
                    {/* Tìm kiếm */}
                  </button>
                </div>
              </div>
            </form>
            {/* card */}
            <div className="grid grid-cols-2 mt-5 gap-5 ">
              {data.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-row rounded-lg p-1 bg-gray-50  border  border-gray-300"
                >
                  <div className="basis-2/6 p-1">
                    <div className="">
                      {/* nếu  product.image = null thì hiển thị ảnh mặc định */}
                      <img
                        src={product.image ? product.image : defaultLogo}
                        alt="product"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="basis-4/6">
                    <h1 className="text-xl font-bold text-[#0487D9] mb-2 mt-2">
                      {product.name}
                    </h1>
                    <div className="flex flex-row max-w-[130px]  mb-3">
                      <div class="ml-3 flex flex-row mr-6">
                        <div class="basis-1/2">
                          <div className="text-[#A3A3A3]">
                            {" "}
                            {Math.floor(Math.random() * 10000)}
                          </div>
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

                      <div class="flex flex-row ">
                        <div class="basis-1/2 mb-4">
                          <div className="text-[#A3A3A3]">
                            {Math.floor(Math.random() * 10000)}
                          </div>
                        </div>
                        <div class="basis-1/2 mb-4">
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
                    <div class="flex justify-between ">
                      <Link to={`/detailSchool/${product.id}`}>
                        <div
                          // href="/detailSchool"
                          className="hover:underline text-white text-sm"
                          style={{
                            display: "flex",
                            // bỏ dấu gạch chân
                            textDecoration: "none",
                          }}
                        >
                          <button
                            className="bg-[#4ABC96] text-white rounded-lg p-2 mx-[6rem] px-[5.5rem]
                    hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2 ml-2"
                          >
                            Xem trường
                          </button>
                        </div>
                      </Link>

                      <button className="bg-gray-200 text-black rounded-lg p-1 px-1.5">
                        {/*  icon 3 chấm */}
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* nút thêm xem thêm */}
            <div
              className="mb-5 flex justify-center mt-5"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="bg-[#7DD2F5] text-white rounded-lg p-2.5 px-24"
                // onClick={this.handleLoadMore}
              >
                Xem thêm
              </button>
            </div>
          </div>
          {/* right */}
          <div className="basis-1/5 border-l border-gray-300 bg-gray-50">
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
      </div>
    </>
  );
};

export default DetailSchool;
