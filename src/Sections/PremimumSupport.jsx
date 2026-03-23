// src/Sections/HowItWorks.jsx
const PremimumSupport = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How <span className="text-blue-600">QureVisitor Works</span>
        </h2>
        <p className="text-gray-500 mb-12">
          See how our visitor management system works in a single view.
        </p>

        {/* Full Illustration */}
        <div className="flex justify-center ">
          <img  
            src="https://www.naapbooks.com/media/qj5pruaw/visitor-management-system-1.png?rmode=max&width=670&height=425" 
            alt="How QureVisitor Works"
            className="w-full md:w-4/5 lg:w-3/4 object-contain rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default PremimumSupport;