import TextAnimation from "../../../Components/Text Animations/TextAnimation";
import { motion } from "framer-motion";
import thirdSectionImg from "../../../assets/third-section-img.webp";
import "./HomePageThirdSection.scss";
function HomePageThirdSection() {
  return (
    <div className="third-section-container">
      <div className="third-section-left-container">
        <TextAnimation textData={"SOMEDAY IS NOW."} />
        {/* <h1>SOMEDAY IS NOW.</h1> */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
        >
          <p>
            Living in a modern home is no longer about someday, it’s accessible
            now. Connect Homes offers curated design options with the efficiency
            of modern prefab house manufacturing. If you’re seeking lots of
            natural light, open-concept floor plans and a stress-free build
            process, you’ve come to the right place.
          </p>
        </motion.div>
      </div>
      <div className="third-section-right-container">
        <img src={thirdSectionImg} />
      </div>
    </div>
  );
}

export default HomePageThirdSection;
