import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | Plena Tech",
  description: "Conheça mais sobre a Plena Tech",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nós"
        description="Nosso propósito é simplificar a tecnologia e aproximar soluções digitais de empresas que buscam crescimento. Criamos softwares intuitivos, personalizados e escaláveis para que você foque no que realmente importa: seu negócio. Junte-se a nós e transforme sua visão em realidade!"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
