import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"


import Logo from "../../../assets/Logo/Logo.png"
const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  đăng nhập , đăng ký */}
          <div
              className="hidden lg:flex gap-x-8 items-center"
              style={{ justifyContent: "flex-end" }}
            >
              {/*  Button đăng kí và đăng nhập */}
              <button className="px-6 py-2  bg-[#3D92D1] text-white font-bold">
                Đăng nhập
              </button>
              <button
                className="px-6 py-2 bg-white
   text-[#3D92D1] font-bold border border-radius-2xl border-[#3D92D1] "
              >
                Đăng kí
              </button>
            </div>
          {/*  hiển thị nút toggle */}
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
