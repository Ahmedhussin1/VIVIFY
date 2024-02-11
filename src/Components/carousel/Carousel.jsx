import { useState } from "react";
import { motion } from "framer-motion";
import desing1 from "../../assets/interion-desing/design-1.jpg";
import desing2 from "../../assets/interion-desing/design-2.jpg";
import desing3 from "../../assets/interion-desing/desing-3.jpg";
import FirstButton from "../Buttons/Btn-1/FirstButton";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [desing1, desing2, desing3,desing1,desing3];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen">
      <div className="mb-[20px] text-center">
        <h1 className="text-white text-[70px] font-[700]">LIMITLESS DESIGN</h1>
        <p className="text-white text-[20px] font-[400]">YOU DREAM IT. WE DELIVER IT.</p>
      </div>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] mt-[50px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex mt-[500px] flex-row gap-3">
        <button
          className="text-white rounded-md py-2 px-4"
          onClick={handleBack}
        >
          <FirstButton title={"Back"} />
        </button>
        <button
          className="text-white rounded-md py-2 px-4"
          onClick={handleNext}
        >
          <FirstButton title={"Next"} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
