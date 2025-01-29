import React from "react";

const Clients = () => {
  const clients = [
    { name: "CG", image: "/assets/logo/capgemini_logo.jpg" },
    { name: "PWC", image: "/assets/logo/pwc_logo.jpg" },
    { name: "CVS Health", image: "/assets/logo/cvs_health_logo.jpg" },
    { name: "RFI", image: "/assets/logo/RF Logo.jpg" },
    { name: "Area 71", image: "/assets/logo/area71_venture_limited_logo.jpg" },
    { name: "TechieMaya", image: "/assets/logo/TechieMayaLogo.png" }
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
            animation: "scrollLeft 15s linear infinite", // Adjusted speed for continuous effect
          }}
        >
          {clients.concat(clients).map((client, index) => ( // Duplicating logos for infinite scroll effect
            <div
              key={index}
              className="d-inline-block mx-6" // Adjusting gap between logos
              style={{
                minWidth: "150px", // Minimum width for logos
                display: "inline-block", // Horizontal stacking of items
                marginRight: "30px", // Adds space between logos
              }}
            >
              {/* Fixed size image container */}
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain" // Ensures logo fits within the container
                />
              </div>
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
