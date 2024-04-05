import React, { useState } from "react";
import RMIT from "../../assets/School/RMIT.jpg";
import Startblue from "../../assets/Icon/Startblue.jpg";
import humanblue from "../../assets/Icon/humanblue.jpg";

import top1 from "../../assets/Home/Top1.png";
import top2 from "../../assets/Home/Top2.png";
import top3 from "../../assets/Home/Top3.png";

import Rmit from "../../assets/Logo/rmit.jpg";
const DetailSchool = () => {
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
  ];
  return (
    <>
      <div className="flex flex-row min-w-[1000px] ">
        {/* left */}
        <div className="flex-1 border-r border-gray-300">
          <div className="border-b border-gray-300">
            <form className="max-w-sm mx-auto mb-2">
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Chọn tỉnh</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Chọn quận huyện</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Chọn phường xã</option>
              </select>
              <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Chọn trường</option>
              </select>
              {/* grid grid-cols-2 */}
              <div className="grid grid-cols-2 gap-5">
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Chọn trường</option>
                </select>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Chọn trường</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 mb-8 mr-2 inline-flex items-center py-2 px-24 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
                Search
              </button>
            </form>
          </div>
          <div className="p-10 border-b border-gray-300 ">
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
            <h3>Gocs</h3>
          </div>
        </div>
        {/* center */}
        <div className="flex-3 mx-auto p-10">
          <div className="grid grid-cols-7 ">
            <div className="col-span-1 px-5">
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
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          <div className="grid grid-cols-2 mt-5 gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-row border border-gray-300 rounded-lg p-2 bg-gray-50 "
              >
                <div className="basis-2/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 rounded-2xl object-cover p-2"
                  />
                </div>

                <div className="basis-3/5">
                  <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    {product.name}
                  </h1>
                  <div className="flex flex-row max-w-[130px] mt-8 mb-3">
                    <img
                      src={product.icon1}
                      alt="icon"
                      className="w-7 h-7 rounded-lg object-cover mr-2"
                    />
                    <span className="mr-10">4415k</span>

                    <img
                      src={product.icon2}
                      alt="icon"
                      className="w-7 h-7 rounded-lg object-cover  mr-2"
                    />
                    <span>4415k</span>
                  </div>
                  <div className="flex flex-row">
                    <button className="bg-[#7DD2F5] text-white rounded-lg p-2.5 px-24 mr-1">
                      Xem trường
                    </button>
                    <button className="bg-gray-200 text-black rounded-lg p-2.5">
                      ...
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
        <div className="flex-1">
          {/* <div className="bg-slate-500">Right Sidebar</div> */}
        </div>
      </div>
    </>
  );
};

export default DetailSchool;
