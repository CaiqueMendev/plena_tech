"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Soluções para Todos os Níveis"
          paragraph="Nossos serviços foram criados para atender empresas de diferentes portes. Escolha a opção que melhor se encaixa no seu negócio e comece hoje mesmo!"
          center
          width="680px"
        />
        {isMobile ? (
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="pricing-slider"
        >
          <SwiperSlide>
            <PricingBox
              packageName="One Page Profissional"
              subtitle="Profissionais, pequenos negócios e lançamentos de produtos."
            >
              <OfferList text="Site único e impactante" status="active" />
              <OfferList text="Design profissional e responsivo" status="active" />
              <OfferList text="Otimização para SEO e velocidade" status="active" />
              <OfferList text="Integração com redes sociais" status="active" />
              <OfferList text="Entrega rápida" status="active" />
            </PricingBox>
          </SwiperSlide>

          <SwiperSlide>
            <PricingBox
              packageName="Website Empresarial"
              subtitle="Empresas que precisam de um site estruturado para fortalecer a marca."
            >
              <OfferList text="Site multi-página" status="active" />
              <OfferList text="Painel administrativo" status="active" />
              <OfferList text="Gerenciador de conteúdo" status="active" />
              <OfferList text="Otimização para SEO e Google Analytics" status="active" />
              <OfferList text="Integrações personalizadas" status="active" />
            </PricingBox>
          </SwiperSlide>

          <SwiperSlide>
            <PricingBox
              packageName="Software Essencial"
              subtitle="Pequenas empresas que precisam de automação de processos."
            >
              <OfferList text="Sistema web funcional e personalizado para demandas específicas" status="active" />
              <OfferList text="Login de usuários e painel administrativo" status="active" />
              <OfferList text="Banco de dados e CRUD (criação, leitura, atualização e exclusão)" status="active" />
              <OfferList text="Integração com APIs básicas" status="active" />
              <OfferList text="Ambiente seguro e escalável" status="active" />
            </PricingBox>
          </SwiperSlide>

          <SwiperSlide>
            <PricingBox
              packageName="Software Avançado"
              subtitle="Empresas que precisam de sistemas de alto desempenho e escalabilidade."
            >
              <OfferList text="Desenvolvimento de software robusto e escalável" status="active" />
              <OfferList text="Integração com sistemas terceiros (ERP, CRM, pagamentos, etc..)" status="active" />
              <OfferList text="Inteligência Artificial, BI e automação de processos" status="active" />
              <OfferList text="Infraestrutura em nuvem" status="active" />
              <OfferList text="Suporte e manutenção contínuos" status="active" />
            </PricingBox>
          </SwiperSlide>
        </Swiper>
        ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          
          <PricingBox
            packageName="One Page Profissional"
            subtitle="Profissionais, pequenos negócios e lançamentos de produtos."
          >
            <OfferList text="Site único e impactante" status="active" />
            <OfferList text="Design profissional e responsivo" status="active" />
            <OfferList text="Otimização para SEO e velocidade" status="active" />
            <OfferList text="Integração com redes sociais" status="active" />
            <OfferList text="Entrega rápida" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Website Empresarial"
            subtitle="Empresas que precisam de um site estruturado para fortalecer a marca."
          >
            <OfferList text="Site multi-página" status="active" />
            <OfferList text="Painel administrativo" status="active" />
            <OfferList text="Gerenciador de conteúdo" status="active" />
            <OfferList text="Otimização para SEO e Google Analytics" status="active" />
            <OfferList text="Integrações personalizadas" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Software Essencial"
            subtitle="Pequenas empresas que precisam de automação de processos."
          >
            <OfferList text="Sistema web funcional e personalizado para demandas específicas" status="active" />
            <OfferList text="Login de usuários e painel administrativo" status="active" />
            <OfferList text="Banco de dados e CRUD (criação, leitura, atualização e exclusão)" status="active" />
            <OfferList text="Integração com APIs básicas" status="active" />
            <OfferList text="Ambiente seguro e escalável" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Software Avançado"
            subtitle="Empresas que precisam de sistemas de alto desempenho e escalabilidade."
          >
            <OfferList text="Desenvolvimento de software robusto e escalável" status="active" />
            <OfferList text="Integração com sistemas terceiros (ERP, CRM, pagamentos, etc..)" status="active" />
            <OfferList text="Inteligência Artificial, BI e automação de processos" status="active" />
            <OfferList text="Infraestrutura em nuvem" status="active" />
            <OfferList text="Suporte e manutenção contínuos" status="active" />
          </PricingBox>

        </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
