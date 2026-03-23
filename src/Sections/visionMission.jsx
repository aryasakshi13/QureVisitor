import { Eye, Target, Goal } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-[#020c1b] text-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Vision, Mission &{" "}
          <span className="text-[#cbd5e1]">Core Objectives</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card */}
          {[
            {
              title: "Vision",
              icon: <Eye className="text-pink-400" />,
              text: "To become the leading provider of digital visitor management solutions that redefine the standards of workplace security, compliance, and visitor experience.",
              color: "bg-pink-500/10",
            },
            {
              title: "Mission",
              icon: <Target className="text-purple-400" />,
              text: "To empower organizations with a reliable, secure, and user-friendly platform that simplifies visitor access, enhances brand image, and fosters trust through digital transformation.",
              color: "bg-purple-500/10",
            },
            {
              title: "Core Objectives",
              icon: <Goal className="text-indigo-400" />,
              list: [
                "Improve security",
                "Real-time tracking",
                "Automation",
                "Paperless system",
              ],
              color: "bg-indigo-500/10",
            },
          ].map((item, index) => (
            
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-[#1f2a3a] bg-[#0b1a2b] overflow-hidden group cursor-pointer"
            >
              
              {/* 🔥 Sliding background */}
              <div
                className={`absolute inset-0 ${item.color} origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1e293b] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {item.text ? (
                  <p className="text-[#94a3b8]">{item.text}</p>
                ) : (
                  <ul className="text-[#94a3b8] text-left space-y-2">
                    {item.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VisionMission;