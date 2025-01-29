import Banner from "./components/Banner/Banner";
import Buyers from "./components/Buyers/index";
import Clientsay from "./components/Clientsay/index";
// import Companies from "./components/Companies/Companies";
import FAQs from "./components/FAQs/Faqs";
import Network from "./components/Network/index";
import Newsletter from "./components/Newsletter/Newsletter";
import Provide from "./components/Provide/index";
import Why from "./components/Why/index";
export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Buyers />
      <Why />
      <Provide />
      <Network />
      <Clientsay />
      <FAQs />
      <Newsletter />
    </main>
  );
}
