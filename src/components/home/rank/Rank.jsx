import React from "react"
import { price } from "../../data/Data"
import rank1 from "../../../assets/Home/rank1.png"
import rank2 from "../../../assets/Home/rank2.png"
import rank3 from "../../../assets/Home/rank3.png"
const Rank= () => {
  return (
    <>
    {/*  tôi muốn   dùng flex chia làm 2 cột */}
    <div className="container mx-auto grid grid-cols-2 ">
    <div class="col-span-1">
    <div class="relative max-w-xl mx-auto mt-20">
    <img class="h-48 
      object-cover rounded-md" src={rank1} alt="Random image"/>
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2>
    </div>
</div>
</div>
<div class="col-span-1">  
</div>
    </div>
    </>
  )
}

export default Rank
