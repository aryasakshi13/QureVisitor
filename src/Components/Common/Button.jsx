// components/common/Button.jsx
const Button = ({
  children,
  fullWidth = false,
  variant = "gradient",
  className = "",
}) => {
  return (
    <button
      className={`
        relative px-6 py-4 px-4 rounded-full overflow-hidden group font-semibold transition-all duration-300
        ${fullWidth ? "w-full" : "w-auto"}
        
        ${
          variant === "gradient"
            ? "text-black shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:shadow-[0_0_40px_rgba(124,92,255,0.6)]"
            : "bg-[#1A2138] text-gray-300 hover:bg-[#222a45]"
        }

        ${className}
      `}
    >
      {/* 🔥 Gradient Background */}
      {variant === "gradient" && (
        <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400"></span>
      )}

      {/* 🔥 Hover Slide Effect */}
      {variant === "gradient" && (
        <span className="absolute inset-0 bg-white/20 backdrop-blur-sm  w-0 group-hover:w-full transition-all duration-500"></span>
      )}

      {/* 🔥 Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;