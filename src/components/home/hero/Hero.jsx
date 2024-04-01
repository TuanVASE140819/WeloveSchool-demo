import React, { useState, useEffect } from "react";
import "./hero.css";

import "./hero.css";

const Hero = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data);
        setSelectedProvince(data[0]);
      });
  }, []);

  useEffect(() => {
    fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}/d`)
      .then((response) => response.json())
      .then((data) => {
        setDistricts(data);
        setSelectedDistrict(data[0]);
      });
  }, [selectedProvince]);
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}

          <form className="">
            <h3
              className="text-xl font-bold p-4"
              style={{
                lineHeight: "1.5",
                color: "black",
                borderBottom: "1px solid black",
              }}
            >
              Tìm bạn học cũ chưa bao giờ dễ dàng hơn với
              <span className="text-[#3D92D1] text-xl font-bold">
                {" "}
                WeLoveSchool
              </span>
            </h3>
            <div class="flex flex-row">
              <div class="basis-4/6 p-4 flex flex-row">
                <div class="basis-1/2 p-4">
                  <label
                    for="province-select"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Tỉnh/Thành phố
                  </label>
                  <select
                    id="province-select"
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Tỉnh</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="basis-1/2 p-4">
                  <label
                    for="district-select"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Quận/Huyện
                  </label>
                  <select
                    id="district-select"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Quận/huyện</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="basis-1/2 p-4">
                  <label
                    for="district-select"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Xã/Phường
                  </label>
                  <select
                    id="district-select"
                    defaultValue="Quận/huyện"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Xã/phường</option>
                    {districts.map((district) => (
                      <option
                        key={district}
                        value={district}
                        defaultValue="Quận/huyện"
                      >
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="basis-1/2 p-4">
                  <select
                    id="district-select"
                    defaultValue="Quận/huyện"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    class="bg-gray-100 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border  rounded-full text-sm text-gray-900"
                  >
                    <option value="">Chọn cấp</option>
                    {districts.map((district) => (
                      <option
                        key={district}
                        value={district}
                        defaultValue="Quận/huyện"
                      >
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="basis-2/6 py-4">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative ">
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trường học muốn tìm kiếm"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-4 h-4 text-white-500
                       dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
