import project1 from "../../assets/interion-desing/office1.jpg";
import FifthButton from "../../Components/Buttons/Btn-5/FifthButton";
import Horizontal from "../../Components/Horizontal Scroll/Horizontal";
import line from "../../assets/banners/4.png";
import ProjectData from "./ProjectData";
import "./Projects.scss";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="gallery-container-page">
      {/* hero section img */}
      <div className="flex justify-center">
        <img src={line} />
      </div>

      {/* horizontal scroll section */}
      <div className="mt-[100px]">
        <Horizontal />
      </div>

      {/* title section */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="text-white text-center text-3xl"
      >
        Our Projects
      </motion.h1>
      {/* rendered projects section */}
      {ProjectData.map((project) => (
        <div key={project.id}>
          <h1 className="text-white">{project.name}</h1>
          <p className="text-white">{project.longDesc}</p>
          <FifthButton link={`/projects/${project.id}`} title={"Read More"} />
        </div>
      ))}
      {/* first project container */}
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="left-gallery-text"
        >
          <h1 className="text-white">ONE STOP SHOP</h1>
          <p>
            When the Falkbuilt San Diego Branch started talking with Genuine
            McCarthy Enterprises about renovating their Newport Beach space, the
            construction company was primarily interested in hearing about glass
            fronts for offices. But in no time, McCarthy realized Digital
            Component Construction could do much more for them, their schedule,
            and their space. From a custom timber ceiling and stunning millwork
            to a Zero Gravity wall and another emblazoned with a vintage
            corporate photo, McCarthy is thrilled with the result.
          </p>
          <p>
            It just all worked that they were able to help us with so many
            different solutions and that which made it easier to procure
            everything and just kind of ‘one stop shop’ it all,” says Julie
            Gillespie of Genuine McCarthy Enterprises, Inc. “We were able to tie
            everything in together and match and coordinate the design elements
            because it was all in-house.” With Echo technology’s engineering
            accurate model in the cloud, McCarthy was able to experience their
            space before it was built, check out the finishes and make
            live-linked design changes
          </p>
          <FifthButton title={"Learn More"} />
        </motion.div>
        {/* horizontal scroll section */}
        {/* second Project */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="right-gallery-img"
        >
          <img src={project1} />
        </motion.div>
      </div>
      {/* second project container */}
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="left-gallery-text"
        >
          <p>
            When the Falkbuilt San Diego Branch started talking with Genuine
            McCarthy Enterprises about renovating their Newport Beach space, the
            construction company was primarily interested in hearing about glass
            fronts for offices. But in no time, McCarthy realized Digital
            Component Construction could do much more for them, their schedule,
            and their space. From a custom timber ceiling and stunning millwork
            to a Zero Gravity wall and another emblazoned with a vintage
            corporate photo, McCarthy is thrilled with the result.
          </p>
          <p>
            It just all worked that they were able to help us with so many
            different solutions and that which made it easier to procure
            everything and just kind of ‘one stop shop’ it all,” says Julie
            Gillespie of Genuine McCarthy Enterprises, Inc. “We were able to tie
            everything in together and match and coordinate the design elements
            because it was all in-house.” With Echo technology’s engineering
            accurate model in the cloud, McCarthy was able to experience their
            space before it was built, check out the finishes and make
            live-linked design changes
          </p>
          <FifthButton title={"Learn More"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="right-gallery-img"
        >
          <img src={project1} />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
