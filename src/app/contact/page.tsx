import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Plena Tech",
  description: "Solicite seu orçamento para transformar sua idéia em uma solução.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contato"
        description="Adoramos conversar sobre tecnologia e inovação! Fale com a nossa equipe para tirar dúvidas, solicitar um orçamento ou entender como podemos transformar suas ideias em realidade. Estamos esperando seu contato!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
