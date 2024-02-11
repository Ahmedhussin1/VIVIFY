import "./Home.scss";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
// importing assets
import firstSectionVid from '../../assets/1692104934-3-hcd-2023-sequence-01.mp4'
import secondSectionVid from '../../assets/1658166620-sequence-01_3.mp4'
import thirdSectionImg from '../../assets/third-section-img.webp'
import teamImg from '../../assets/team-img.jpg'
import boxIcon from '../../assets/Icons/box.png'
import cloud from '../../assets/Icons/cloud.png'
import company from '../../assets/Icons/company.png'
import leave from '../../assets/Icons/leave.png'
import recycle from "../../assets/Icons/recycle.png";
import secondTruck from '../../assets/Icons/secondTruck.png'
// import truck from '../../assets/Icons/truck.png'
// importing components
import TextAnimation from "../../Components/Text Animations/TextAnimation";
import FirstButton from "../../Components/Buttons/Btn-1/FirstButton";
import ImageSlider from "../../Components/carousel/Carousel";
import LinkButton from "../../Components/Buttons/Btn-4/LinkButton";
import { useRef } from "react";

function Home() {
  
  return (
    <motion.div className="home-page-container">
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
            <p>
              Powered by Echo technology,
              <br /> we use proven construction methods to build beautiful,
              <br /> high-performing + cost-effective environments.
            </p>
          </motion.div>
        </div>
      </div>
      {/* second video */}
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
              Digital Component Construction is completely aligned with how
              trades are used to
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
      {/* third section */}
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
              Living in a modern home is no longer about someday, it’s
              accessible now. Connect Homes offers curated design options with
              the efficiency of modern prefab house manufacturing. If you’re
              seeking lots of natural light, open-concept floor plans and a
              stress-free build process, you’ve come to the right place.
            </p>
          </motion.div>
        </div>
        <div className="third-section-right-container">
          <img src={thirdSectionImg} />
        </div>
      </div>
      {/* team section*/}
      <div className="team-section-container">
        <img src={teamImg} alt="" />
        <div className="team-section-overlay-text">
          <TextAnimation
            textData={"BRANCHES  \n PROVIDE \n END-TO-END \n SERVICE"}
          />
          <p>
            105+ Factory Direct Branches provide complete service including
            pre-construction,
            <br />
            submittals + project management.
          </p>
          <div className="team-section-btn">
            <FirstButton title={"Learn More"} link={"/"} />
            {/* <SecondButton /> */}
            {/* <ThirdButton/> */}
          </div>
        </div>
      </div>
      {/* sustainability section */}
      <div className="sustainability-section-container">
        <div className="left-sustainability-section-container">
          <h1>
            SUSTAINABILITY
            <br /> IS AT THE CORE
            <br /> OF EVERYTHING
            <br /> WE DO
          </h1>
          <p>
            Digital Component Construction uses less material, reduces emissions
            in manufacturing + freight + virtually eliminates waste onsite.
            Digital components are designed for disassembly, so wall systems can
            be easily reconfigured onsite or recycled at the end of the
            lifecycle.
          </p>
          <FirstButton title={"Learn More"} link={"/"} />
        </div>
        
        <div className="right-sustainability-section-container">
          <div className="first-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={boxIcon} />
              <p>Connected Design</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={cloud} />
              <p>Smaller Footprint</p>
            </div>
          </div>

          <div className="second-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={company} />
              <p>Reduced Freight</p>
            </div>
            <div className="sustainability-icon-container">
              <img src="../../assets/Icons/1622589215-reduce-waste-onsite-85-2.png" />
              <p>Fewer Materials</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={leave} />
              <p>Reduced Waste Onsite</p>
            </div>
          </div>

          <div className="third-sustainability-row">
            <div className="sustainability-icon-container">
              <img src={recycle} />
              <p>Designed For Disassembly</p>
            </div>
            <div className="sustainability-icon-container">
              <img src={secondTruck} />
              <p>Recyclable Materials</p>
            </div>
          </div>
        </div>
      </div>
      {/* carrousel section */}
      <div className="carousel-section-container">
        {/* <div className="carousel-title">
            <h1>LIMITLESS DESIGN</h1>
            <p>YOU DREAM IT. WE DELIVER IT.</p>
        </div> */}
        <ImageSlider />
      </div>

      {/* contact us section */}
      <hr className="border-none bg-white h-px w-1/2 mx-auto my-4" />
      <div className="contact-banner-container">
        <div className="left-contact-banner-container">
          <div className="left-contact-banner-desc">
            <p>Find your friendly neighborhood Branch.</p>
          </div>
          <div className="left-contact-banner-title">
            <h1>CONTACT US NOW</h1>
          </div>
          <div className="left-contact-banner-btn">
            <LinkButton title={"GET IN TOUCH"} link={"/contact"} />
          </div>
        </div>
        <div className="right-contact-banner-container">
          <p>
            Contact your Falkbuilt Factory-direct Branch for unparalleled
            end-to-end service including pre-construction, project management,
            order entry, building permit submittals and installation. We’re
            looking forward to bringing the power of Digital Component
            Construction to your project.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
