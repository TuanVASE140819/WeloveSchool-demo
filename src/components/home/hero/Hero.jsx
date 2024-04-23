import React, { useState, useEffect } from "react";
import axios from "axios";
import "./hero.css";
import { getListSchool } from "../../../api/apiServices";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedWardName, setSelectedWardName] = useState("");
  const [selectLevel, setSelectLevel] = useState("");
  const [address, setAddress] = useState({
    province: "",
    district: "",
    ward: "",
    level: "",
  });

  const history = useHistory();

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await axios.get(
        "https://vapi.vnappmob.com/api/province"
      );
      setProvinces(response.data.results);
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      const response = await axios.get(
        `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
      );
      setDistricts(response.data.results);
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
      setWards(response.data.results);
    };
    if (selectedDistrict) {
      fetchWards();
    }
  }, [selectedDistrict]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await getListSchool(
          selectedProvinceName,
          selectedDistrictName,
          selectedWardName,
          selectLevel,
          "",
          1,
          10
        );
        setSchools(response.data);
      } catch (error) {
        console.error("Failed to fetch schools: ", error);
      }
    };

    fetchSchools();
  }, [selectedProvince, selectedDistrict, selectedWard]);

  console.log("selectLevel", selectLevel);

  const handleAddressChange = (type, value) => {
    let newAddress = { ...address };
    if (type === "province") {
      setSelectedProvince(value);
      setSelectedProvinceName(
        provinces
          .find((province) => province.province_id === value)
          .province_name.replace("Tỉnh ", "")
          .replace("Thành phố ", "")
      );
      newAddress.province = provinces.find(
        (province) => province.province_id === value
      ).province_name;
    } else if (type === "district") {
      setSelectedDistrict(value);
      setSelectedDistrictName(
        districts
          .find((district) => district.district_id === value)
          .district_name.replace("Quận ", "")
          .replace("Huyện ", "")
      );
      newAddress.district = districts.find(
        (district) => district.district_id === value
      ).district_name;
    } else if (type === "ward") {
      setSelectedWard(value);
      setSelectedWardName(
        wards
          .find((ward) => ward.ward_id === value)
          .ward_name.replace("Phường ", "")
      );
      const ward = wards.find((ward) => ward.ward_id === value);
      if (ward) {
        newAddress.ward = ward.ward_name;
      }
    } else if (type === "level") {
      setSelectLevel(value);
    }
    setAddress(newAddress);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/new-page", // thay '/new-page' bằng đường dẫn thực tế của bạn
      state: {
        province: selectedProvinceName,
        district: selectedDistrictName,
        ward: selectedWardName,
        level: selectLevel,
        name: document.getElementById("name_school").value,
      },
    });
  };

  // in ra thông tin get từ API getListSchool

  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}

          <form
            onSubmit={handleSubmit}
            className=" mt-32 d-flex justify-content-center align-items-center"
          >
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
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <select
                      id="province"
                      value={selectedProvince}
                      className="bg-[#F4F4F4]
                      rounded-xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                      onChange={(e) =>
                        handleAddressChange("province", e.target.value)
                      }
                    >
                      <option value="" disabled className="text-[1rem]">
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
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <select
                      id="district"
                      value={selectedDistrict}
                      disabled={!selectedProvince}
                      onChange={(e) =>
                        handleAddressChange("district", e.target.value)
                      }
                      className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                    >
                      <option value="" disabled className="text-[1rem]">
                        Quận/huyện
                      </option>
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
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <select
                      id="ward"
                      value={selectedWard}
                      disabled={!selectedDistrict}
                      onChange={(e) =>
                        handleAddressChange("ward", e.target.value)
                      }
                      className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                    >
                      <option value="" disabled className="text-[1rem]">
                        Xã/phường
                      </option>
                      {wards.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_id}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <select
                    id="level"
                    value={selectLevel}
                    // disabled={!selectedWard}
                    onChange={(e) =>
                      handleAddressChange("level", e.target.value)
                    }
                    className="bg-[#F4F4F4]
                      rounded-2xl
                        border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2  placeholder-gray-500"
                  >
                    <option value="" disabled className="text-[1rem]">
                      Cấp
                    </option>
                    <option value="Tiểu học">Tiểu học</option>
                    <option value="Trung học cơ sở">Trung học cơ sở</option>
                    <option value="Trung học phổ thông">
                      Trung học phổ thông
                    </option>
                    <option value="Trung cấp">Trung cấp</option>
                    <option value="Cao đẳng">Cao đẳng</option>
                    <option value="Đại học">Đại học</option>
                  </select>
                </div>

                <div className="basis-2/6 py-3">
                  <div>
                    <div className="flex items-center">
                      <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <i className="fa-solid fa-school-flag"></i>
                        </div>
                        <input
                          type="text"
                          id="name_school"
                          className="bg-[#F4F4F4]
                          rounded-s-lg
                           border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2  placeholder-gray-500"
                          placeholder="Nhập tên trường"
                          required=""
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#3D92D1] inline-flex items-center py-2.5  ml-2 text-sm font-medium text-white  rounded-lg hover:bg-blue-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[10rem] pl-4"
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
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

export default React.memo(Hero);
