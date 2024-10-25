import React from "react";
import { easeInOut, motion } from "framer-motion";
function Spread_section() {
  return (
    <div className="w-full  bg-white">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10  ">
        <div className="w-full flex items-center justify-center gap-3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 text-black"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>

          <h1 className="text-sm sm:text-lg">In the media</h1>
        </div>
        <div className="heading mt-10 text-center">
          <h1 className="capitalize text-6xl sm:text-9xl  tracking-tighter overflow-hidden">
           {["S","p","r","e","d"].map((item,index)=>{
           return <motion.span key={index}
              initial={{ rotate: 90, y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: easeInOut,
                duration: 1 + index * 0.2,
              }}
              className="inline-block origin-left "
            >
             {item}
            </motion.span>
           })} 
          </h1>
          <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter">
            the news
          </h1>
          <p className="text-center w-2/3 mx-auto mt-5 text-sm font-light">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
          <a
            href="#"
            className=" text-center border-b-[1px] border-zinc-900  mt-10 text-sm"
          >
            Browser All news
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread_section;
