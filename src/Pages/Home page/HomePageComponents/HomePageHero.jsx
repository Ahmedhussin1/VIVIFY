import TextAnimation from "../../../Components/Text Animations/TextAnimation";
import { motion } from "framer-motion";
import firstSectionVid from "../../../assets/1692104934-3-hcd-2023-sequence-01.mp4";
import "./HomePageHero.scss";
function HomePageHero() {
  return (
    <div className="home-page-hero">
      <video
        className="home-page-hero-video"
        autoPlay
        loop
        muted
        src={firstSectionVid}
      />
      <div className="video-overlay-text">
        <TextAnimation textData={"DIGITAL \n COMPONENT \n CONSTRUCTION"} />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <p className="">
            Powered by Echo technology,
            <br /> we use proven construction methods to build beautiful,
            <br /> high-performing + cost-effective environments.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePageHero;
