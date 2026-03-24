import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    features: [
      { text: "Unlimited Visitors", available: true },
      { text: "Digital Badge System", available: true },
      { text: "Real-time Alerts", available: true },
      { text: "AI Face ID", available: false },
    ],
    button: "Start Starter",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$299",
    features: [
      { text: "All Starter Features", available: true },
      { text: "AI Face ID Verification", available: true },
      { text: "AD/SSO Integration", available: true },
      { text: "Priority Support", available: true },
    ],
    button: "Go Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$599",
    features: [
      { text: "All Professional Features", available: true },
      { text: "Advanced Analytics", available: true },
      { text: "Multi-location Support", available: true },
      { text: "Dedicated Manager", available: true },
    ],
    button: "Choose Enterprise",
    highlight: false,
  },
  {
    name: "On-Premise",
    price: "Custom",
    features: [
      { text: "Self-hosted Solution", available: true },
      { text: "Full Data Control", available: true },
      { text: "Custom Integrations", available: true },
      { text: "24/7 Support", available: true },
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#0A102A] to-[#0F1A3A] text-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
          Scalable Intelligence
        </h2>
        <p className="text-gray-400 mt-2">
  We offer flexible pricing to suit businesses of all sizes.
  <span className="block">
    All plans include basic features like visitor logs, QR code check-in, host notifications, and badge printing.
  </span>
</p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl border transition-all duration-300 group
            ${
              plan.highlight
                ? "border-pink-400 shadow-lg shadow-pink-500/20 scale-105"
                : "border-gray-700 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
            }`}
          >
            
            {/* Most Popular Badge */}
            {plan.highlight && (
              <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
              bg-gradient-to-r from-pink-400 to-purple-400 text-black font-semibold">
                MOST POPULAR
              </span>
            )}

            {/* Plan Name */}
            <h3 className="text-xl font-semibold text-gray-200">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.price !== "Custom" && (
                <span className="text-gray-400"> /mo</span>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  {f.available ? (
                    <Check className="text-pink-400 w-4 h-4" />
                  ) : (
                    <X className="text-gray-500 w-4 h-4" />
                  )}
                  <span className={f.available ? "text-gray-300" : "text-gray-500"}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-full font-medium transition-all duration-300
              ${
                plan.highlight
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 text-black hover:opacity-90"
                  : "border border-gray-600 hover:border-pink-400 hover:text-pink-400"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;