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
          <div class="col-span-1">
            <div class="relative  ">
              <img
                src={rank1}
                alt="rank1"
                class="object-cover w-full max-h-[13rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#3D92D1] font-bold">Truyền Cảm Hứng</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative  mt-14">
              <img
                src={rank2}
                alt="rank1"
                class="object-cover w-full max-h-[13rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#3D92D1] font-bold">Truyền Cảm Hứng</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative  mt-14">
              <img
                src={rank3}
                alt="rank3"
                class="object-cover w-full max-h-[13rem] rounded-md"
              />
              <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center mt-32">
                {/* TÔI MUỐN CHIA LÀM 2 CỘT */}
                <div class="flex items-center">
                  <img src={top10} alt="rank2" class="w-20 h-20" />
                  <div class="text-left">
                    <h3 class="text-xl text-white">Trường Học</h3>
                    <p class="text-[#3D92D1] font-bold">
                      Chất Lượng Giáo Dục Tốt Nhất
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1  border border-gray-300 rounded-md p-4 bg-gray-100">
            <div class="relative ">
              <div class="flex flex-row">
                <div class="basis-1/5 text-blue-500 font-bold text-xl">
                  Bảng <br />
                  Xếp Hạng
                </div>
                <div class="basis-4/5">
                  <img src={DrawSchool} alt="rank2" class="w-full h-full" />
                </div>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <img src={top1} alt="rank1" class="w-14 h-14" />
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <img src={top2} alt="rank1" class="w-14 h-14" />
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <img src={top3} alt="rank1" class="w-14 h-14" />
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">4</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">5</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">6</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">7</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">8</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row border-b-2 border-gray-300">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-5 py-3">9</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
            <div class="flex flex-row  ">
              <div class="basis-1/8">
                <h3 class="text-2xl text-orange-500 px-4 py-3">10</h3>
              </div>
              <div class="basis-1/2 ">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img src={VanLangLogo} alt="rank1" class="w-8 h-8 mr-2" />
                    <h3 class="text-gray-500">Trường Đại Học Văn Lang</h3>
                  </div>
                </div>
              </div>
              <div class="basis-1/4 text-right">
                5842k
                {/* ký hiệu ngôi sao */}
                <span class="text-yellow-500">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank
