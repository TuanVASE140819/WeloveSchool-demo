import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container'>
  {/* <Heading title='Featured Property Types' subtitle='Find All Type of Property.' /> */}
  <FeaturedCard />
  <FeaturedCard />
  <FeaturedCard />
</div>
      </section>
    </>
  )
}

export default Featured
