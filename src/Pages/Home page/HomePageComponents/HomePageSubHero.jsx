import TextAnimation from "../../../Components/Text Animations/TextAnimation";
import { motion } from "framer-motion";
import secondSectionVid from "../../../assets/1658166620-sequence-01_3.mp4";
import FirstButton from "../../../Components/Buttons/Btn-1/FirstButton";
import "./HomePageSubHero.scss";
function HomePageSubHero() {
  return (
    <div className="second-home-page-hero">
      <video
        className="second-home-page-hero-video"
        autoPlay
        loop
        muted
        src={secondSectionVid}
      />
      <div className="second-video-overlay-text">
        <TextAnimation textData={"DIGITIZING \n INTERIOR \n CONSTRUCTION"} />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        >
          <p>
            Digital Component Construction is completely aligned with how trades
            are used to
            <br />
            building onsite but with 1/4 the schedule
          </p>
        </motion.div>

        <div className="second-video-btn">
          <FirstButton title={"Learn More"} link={"/"} />
          {/* <SecondButton /> */}
          {/* <ThirdButton/> */}
        </div>
      </div>
    </div>
  );
}

export default HomePageSubHero;
