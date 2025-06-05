import React from "react";
import playStore from "../Assets/googlePlayStore.png";
import appleStore from "../Assets/appleStore.png";
import logo from "../Assets/logo.png";
import Phone from "./Phone";

const DownloadAppSection: React.FC = () => {
  return (
    <section className="bg-[#F6F7FB] py-12 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Download our app now
      </h2>

     <div className="relative flex flex-col md:flex-row items-end justify-between p-6 md:p-10 overflow-hidden min-h-[400px]">
  
  {/* Light Pink Rounded Background Behind Content */}
  <div className="absolute inset-x-0 mx-auto w-[100%] h-[220px] bg-pink-100 rounded-3xl z-0" />

  {/* Phones */}
  <div className="relative min-w-[400px] h-[310px] overflow-hidden flex items-start z-10">
      {/* Left Phone */}
      <div className="w-[180px] h-[360px] bg-white border-4 border-black rounded-[30px] shadow-xl overflow-hidden relative z-20 mr-[-48px]">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full" />
        {/* Background */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-center bg-cover mix-blend-multiply opacity-70"
          style={{ backgroundImage: "url('/Video/background.png')" }}
        ></div>
        {/* Foreground content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          <img src={logo} alt="BHIVE Logo" className="h-10" />
        </div>
      </div>

      {/* Right Phone */}
      <Phone />
  </div>

  {/* Text + Store Buttons */}
  <div className=" mb-5 md:max-w-md text-center md:text-left md:mt-auto z-10">
    <p className="text-gray-700 text-base md:text-lg mb-6">
      Boost your productivity with the BHIVE Workspace app. <br />
      Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
    </p>
    <div className="flex gap-4 justify-center md:justify-start">
      <img src={playStore} alt="Google Play" className="h-12 cursor-pointer" />
      <img src={appleStore} alt="App Store" className="h-12 cursor-pointer" />
    </div>
  </div>
</div>
    </section>
  );
};

export default DownloadAppSection;





