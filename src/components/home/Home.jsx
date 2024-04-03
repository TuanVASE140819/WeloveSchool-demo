import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Rank from "./rank/Rank"
import Banner2 from './banner2/banner2';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Rank />
      <Banner2 />

      {/* <Recent />
     <Awards />
      <Location /> */}
      <Team />
      <Price />
    </>
  );
}

export default Home
