import React from "react";
import tele from "../asset/tele.svg";
import xx from "../asset/xx.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="flex gap-2 pt-10 justify-end pb-4 ">
        <div className="flex items-center">
          <h1 className="lg:text-4xl font-extrabold font-sans text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 ">
            Join us
          </h1>
        </div>
        <a href="">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={xx}
            alt=" "
            width={30}
            height={30}
          />
        </a>
        <a href="">
          {" "}
          <Image
            className="lg:w-[40px] lg:h-[40px]"
            src={tele}
            alt=" "
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
