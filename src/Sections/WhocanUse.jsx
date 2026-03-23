const sectors = [
  {
    title: "Corporate Offices",
    img: "https://media.istockphoto.com/id/1165533875/photo/downtown-hustle.jpg?s=612x612&w=0&k=20&c=ZNSttmk4bMVfCABkiEB7iFwKuIndfBLV-yJqYjf_bwA=",
  },
  {
    title: "Manufacturing",
    img: "https://media.istockphoto.com/id/2143490032/photo/modern-manufacturing-plant-with-advanced-robotic-arms-operating-on-an-assembly-line-with.jpg?s=612x612&w=0&k=20&c=pYSDAKAyTzuURDptDyXRQsOBlcQLwU_PueNsD5LISv8=",
  },
  {
    title: "Schools",
    img: "https://www.usa-shade.com/wp-content/uploads/2024/08/01-Guide-to-Designing-a-Welcoming-School-Entrance.png",
  },
  {
    title: "Hospitals",
    img: "https://www.tigernix.com/wp-content/uploads/2025/11/pexels-pavel-danilyuk-7108318.jpg",
  },
  {
    title: "Co-working",
    img: "https://info.jobrien.com/hubfs/visitor-management-system-check-in-security-hid-jobrien.png",
  },
  {
    title: "Hotels",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

const WhocanUse = () => {
  return (
    <section className="py-20 bg-[#020c1b] text-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white"> Designed for</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text ">
                    every Sector
                </span>

            </h2>
          </div>

          <p className="text-[#94a3b8] max-w-md text-sm md:text-base">
            Our flexible architecture adapts to the unique compliance and security needs of your specific industry.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {sectors.map((item, index) => (
            
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-56"
            >
              
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500"></div>

              {/* Text */}
              <h3 className="absolute bottom-6 left-6 text-xl font-semibold z-10">
                {item.title}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhocanUse ;