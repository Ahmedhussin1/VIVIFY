import "./TextAnimation.scss";
import { motion } from "framer-motion";
function TextAnimation({textData}) {
  const text = textData.split(" ");

  return (
    <div className="text-animation-container">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TextAnimation;

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";

// const TextAnimationComponent = ({ textData }) => {
//   const text = textData.split(" ");
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       setHasAnimated(true);
//     }
//   }, [inView, hasAnimated]);

//   return (
//     <div className="text-animation-container" ref={ref}>
//       {text.map((el, i) => (
//         <motion.span
//           key={i}
//           initial={{ opacity: 0 }}
//           animate={hasAnimated ? { opacity: 1 } : {}}
//           transition={{
//             duration: 0.2,
//             delay: hasAnimated ? i / 10 : 0,
//           }}
//         >
//           {el}{" "}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default TextAnimationComponent;
