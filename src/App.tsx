import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import WhyChooseUs from "./Components/WhyChooseUs";
import CentersGrid from "./Components/CentersGrid";
import DownloadAppSection from "./Components/DownloadApp";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <CentersGrid />
      <DownloadAppSection />
      <Footer />
    </Router>
  );
}

export default App;