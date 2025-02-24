import React from "react";

const Footer = () => {
  return (
    <footer className="h-50 w-dvw bg-[#5F2BAA] flex flex-col justify-center items-center border-b-5 border-b-[#F97316] text-white">
      <div className="flex gap-2 items-center mb-5">
        <label>Um produto</label>
        <h1 className="text-white text-3xl font-extrabold"> LOGO</h1>
      </div>
      <p className="text-slate-400">
        Preencha agora o formulário acima e baixe o KIT!
      </p>
      <p className="text-slate-400">
        © 2025 Sua Empresa. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
