import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[20px] bg-green-120" />
      <footer className="flexCenter w-full bg-green-50 p-6">
        <div className="padding-container max-container flex w-full flex-col gap-6 bg-green-50">
          <div className="flex flex-col items-start w-full justify-center gap-[10%] md:flex-row">
            <Link href="/" className="">
              <Image
                src="/logo-modelacao.png"
                alt="logo"
                width={204}
                height={29}
              />
            </Link>
            <div className="text-gray-10 sm:mb-0 mb-4 sm:mt-0 mt-4">
              <p>Av. Itavuvu, nº 4.455 - CEP:18075-005 - Sorocaba/SP</p>
              <p>
                modelsor@modelacaosorocabana.com.br - Fone:+55 (15) 3226-4801 |
                3226-2942
              </p>
            </div>
            <div className="flex gap-8">
              <Image
                src="/isonovemileum.png"
                alt="logo"
                width={54}
                height={29}
              />
              <Image
                src="/cemporcentobrasil.png"
                alt="logo"
                width={54}
                height={29}
              />
            </div>
          </div>

          {/* <div className="border bg-green-120" />
          <p className="regular-14 w-full text-center text-gray-10">
            2023 Modelação Sorocabana | All rights reserved
          </p> */}
        </div>
      </footer>
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
