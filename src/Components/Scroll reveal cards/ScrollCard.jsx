import { motion } from "framer-motion";
import "./ScrollCardStyle.scss";
function Card({ title, img, index }) {
  return (
    <div className="scroll-cards-container">
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 600 : -600,
        }}
        whileInView={{
          opacity: 1,
          x: index % 2 === 0 ? 300 : -300, // Slide in to its original position
          transition: {
            duration: 2, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <img src={img}/>
        <p className="card-text">{title}</p>
      </motion.div>
      
    </div>
  );
}

export default Card;
