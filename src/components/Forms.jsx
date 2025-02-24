import React from "react";

const Forms = () => {
  return (
    <div className="border-3 border-[#F97316] bg-[#5F2BAA] rounded-xl mb-4">
      <div className="p-8 text-center">
        <h2 className="text-white font-normal text-2xl">
          Preencha o formulário para receber o Kit
        </h2>
      </div>

      <form
        className="bg-white p-10 flex flex-col gap-8 rounded-b-lg [&_input]:bg-slate-100 [&_input]:h-[35px] [&_input]:w-full [&_input]:outline-none [&_input]:p-3 [&_input]:text-slate-500"
        action=""
      >
        <div>
          <label>Nome*</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email*</label>
          <input type="email" required />
        </div>
        <div>
          <label>Telefone*</label>
          <input type="tel" required />
        </div>
        <div className="flex flex-col">
          <label>Cargo</label>
          <select
            className="bg-slate-100 outline-none border border-slate-100 h-[35px]"
            name="cargo"
            id="cargo"
          >
            <option value="">Selecione</option>
            <option value="Personal">Personal</option>
            <option value="Aluno">Aluno</option>
          </select>
        </div>

        <button
          type="button"
          className="bg-[#F97316] h-12 rounded-xl uppercase font-bold text-white"
        >
          Baixar kit grátis agora!
        </button>
      </form>
    </div>
  );
};

export default Forms;
