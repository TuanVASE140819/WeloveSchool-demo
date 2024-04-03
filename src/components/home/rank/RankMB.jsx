import React from "react";
import { price } from "../../data/Data";
import rank1 from "../../../assets/Home/rank1.png";
import rank2 from "../../../assets/Home/rank2.png";
import rank3 from "../../../assets/Home/rank3.png";

import top1 from "../../../assets/Home/Top1.png";
import top2 from "../../../assets/Home/Top2.png";
import top3 from "../../../assets/Home/Top3.png";

import DrawSchool from "../../../assets/Home/drawschool.png";
import top10 from "../../../assets/Home/Top10.png";

import VanLangLogo from "../../../assets/Home/vanlang_logo.png";
const RankMB = () => {
  return (
    <>
      {/*  tôi muốn   dùng flex chia làm 2 cột */}
      <div className="container mx-auto border-2 border-gray-300 rounded-lg">
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
    </>
  );
};

export default RankMB;
