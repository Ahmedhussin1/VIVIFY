// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import "./Projects.scss";
// import GridCardsAnimation from "../../Components/Grid cards/GridCardsAnimation";
import project1 from '../../assets/interion-desing/office1.jpg';
import FifthButton from '../../Components/Buttons/Btn-5/FifthButton';
import './Projects.scss'
import { motion } from 'framer-motion';

// function Section({ children }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref}>
//       <span
//         style={{
//           transform: isInView ? "none" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//         }}
//       >
//         {children}
//       </span>
//     </section>
//   );
// }
// function Projects() {
//   return (
//       <div className="project-page-container">
//         <Section>
//           <GridCardsAnimation/>
//         </Section>
//         <Section>when</Section>
//         <Section>in</Section>
//         <Section>view!</Section>
//       </div>
//   );
// }

// export default Projects;

function Projects() {
  return (
    <div className="gallery-container-page">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="text-white text-center text-3xl"
      >
        Our Projects
      </motion.h1>
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="left-gallery-text"
        >
          <h1 className='text-white'>ONE STOP SHOP</h1>
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
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="right-gallery-img"
        >
          <img src={project1} />
        </motion.div>
      </div>
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

export default Projects