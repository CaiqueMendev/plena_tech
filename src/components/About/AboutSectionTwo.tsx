import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="about-2 -mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/sobre2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/sobre2.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <SectionTitle
                title="Nosso Processo de Desenvolvimento"
                paragraph=""
                mb="44px"
              />
              <div className="mb-9">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Planejamento Estratégico
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Entendimento do negócio e definição dos requisitos.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Prototipação e Design
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Criação de wireframes e experiência do usuário.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Desenvolvimento Ágil
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Desenvolvimento incremental com testes contínuos.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Implantação e Evolução Contínua
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Entrega do software com suporte e atualizações.
                </p>
              </div>

              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default AboutSectionTwo;
