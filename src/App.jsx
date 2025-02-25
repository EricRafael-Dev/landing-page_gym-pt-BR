import React, { useRef } from "react";
import Forms from "./components/forms";
import { CheckCircle } from "lucide-react";

const App = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    console.log(sectionRef)
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="relative w-dvw bg-[#5F2BAA] border-t-5 border-[#F97316]">
      <img
        className="absolute w-dvw h-[40dvh] top-0 object-cover"
        src="https://img.freepik.com/fotos-premium/composicao-da-parte-inferior-de-pessoas-na-academia-correndo-na-esteira-com-fundo-laranja_1134-9081.jpg"
        alt=""
      />
      <div className="h-[40dvh] w-full bg-linear-to-tl from-[#5F2BAA] from-10% to-white/0 to-70% absolute top-0"></div>
      <div className="h-[40dvh] w-full bg-linear-to-tr from-[#5F2BAA] from-10% to-white/0 to-70% absolute top-0"></div>
      <div className="h-[40dvh] w-full bg-linear-to-t from-[#5F2BAA] from-5% to-white/0 to-30% absolute top-0"></div>

      {/* Content Top */}
      <div className="text-white flex flex-col justify-center text-center items-center gap-5 p-10">
        <h1 className="text-4xl font-bold uppercase z-1">
          Kit pra derrotar a sazonalidade nas academias
        </h1>
        <p className=" z-1">
          Dicas e ferramentas para sua academia, estúdio ou box LUCRAR mesmo no
          período de baixa.
        </p>
        <button
          onClick={scrollToSection}
          className="uppercase bg-[#F97316] w-[160px] h-[40px] rounded-lg z-1"
        >
          Baixe agora!
        </button>
      </div>
      {/* Middle Content */}
      <div className="relative w-dvw h-full bg-white rounded-t-2xl p-7 inset-shadow-sm inset-shadow-[#F97316]">
        <div className="flex flex-col gap-5">
          <p>
            O frio e as férias de meio de ano estão chegando, e se você ainda
            não começou a preparar sua academia para isso, é bom correr!
          </p>
          <h2 className="font-semibold text-2xl">Você não está sozinho!</h2>
          <p>
            Preparamos um Kit completo para te ajudar a não deixar o movimento
            diminuir no seu negócio e ainda conseguir{" "}
            <strong className="text-[#F97316]">LUCRAR </strong>
            mais neste período.
          </p>

          <ul className="flex flex-col [&_li]:flex [&_li]:items-center [&_li]:gap-3">
            <li>
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#6366F1]" />
              Aprender ações práticas para manter o movimento na academia nos
              períodos de baixa;
            </li>
            <li>
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#6366F1]" />
              Ter condições de executar campanhas bem estruturadas;
            </li>
            <li>
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#6366F1]" />
              Descobrir que é possível lucrar nas épocas mais difíceis do ano;
            </li>
            <li>
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#6366F1]" />e
              muito mais!
            </li>
          </ul>
          <div className="text-2xl font-semibold">
            <h2 className="text-[#F97316] ">Preencha agora o formulário</h2>
            <p>a seguir e baixe o KIT!</p>
          </div>
          <Forms sectionRef={sectionRef}/>
        </div>
      </div>
    </div>
  );
};

export default App;
