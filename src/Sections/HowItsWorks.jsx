import { QrCode, BadgeCheck, Bell } from "lucide-react";

const steps = [
  {
    title: "Scan & Verify",
    desc: "Visitors scan a unique invite code or register instantly at the kiosk.",
    icon: QrCode,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Instant Badge",
    desc: "Automated digital or printed badges are issued with precise access permissions.",
    icon: BadgeCheck,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Host Alerted",
    desc: "Your team receives immediate confirmation as the guest arrives.",
    icon: Bell,
    color: "from-cyan-400 to-blue-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#0A102A] to-[#0F1A3A] text-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
          The Seamless Check-in Journey
        </h2>
      </div>

      {/* Steps */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Line */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30"></div>

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center max-w-xs group"
            >
              
              {/* Icon Circle */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full 
                bg-gradient-to-br ${step.color} 
                shadow-lg shadow-purple-500/20 
                group-hover:scale-110 group-hover:shadow-xl 
                transition-all duration-300`}
              >
                <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-400">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;