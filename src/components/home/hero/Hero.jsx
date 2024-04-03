import React, { useState, useEffect } from "react";
import FitterPC from "./FitterPC";

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

          <form className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3
                className="text-xl font-bold p-4"
                style={{
                  lineHeight: "1.5",
                  color: "black",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Tìm bạn học cũ chưa bao giờ dễ dàng hơn với
                <span className="text-[#3D92D1] text-xl font-bold">
                  {" "}
                  WeLoveSchool
                </span>
              </h3>
              <div className="flex flex-row">
                <div className="basis-4/6 p-4 flex flex-row">
                  <div className="basis-1/2 p-4">
                    <select
                      id="province-select"
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      className="bg-gray-100 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 border  rounded-full text-sm text-gray-900"
                      // className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    >
                      <option value="">Tỉnh</option>
                      {provinces.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="basis-1/2 p-4">
                    <select
                      id="district-select"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="bg-gray-100 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 border  rounded-full text-sm text-gray-900"
                      // className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    >
                      <option value="">Quận/huyện</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="basis-1/2 p-4">
                    <select
                      id="district-select"
                      defaultValue="Quận/huyện"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="bg-gray-100 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 border  rounded-full text-sm text-gray-900"
                      // className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
                  <div className="basis-1/2 p-4">
                    <select
                      id="district-select"
                      defaultValue="Quận/huyện"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="bg-gray-100 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 border  rounded-full text-sm text-gray-900"
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

                <div className="basis-2/6 py-4">
                  <div className="relative ">
                    <input
                      placeholder="Trường học bạn muốn tìm kiếm..."
                      className="border-none border-b border-gray-300 placeholder-gray-500 "
                    />
                    <div className="w-80 h-[1px] bg-gray-300 absolute bottom-0 left-0 right-0 "></div>

                    <label className="after:content[' '] pointer-events-none absolute left-3  -top-4 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Trường học
                    </label>
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 text-white-500"
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
