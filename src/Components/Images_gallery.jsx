import React, { useEffect, useRef } from "react";
import gsap, { Linear, Power4, ScrollTrigger } from "gsap/all";
function Images_gallery() {
  const parent = useRef(null);
  const first = useRef(null);
  const seconde = useRef(null);
  const third = useRef(null);
  const Fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(first.current, {
      x: "40%",
      ease: Linear,
    },"a")
    .to(third.current, {
      x: "-30%",
      ease: Linear,
    },"a");

    tl.to(seconde.current, {
      x: "40%",
      ease: Linear,
    },"a")
    .to(Fourth.current, {
      x: "-30%",
      ease: Linear,
    },"a");
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[40%] sm:w-[30%]  h-1/2 sm:h-[90%] relative ">
        <div ref={first} className="absolute w-20 h-[7rem] sm:w-40 sm:h-[15rem] -right-16 top-6">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={seconde} className="absolute w-32 sm:w-80 aspect-video  -left-1/2 top-1/3 sm:top-1/4 ">
          <video
            className="object-cover w-full h-full"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div ref={third} className="absolute w-36 sm:w-80 aspect-video -left-[70%] sm:-left-[60%] -bottom-10">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={Fourth} className="absolute w-40 sm:w-[17rem] aspect-[1.5/1]  -right-[70%] sm:-right-[50%] -bottom-[37%] sm:-bottom-4">
          <video
            className="object-cover w-full h-full"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <img
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
// https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4
// https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)
// https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)
// https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4
export default Images_gallery;
