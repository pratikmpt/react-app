import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative px-6 py-12 md:py-20 overflow-hidden">
      <div
        className="absolute w-[929px] h-[754px] -top-[150px] opacity-70 mix-blend-multiply bg-center bg-cover"
        style={{ backgroundImage: "url('/Video/background.png')" }}
      ></div>


      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div
          className="md:w-1/2"
          style={{
            width: "806px",
            height: "254px",
            top: "170px",
            left: "120px",
          }}
        >
          <span className="font-inter font-bold text-[58px] leading-[100%] tracking-[-1px] align-middle">
            Host your meeting with <br className="hidden md:block" />
            world-class amenities. <br className="hidden md:block" />
            <span className="text-yellow-500">Starting at ₹199/-!</span>
          </span>

        </div>
        {/* right side video */}
        <div className="md:w-1/2">
          <video
            src="/Video/coworking_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-md"
            style={{
              width: "388px",
              height: "388px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
