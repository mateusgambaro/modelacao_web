import Image from "next/image";
import CarouselImagesComponent from "./CarouselImages";
import { useState } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const data = [
  {
    id: 1,
    title: "Usinagem CNC 5 Eixos",
    image: "/molde.jpeg",
  },
  {
    id: 2,
    title: "Fundição de Alumínio",
    image: "/molde.jpeg",
  },
  {
    id: 3,
    title: "Digitalização / Engenharia Reversa",
    image: "/molde.jpeg",
  },
  {
    id: 4,
    title: "Usinagem CNC High Speed",
    image: "/highspeed.jpeg",
  },
  {
    id: 5,
    title: "Protótipos Funcionais",
    image: "/prototipos.jpeg",
  },
  {
    id: 6,
    title: "Desenvolvimento de Projetos",
    image: "/molde.jpeg",
  },
];


const Camp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="2xl:max-container relative sm:flex-row bg-green-120 flex flex-col py-32 lg:pb-28">
      <div className="hide-scrollbar flex h-full w-full sm:ml-10 items-start justify-start gap-8 overflow-x-auto ">
        <div
          className={`h-[600px] w-[500px] pl-4 pr-4 sm:pl-0 sm:pr-0 overflow-x-hidden overflow-y-hidden sm:ml-8 sm:mr-8 sm:rounded-2xl`}
        >
          <CarouselImagesComponent
            data={data}
            onSlideChange={handleSlideChange}
          />
        </div>
      </div>

      <div className="flexCenter z-10 sm:top-24 -mt-16 sm:mt-0 left-0 px-6 w-full">
        <div className="bg-green-50 p-8 lg:max-w-[1300px] xl:w-[784px] relative w-full overflow-hidden sm:rounded-l-3xl rounded-3xl">
          <h2 className="regular-24 md:regular-64 capitalize text-white text-center">
            <strong>Soluções Completas</strong>
          </h2>
          <div className="flex flex-wrap mt-4 flex-col sm:gap-4">
            {data.map((item, index) => (
              <p
                key={item.id}
                className={` text-start mt-5 text-white pl-10 ${
                  currentSlide === index ? "bold-32" : "regular-20"
                }`}
              >
                {item.title}
              </p>
            ))}
            {/* <p className="regular-14 xl:regular-18 text-center font-bold mt-5 text-white">
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
            </p> */}
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
