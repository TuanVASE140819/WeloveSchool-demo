import { Link, useLocation } from "react-router-dom";
import { getListSchool } from "../../api/apiServices";
import React, { useEffect, useState } from "react";
import Paginate from "react-paginate";
import defaultLogo from "../../assets/Default/logo.jpg";
//LoadingSpinner
import LoadingSpinner from "../Loading/Loading";


import top1 from "../../assets/Home/Top1.png";

import nui from "../../assets/More/nui2.png";
import nui2 from "../../assets/More/nui.png";
import song from "../../assets/More/song.png";
import xilo from "../../assets/More/xilo.png";
import FPT from "../../assets/DetailShool/FPT.png";

import iconchat from "../../assets/Icon/iconchat.png";
import Ads2 from "../../assets/Ads/Ads2.png";
import data from "../../Data/school.json";
import Comsoon from "../comsoon/comsoon";



const NewPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 20; // Số lượng sản phẩm trên mỗi trang
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const location = useLocation();
  const { province, district, ward, level, name } = location.state;
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải mới

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getListSchool(
          province,
          district,
          ward,
          level,
          name,
          currentPage + 1,
          productsPerPage
        );
        const responseData = response.data;
        const responsePaging = response.paging.totalItems;
        setData(responseData);
        const calculatedPageCount = Math.ceil(responsePaging / productsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage, province, district, ward]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const newPageData = data.map((product, index) => (
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
    ));
    setCurrentPageData(newPageData);
  }, [data]);

  return (
    <div className="flex flex-row border-b border-gray-300">
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
                {/* <div className="grid grid-cols-2 gap-5">
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
                  </div> */}
              </div>
              <button
                type="submit"
                className="mt-4 mb-2
                  inline-flex items-center py-2 px-[5rem]  text-sm font-medium text-white bg-[#0487D9] rounded-lg border border-[#0487D9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Tìm
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
                      <img src={iconchat} alt="iconchat" className="w-5 h-5" />
                    </div>
                  </div>
                  <h3>
                    <span className="text-sm font-bold text-gray-900 ">
                      "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                    </span>
                    <br />
                    <span className="text-sm  text-gray-500 ">
                      Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin
                      hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một lời
                      nhắn...
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
                      <img src={iconchat} alt="iconchat" className="w-5 h-5" />
                    </div>
                  </div>
                  <h3>
                    <span className="text-sm font-bold text-gray-900 ">
                      "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                    </span>
                    <br />
                    <span className="text-sm  text-gray-500 ">
                      Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin
                      hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một lời
                      nhắn...
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
                      <img src={iconchat} alt="iconchat" className="w-5 h-5" />
                    </div>
                  </div>
                  <h3>
                    <span className="text-sm font-bold text-gray-900 ">
                      "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                    </span>
                    <br />
                    <span className="text-sm  text-gray-500 ">
                      Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin
                      hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một lời
                      nhắn...
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
                      <img src={iconchat} alt="iconchat" className="w-5 h-5" />
                    </div>
                  </div>
                  <h3>
                    <span className="text-sm font-bold text-gray-900 ">
                      "Hành Trình Tìm Bạn Cũ Tại Trường FPT"
                    </span>
                    <br />
                    <span className="text-sm  text-gray-500 ">
                      Nếu ai đó có thông tin về Minh hoặc biết anh ấy ở đâu, xin
                      hãy chia sẻ để chúng tôi có thể tìm lại nhau. Một lời
                      nhắn...
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
                      <img src={iconchat} alt="iconchat" className="w-5 h-5" />
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
      <div className="basis-3/5 mx-auto px-1 pt-5 max-w-7xl">
        {isLoading ? (
          <div className="grid  mt-5 gap-5 mx-10 min-h-96 justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {currentPageData.length === 0 ? (
              <div className="text-center min-h-96">
                <h1 className="mb-4 text-6xl font-semibold text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx={12}
                      cy={12}
                      r={10}
                      stroke="#F97821"
                      strokeWidth={4}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01"
                    />
                  </svg>
                </h1>
                <p className="mb-4 text-lg text-[#F97821] ">
                  Không tìm thấy trường
                </p>
                <p className="mt-4 text-gray-600">
                  Thông tin có thể chưa đầy đủ, bạn có thể cập nhật thông tin{" "}
                  <br /> trường của mình{" "}
                  <a href="/" className="text-blue-500">
                    tại đây
                  </a>
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 mt-5 gap-5 mx-10">
                  {currentPageData}
                </div>
                <Paginate
                  previousLabel={"Trước"}
                  nextLabel={"Tiếp"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"flex space-x-4 justify-center my-4"}
                  pageLinkClassName={
                    "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
                  }
                  previousLinkClassName={
                    "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
                  }
                  nextLinkClassName={
                    "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
                  }
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"active"}
                  activeLinkClassName={"bg-blue-500 text-white"}
                  breakClassName={"break-me"}
                />
              </>
            )}
          </>
        )}
      </div>

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
  );
};

export default NewPage;
