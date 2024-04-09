import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
          <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
            <div
              className="p-6 space-y-4 bg-gray-100
             md:space-y-6 sm:p-8"
            >
              <h1
                className="font-secondary text-xl font-bold leading-tight tracking-tight text-[#3D92D1]
               md:text-2xl "
              >
                Đăng nhập
              </h1>
              <form className="space-y-4 bg-gray-100  md:space-y-6 " action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    placeholder="Nhập Email của bạn"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-900 "
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập password của bạn"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    required=""
                  />
                </div>
                <div className="flex justify-center items-center"></div>
              </form>
              <div
                className="flex justify-center mt-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  type="button"
                  className="text-white bg-[#3D92D1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-16 py-2.5"
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
