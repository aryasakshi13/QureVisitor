import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">QureVisitor</h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            The most integrated workplace management platform for modern offices
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="p-3 bg-gray-800 rounded-md hover:bg-gradient-to-r 
                from-pink-400 to-purple-400 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Products
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Visitor Management",
              "Society Visitor Management System",
              "Event Visitor Management",
              "Gate Pass Management Software",
              "Meeting Room Booking",
              "Desk Scheduling",
              "Contractor & Staff Management",
            ].map((item, i) => (
              <li key={i} className="hover:text-pink-400 cursor-pointer transition">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Solution
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Corporate Offices",
              "Educational Institutions",
              "Healthcare Facilities",
              "Manufacturing Units",
              "Residential Societies",
              "Event Visitor Management",
              "Government Premises",
              "Factory & Industrial",
            ].map((item, i) => (
              <li key={i} className="hover:text-pink-400 cursor-pointer transition">
                › {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Resources
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "About Us",
              "Disclaimer",
              "Privacy Policy",
              "Refund Policy",
              "Terms & Conditions",
            ].map((item, i) => (
              <li key={i} className="hover:text-pink-400 cursor-pointer transition">
                › {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        All Rights Reserved 2025 | QureVisitor | Powered By{" "}
        <span className="text-red-400 font-medium">MKP IT Solutions</span>
      </div>
    </footer>
  );
};

export default Footer;