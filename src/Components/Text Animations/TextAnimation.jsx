import "./TextAnimation.scss";
import { motion } from "framer-motion";
function TextAnimation({textData}) {
  const text = textData.split(" ");

  return (
    <div className="text-animation-container">
      {text.map((el, i) => (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i /5,
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
