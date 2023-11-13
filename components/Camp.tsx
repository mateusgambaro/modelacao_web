import Image from "next/image";
import CarouselImagesComponent from "./CarouselImages";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const data = [
  {
    id: 1,
    image: "/planta1.jpg",
  },
  {
    id: 2,
    image: "/planta2.jpg",
  },
  {
    id: 4,
    image: "/planta4.jpg",
  },
];

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div className={`h-full w-full overflow-x-hidden sm:ml-8 sm:mr-8 sm:rounded-2xl`}>
      <CarouselImagesComponent data={data} />
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative sm:mt-48 bg-green-120 flex flex-col py-10 lg:pb-28">
      <div className="hide-scrollbar flex h-full w-full items-start justify-start gap-8 overflow-x-auto ">
        <CampSite
          backgroundImage="/video-modelacao.mp4"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexCenter absolute z-10 top-0 left-0 mt-10 px-6 lg:mt-10 w-full">
        <div className="bg-green-50 p-8 lg:max-w-[1300px] xl:max-w-[504px]xl:px-16 relative w-full overflow-hidden sm:rounded-l-3xl rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white text-center">
            <strong>Soluções Completas</strong>
          </h2>
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-10">
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Usinagem CNC 5 Eixos
            </p>
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Fundição de Alumínio{" "}
            </p>
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Digitalização / Engenharia Reversa
            </p>
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Usinagem CNC High Speed
            </p>
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Protótipos Funcionais
            </p>{" "}
            <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
              Desenvolvimento de Projetos{" "}
            </p>
          </div>

          <Image
            src="/industry.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
