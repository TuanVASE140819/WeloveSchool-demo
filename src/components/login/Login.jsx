import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import { loginUser } from "../../api/apiServices";

const Login = () => {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Xin vui lòng nhập tài khoản"),
    // Check if email is a Gmail address
    password: Yup.string().required("Xin vui lòng nhập mật khẩu"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await loginUser(values);
      if (response.statusCode === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("dataUser", JSON.stringify(response.data));

        // hiện thị local storage token
        console.log("l4444", localStorage.getItem("token"));

        console.log("dataUser", localStorage.getItem("dataUser"));
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    } finally {
      setSubmitting(false);
    }
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
              <h1 className="font-secondary text-[3rem] font-bold leading-tight tracking-tight text-[#3D92D1]  text-center">
                Đăng nhập
              </h1>
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4 bg-gray-100  md:space-y-6 ">
                    <div className="w-full h-20">
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-bold text-gray-900"
                      >
                        Tài khoản:
                      </label>
                      <Field
                        type="username"
                        name="username"
                        placeholder="Nhập tài khoản"
                        className=" placeholder-gray-500 form-input"
                        // className="bg-white placeholder-gray-500 border-gray-700"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500 text-sm italic"
                      />
                    </div>
                    <div className="w-full h-20">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-bold text-gray-900 "
                      >
                        Password:
                      </label>
                      <div className="relative">
                        <Field
                          name="password"
                          placeholder="Nhập mật khẩu"
                          className=" placeholder-gray-500 form-input"
                          type={showPassword ? "text" : "password"}
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-0 top-2 mt-3 mr-3
                          text-gray-500 cursor-pointer"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm italic"
                      />
                    </div>
                    <div
                      className="flex justify-center mt-6"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="text-white bg-[#3D92D1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-16 py-2.5"
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
