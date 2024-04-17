import React, { useState } from "react";
import Select from "react-select";
import "./Register.css";

import { db } from "../../firebase/FirebaseConfig";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useHistory } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .matches(/@gmail.com$/, "Must be a Gmail address")
    .required("Bạn cần nhập email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Bạn cần nhập password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")

    .required("Bạn cần nhập xác nhận password"),
  name: Yup.string().required("Bạn cần nhập tên"),
  ho: Yup.string().required("Bạn cần nhập họ"),
  birthday: Yup.date().required("Bạn cần nhập ngày sinh"),
  selectedHobbies: Yup.array().required("Bạn cần chọn sở thích"),
});
const Register = () => {
  const history = useHistory();
  const handleSumbit = (values, { setSubmitting }) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Đăng ký thành công");

        history.push("/login");

        setSubmitting(false);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // NẾU EMAIL ĐÃ ĐƯỢC SỬ DỤNG
        if (errorCode === "auth/email-already-in-use") {
          alert("Email đã được sử dụng");
        } else if (errorCode === "auth/weak-password") {
          alert("Mật khẩu phải có ít nhất 6 ký tự");
        } else {
          alert(errorMessage);
        }
        setSubmitting(false);
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

  return (
    <>
      <section className="bg-white ">
        <div className=" bg-gray-50 px-4 mx-auto my-8 max-w-2xl py-8">
          <Formik
            initialValues={{
              name: "",
              ho: "",
              email: "",
              password: "",
              birthday: "",
              selectedHobbies: [],
            }}
            validationSchema={validationSchema}
            onSubmit={handleSumbit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <h2
                  className="text-3xl font-bold text-center text-[#3D92D1]
          font-secondary"
                >
                  Tạo tài khoản
                </h2>
                {/* Các trường input trong form */}
                <div className="w-full h-20">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Tên:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    placeholder="Nhập tên của bạn"
                    required=""
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                {/* Các trường khác tương tự */}
                <div className="w-full h-20">
                  <label
                    htmlFor="ho"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Họ:
                  </label>
                  <Field
                    type="text"
                    name="ho"
                    id="ho"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    placeholder="Nhập họ của bạn"
                    required=""
                  />
                  <ErrorMessage name="ho" component="div" className="error" />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white placeholder-gray-500 border-gray-700"
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
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nhập password của bạn"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    required=""
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
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Nhập lại password của bạn"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    required=""
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="birthday"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Ngày sinh:
                  </label>
                  <Field
                    type="date"
                    name="birthday"
                    id="birthday"
                    className="bg-white placeholder-gray-500 border-gray-700"
                    required=""
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="w-full h-20">
                  <label
                    htmlFor="hobbies"
                    className="block mb-2 text-sm font-bold text-gray-900"
                  >
                    Sở thích:
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
