import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cap1 from "../../../assets/Home/cap1.png";
import cap2 from "../../../assets/Home/cap2.png";
import cap3 from "../../../assets/Home/cap3.png";
import Heading from "../../common/Heading";

const School = () => {
  var settings = {
    dots: true,
    //  dấu chấm thành thanh ngang
    customPaging: (i) => (
      <div className="w-6 h-1  bg-blue-500 rounded-full slick-active"></div>
    ),
    infinite: true,
    loop: true,
    speed: 300,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="mx-auto max-w-7xl">
        <div className="py-6">
          <Heading title="KHƠI GỢI KÝ ỨC" />

          <Slider {...settings}>
            <div class="px-4 ">
              <div
                class="
               rounded overflow-hidden flex flex-col max-w-xl mx-auto"
              >
                <a href="/">
                  <img
                    class="w-full"
                    src={cap1}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div class="relative -mt-16 px-10 pt-5 pb-5 bg-white m-10 shadow-lg rounded-lg">
                  <h3 class="font-bold text-sm text-[#3D92D1] text-center mx-auto">
                    Trường Tiểu Học
                  </h3>
                  <p class="text-gray-500 text-sm italic text-center mx-auto">
                    Nơi ươm mầm trí thức đầu đời <br />
                    chấp cánh ước mơ
                  </p>
                </div>
              </div>
            </div>

            <div class="px-4">
              <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                <a href="/">
                  <img
                    class="w-full"
                    src={cap2}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div class="relative -mt-16 px-10 pt-5 pb-5 bg-white m-10 shadow-lg rounded-lg">
                  <h3 class="font-bold text-sm text-[#3D92D1] text-center mx-auto">
                    Trường Trung Học Cơ Sở
                  </h3>

                  <p class="text-gray-500 text-sm text-center italic">
                    Bước đệm vững chắc, <br />
                    khơi nguồn sáng tạo
                  </p>
                </div>
              </div>
            </div>

            {/* <div class="p-4">
              <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                <a href="/">
                  <img
                    class="w-full"
                    src={cap3}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div class="relative -mt-16 px-10 pt-5 pb-5 bg-white m-10 shadow-lg rounded-lg">
                  <h3 class="font-bold text-sm text-[#3D92D1] text-center mx-auto">
                    Trường Trung Học Phổ Thông
                  </h3>

                  <p class="text-gray-500 text-sm italic text-center">
                    Ngã rẽ tương lai, <br />
                    chinh phục ước mơ
                  </p>
                </div>
              </div>
            </div> */}
            <div class="px-4">
              <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                <a href="/">
                  <img
                    class="w-full"
                    src={cap1}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div class="relative -mt-16 px-10 pt-5 pb-5 bg-white m-10 shadow-lg rounded-lg">
                  <h3 class="font-bold text-sm text-[#3D92D1] text-center mx-auto">
                    Trường Tiểu Học
                  </h3>
                  <p class="text-gray-500 text-sm italic text-center mx-auto">
                    Nơi ươm mầm trí thức đầu đời <br />
                    chấp cánh ước mơ
                  </p>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                <a href="/">
                  <img
                    class="w-full"
                    src={cap1}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div class="relative -mt-16 px-10 pt-5 pb-5 bg-white m-10 shadow-lg rounded-lg">
                  <h3 class="font-bold text-sm text-[#3D92D1] text-center mx-auto">
                    Trường Tiểu Học
                  </h3>
                  <p class="text-gray-500 text-sm italic text-center mx-auto">
                    Nơi ươm mầm trí thức đầu đời <br />
                    chấp cánh ước mơ
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the above div for each slide you want to display */}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default School;
