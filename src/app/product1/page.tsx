import Breadcrumb from "@/components/Common/Breadcrumb";
import ChatBot from "@/components/ChatBot";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page | Plena Tech",
  description: "Conte-nos os detalhes de sua Landing Page",
  // other metadata
};

const Product1 = () => {
  return (
    <>
      <Breadcrumb
        pageName="Landing Page"
        description="Use nossa IA de Atendimento em Desenvolvimento de Software para explicar sua idéia!"
      />

      <ChatBot />
    </>
  );
};

export default Product1;
