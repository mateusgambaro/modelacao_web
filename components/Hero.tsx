import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToCamp: () => void;
}
const Hero: React.FC<HeroProps> = ({ scrollToCamp }) => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        >
          <h1 className="bold-52 lg:bold-88 xl:max-w-[500px]">
            Tecnologia Em Moldes
          </h1>
          <p className="regular-16 mt-6 text-gray-10 xl:max-w-[500px]">
            Atuamos no ramo de moldes para fundição em madeira, alumínio, aço,
            isopor, araldite, modelo padrão, modelos copiadores, ferramentas
            para injeção de poliestireno expandido, placas para shell-molding,
            coquilhas, moldes PU, moldes para borracha, vacum forming,
            protótipos, dispositivos para controle e lotes pilotos de peças.
          </p>

          <div className="flex flex-col w-full mt-10 sm:flex-row">
            <Button
              type="button"
              title="SAIBA MAIS"
              variant="btn_green"
              onClick={scrollToCamp}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
