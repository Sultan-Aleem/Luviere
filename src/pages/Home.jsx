import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import ShopSection from "../sections/ShopSection";
import BestSeller from "../sections/BestSeller";
import About from "../sections/About";
import Offers from "../sections/Offers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />

      <main>
        <Hero />
        <ShopSection />
        <BestSeller />
        <About />
        <Offers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
