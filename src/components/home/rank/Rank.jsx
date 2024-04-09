import React from "react"
import { price } from "../../data/Data"
import rank1 from "../../../assets/Home/rank1.png"
import rank2 from "../../../assets/Home/rank2.png"
import rank3 from "../../../assets/Home/rank3.png"

import top1 from "../../../assets/Home/Top1.png";
import top2 from "../../../assets/Home/Top2.png";
import top3 from "../../../assets/Home/Top3.png";

import DrawSchool from "../../../assets/Home/drawschool.png";
import top10 from "../../../assets/Home/Top10.png";

import VanLangLogo from "../../../assets/Home/vanlang_logo.png";
import Heading from "../../common/Heading";
const Rank = () => {
  return (
    <>
      {/* 
       cuộc đua xếp hạng */}
      <Heading title="CUỘC ĐUA XẾP HẠNG" />
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 mb-5 gap-8 mt-6">
          <div class="col-span-1 ">
            <div class="relative  ">
              <img
                src={rank1}
                alt="rank1"
                class="object-cover w-full max-h-[17.4rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32 mr-[30rem]">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#05AFF2] font-bold">Truyền Cảm Hứng</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative  mt-6">
              <img
                src={rank2}
                alt="rank1"
                class="object-cover w-full max-h-[17.4rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32 mr-[30rem]">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#05AFF2] font-bold">Truyền Cảm Hứng</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative  mt-6">
              <img
                src={rank3}
                alt="rank3"
                class="object-cover w-full max-h-[17.4rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32 mr-[24rem]">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#05AFF2] font-bold">
                      Chất Lượng Giáo Dục Tốt Nhất
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1  border border-gray-300 rounded-md pt-4 bg-[#F7F7F7]">
            <div class="relative ">
              <div class="flex flex-row">
                <div class="basis-1/5 text-[#3D92D1] font-bold text-2xl mt-4 ml-4">
                  Bảng <br />
                  Xếp Hạng
                </div>

                <div class="basis-4/5">
                  <img src={DrawSchool} alt="rank2" class="w-full h-full" />
                </div>
              </div>
              <div className="block w-full  text-surface shadow-secondary-1 ">
                <ul className="w-full">
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <img src={top1} alt="rank2" class="w-10 h-10 ml-4" />
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <img src={top2} alt="rank2" class="w-10 h-10 ml-4" />
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <img src={top3} alt="rank2" class="w-10 h-10 ml-4" />
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          4
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          5
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          6
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          7
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          8
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full border-b-2  border-[#D9D9D9] py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          9
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="w-full py-4  ">
                    <div className="flex flex-row">
                      <div className="basis-1/5">
                        <div className="w-10 h-10 ml-4 bg-gray-200 rounded-full flex items-center justify-center font-bold                text-gray-500">
                          10
                        </div>
                      </div>
                      <div className="basis-3/5">
                        <div className="flex flex-row items-center justify-center">
                          <div className="basis-1/6">
                            <img
                              src={VanLangLogo}
                              alt="rank2"
                              class="w-10 h-10"
                            />
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            Đại học Văn Lang
                          </div>
                        </div>
                      </div>
                      <div className="basis-1/5 ">
                        <div className="flex flex-row items-center justify-center mt-2">
                          <div className="basis-1/6 text-[#969696] mr-3">
                            5842k
                          </div>
                          <div className="basis-5/6 text-[#969696] font-bold">
                            <span>
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 -0.5 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                                  fill="#FFCB45"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank
