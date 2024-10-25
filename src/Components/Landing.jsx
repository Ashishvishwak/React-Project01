import { easeInOut, motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative TWK_Lausanne_400">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover object-center"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full">
        <div className="text max-w-screen-2xl text-white mx-auto h-full px-5 sm:px-10">
          <div className="para mt-72 sm:mt-[28rem] md:mb-20">
            {[
              " Global digital design studio partnering",
              "  with brands and businesses that create",
              "exceptional experiences where people",
              " live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p className="text-base sm:text-3xl  font-normal TWK_Lausanne_400 overflow-hidden ">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: easeInOut,
                      duration: 1,
                      delay: index * 0.2,
                    }}
                    className="span inline-block origin-left  "
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>

          <div className="heading mt-5 sm:mt-10">
            {["Digital", "Design", "Experience"].map((item, index) => (
              <h1
                key={index}
                className="text-6xl sm:text-[8rem] font-light tracking-tighter leading-none overflow-hidden"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: easeInOut,
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>

          <div className="para2 mt-20 sm:w-1/3">
            <p className="  text-base font-normal TWK_Lausanne_400">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[.3px] border-zinc-100/70 pb-1 mt-10 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
