'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation'; // Now you can use the navigation hook
import Image from "next/image";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/marketing.svg",
    country: "Salesforce Consultation",
    paragraph: "Salesforce CRM consultation services designed to help businesses effectively utilize the Salesforce platform.",
  },
  {
    imgSrc: "/assets/provide/graphic.svg",
    country: "Salesforce Implementation",
    paragraph: "Seamless deployment of Salesforce for your business, customized to align with your goals.",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Salesforce Customization",
    paragraph: "Optimize your Salesforce instance with custom solutions and integrations tailored to your business.",
  },
  {
    imgSrc: "/assets/provide/uidesign.svg",
    country: "Salesforce Support",
    paragraph: "Ongoing support to ensure your Salesforce system operates smoothly and efficiently.",
  },
];

const Provide = () => {
  const router = useRouter(); // Initialize the navigation hook inside the component

  // Handler to navigate to the services page
  const handleLearnMore = () => {
    router.replace('/services'); // Navigate to the services page
  };

  return (
    <div id="services" className="px-4 my-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center lg:col-span-6">
            <div className="flex flex-col justify-center p-6 lg:p-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-start">
                Services
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-4 text-center lg:text-start">
                Our Expertise
              </p>
              <p className="text-base lg:text-lg mt-4 font-normal leading-relaxed text-center lg:text-start text-bluegray">
                At US Tech, we offer a wide range of Salesforce services tailored to your needs&#39;:
              </p>
              
              {/* List without bullet points */}
              <ul className="mt-6 text-base lg:text-lg list-none text-bluegray space-y-3 lg:space-y-4">
                <li className="mb-4">
                  <h4 className="font-semibold text-black text-left lg:text-justify">
                    Salesforce Consultation:
                  </h4>
                  <p className="text-bluegray text-left lg:text-justify">
                    Salesforce CRM consultation services designed to help businesses effectively utilize the Salesforce platform to meet their unique business needs.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="font-semibold text-black text-left lg:text-justify">
                    Salesforce Implementation:
                  </h4>
                  <p className="text-bluegray text-left lg:text-justify">
                    Seamless deployment of Salesforce for your business, customized to align with your goals and strategies.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="font-semibold text-black text-left lg:text-justify">
                    Salesforce Customization &amp; Development:
                  </h4>
                  <p className="text-bluegray text-left lg:text-justify">
                    Optimize your Salesforce instance with custom solutions, tailored integrations, and automation to improve your business workflows.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="font-semibold text-black text-left lg:text-justify">
                    Salesforce Support &amp; Maintenance:
                  </h4>
                  <p className="text-bluegray text-left lg:text-justify">
                    Ongoing support to ensure your Salesforce system operates smoothly, with regular updates and issue resolution.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="font-semibold text-black text-left lg:text-justify">
                    Training &amp; Adoption:
                  </h4>
                  <p className="text-bluegray text-left lg:text-justify">
                    Empower your team with hands-on Salesforce training to maximize user adoption and efficiency, ensuring they are proficient in utilizing the platform&#39;s full potential.
                  </p>
                </li>
              </ul>

              <Link
                onClick={handleLearnMore}
                href={"/"}
                className="mt-6 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more
                <Image
                  src={"/assets/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 (unchanged) */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Provide;
