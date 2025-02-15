import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Vision",
    subheading:
      "To be the go-to Salesforce consultancy for businesses seeking innovative, efficient, and scalable solutions.",
  },
  {
    heading: "Mission",
    subheading:
      "We engage with customers by getting to know their operations first before arriving at solutions. This approach ensures we deliver a tailored solution stack that aligns uniquely with the business, moving beyond traditional methodologies. Our mission is to provide best-in-class assistance to businesses in selecting the right product and delivering benchmark services.",
  },
  {
    heading: "Team",
    subheading:
      "Our certified Salesforce professionals are dedicated to providing exceptional service. We value collaboration, integrity, and a client-first approach.",
  },
 
];

const Why = () => {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* COLUMN-1 */}
          <div className="relative lg:-ml-20">
            <Image
              src="/assets/why/about-us.svg"
              alt="iPad-image"
              layout="responsive"
              width={4000}
              height={900}
              // className="rounded-lg shadow-lg"
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left ">
              About Us
            </h1>
           
            <h4 className="text-lg pt-4 font-normal text-center lg:text-left text-bluegray lg:text-base">
              At US Tech Lightning Solutions, we are passionate about helping
              businesses unlock their full potential with Salesforce. Located in
              near north suburbs Chicago, IL, our team of experts has years of experience in
              transforming business operations across industries.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex flex-col lg:flex-row mt-8" key={i}>
                  <div className="ml-5">
                    <h4 className="text-2xl  text-black">{items.heading}</h4>
                    <h5 className="text-lg text-bluegray font-normal mt-2">{items.subheading}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
