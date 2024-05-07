import React from "react";
import Image from "next/image";
import hold from "../asset/hold.png";
import zk from "../asset/zk.png";
export default function Partner() {
  return (
    <div className="pt-40">
      <h1 className="lg:text-4xl font-extrabold font-sans text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 ">
        Our Partner
      </h1>
      <div className="flex flex-cols-2 gap-20 justify-center text-gray-500 sm:gap-12 md:flex-cols-3  ">
        <a
          href="https://holdstation.com/"
          className="flex justify-center items-center rounded-xl w-[100px] h-[100px]  md:w-[190px] md:h-[190px]">
          <Image className=" " src={hold} alt="hero" width={190} height={190} />
        </a>
        <a
          href="#"
          className="flex justify-center items-center w-[100px] h-[100px]  md:w-[190px] md:h-[190px]">
          <Image src={zk} alt="hero" width={190} height={190} />
        </a>
      </div>
    </div>
  );
}
