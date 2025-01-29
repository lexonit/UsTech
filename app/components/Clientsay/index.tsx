import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Clients = () => {
  const clients = [
    { name: "CG", image: "/assets/logo/capgemini_logo.jpg" },
    { name: "PWC", image: "/assets/logo/pwc_logo.jpg" },
    { name: "CVS Health", image: "/assets/logo/cvs_health_logo.jpg" },
    { name: "RFI", image: "/assets/logo/RF Logo.jpg" },
    { name: "Area 71", image: "/assets/logo/area71_venture_limited_logo.jpg" },
    { name: "TechieMaya", image: "/assets/logo/TechieMayaLogo.png" },
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
      <div className="clients-scroll-container overflow-hidden relative w-full">
        {/* Inner scrollable div with auto scrolling */}
        <div
          className="flex space-x-12 animate-scroll"
          style={{ whiteSpace: "nowrap" }}
        >
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={150} // Set width
                  height={150} // Set height
                  objectFit="contain" // Ensures the image fits inside
                  quality={80} // Optimize image quality
                  priority // Improves loading speed for important images
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
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } /* Adjusted to avoid gaps */
          }

          .animate-scroll {
            display: flex;
            animation: scrollLeft 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
