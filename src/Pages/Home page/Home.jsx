import "./Home.scss";
import { motion } from "framer-motion";
// importing assets
// import truck from '../../assets/Icons/truck.png'
// importing components
import FirstButton from "../../Components/Buttons/Btn-1/FirstButton";
import ImageSlider from "../../Components/carousel/Carousel";
import LinkButton from "../../Components/Buttons/Btn-4/LinkButton";
import icon from "../../assets/Logo/logo2.png";
import HomePageHero from "./HomePageComponents/HomePageHero";
import HomePageSubHero from "./HomePageComponents/HomePageSubHero";
import HomePageThirdSection from "./HomePageComponents/HomePageThirdSection";
import HomePageTeamSection from "./HomePageComponents/HomePageTeamSection";
import HomePageSustainabilitySection from "./HomePageComponents/HomePageSustainabilitySection";
import ContactUsBanner from "../../Components/ContactUsBanner/ContactUsBanner";

function Home() {
  return (
    <motion.div className="home-page-container">
      {/* hero section component */}
      <HomePageHero />
      {/* second video */}
      <HomePageSubHero />
      {/* third section */}
      <HomePageThirdSection />
      {/* team section*/}
      <HomePageTeamSection />
      {/* sustainability section */}
      <HomePageSustainabilitySection />
      {/* carrousel section */}
      <div className="carousel-section-container">
        <ImageSlider />
      </div>
      
      {/* horizontal line */}
      <hr className="border-none bg-white h-px w-1/2 mx-auto my-4" />
      {/* contact us section */}
      <ContactUsBanner />
    </motion.div>
  );
}

export default Home;
