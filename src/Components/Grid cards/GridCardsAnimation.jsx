import { motion } from "framer-motion";

const GridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};
const GridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
function GridCardsAnimation() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden pt-[50px]">
      <motion.section
        variants={GridContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* fist square */}
        <motion.div
          variants={GridSquareVariants}
          whileHover={{scale:1.05}}
          transition={{ease:'easeInOut',}}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex flex-col items-center gap-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-wider text-white">
              <a href={"/"}>VIVIFY.</a>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          >
            <p className="text-white text-[20px] font-[400]">
              YOU DREAM IT. WE DELIVER IT.
            </p>
          </motion.div>
        </motion.div>
        {/* second square */}
        <motion.div
          variants={GridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        {/* third square */}
        <motion.div
          variants={GridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        {/* fourth square */}
        <motion.div
          variants={GridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        {/* fifth square */}
        <motion.div
          variants={GridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        {/* six square */}
        <motion.div
          variants={GridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>

      </motion.section>
    </div>
  );
}

export default GridCardsAnimation;
