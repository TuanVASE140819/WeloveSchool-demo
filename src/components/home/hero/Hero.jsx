import React, { useState, useEffect } from "react";
import FitterPC from "./FitterPC";
import axios from "axios";
import "./hero.css";

// import get, post, put, delete from "./api";

import { fetchData } from "../../../api/apiServices";


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
//"https://vapi.vnappmob.com/api/province"
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
      const ward = wards.find((ward) => ward.ward_id === value);
      if (ward) {
        newAddress.ward = ward.ward_name;
      }
    }

    setAddress(newAddress);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}

          <form className=" mt-32 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3
                className="text-xl font-bold  title-font"
                style={{
                  lineHeight: "1.5",
                  color: "#696969",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Tìm bạn học cũ chưa bao giờ dễ dàng hơn với
                <span className="text-[#3D92D1] text-xl font-bold title-font">
                  {" "}
                  WeLoveSchool
                </span>
              </h3>
              <div className="flex flex-row">
                <div className="basis-4/6 p-4 flex flex-row">
                  <div className="relative w-full mr-2">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i class="fa-solid fa-location-dot"></i>
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
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[1rem]"
                      >
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
                      <i class="fa-solid fa-location-dot"></i>
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
                      <i class="fa-solid fa-location-dot"></i>
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
                          <i class="fa-solid fa-school-flag"></i>
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
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <div className="ml-2">Tìm kiếm</div>
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
