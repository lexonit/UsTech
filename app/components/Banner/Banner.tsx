"use client";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion for animations

export const metadata = {
  title: 'Home -  US Tech Lightning Solutions',
  // description: 'Specializing in quality code development, we ensure your software projects are built with precision, reliability, and cutting-edge technology.',
  // icons: {
  //   icon: '/favicon.ico',
  // },
  // openGraph: {
  //   title: 'Lexon IT - Expert IT Solutions & Services',
  //   description:
  //     'Lexon IT offers expert IT services and technology solutions to businesses. We specialize in cloud computing, network management, cybersecurity, and more.',
  //   images: '/logo.svg',
  //   url: 'https://www.lexonit.com',
  // },
  // twitter: {
  //   title: 'Lexon IT - Expert IT Solutions & Services',
  //   description:
  //     'Lexon IT offers expert IT services and technology solutions to businesses. We specialize in cloud computing, network management, cybersecurity, and more.',
  //   images: '/logo.svg',
  // },
};
const Banner = () => {
  const router = useRouter(); // Initialize the navigation hook

  // Handler to navigate to the Contact Us page
  const handleGetInTouch = () => {
    router.push("/contact"); // Navigate to the contact-us page
  };

  return (
    <main>
      <div className="px-6 lg:px-8">
        {/* Banner Section */}
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image flex flex-wrap">
          <div className="text-center lg:w-[50%] ">
            <h1 className="text-2xl font-semibold text-navyblue sm:text-2xl lg:text-3xl md:4px lh-96">
              Welcome to US Tech <br />
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray mb-5">
              Your trusted Salesforce Solution partner, delivering tailored
              solutions to elevate your business.
              <br /> We specialize in implementing, optimizing, and maintaining
              Salesforce to meet your unique needs.
              <br />
              Let us help you transform your business processes and achieve
              greater success.
            </p>
          </div>

          {/* Animated Image with Slow Vertical Movement */}
          <motion.div
            animate={{
              y: ["0%", "10%", "-5%", "0%"], // Vertical keyframes
            }}
            transition={{
              duration: 10, // Slower movement (10 seconds per loop)
              repeat: Infinity, // Infinite loop
              ease: "easeInOut", // Smooth easing
            }}
            className="lg:w-[50%]"
          >
            <Image
              src="/assets/banner/hero.svg"
              alt="banner-image"
              width={900}
              height={400}
              className="rounded-lg mx-auto "
            />
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-10 flex justify-center items-center flex-wrap">
          <div className="mt-8 flex justify-center lg:w-[50%]">
            <Image
              src="/assets/banner/why-us.svg"
              alt="Why Choose Us"
              width={700}
              height={400}
              className=""
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center text-navyblue mb-6">
              Why Choose Us?
            </h2>
            <ul className="max-w-4xl mx-auto text-lg  list-disc list-inside">
              <li>Certified Salesforce professionals.</li>
              <li>Proven track record of successful implementations.</li>
              <li>Customized solutions for every business.</li>
              <li>Exceptional post-implementation support.</li>
            </ul>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="py-10 text-center bg-blue-50">
          <p className="text-lg text-gray-700 mb-5">
            Take your Salesforce experience to the next level. Reach out for a
            consultation!
          </p>
          <h2 className="text-2xl  text-navyblue mb-4">Contact Us Today</h2>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={handleGetInTouch} // Navigate to Contact Us page
              className="px-8 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium shadow-md"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
