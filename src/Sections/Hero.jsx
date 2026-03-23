import { ShieldCheck } from "lucide-react";
import Button from "../Components/Common/Button";


const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0A0F2C] via-[#0C1233] to-[#090D24] min-h-screen relative overflow-hidden text-white">
         <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#7C5CFF]/20 blur-[140px]"></div>
  
         <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#6366F1]/20 blur-[140px]"></div>

      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-6 border border-purple-500/20">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            NEW: AI AUTO-CHECKIN
          </div> */}

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Intelligent Workplace{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Management Powered by AI
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-lg">
            Streamline your front desk with automated security, instant
            notifications, and beautiful guest experiences designed for the
            modern era.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button className="px-6 py-2 whitespace-nowrap">
                  Get Started Free
           </Button>

           <button
  className="px-6 py-3 rounded-full 
             border border-gray-600 text-gray-300 
             whitespace-nowrap
             
             hover:border-purple-400/40 
             hover:text-white
             hover:bg-white/5 
             hover:shadow-md hover:shadow-purple-500/20 
             hover:-translate-y-1
             
             transition-all duration-300"
>
  Schedule Demo
</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* Image Card */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src="/hero-image.png" // replace with your image
              alt="Visitor Kiosk"
              className="w-[350px] md:w-[450px] object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute top-6 left-[-40px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
            <ShieldCheck className="text-purple-400" size={20} />
            <div>
              <p className="text-xs text-gray-300">SECURITY STATUS</p>
              <p className="text-sm font-semibold">Verified Secure</p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500/20 blur-[120px]"></div>

    </section>
  );
};

export default Hero;