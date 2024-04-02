import React from "react"

import cap1 from "../../../assets/Home/cap1.png"
import cap2 from "../../../assets/Home/cap2.png"
import cap3 from "../../../assets/Home/cap3.png"
const FeaturedCard = () => {
  return (
    <>
      <div className='grid3 mtop mb-20'>
      <div class="">
<div>
    
    <img src={cap1} alt='' className="rounded-lg" />
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg text-center">
   <h3 className="text-blue-500 text-xl font-bold">
      Trường Tiểu Học
    </h3>
    <p>
      Nơi ươm mầm tri thức đầu đời,<br/> chấp cánh ước mơ
    </p>
  </div>
 </div>
  
</div>
  </div>
  <div class="">
<div>
    
    <img src={cap1} alt='' className="rounded-lg" />
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg text-center">
   <h3 className="text-blue-500 text-xl font-bold">
      Trường Trung Học Cơ Sở
    </h3>
    <p>
      Bước đệm vững chắc,<br/> khơi nguồi sáng tạo
    </p>
  </div>
 </div>
  
</div>
  </div>
  <div class="">
<div>
    
    <img src={cap2} alt='' className="rounded-lg" />
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg text-center">
   <h3 className="text-blue-500 text-xl font-bold">
              Trường Trung Học Phổ Thông
            </h3>
            <p className="px-6 text-center">
              Ngã rẽ tương lai,<br/>chinh phục ước mơ
            </p>
  </div>
 </div>
  
</div>
  </div>

     
      </div>
    </>
  )
}

export default FeaturedCard
