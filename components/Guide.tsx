"use client";
import React from "react";
import CarouselComponent from "./Carrousel";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Guide = () => {
  const data = [
    {
      id: 1,
      image: "/1975.jpeg",
      title: "1975",
      description:
        "A Modelação Sorocabana iniciou suas atividades em 1975, com o propósito de fabricar modelos de madeira e isopor para fundição.",
    },
    {
      id: 2,
      image: "/1984.jpeg",
      title: "1984",
      description:
        "A Modelação Sorocabana iniciou suas atividades em 1975, com o propósito de fabricar modelos de madeira e isopor para fundição.",
    },
    {
      id: 3,
      image: "/1993.jpeg",
      title: "1993",
      description:
        "Inicio a fabricação de moldes em alumínio (fundição própria).",
    },
    {
      id: 4,
      image: "/1999.JPG",
      title: "1999",
      description:
        "Inaugurou uma nova e moderna sede, onde esta instalada atualmente.",
    },
    {
      id: 5,
      image: "/producao.jpg",
      title: "2000",
      description:
        "Grandes investimentos na modernização de seus processos, passa a fornecer ferramentas de grande porte e protótipos rápidos. Conquistamos a Certificação com base na NBR ISO 9002:1994.",
    },
    {
      id: 6,
      image: "/engenharia.jpg",
      title: "2002",
      description:
        "Passa a oferecer a seus clientes o suporte de Engenharia simultânea. Através do trabalho sério e compromisso de toda sua equipe, conquistamos antecipadamente a sua re-certificação, desta vez conforme a NBR ISO 9001:2000.",
    },
    {
      id: 7,
      image: "/2004.jpeg",
      title: "2004",
      description:
        "Aquisição Centro de Usinagem High Speed Machine e de Controle de Qualidade Tridimensional.",
    },
    {
      id: 8,
      image: "/2006.jpeg",
      title: "2006",
      description: "Aquisição CNC – FV 3224 Feeler.",
    },
    {
      id: 9,
      image: "/2009.jpeg",
      title: "2009",
      description: "Ampliação e modernização do setor de Fundição.",
    },
    {
      id: 10,
      image: "/2010.jpeg",
      title: "2010",
      description: "Aquisição CNC 5 Eixos.",
    },
    {
      id: 11,
      image: "/logoantigo.jpeg",
      title: "2012",
      description: "Revitalização Logomarca Modelação Sorocabana.",
    },
  ];
  return (
    <section className="flexCenter flex-col bg-green-120">
      <div className="relative z-20 flex flex-1 flex-col p-10">
        <h1 className="bold-52 lg:bold-68 drop-shadow-2xl text-shadow-black">Desde 1975</h1>
        <h2 className="bold-52 lg:bold-68 text-shadow-black" >100% Brasileira</h2>
        <p className="sm:regular-20 regular-16 mt-6 text-gray-10 xl:max-w-[1200px] text-shadow-black">
          A Modelação Sorocabana iniciou suas atividades em 1975 e orgulha-se em
          ser uma empresa 100% brasileira, altamente especializada, moderna e
          pronta para enfrentar os desafios.Localizada em Sorocaba/SP, em uma
          área total de 6000m2, conta com modernas instalações e um parque
          industrial que concentra recursos tecnológicos de ultima geração,
          preparado para atender as necessidades de um mercado cada vez mais
          exigente e competitivo. Com mais de três décadas de historia,
          tornou-se uma empresa líder em seu mercado, sempre preocupada em
          oferecer aos seus clientes um alto padrão de qualidade e atendimento.
          Temos know-how para desenvolvimento de projetos e moldes ferramentais
          conforme desenhos ou amostras e também prestamos serviços de
          manutenção em moldes em geral, nos enquadrando nas políticas de
          terceirização/parceria, tanto na manutenção como no desenvolvimento de
          moldes e modelos. Tradicional fornecedor para indústria auto peças;
          máquinas operatrizes; ferramentas eletroeletrônicas; têxtil entre
          outros, oferecemos aos nossos clientes os melhores serviços, com
          qualidade, atendimento e rapidez no prazo de entrega. Com sede própria
          e contando com equipamentos de alta tecnologia, podemos executar todos
          e quaisquer tipos de modelos e moldes. Desenvolvemos todo o processo
          por aplicativos CAD/CAM.
        </p>
      </div>

      <div className="flexCenter max-container relative w-full">
        <CarouselComponent data={data} />

        {/* <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Guide;
