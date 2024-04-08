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
        <div className="flex-1 border-r border-gray-300">
          <div className="border-b-1 border-gray-300">
            <div className="max-w-sm mx-auto mb-2 pt-5 px-5">
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
                className="mt-4 mb-8 mr-2 inline-flex items-center py-2 px-[5.5rem] ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="px-10 border-b border-gray-300 ">
            <div className="text-sm font-bold">
              Bảng xếp hạng trường học <br />
              <span className="text-blue-600 text-sm">Truyền Cảm Hứng</span>
            </div>

            <select
              // disabled
              id="countries_disabled"
              class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                      <h3 className="text-sm font-bold text-left">
                        Đại học RMIT
                      </h3>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="text-sm text-[#7DD2F5] text-left">
                          4415k
                          <img
                            src={humanblue}
                            alt="star"
                            className="w-5 h-5 inline-block"
                          />
                        </div>
                        <div className="text-sm text-[#7DD2F5] text-left">
                          4415k
                          <img
                            src={Startblue}
                            alt="star"
                            className="w-5 h-5 inline-block"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center text-center">
                      <img src={Rmit} alt="logo_RMIT" className="h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">
                  Góc kết nối bạn cũ
                </h5>
                <a href="/" className="hover:underline ">
                  <button className="text-sm text-white p-2.5 bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
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
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                        Nulla Quam Velit, Vulputate Eu Pharetra Nec, Mattis Ac
                        Neque.
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
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                        Nulla Quam Velit, Vulputate Eu Pharetra Nec, Mattis Ac
                        Neque.
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
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                        Nulla Quam Velit, Vulputate Eu Pharetra Nec, Mattis Ac
                        Neque.
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
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                        Nulla Quam Velit, Vulputate Eu Pharetra Nec, Mattis Ac
                        Neque.
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
        <div className="flex-3 mx-auto p-10">
          <div className="grid grid-cols-7 px-10">
            <div className="col-span-1 mr-2 ">
              <select
                id="ward"
                defaultValue="Chọn Cấp"
                className="bg-gray-50 border border-orange-300 text-orange-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-4"
              >
                <option disabled>Chọn Cấp</option>
                <option value="1">Cấp 1</option>
                <option value="2">Cấp 2</option>
                <option value="3">Cấp 3</option>
                <option value="4">Cấp 4</option>
                <option value="5">Cấp 5</option>
              </select>
            </div>
            <div className="col-span-5">
              <div className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full border border-gray-300 rounded-lg">
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
                    // id="voice-search"
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
                className="inline-flex items-center py-2.5 px-[1.7rem] ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 "
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
                Tìm kiếm
              </button>
            </div>
          </div>
          {/* card */}
          <div className="grid grid-cols-2 mt-5 gap-5 mx-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-row rounded-lg p-1 bg-gray-50 "
              >
                <div className="basis-2/6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 rounded-2xl object-cover p-1"
                  />
                </div>

                <div className="basis-4/6">
                  <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    {product.name}
                  </h1>
                  <div className="flex flex-row max-w-[130px] mt-8 mb-3">
                    <span className="">4415k</span>
                    <img
                      src={product.icon1}
                      alt="icon"
                      className="w-5 h-5 rounded-lg object-cover mr-10"
                    />
                    <span>4415k</span>

                    <img
                      src={product.icon2}
                      alt="icon"
                      className="w-5 h-5 rounded-lg object-cover  mr-2"
                    />
                  </div>
                  <div className="flex flex-row">
                    <a
                      href="/detailSchool"
                      className="hover:underline"
                      style={{ display: "flex" }}
                    >
                      <button className="bg-[#7DD2F5] text-white rounded-lg p-2 px-[5.5rem] mr-2 ml-2">
                        Xem trường
                      </button>
                    </a>
                    <button className="bg-gray-200 text-black rounded-lg p-2.5">
                      <svg
                        fill="#000000"
                        width="16px"
                        height="16px"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M384 512c0 28.3-22.9 51.2-51.2 51.2s-51.2-22.9-51.2-51.2 22.9-51.2 51.2-51.2S384 483.7 384 512zm128-51.2c-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2 51.2-22.9 51.2-51.2-22.9-51.2-51.2-51.2zm179.2 0c-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2 51.2-22.9 51.2-51.2-22.9-51.2-51.2-51.2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* nút thêm xem thêm */}
          <div
            className="flex justify-center mt-5"
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
        <div className="flex-1 border-l border-gray-300">
          <a
            className="p-3 border-b bg-white
    hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href="/"
          >
            <img
              src={tuyensinh}
              className="shadow rounded-lg overflow-hidden border"
              alt=""
            />
            <div className="mt-8 ">
              <h4 className="font-bold text-sm text-left">
                Tuyển sinh khóa 24 năm-2024
              </h4>
            </div>
          </a>

          <a
            className="p-3 border-b bg-white
    hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href="/"
          >
            <img
              src={dmx}
              className="shadow rounded-lg overflow-hidden border"
              alt=""
            />
            <div
              className="mt-8"
              style={{ display: "flex", justifyContent: "left" }}
            >
              <p className="font-bold text-sm text-left">
                NÓNG, NÓNG QUÁ ANH ƠI !!!
              </p>

              <div className="mt-5" style={{ textAlign: "left" }}></div>
            </div>
          </a>
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
