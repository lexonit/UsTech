// pages/index.js
import React from 'react';

const ServiceCard = ({ imgSrc, title, text }:{imgSrc: any, title: any, text: any}) => (
  <div className="max-w-xs mx-auto my-5 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
    <div className="relative">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const ServicePage = () => (
  <div className="min-h-screen bg-gray-100 py-16">
    {/* Title Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
      <p className="mt-4 text-lg text-gray-600">Explore our tailored Salesforce services designed to elevate your business.</p>
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
          imgSrc="https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377145.jpg?t=st=1737172403~exp=1737176003~hmac=852f8137168ed789bc059a9a919e4b0469f27fa1d056a98fae2d330558dbede0&w=996"
          title="Salesforce Implementation"
          text="Seamless deployment of Salesforce for your business, customized to align with your goals."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?t=st=1737172474~exp=1737176074~hmac=3c75aea41b3a08630a71aef1a4521a59f098a53db287190834294d6e0be23548&w=996"
          title="Salesforce Customization & Development"
          text="Optimize your Salesforce instance with custom solutions and integrations."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/specialists-customer-support-center-laptop-as-communication-device-blue-background-flat-illustration_98292-8032.jpg?t=st=1737172519~exp=1737176119~hmac=0d7fa4458c43ee322b7d82711443c4e0c50bb782de58552cd943c363ab5e5b84&w=740"
          title="Salesforce Support & Maintenance"
          text="Ongoing support to ensure your Salesforce system operates smoothly."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/hand-drawn-child-custody-illustration_23-2150778288.jpg?t=st=1737172558~exp=1737176158~hmac=93392626531e7b9ebd91b93982a4009bc2c0daf31ac05c304968e7cee7498d6f&w=740"
          title="Training & Adoption"
          text="Empower your team with hands-on Salesforce training to maximize adoption and efficiency."
        />
      </div>

      {/* Customer 360 Solutions Section */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Customer 360 Solutions</h2>
        <p className="mt-4 text-lg text-gray-600">Tailored solutions to meet your business needs across various Salesforce products.</p>
      </div>

      {/* Customer Solutions Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/saas-technology-abstract-concept-illustration_335657-3886.jpg?t=st=1737172598~exp=1737176198~hmac=a05fb1a06c4e6d534ee3bc8d4fad48cf5972781bdb184d4958000b1dc47c6e71&w=740"
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
          imgSrc="https://img.freepik.com/free-photo/lightning-hit-house_1204-242.jpg?t=st=1737172736~exp=1737176336~hmac=c6febb043353ff65d1e696b124db9ccb2ba13a5964859d1f3d962e828fec932f&w=996"
          title="Field Service Lightning"
          text="Optimize on-site operations with intelligent scheduling and real-time tracking to enhance service quality and reduce operational costs."
        />
        <ServiceCard
          imgSrc="https://img.freepik.com/free-vector/online-payment-element-collection_24908-60012.jpg?t=st=1737172779~exp=1737176379~hmac=75497a0e8f1f6e50dc51cedae6e869ca51fa2b3539c0805f641c3450407b770b&w=826"
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
