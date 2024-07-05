// import bgCTAFirst from '../src/Images/CTA-1.svg'
// import service1 from './service-1.svg';
// import service2 from './service-2.svg';
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import OurServices from "./components/OurServices/OurServices";
import Testimonials from "./components/Testimonials/Testimonials";
import TopDestinations from "./components/TopDestinations/TopDestinations";
import FAQs from "./components/FAQs/FAQs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <OurServices />
      <Testimonials />
      <TopDestinations />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
