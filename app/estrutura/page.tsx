"use client";

import CarouselImagesComponent from "@/components/CarouselImages";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion } from "framer-motion";
import StructureCard from "@/components/StructureCard";

const Estrutura: React.FC = () => {
  return (
    <>
      <section className="bg-green-90">
        <div className="pt-36">
          <StructureCard
            image="/producao.jpg"
            title="Produção"
            description="Seu layout foi cuidadosamente planejado, assegurando à
        racionalização do processo produtivo, a organização, a
        segurança do ambiente de trabalho e o comprometimento com o
        cliente. Dentro de uma política de constante investimento, a
        Modelação Sorocabana conta com fundição em alumínio
        especializada em moldes, máquinas de usinagem de alta
        tecnologia, como CNC 05 Eixos, CNC High Speed Machine, CNC
        Grande Porte (3200 x 2400 x 800) e ferramentais de última
        geração desenvolvida especialmente para moldes. A Modelação
        Sorocabana oferece soluções completas para fabricação de
        moldes ferramentais e dispositivos de alta confiabilidade."
          />
        </div>

        <StructureCard
          image="/engenharia.jpg"
          title="Engenharia"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />
        <StructureCard
          image="/engenharia.jpg"
          title="Usinagem"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />
        <StructureCard
          image="/engenharia.jpg"
          title="Fundição"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />
        <StructureCard
          image="/engenharia.jpg"
          title="Acabamento"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />
        <StructureCard
          image="/engenharia.jpg"
          title="Montagem"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />

        <StructureCard
          image="/engenharia.jpg"
          title="Modelação"
          description="Contamos com um Depto. de Engenharia composta por profissionais
          altamente capacitados para o desenvolvimento de projetos, tendo
          a seu dispor tecnologia de digitalização, engenharia reversa e
          fabricação de protótipos funcionais em ABS. Seu sistema de
          gestão da qualidade assegura que as atividades de projeto são
          desenvolvidas obedecendo padrões de qualidade internacionalmente
          reconhecidos."
        />
      </section>

     
    </>
  );
};

export default Estrutura;
