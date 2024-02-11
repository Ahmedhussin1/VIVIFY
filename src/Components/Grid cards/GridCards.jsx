import './GridCards.scss'
import desing1 from '../../assets/interion-desing/design-1.jpg'
import desing2 from '../../assets/interion-desing/design-2.jpg'
import desing3 from '../../assets/interion-desing/desing-3.jpg'

import { motion } from 'framer-motion'
function GridCards() {
  return (
    <motion.div
      className="grid-cards-container"
    >
      <div className="cards">
        <div className="card red">
          <img src={desing1} />
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
          <img src={desing2} />
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <img src={desing3} />
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
      </div>
    </motion.div>
  );
}

export default GridCards