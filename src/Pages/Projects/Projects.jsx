// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import "./Projects.scss";
// import GridCardsAnimation from "../../Components/Grid cards/GridCardsAnimation";

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
    <div>Projects</div>
  )
}

export default Projects