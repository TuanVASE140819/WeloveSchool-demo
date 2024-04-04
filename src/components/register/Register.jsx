import React, { useState } from "react";
import Select from "react-select";
import "./Register.css";
const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const handleClick = () => {
    setShowModal(true);
  };

  const hobbiesOptions = [
    { value: "bạn cũ", label: "Bạn cũ" },
    { value: "sự kiện trường", label: "Sự kiện trường" },
    { value: "học tập", label: "Học tập" },
    { value: "thể thao", label: "Thể thao" },
  ];

  const handleHobbiesChange = (selectedOptions) => {
    setSelectedHobbies(selectedOptions);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="bg-white ">
        <div className=" bg-gray-50 py-8 px-4 mx-auto my-8 max-w-2xl lg:py-16">
          <h2
            className="mb-4 text-3xl font-bold text-center text-[#3D92D1]
          font-secondary"
          >
            Tạo tài khoản
          </h2>
          <form action="#" className=" bg-gray-50">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="Tên"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Tên:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white placeholder-gray-500 border-gray-700"
                  placeholder="Nhập tên của bạn"
                  required=""
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="Họ"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Họ:
                </label>
                <input
                  type="text"
                  name="ho"
                  id="ho"
                  className="bg-white placeholder-gray-500 border-gray-700"
                  placeholder="Nhập Họ của bạn"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Tên"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Giới tính
                </label>
                <div className="grid grid-cols-5 gap-4">
                  <div className="flex items-center">
                    <input
                      id="red-radio"
                      type="radio"
                      defaultValue=""
                      name="colored-radio"
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                    />
                    <label
                      htmlFor="red-radio"
                      className="ms-2 text-sm font-bold text-gray-900 "
                    >
                      Nam
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="green-radio"
                      type="radio"
                      defaultValue=""
                      name="colored-radio"
                      className="w-4 h-4  text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                    />
                    <label
                      htmlFor="green-radio"
                      className="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    >
                      Nữ
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="Họ"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Ngày sinh:
                </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="bg-white placeholder-gray-500 border-gray-700"
                  placeholder="Nhập ngày sinh của bạn"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-white placeholder-gray-500 border-gray-700"
                  placeholder="Nhập Email của bạn"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-bold text-gray-900 "
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-white placeholder-gray-500 border-gray-700"
                  placeholder="Nhập password của bạn"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <div className="w-full">
                  <label
                    htmlFor="hobbies"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Quan Tâm:
                  </label>
                  <Select
                    id="hobbies"
                    isMulti
                    options={hobbiesOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Chọn điều bạn quan tâm"
                    onChange={handleHobbiesChange}
                    value={selectedHobbies}
                  />
                </div>
              </div>
            </div>
            {/* nút đăng ký  nằm giữa */}
          </form>
          <div
            className="flex justify-center mt-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              type="button"
              className="text-white bg-[#3D92D1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-16 py-2.5"
            >
              Tạo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
