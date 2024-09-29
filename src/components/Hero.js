import React from "react";
import "./Hero.css"
import pic from "./Без имени-1 1.png"
import { ArrowLeft, ArrowRight, Mouse } from "lucide-react";

const Hero = () => {
  return (
    <header className=" h-[]">
      <div className="bg-pic">
      <div className="flex justify-between">
      <div className="ml-[60px] pt-[30px]">
      <p className="text-[40px] text-white">Welcome to </p>
      <span className="font-bold text-[64px] text-white">Pop Rock Crystal Shop!</span>
      <p className="mt-4 text-[#31546D] text-[16px] w-[450px] font-medium tracking-wide">
      Here you will find unique phone accessories, crystals,<br></br> jewelry and more. Free shipping inside the U.S. and our<br></br> phone grips come with a limited warranty. Enjoy!
      </p>
      <div className="flex mt-8 items-center gap-14">
      <button className=" bg-white text-[#31546D] text-[15px] h-[50px] w-[180px] font-medium rounded-xl">
        SHOP NOW
      </button>
      <p className=" font-medium text-[15px] text-[#31546D]">about us</p>
      </div>
      </div>
      <div>
        <div>
          <div className="bg-white h-[500px] w-[500px] shadow-lg mr-[100px] rounded-3xl flex">
          <p className="font-medium bg-[#8a93e5] text-white mt-[50px] w-[80px] flex justify-center items-center rounded-r-lg h-[30px]">New lot</p>
            <div className="bg-white flex mt-[30px] ml-[30px]   rounded-3xl flex-col">
              <img src={pic} className="h-[280px]"></img>
              <div className="bg-[#f2f2f2] h-[2px] w-[100px] ml-[100px] mt-20"></div>
              <div>
                <p className="text-[#cdcccc] font-medium mt-4 text-sm ml-[20px]">CRYSTAL AGATE PHONE GRIP <span className="text-[#31546d]">- 18.99$</span></p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mr-[100px] mt-[30px]">
            <div className="bg-[#8a93e5] text-white rounded"><ArrowLeft size={18}/></div>
            <div className="bg-[#8a93e5] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#d7dbff] h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-[#8a93e5] text-white rounded"><ArrowRight size={18}/></div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center items-center mt-[20px] gap-2">
        <Mouse className="text-[#31546d]"/>
        <p className="text-[#31546d] font-medium tracking-normal">scroll down</p>
      </div>
      </div>
    </header>
  );
};

export default Hero;
