import Image from "next/image";

const Qualidade: React.FC = () => {
  return (
    <section className="bg-green-90 py-32">
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
            todos os colaboradores possam sentir-se motivados e engajados nessa
            busca constante pela melhoria contínua.
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
              empresa de forma a manter o contínuo desenvolvimento empresarial,
              reforçando a confiança dos Clientes, Colaboradores e Fornecedores.
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
  );
};

export default Qualidade;
