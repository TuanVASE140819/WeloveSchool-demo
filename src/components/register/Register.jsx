import React, { useState } from "react";
import Select from "react-select";
import "./Register.css";

import { db } from "../../firebase/FirebaseConfig";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useHistory } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { registerUser } from "../../api/apiServices";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Vui lòng nhập tên tài khoản"),
  name: Yup.string().required("Vui lòng nhập họ và tên"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
  dob: Yup.string().required("Vui lòng nhập ngày sinh"),
});
const Register = () => {
  const history = useHistory();
  const handleSumbit = (values, { setSubmitting }) => {
    const data = {
      username: values.username,
      password: values.password,
      name: values.name,
      role: values.role,
      dob: values.dob,
      email: values.email,
      note: values.note,
      keylist: selectedHobbies.map((hobby) => hobby.value).join(","),
      status: values.status,
      obdata: values.obdata,
    };

    // neus Status Code = 200 => dang ky thanh cong => chuyen huong ve trang login
    // neu Status Code = 400 => dang ky that bai => thong bao loi

    registerUser(data)
      .then((response) => {
        console.log(response);
        alert("Đăng ký thành công");
        history.push("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Đăng ký thất bại " + error.message);
      });
  };

  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const hobbiesOptions = [
    { value: "bạn cũ", label: "Bạn cũ" },
    { value: "sự kiện trường", label: "Sự kiện trường" },
    { value: "học tập", label: "Học tập" },
    { value: "thể thao", label: "Thể thao" },
  ];

  const handleHobbiesChange = (selectedOptions) => {
    setSelectedHobbies(selectedOptions);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="bg-white ">
        <div className=" bg-gray-50 px-4 mx-auto my-8 max-w-2xl py-8">
          <Formik
            initialValues={{
              username: "",
              password: "",
              gioitinh: "",
              name: "",
              role: "user",
              dob: "",
              email: "",
              note: "",
              keylist: "",
              status: "active",
              obdata: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSumbit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <h1
                  className="text-3xl font-bold text-center text-[#3D92D1]
          font-secondary"
                >
                  Tạo tài khoản
                </h1>
                {/* Các trường input trong form */}
                <div className="w-full h-20">
                  <label
                    required=""
                    htmlFor="username"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Tài khoản: <span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="bg-white placeholder-gray-500 "
                    placeholder="Nhập tên của bạn"
                    required=""
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="w-full h-20">
                  <label
                    required=""
                    htmlFor="username"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Họ và Tên: <span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white placeholder-gray-500 "
                    placeholder="Nhập tên của bạn"
                    required=""
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                {/* Các trường khác tương tự */}
                <div className="w-full h-20">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Email:<span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white placeholder-gray-500  "
                    placeholder="Nhập Email của bạn"
                    required=""
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Password:<span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập password của bạn"
                    className="bg-white placeholder-gray-500  "
                    required=""
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-2 mt-3 mr-3
                          text-gray-500 cursor-pointer"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                {/* xac nhan password */}
                <div className="w-full h-20">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Xác nhận password:
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    placeholder="Nhập lại password của bạn"
                    className="bg-white placeholder-gray-500"
                    autoComplete="new-password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Ngày sinh:<span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    type="date"
                    name="dob"
                    id="dob"
                    className="bg-white placeholder-gray-500  "
                    required=""
                  />
                  <ErrorMessage name="dob" component="div" className="error" />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="keylist"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Sở thích:<span style={{ color: "red" }}>*</span>
                  </label>
                  <Select
                    options={hobbiesOptions}
                    isMulti
                    onChange={handleHobbiesChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>

                {/* Nút submit */}
                <div className="flex justify-center mt-6 ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-6 text-white bg-[#3D92D1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-16 py-2.5"
                  >
                    Tạo
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};
export default Register;
