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
      "We engage with customers by getting to know their operations first before arriving at solutions. This approach ensures we deliver a tailored solution stack that aligns uniquely with the business, moving beyond traditional methodologies.Our mission is to provide best-in-class assistance to businesses in selecting the right product and delivering benchmark services.",
  },
  {
    heading: "Team",
    subheading:
      "Our certified Salesforce professionals are dedicated to providing exceptional service. We value collaboration, integrity, and a client-first approach.",
  },
  {
    heading: "Address",
    subheading: "4440 W Devon Ave, Lincolnwood, IL 60712",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h2 className="">About Us </h2>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Our Story
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              At US Tech Lightning Solutions, we are passionate about helping
              businesses unlock their full potential with Salesforce. Located in
              Chicago, IL, our team of experts has years of experience in
              transforming business operations across industries.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  {/* <div className="rounded-full h-12 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24} // Consistent size for the image
                      height={24}
                      className="object-contain" // Ensures the image fits within the parent
                    />
                  </div> */}
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
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
