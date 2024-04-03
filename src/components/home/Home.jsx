import React, { useEffect, useState } from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Price from "./price/Price";
import Recent from "./recent/Recent";
import Team from "./team/Team";
import Rank from "./rank/Rank";
import Banner2 from "./banner2/banner2";
import School from "./School/School";
import RankMB from "./rank/RankMB";
import HeroMB from "./hero/HeroMB";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="">
        <HeroMB />
        <School />
        <RankMB />
        {/* <Banner2 /> */}
      </div>
    );
  }

  return (
    <>
      <div className="">
        <Hero />
        <School />
        {/* <Featured /> */}
        <Rank />
        <Banner2 />
        {/* <Recent />
        <Awards />
        <Location /> */}
        <Team />
        <Price />
      </div>
    </>
  );
};

export default Home;
