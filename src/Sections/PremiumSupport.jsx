import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "../Components/Common/Button";
import {
  Headphones,
  ShieldCheck,
  Clock,
  MessageCircle,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";

const supportData = [
  {
    title: "24/7 Support",
    desc: "We’re always available to help you anytime.",
    icon: Headphones,
  },
  {
    title: "Secure Assistance",
    desc: "Your data is always protected with us.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Response",
    desc: "Get solutions within minutes.",
    icon: Clock,
  },
  {
    title: "Live Chat",
    desc: "Talk to our experts instantly.",
    icon: MessageCircle,
  },
  {
    title: "Fast Integration",
    desc: "Seamless onboarding experience.",
    icon: Zap,
  },
];

const PremiumSupport = () => {
  return (
    <section className="py-20 bg-[#020c1b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold">
            Premium Support{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              When You Need It
            </span>
          </h2>

          <p className="text-[#94a3b8] mt-4">
            Experience fast, reliable and secure support anytime.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={24}
            slidesPerView={1.05}

            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".prev-btn";
              swiper.params.navigation.nextEl = ".next-btn";
            }}

            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}

            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {supportData.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="h-full p-6 rounded-2xl border border-[#1f2a3a] 
                                  bg-[#0b1a2b] transition duration-300 
                                  hover:border-purple-400 
                                  hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                                  hover:-translate-y-1 flex flex-col justify-between">
                    
                    {/* Icon */}
                    <div className="mb-4 text-purple-400">
                      <Icon className="w-10 h-10" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-[#94a3b8] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* 🔥 Bottom Buttons */}
        <div className="flex justify-center items-center gap-6 mt-10 ">
           <Button
    className="prev-btn flex items-center gap-2 px-6 py-2"
  >
    <ChevronLeft size={18} />
    Prev
  </Button>

  <Button
    className="next-btn flex items-center gap-2 px-6 py-2"
  >
    Next
    <ChevronRight size={18} />
  </Button>
        </div>

      </div>
    </section>
  );
};

export default PremiumSupport;