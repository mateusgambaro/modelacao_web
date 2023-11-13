"use client";

import CarouselImagesComponent from "@/components/CarouselImages";
import Hero from "@/components/Hero";
import Image from "next/image";
import { motion } from "framer-motion";

const Estrutura: React.FC = () => {
 
  return (
    <>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('/producao.jpg')",
        }}
      >
        <div className="flex flex-col py-10 px-4 sm:px-0 pb-32 md:gap-28 lg:py-20 xl:flex-row sm:w-[600px] ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
          >
            <div className="z-20 flex flex-1 items-center px-12 py-10 flex-col bg-green-120 rounded-3xl sm:rounded-l-none sm:rounded-r-3xl">
              <h1 className="bold-52 lg:bold-88 xl:max-w-[500px]">Produção </h1>
              <p className="regular-18 mt-6 text-gray-10 xl:max-w-[500px]">
                Seu layout foi cuidadosamente planejado, assegurando à
                racionalização do processo produtivo, a organização, a segurança
                do ambiente de trabalho e o comprometimento com o cliente.
                Dentro de uma política de constante investimento, a Modelação
                Sorocabana conta com fundição em alumínio especializada em
                moldes, máquinas de usinagem de alta tecnologia, como CNC 05
                Eixos, CNC High Speed Machine, CNC Grande Porte (3200 x 2400 x
                800) e ferramentais de última geração desenvolvida especialmente
                para moldes. A Modelação Sorocabana oferece soluções completas
                para fabricação de moldes ferramentais e dispositivos de alta
                confiabilidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="h-[20px] bg-green-120" />

      <section
        className="bg-cover bg-center sm:h-[650px]"
        style={{
          backgroundImage: "url('/engenharia.jpg')",
        }}
      >
        <div className="sm:flex sm:justify-end">
          <div className="flex flex-col py-10 px-4 sm:px-0 pb-32 md:gap-28 lg:py-20 xl:flex-row sm:w-[600px] ">
            <div className="z-20 flex flex-1 items-center px-4 py-10 flex-col bg-green-120 rounded-3xl sm:rounded-r-none sm:rounded-l-3xl">
              <h1 className="bold-52 lg:bold-88 xl:max-w-[500px]">
                Engenharia{" "}
              </h1>
              <p className="regular-18 mt-6 text-gray-10 xl:max-w-[500px]">
                Contamos com um Depto. de Engenharia composta por profissionais
                altamente capacitados para o desenvolvimento de projetos, tendo
                a seu dispor tecnologia de digitalização, engenharia reversa e
                fabricação de protótipos funcionais em ABS. Seu sistema de
                gestão da qualidade assegura que as atividades de projeto são
                desenvolvidas obedecendo padrões de qualidade internacionalmente
                reconhecidos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[20px] bg-green-120" />

      <section className="bg-green-90">
        <div className="flex-col sm:flex">
          <div className="z-20 flex flex-1 items-start px-6 sm:px-16 py-10 flex-col">
            <h1 className="bold-52 lg:bold-88 ">Qualidade </h1>
            <p className="regular-16 mt-6 text-gray-10 ">
              A Modelação Sorocabana possui um Sistema de Gestão da Qualidade
              certificado de acordo com a NBR ISO 9001:2008. O processo de
              implementação do sistema se iniciou em 1999, sendo que a primeira
              certificação ocorreu em Agosto de 2000.
            </p>
            <p className="regular-16 mt-6 text-gray-10 ">
              Sendo uma empresa que investe continuamente na atualização
              tecnológica, o principal objetivo de nosso Sistema de Gestão da
              Qualidade é aumentar cada vez mais a satisfação de nossos
              Clientes.Para tanto, a Modelação Sorocabana, através de sua Alta
              Direção, não poupa esforços para a manutenção de um ambiente onde
              todos os colaboradores possam sentir-se motivados e engajados
              nessa busca constante pela melhoria contínua.
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:pr-10 pb-16">
            <div className="z-20 flex flex-1 items-start px-6 sm:px-16 py-10 flex-col">
              <h1 className="bold-52 lg:bold-28 ">Política de qualidade </h1>
              <p className="regular-16 mt-6 text-gray-10 ">
                Atender plenamente as necessidades dos Clientes superando suas
                expectativas, através de soluções técnicas e aprimoramentos
                constantes; consolidando-se como empresa líder em qualidade e
                desempenho.Investir continuamente na atualização tecnológica da
                empresa de forma a manter o contínuo desenvolvimento
                empresarial, reforçando a confiança dos Clientes, Colaboradores
                e Fornecedores.
              </p>
              <p className="regular-16 mt-6 text-gray-10 ">
                Envolver todos os colaboradores na busca de melhorias e
                aperfeiçoamentos da qualidade de produtos e otimização de
                processos, desenvolvendo o espírito de disciplina, respeito e
                colaboração para com as metas da qualidade.
              </p>
            </div>
            <div className="sm:mt-10 cursor-pointer">
              <a href="/certificado_01.pdf" download>
                <Image
                  src="/certifcs.png"
                  alt="certificado"
                  width={180}
                  height={100}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estrutura;
