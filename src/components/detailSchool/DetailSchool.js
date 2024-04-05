import React, { useState } from "react";
import "./DetailSchool.css";
const DetailSchool = () => {
    return (
      <>
        <div class="grid">
          <aside
            class="sidebar-left bg-red-500
          "
          >
            Left Sidebar
          </aside>

          <article>
            <div>
              <h1>Banner</h1>
              <p>
                Trường FPT là một trong những trường đại học hàng đầu tại Việt
                Nam, được thành lập vào năm 2006 bởi Tập đoàn FPT - một trong
                những tập đoàn công nghệ hàng đầu tại Việt Nam. Trường FPT tự
                hào là một trong những trường đại học công nghệ thông tin hàng
                đầu và có uy tín tại Việt Nam và khu vực.
                <br />
                <br />
              </p>
              <p>
                Lô E2-3 Đường D1, Khu Công nghệ cao, Phường Tân Phú, Quận 9,
                Thành phố Hồ Chí Minh, Việt Nam Phone: 02873000000
                <br />
                daihocfpt@gmail.com
              </p>
            </div>

            <div>
              <div>Slide</div>
            </div>
            <div></div>
          </article>

          <aside class="sidebar-right bg-slate-500">Right Sidebar</aside>
          <div>
            <div>Slide2 </div>
          </div>
        </div>
      </>
    );
};

export default DetailSchool;
