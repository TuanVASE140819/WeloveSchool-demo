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
                  <select
                    id="address"
                    defaultValue="Chọn tỉnh/thành phố"
                    onChange={(e) =>
                      handleAddressChange("province", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
                  >
                    <option disabled>Chọn tỉnh/thành phố</option>
                    {provinces.map((province) => (
                      <option
                        key={province.province_id}
                        value={province.province_id}
                      >
                        {province.province_name}
                      </option>
                    ))}
                  </select>

                  <select
                    id="district"
                    defaultValue="Chọn quận/huyện"
                    disabled={!selectedProvince}
                    onChange={(e) =>
                      handleAddressChange("district", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mr-4"
                  >
                    <option disabled>Chọn quận/huyện</option>
                    {districts.map((district) => (
                      <option
                        key={district.district_id}
                        value={district.district_id}
                      >
                        {district.district_name}
                      </option>
                    ))}
                  </select>

                  <select
                    id="ward"
                    defaultValue="Chọn xã/phường"
                    disabled={!selectedDistrict}
                    onChange={(e) =>
                      handleAddressChange("ward", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mr-4"
                  >
                    <option disabled>Chọn xã/phường</option>
                    {wards.map((ward) => (
                      <option key={ward.ward_id} value={ward.ward_id}>
                        {ward.ward_name}
                      </option>
                    ))}
                  </select>
                  <select
                    id="cap"
                    defaultValue="Cấp"
                    disabled={!selectedDistrict}
                    onChange={(e) =>
                      handleAddressChange("ward", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4"
                  >
                    <option disabled>Cấp</option>
                    <option value="1">Tiểu học</option>
                    <option value="2">Trung học cơ sở</option>
                    <option value="3">Trung học phổ thông</option>
                    <option value="4">Trung cấp</option>
                    <option value="5">Cao đẳng</option>
                    <option value="6">Đại học</option>
                    <option value="7">Sau đại học</option>
                  </select>
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
