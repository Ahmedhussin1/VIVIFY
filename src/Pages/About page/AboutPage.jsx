import { motion } from "framer-motion"
import GridCards from "../../Components/Grid cards/GridCards";
import ImageFlipCard from "../../Components/Image flip card/ImageFlipCard";
import GridCardsAnimation from "../../Components/Grid cards/GridCardsAnimation";
import ShuffleHero from "../../Components/Hero section/AnimatedImgHero";
import ScrollCards from "../../Components/Scroll reveal cards/ScrollCards";
import ScrollCardsData from "../../Components/Scroll reveal cards/ScrollCardsData";
function AboutPage() {
  return (
    <motion.div>
    <ShuffleHero/>
      <GridCardsAnimation/>
      <div className="m-10"></div>
      {/* <GridCards/> */}
      <ImageFlipCard/>
      <ScrollCards cardData={ScrollCardsData} />
    </motion.div>
  );
}

export default AboutPage