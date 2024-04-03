import React from "react"

import cap1 from "../../../assets/Home/cap1.png"
import cap2 from "../../../assets/Home/cap2.png"
import cap3 from "../../../assets/Home/cap3.png"
const FeaturedCard = () => {
  return (
    <>
      <div className="grid3 mtop mb-20">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={cap1} alt="cap1" class="object-cover w-full h-full" />
          </div>
          <div class="p-6 text-center">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
              Trường Tiểu Học
            </h5>
            <p
              class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-gray-500 italic 
            "
            >
              Nơi ươm mầm tri thức đầu đời,
              <br /> chấp cánh ước mơ
            </p>
          </div>
        </div>
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={cap1} alt="cap1" class="object-cover w-full h-full" />
          </div>
          <div class="p-6 text-center">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
              Trường Trung Học Cơ Sở
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-gray-500 italic ">
              Bước đệm vững chắc,
              <br /> khơi nguồn sáng tạo
            </p>
          </div>
        </div>
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={cap1} alt="cap1" class="object-cover w-full h-full" />
          </div>
          <div class="p-6 text-center">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-500">
              Trường Trung Học Phổ Thông
            </h5>
            <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-gray-500 italic">
              Ngã rẽ tương lai,
              <br /> chinh phục ước mơ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard
