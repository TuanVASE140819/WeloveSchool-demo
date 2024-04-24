import React, { useState, useEffect } from "react";
import Tivi from "../../../assets/Home/Tivi.png";

const Banner2 = () => {
    return (
      <>
        <section className="bg-white">
          <div className="grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
              <img src={Tivi} alt="mockup" className="object-contain w-[80%]" />
            </div>
            <div className=" place-self-center lg:col-span-5  ml-8">
              <h2 className="text-xl font-bold text-[#4B4B4B]">
                HỘI NGỘ BẠN BÈ, ÔN LẠI KỸ NIỆM
                <br />
                <span className="text-sm text-[#3D92D1]">
                  CÙNG WELOVESCHOOL
                </span>
              </h2>
              <ul>
                <li className="mb-4">
                  <h3 className="font-bold text-[#4B4B4B] relative before:content-[''] before:absolute before:h-2 before:w-2 before:bg-orange-500 before:top-1/2 before:-left-4 before:rounded-full">
                    Tìm trường cũ của bạn thật đơn giản
                  </h3>
                  <p className="text-sm ">
                    WeloveSchool giúp bạn Khám phá mái trường xưa nơi bạn từng
                    gắn bó
                  </p>
                </li>
                <li className="mb-4">
                  <h3 className="font-bold text-[#4B4B4B] relative before:content-[''] before:absolute before:h-2 before:w-2 before:bg-orange-500 before:top-1/2 before:-left-4 before:rounded-full">
                    Đăng tin hội ngộ bạn cũ
                  </h3>
                  <p className="text-sm ">
                    Gửi lời nhắn đến bạn cũ, WeLoveSchool giúp bạn tìm thấy họ
                    Vun đắp tình bạn, cùng nhau viết tiếp những câu chuyện dang
                    dỡ
                  </p>
                </li>
                <li className="mb-4">
                  <h3 className="font-bold text-[#4B4B4B] relative before:content-[''] before:absolute before:h-2 before:w-2 before:bg-orange-500 before:top-1/2 before:-left-4 before:rounded-full">
                    sẽ kỉ niệm tại page trường - blog cá nhân
                  </h3>
                  <p className="text-sm ">
                    Lưu giữ khoảnh khắc đẹp, chia sẻ kỷ niệm tuổi học trò Khoe
                    ảnh, viết bài, cùng WeloveSchool lưu giữ ký ức tuổi thơ Kết
                    nối công đồng, chia sẻ niềm vui và nổi buồn tuổi học trò
                    chia sẻ khoản khắc cuộc sống, công việc viện tại
                  </p>
                </li>
                <li className="mb-4">
                  <h3 className="font-bold text-[#4B4B4B] relative before:content-[''] before:absolute before:h-2 before:w-2 before:bg-orange-500 before:top-1/2 before:-left-4 before:rounded-full">
                    Chia sẽ kỉ niệm tại page trường - blog cá nhân
                  </h3>
                  <p className="text-sm ">
                    Lưu giữ khoảnh khắc đẹp, chia sẻ kỷ niệm tuổi học trò Khoe
                    ảnh, viết bài, cùng WeloveSchool lưu giữ ký ức tuổi thơ Kết
                    nối công đồng, chia sẻ niềm vui và nổi buồn tuổi học trò
                    chia sẻ khoản khắc cuộc sống, công việc viện tại
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
};

export default Banner2;