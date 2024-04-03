import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import fim from "../../../assets/Home/fim.png"
const Team = () => {
  return (
    <div className="fim ">
      <div className="container mx-auto py-32">
        <h3 className="text-center text-[#3D92D1]font-bold text-2xl mt-10">
          CHUYỆN TRƯỜNG XƯA
        </h3>
        <h2 className="text-center text-3xl font-bold mt-5">
          HÌNH ẢNH NỮ HỌC SINH CÙNG CHIẾC ÁO DÀI <br />
          QUA NHIỀU THẬP KỶ
        </h2>
        <p className="text-center mt-5 mb-5">
          Thời sinh viên có cây đàn ghi-ta
          <br />
          Đàn ngân lên chúng ta cùng hòa ca
          <br />
          Có anh bạn xa nhà, có cô bạn nhớ cha <br />
          Cất vang cùng lời ca...
        </p>
        <img src={fim} alt="fim" className="w-[80%] object-contain mx-auto" />
      </div>
    </div>
  );
}

export default Team
