import { Clipboard, Clock, FileText, ShieldCheck } from "lucide-react";

const issues = [
  {
    title: "Manual Entry Errors",
    desc: "Human errors in logs lead to incorrect data and confusion.",
    icon: Clipboard,
    color: "text-pink-400",
  },
  {
    title: "Time Consuming",
    desc: "Long queues and delays waste valuable time for visitors.",
    icon: Clock,
    color: "text-purple-400",
  },
  {
    title: "Paper Dependency",
    desc: "Managing paper records is messy and hard to maintain.",
    icon: FileText,
    color: "text-indigo-400",
  },
  {
    title: "Low Security",
    desc: "No real-time tracking leads to security risks.",
    icon: ShieldCheck,
    color: "text-blue-400",
  },
];

const TraditionalIssues = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#071426] text-white">
      
      {/* Heading */}
      <div className="text-center mb-14">
        
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-white">Why Traditional Methods Are</span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            No Longer Effective
          </span>
        </h2>

        <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto">
          Outdated systems slow down operations and reduce efficiency.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {issues.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-[#1f2a3a] 
                         bg-[#0b1a2b] transition duration-500 
                         hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              
              {/* Top Hover Slide Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#12263a] 
                              transform -translate-y-full 
                              group-hover:translate-y-0 
                              transition duration-500 ease-in-out">
              </div>

              {/* Content */}
              <div className="relative z-10">
                
                {/* Icon */}
                <div className={`mb-4 transition duration-300 group-hover:scale-125 ${item.color}`}>
                  <Icon className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 transition duration-300 group-hover:text-purple-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#94a3b8] text-sm">
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-indigo-400 
                                transition-all duration-300 group-hover:w-full">
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default TraditionalIssues;