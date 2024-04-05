import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import aodai from "../../assets/Home/aodai.png";
import kyyeu from "../../assets/Home/kyyeu.png";
import banner from "../../assets/Home/banner.png";
import cay from "../../assets/Home/cay.png";
import rachoi from "../../assets/Home/rachoi.png";
import bacthang from "../../assets/Home/bacthang.png";
import combo1 from "../../assets/Home/combo1.png";
import combo2 from "../../assets/Home/combo2.png";
import tamgiac from "../../assets/Home/tamgiac.png";
import { Link } from "react-router-dom";

import CountUp from "react-countup";
const About = () => {
  return (
    <>
      <section className="bg-white container mx-auto">
        <div className="grid  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-5xl xl:text-4xl  ">
              Khoảnh Khắc Tìm Lại Trường Xưa
              <br />
              <span className="text-[#C48B1A] font-bold">Kết Nối Bạn Bè</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              WeLoveSchool giúp bạn kết nối và tìm kiếm ở trường cũ. Song song
              đó giúp bạn khôi phục lại những kỷ niệm quý giá thời học sinh.
              <br />
              <br />
              WeLoveSchool giúp bạn kết nối và tìm kiến bạn bè cũ. Song song đó
              giúp bạn khôi phục lại những kỹ niệm quý giá thời học sinh.
            </p>
            <a
              href="/"
              className="font-bold inline-flex items-left justify-left px-5 py-3 text-base text-center border border-blue-600 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-blue-500 "
            >
              Khoảnh Khắc Tìm Lại Trường Xưa
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={kyyeu} alt="mockup" />
          </div>
        </div>
        <div className="container mx-auto h-full relative">
          <div
            className="flex flex-col xl:flex-row items-center h-full "
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -40%)",
            }}
          >
            {/* text */}
            <div data-aos="fade-up" data-aos-delay="700">
              <img
                src={aodai}
                alt=""
                className=" xl:ml-0"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
            <div
              className="text-black font-bold "
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-23%, 130%)",
                width: "100%",
              }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Ngược thời gian, xem nào!
              <br />
              Bạn có bỏ lỡ khoảnh khắc nào không?
            </div>
            {/* image */}
          </div>
        </div>
      </section>
      <section className="bg-white container mx-auto">
        <img
          src={banner}
          alt=""
          className=" xl:ml-0"
          style={{ width: "100%", height: "auto" }}
        />
        <div class="grid gap-4 grid-cols-2">
          <div class="p-10 mt-10">
            <img src={combo1} alt="" />
          </div>
          <div>
            <div
              class="p-10 mt-10"
              style={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%)",
              }}
            >
              <img src={combo2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About
