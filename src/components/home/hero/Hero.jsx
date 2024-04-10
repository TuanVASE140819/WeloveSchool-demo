import React, { useState, useEffect } from "react";
import FitterPC from "./FitterPC";
import axios from "axios";
import "./hero.css";

const Hero = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [address, setAddress] = useState({
    province: "",
    district: "",
    ward: "",
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await axios.get(
        "https://vapi.vnappmob.com/api/province"
      );
      setProvinces(response.data.results); // adjust this line based on the API response structure
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
      );
      setDistricts(response.data.results); // adjust this line based on the API response structure
    };

    if (selectedProvince) {
      fetchDistricts();
    }
  }, [selectedProvince]);

  useEffect(() => {
    const fetchWards = async () => {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`
      );
      setWards(response.data.results); // adjust this line based on the API response structure
    };

    if (selectedDistrict) {
      fetchWards();
    }
  }, [selectedDistrict]);

  const handleAddressChange = (type, value) => {
    let newAddress = { ...address };

    if (type === "province") {
      setSelectedProvince(value);
      newAddress.province = provinces.find(
        (province) => province.province_id === value
      ).province_name;
    } else if (type === "district") {
      setSelectedDistrict(value);
      newAddress.district = districts.find(
        (district) => district.district_id === value
      ).district_name;
    } else if (type === "ward") {
      setSelectedWard(value);
      newAddress.ward = wards.find((ward) => ward.ward_id === value).ward_name;
    }

    setAddress(newAddress);
  };
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
                  color: "#696969",
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
                  <div className="relative w-full mr-2">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 8.4666669 8.4666669"
                        id="svg8"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs id="defs2" />

                        <g id="layer1" transform="translate(0,-288.53332)">
                          <path
                            d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                            id="path929"
                            style={{ fill: "#6B7280" }}
                            transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                          />
                        </g>
                      </svg>
                    </div>
                    <select
                      id="province"
                      className="bg-[#F4F4F4]
                      rounded-xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                      onChange={(e) =>
                        handleAddressChange("province", e.target.value)
                      }
                    >
                      <option value="" disabled selected>
                        Tỉnh/thành phố
                      </option>
                      {provinces.map((province) => (
                        <option
                          key={province.province_id}
                          value={province.province_id}
                        >
                          {province.province_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative w-full mr-2">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 8.4666669 8.4666669"
                        id="svg8"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs id="defs2" />

                        <g id="layer1" transform="translate(0,-288.53332)">
                          <path
                            d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                            id="path929"
                            style={{ fill: "#6B7280" }}
                            transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                          />
                        </g>
                      </svg>
                    </div>
                    <select
                      id="district"
                      defaultValue="Quận/huyện"
                      disabled={!selectedProvince}
                      onChange={(e) =>
                        handleAddressChange("district", e.target.value)
                      }
                      className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                    >
                      <option disabled>Quận/huyện</option>
                      {districts.map((district) => (
                        <option
                          key={district.district_id}
                          value={district.district_id}
                        >
                          {district.district_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative w-full mr-2">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 8.4666669 8.4666669"
                        id="svg8"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs id="defs2" />

                        <g id="layer1" transform="translate(0,-288.53332)">
                          <path
                            d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
                            id="path929"
                            style={{ fill: "#6B7280" }}
                            transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                          />
                        </g>
                      </svg>
                    </div>
                    <select
                      id="ward"
                      defaultValue="Xã/phường"
                      disabled={!selectedDistrict}
                      onChange={(e) =>
                        handleAddressChange("ward", e.target.value)
                      }
                      className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                    >
                      <option disabled>Xã/phường</option>
                      {wards.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_id}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <select
                    id="cap"
                    defaultValue="Cấp"
                    disabled={!selectedWard}
                    onChange={(e) =>
                      handleAddressChange("ward", e.target.value)
                    }
                    className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2  placeholder-gray-500"
                  >
                    <option disabled>Chọn Cấp</option>
                    <option value="1">Chọn Cấp</option>
                    <option value="2">Trung học cơ sở</option>
                    <option value="3">Trung học phổ thông</option>
                    <option value="4">Trung cấp</option>
                    <option value="5">Cao đẳng</option>
                    <option value="6">Đại học</option>
                    <option value="7">Sau đại học</option>
                  </select>
                </div>

                <div className="basis-2/6 py-3">
                  <div>
                    <div className="flex items-center">
                      <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            width="24px"
                            height="24px"
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
                        <input
                          type="text"
                          id="voice-search"
                          className="bg-[#F4F4F4]
                          rounded-s-lg
                           border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                          placeholder="Nhập tên trường"
                          required=""
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#3D92D1] inline-flex items-center py-2.5  ml-2 text-sm font-medium text-white  rounded-lg hover:bg-blue-8
                         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                         w-[10rem] pl-4
                         "
                      >
                        <svg
                          aria-hidden="true"
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
                        <div className="">Tìm kiếm</div>
                      </button>
                    </div>
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
