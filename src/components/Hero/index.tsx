import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Transformamos Idéias em Soluções Digitais sob Medida
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Na <strong>Plena Tecnologia</strong>, criamos softwares inovadores e eficientes para impulsionar o seu negócio. Seja um sistema web, aplicativo móvel ou plataforma personalizada, entregamos <strong>tecnologia de ponta</strong> com foco em <strong>performance</strong>, <strong>escalabilidade</strong> e <strong>experiência do usuário</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[-50px] top-[-80px] z-[-1] opacity-40 lg:opacity-90">
  <svg
    width="600"
    height="750"
    viewBox="0 0 500 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="350" cy="100" r="230" fill="url(#paint0_linear_custom)" />
    <circle cx="420" cy="200" r="22" fill="url(#paint1_radial_custom)" />
    <circle cx="380" cy="350" r="40" fill="url(#paint2_radial_custom)" />
    <circle
      cx="360"
      cy="420"
      r="190"
      transform="rotate(-25 360 420)"
      fill="url(#paint3_linear_custom)"
    />
    <circle
      opacity="0.7"
      cx="250"
      cy="400"
      r="140"
      transform="rotate(110 250 400)"
      stroke="url(#paint4_linear_custom)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_custom"
        x1="-60"
        y1="-180"
        x2="250"
        y2="300"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" />
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_custom"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(420 200) rotate(90) scale(22)"
      >
        <stop offset="0.2" stopColor="#4A6CF7" stopOpacity="0.3" />
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_custom"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(380 350) rotate(90) scale(40)"
      >
        <stop offset="0.1" stopColor="#4A6CF7" stopOpacity="0.5" />
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.2" />
      </radialGradient>
      <linearGradient
        id="paint3_linear_custom"
        x1="260"
        y1="-40"
        x2="330"
        y2="370"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" />
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_custom"
        x1="250"
        y1="250"
        x2="250"
        y2="550"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
</div>

<div className="absolute bottom-[-50px] left-[-60px] z-[-1] opacity-50 lg:opacity-100">
  <svg
    width="380"
    height="310"
    viewBox="0 0 380 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 90C50 80 130 75 200 120C260 170 280 180 310 190C340 200 380 210 410 230"
      stroke="url(#paint5_linear_custom)"
    />
    <path
      d="M-10 90C20 80 100 75 170 120C230 170 250 180 280 190C310 200 350 210 380 230"
      stroke="url(#paint6_linear_custom)"
    />
    <circle
      opacity="0.8"
      cx="280"
      cy="85"
      r="50"
      stroke="url(#paint7_linear_custom)"
    />
    <circle cx="290" cy="90" r="45" fill="url(#paint8_radial_custom)" />
    <defs>
      <linearGradient
        id="paint5_linear_custom"
        x1="190"
        y1="70"
        x2="190"
        y2="220"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" stopOpacity="0" />
        <stop offset="1" stopColor="#4A6CF7" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_custom"
        x1="160"
        y1="70"
        x2="160"
        y2="220"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" stopOpacity="0" />
        <stop offset="1" stopColor="#4A6CF7" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_custom"
        x1="280"
        y1="20"
        x2="280"
        y2="110"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A6CF7" />
        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient
        id="paint8_radial_custom"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(290 90) rotate(90) scale(45)"
      >
        <stop offset="0.2" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </radialGradient>
    </defs>
  </svg>
</div>


      </section>
    </>
  );
};

export default Hero;
