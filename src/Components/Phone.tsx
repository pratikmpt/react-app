import React from "react";
import logo from "../Assets/logo.png";
import cuate from "../Assets/cuate.png";
import WhiteBase from "../Assets/WhiteBase.png"

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-sm mx-auto">
        {/* Phone Frame */}
        <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl w-[280px]">
          {/* Phone Screen */}
          <div className="bg-white rounded-[2rem] h-[500px]">
            {/* Status Bar */}
            <div className="flex justify-center items-center mb-4 mt-1.5">
              <img
                  src={WhiteBase}
                  alt="cuate Logo"
                  className="h-[20px] w-[49px]"
              />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col">
              {/* Upper Section - White Background */}
              <div className="flex-1 px-6 pb-3">
                {/* Logo Section */}
                <div className="flex justify-center items-center mb-4 mt-1.5 h-[60px]">
                    <img
                        src={logo}
                        alt="BHIVE Logo"
                        className="h-[20px] w-[49px]"
                    />
                </div>
                <div className="flex justify-center items-center mb-4 mt-1.5">
                    <img
                        src={cuate}
                        alt="cuate Logo"
                        className="h-[20px] w-[49px]"
                    />
                </div>
              </div>

              {/* Bottom Section - Dark Background */}
              <div className="bg-gray-800 text-white px-6 py-4 rounded-t-2xl">
                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mb-2">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>

                {/* Main Text */}
                <div className="text-center">
                    <span className="text-white font-normal text-[0.85rem] leading-[1.25rem]">
                        Let's get started!
                    </span>
                  <p className="text-xs text-gray-400">
                    Gain access to unlimited freedom, put in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
