import React from "react";

const Clients = () => {
  const clients = [
    { name: "CG", image: "/assets/banner/demo-form-image-emea.png" },
    { name: "PWC", image: "/assets/banner/demo-form-image-emea.png" },
    { name: "CVS Health", image: "/path/to/cvs-health-image.jpg" },
    { name: "RFI", image: "/path/to/rfi-image.jpg" },
    { name: "B.A.G Footwear", image: "/path/to/bag-footwear-image.jpg" },
    { name: "Area 71", image: "/path/to/area-71-image.jpg" },
    { name: "Infinite", image: "/path/to/infinite-image.jpg" },
    { name: "Service and Solutions IT", image: "/path/to/ssi-image.jpg" },
    { name: "TechieMaya", image: "/path/to/techiemaya-image.jpg" }
  ];

  return (
    <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white">
      <h3 className="text-center text-4xl lg:text-5xl font-semibold text-indigo-900 mb-6 tracking-tight">
        Our Esteemed Clients
      </h3>
      <p className="text-lg font-medium text-gray-600 text-center mb-12 mx-auto max-w-2xl">
        We are proud to partner with industry leaders and innovators across the globe, empowering their business success.
      </p>

      {/* Horizontal Scrolling Section */}
      <div
        className="clients-scroll-container overflow-hidden"
        style={{
          position: "relative", // To contain the animation
          width: "100%", // Full width for the container
        }}
      >
        {/* Inner scrollable div with auto scrolling */}
        <div
          className="d-flex"
          style={{
            whiteSpace: "nowrap", // Prevent line breaks
            animation: "scrollLeft 20s linear infinite", // Apply animation for infinite scroll
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="d-inline-block mx-4"
              style={{
                minWidth: "150px", // Adjust minimum width as necessary
                display: "inline-block", // Ensure horizontal stacking
                marginRight: "20px", // Adds space between items
              }}
            >
              {/* Circular Image */}
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-indigo-100 rounded-full overflow-hidden mb-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: "50%", // Ensures the image is circular
                  }}
                />
              </div>
              <h4 className="text-xs sm:text-sm md:text-lg font-medium text-indigo-800 text-center">
                {client.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for auto-scrolling */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
