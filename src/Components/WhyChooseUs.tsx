import React from "react";
import {
  faUsers,
  faDumbbell,
  faWifi,
  faCoffee,
  faCouch,
  faClock,
  faBasketballBall,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: faUsers, title: "Community Events", description: "Engage in networking and social meetups." },
  { icon: faDumbbell, title: "Gym Facilities", description: "Stay active with modern workout spaces." },
  { icon: faWifi, title: "High-Speed WiFi", description: "Reliable internet for seamless work." },
  { icon: faCoffee, title: "Cafe & Tea Bar", description: "Fuel up with coffee and refreshments." },
  { icon: faTags, title: "Affordable Pricing", description: "Workspaces that fit your budget." },
  { icon: faCouch, title: "Comfort Lounges", description: "Relax in cozy, well-designed lounges." },
  { icon: faClock, title: "Quick Booking", description: "Book your workspace in seconds." },
  { icon: faBasketballBall, title: "Sports Area", description: "Unwind with fun and fitness options." },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="px-4 py-10">
      <h2 className="w-[500px] h-[45px] pl-[60px] mb-8 font-bold text-[36px] leading-[45px] tracking-[0.3px]">
        Why Choose Us?
      </h2>

      <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto pl-[40px]">
        {benefits.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-5 shadow-md flex items-start gap-4"
          >
            <FontAwesomeIcon
              icon={icon}
              className="w-[31px] h-[32px] text-yellow-500 text-3xl mt-1 shrink-0"
            />
            <div className="transition-transform duration-300 group hover:scale-[1.03]">
              <h1 className="text-lg font-semibold transition-colors duration-300">
                {title}
              </h1>
              <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
