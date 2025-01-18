'use client'; 
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import Image from "next/image";

const Banner = () => {
  const router = useRouter(); // Initialize the navigation hook

  // Handler to navigate to the Contact Us page
  const handleGetInTouch = () => {
    router.push('/contact'); // Navigate to the contact-us page
  };

  return (
    <main>
      <div className="px-6 lg:px-8">
        {/* Banner Section */}
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96">
              Welcome to US Tech <br />
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray mb-5">
              Your trusted Salesforce consulting partner, delivering tailored
              solutions to elevate your business.
              <br /> We specialize in implementing, optimizing, and maintaining
              Salesforce to meet your unique needs.
              <br />
              Let us help you transform your business processes and achieve
              greater success.
            </p>
          </div>
          <Image
            src="/assets/banner/Home-Page-Slider-1.webp"
            alt="banner-image"
            width={1200}
            height={600}
            className="rounded-lg mx-auto shadow-lg"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="py-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-navyblue mb-6">
            Why Choose Us?
          </h2>
          <ul className="max-w-4xl mx-auto text-lg text-gray-700 list-disc list-inside">
            <li>Certified Salesforce professionals.</li>
            <li>Proven track record of successful implementations.</li>
            <li>Customized solutions for every business.</li>
            <li>Exceptional post-implementation support.</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <Image
              src="https://img.freepik.com/free-photo/question-mark-icon-solving-problem-solution-concept_53876-13887.jpg?t=st=1737171259~exp=1737174859~hmac=01ffaea1165b51cbaaf23051543d8971e0ee9cfc746af769816b46338dc2c2a9&w=996"
              alt="Why Choose Us"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="py-10 text-center bg-blue-50">
          <h2 className="text-3xl font-bold text-navyblue mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg text-gray-700 mb-5">
            Take your Salesforce experience to the next level. Reach out for a
            consultation!
          </p>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={handleGetInTouch} // Navigate to Contact Us page
              className="px-8 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium shadow-md"
            >
              Get in Touch
            </button>
            <button
              type="button"
              className="px-8 py-4 text-blue-500 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white rounded-md font-medium shadow-md"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
