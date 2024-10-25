import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images_gallery from "./Components/Images_gallery";
import Spread_section from "./Components/Spread_section";
import LocomotiveScroll from 'locomotive-scroll';
import Footer from "./Components/Footer";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-full TWK_Lausanne_400">
      <Navbar />
      <Landing/>
      <Work/>
      <PlayReel/>
      <Images_gallery/>
      <Spread_section/>
      <Footer/>
    </div>
  );
}

export default App;
