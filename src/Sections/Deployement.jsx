import { CheckCircle } from "lucide-react";
import Button from "../Components/Common/Button";


const Deployment = () => {
  return (
    <section className="bg-[#070B1F] text-white py-20 px-6 md:px-12">
      
      {/* Heading */}
      <div className="text-center mb-14">
        
        <h2 className="text-3xl  md:text-5xl font-bold">
           How You{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
             Deploy
           </span>{" "}
            Matters
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Cloud Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg">
          
          {/* Badge */}
          <span className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-purple-400/20 text-purple-300">
            RECOMMENDED
          </span>

          <h3 className="text-2xl font-semibold mb-6">Cloud-Based</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-purple-400" size={18} />
              Instant auto-updates & security patches
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-purple-400" size={18} />
              Access dashboard from anywhere
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-purple-400" size={18} />
              Unlimited storage & scalable compute
            </li>
          </ul>

            <Button fullWidth className="mt-8">
              Select Cloud
            </Button>
        </div>

        {/* On-Premise Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg">
          
          <h3 className="text-2xl font-semibold mb-6">On-Premise</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-gray-400" size={18} />
              Complete local data sovereignty
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-gray-400" size={18} />
              Intranet-only connectivity option
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-gray-400" size={18} />
              Custom server configuration support
            </li>
          </ul>

          <Button
             variant="dark"
             fullWidth
             className="mt-8 border border-white/10 hover:border-purple-400/40 
             hover:shadow-lg hover:shadow-purple-500/20 
             hover:-translate-y-1 transition-all duration-300"
            >
                 Select On-Premise
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Deployment;