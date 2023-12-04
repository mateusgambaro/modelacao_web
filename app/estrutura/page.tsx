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
          image="/usinagem.jpeg"
          title="Usinagem"
          description="A área de usinagem na Modelação Sorocabana representa a vanguarda da precisão e tecnologia. Equipada com máquinas de última geração, incluindo CNC 05 Eixos, CNC High Speed Machine e CNC Grande Porte (3200 x 2400 x 800), nossa equipe altamente qualificada realiza a usinagem de moldes com uma precisão incomparável. Cada peça é meticulosamente trabalhada para garantir não apenas a perfeição dimensional, mas também a eficiência no processo produtivo. Investimos constantemente em tecnologia para oferecer soluções inovadoras e manter o mais alto padrão de qualidade em nossos produtos."
        />
        <StructureCard
          image="/fundicao.jpeg"
          title="Fundição"
          description="Na Modelação Sorocabana, a fundição é uma arte dominada pela excelência. Contamos com uma fundição em alumínio especializada em moldes, onde a fusão de experiência e tecnologia resulta em moldes de alta qualidade. Nossos fundidores são especialistas em diversos materiais, incluindo madeira, alumínio, aço, isopor, araldite e outros. Com ferramentais de última geração desenvolvidos especialmente para moldes, garantimos a consistência e a precisão em cada fundição. Nosso compromisso é fornecer soluções completas e confiáveis para atender às demandas específicas de nossos clientes."
        />
        <StructureCard
          image="/acabamento.jpeg"
          title="Acabamento"
          description="A excelência não termina na moldagem e usinagem; ela se estende até a fase de acabamento na Modelação Sorocabana. Cada detalhe é refinado com maestria, proporcionando não apenas uma estética impecável, mas também funcionalidade superior. Nosso processo de acabamento abrange técnicas especializadas para diferentes materiais, assegurando uma superfície final de alta qualidade em moldes de madeira, alumínio, aço, entre outros. Valorizamos a estética tanto quanto a funcionalidade, garantindo que cada molde atenda não apenas às especificações técnicas, mas também às expectativas visuais e táteis."
        />
        <StructureCard
          image="/montagem.jpeg"
          title="Montagem"
          description="A montagem na Modelação Sorocabana é a convergência habilidosa de peças individuais em um conjunto coeso e funcional. Com precisão milimétrica, nossa equipe realiza a montagem de moldes, dispositivos e ferramentais, assegurando que cada componente se encaixe perfeitamente. A organização meticulosa e o comprometimento com a excelência são evidentes em cada etapa do processo de montagem. Nossa abordagem minuciosa garante a confiabilidade e durabilidade dos produtos, resultando em soluções completas que superam as expectativas de nossos clientes."
        />

        <StructureCard
          image="/modelacao.jpeg"
          title="Modelação"
          description="Na Modelação Sorocabana, a arte da modelação transcende a simples criação de formas. Contando com um Departamento de Engenharia composto por profissionais altamente capacitados, utilizamos tecnologias de digitalização, engenharia reversa e fabricação de protótipos funcionais em ABS para transformar conceitos em realidade. Nosso sistema de gestão da qualidade assegura que cada projeto atenda aos mais rigorosos padrões internacionais. Somos especialistas na modelação de moldes, dispositivos e peças prototipadas, oferecendo soluções inovadoras e confiáveis para os desafios mais complexos."
        />
      </section>
    </>
  );
};

export default Estrutura;
