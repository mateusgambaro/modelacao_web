import { motion } from "framer-motion";
import Image from "next/image";

const StructureCard: React.FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col px-4 sm:px-0 pb-32 md:gap-28 xl:flex-row justify-center items-center sm:w-full  ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      >
        <div className="z-20 flex flex-1 items-center flex-col sm:flex-row px-6 sm:px-12 gap-16 py-20 bg-green-120 rounded-3xl shadow-2xl shadow-current z-10000">
          <div className="rounded-3xl sm:w-[600px]">
            <Image
              src={image}
              alt={title}
              width={600}
              height={500}
              style={{ borderRadius: "10px" }}
            />
          </div>

          <div className="flex flex-1 items-center flex-col">
            <h1 className="bold-52 lg:bold-88 xl:max-w-[600px]">{title} </h1>
            <p className="regular-18 mt-6 text-gray-10 xl:max-w-[500px]">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StructureCard;
