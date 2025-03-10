import React from "react";

// Define TypeScript types for the ServiceCard props
interface ServiceCardProps {
  imgSrc: string;
  title: string;
  text: string;
}

// ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, title, text }) => (
  <div className="max-w-xs mx-auto my-5 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
    <div className="relative">
      <img src={imgSrc} alt={title} className="w-full h-48 object-contain" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);


// ServicePage Component
const ServicePage: React.FC = () => (
  <div className="min-h-screen bg-gray-100 py-16">
    {/* Title Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
      <p className="mt-4 text-lg text-gray-600">
        Explore our tailored Salesforce services designed to elevate your business.
      </p>
    </div>

    {/* Services Section */}
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/man-woman-browsing-internet-medical-website_1262-19802.jpg?uid=R179394041&ga=GA1.1.1321954853.1728220496&semt=ais_incoming"
          title="Salesforce Consultation"
          text="Salesforce CRM consultation services are designed to help businesses effectively utilize the Salesforce platform to meet their unique business needs."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?t=st=1737981355~exp=1737984955~hmac=f4e20f6fee8c376d5346c3267a1c468d71ce67ec0648bb99f5bce544aab15de2&w=996"
          title="Salesforce Implementation"
          text="Seamless deployment of Salesforce for your business, customized to align with your goals."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/website-analyst-concept-web-page-improvement-business-promotion-optimization-website-analysis-get-data-seo-isolated-flat-illustration_613284-2549.jpg?t=st=1737981309~exp=1737984909~hmac=9e85fff80cfb992afc0a994dff75e98c719e8f491bff7b1a6af27c4d0dfc0f98&w=740"
          title="Salesforce Customization & Development"
          text="Optimize your Salesforce instance with custom solutions and integrations."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/phone-agent-wearing-headset-consulting-customers_1262-21502.jpg?t=st=1737981415~exp=1737985015~hmac=7d741917d73a0d62899bf425b7a3e5beca178105849571f533dc86daba56cddc&w=996"
          title="Salesforce Support & Maintenance"
          text="Ongoing support to ensure your Salesforce system operates smoothly."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/choose-destination-concept-illustration_114360-22432.jpg?uid=R165763892&ga=GA1.1.1321954853.1728220496&semt=ais_hybrid"
          title="Training & Adoption"
          text="Empower your team with hands-on Salesforce training to maximize adoption and efficiency."
        />
        <div>Test to check</div>
      </div>

      {/* Customer 360 Solutions Section */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Customer 360 Solutions</h2>
        <p className="mt-4 text-lg text-gray-600">
          Tailored solutions to meet your business needs across various Salesforce products.
        </p>
      </div>

      {/* Customer Solutions Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/cloud-computing-concept_53876-66074.jpg?uid=R165763892&ga=GA1.1.1321954853.1728220496&semt=ais_hybrid"
          title="Sales Cloud"
          text="Streamline your sales processes and maximize sales potential with Sales Cloud, providing tools for lead and opportunity management."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/working-remotely-concept-illustration_114360-1916.jpg?uid=R179394041&ga=GA1.1.1321954853.1728220496&semt=ais_incoming"
          title="Service Cloud"
          text="Empower your support agents with tools for omnichannel customer service and quick issue resolution."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/cloud-computing-apps-isometric_1284-22244.jpg?t=st=1737172692~exp=1737176292~hmac=c86202ba74f0db5ff3719803c2f56a768f15daddf51ad4097d0d33593d87ffd0&w=740"
          title="Marketing Cloud"
          text="A suite of tools to enhance email, mobile, social, and advertising marketing with insights from customer data."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/power-station-electrical-energy-generation-electricity-production-power-engineer-cartoon-character-energy-industry-electric-plant_335657-715.jpg?uid=R165763892&ga=GA1.1.1321954853.1728220496&semt=ais_hybrid"
          title="Field Service Lightning"
          text="Optimize on-site operations with intelligent scheduling and real-time tracking to enhance service quality and reduce operational costs."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/people-file-sharing-illustration_53876-37172.jpg?t=st=1737982226~exp=1737985826~hmac=8b65a7e7bf1f68410cb976d59b939f17cd2aa4f0ce74a518cc14ebcaf5ca3bd9&w=900"
          title="Commerce Cloud"
          text="Deliver seamless shopping experiences with AI-powered product recommendations and omnichannel capabilities."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/online-catalog-digital-platform-backup-saves-store-drive-data-library-document-archive-cloud-storage-information-media-database-isolated-concept-metaphor-illustration_335657-1202.jpg?t=st=1737172810~exp=1737176410~hmac=5eca40ccde350b5991e401ed2facc8a7ec382b51dd0d9c9304e9af7ded61f315&w=740"
          title="Experience Cloud"
          text="Understand and engage with your customers in real-time, using unified customer data for better decision-making."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/intellectual-property-concept-illustrated_23-2148690698.jpg?t=st=1737172855~exp=1737176455~hmac=da4bdab058d82f99883ef7010049767b2bd8e4e92a901b9d2a3c8b0ac954b1d1&w=740"
          title="CPQ"
          text="Automate the process of creating customized product configurations, calculating accurate pricing, and generating quotes quickly."
        />
      </div>
    </div>
  </div>
);

export default ServicePage;
