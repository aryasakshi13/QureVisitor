import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-16 
    bg-gradient-to-r from-[#0A102A] via-[#1A1F4F] to-[#2A1E6C] text-white">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Transform Your Corporate <br />
          Visitor Management?
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-6 leading-relaxed">
          Join thousands of companies that trust QureVisitor for their security
          and professional needs. Schedule a demo today to see how our solution
          can work for your office.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full 
            bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 
            text-black font-semibold 
            hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30"
          >
            <Calendar className="w-5 h-5" />
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;