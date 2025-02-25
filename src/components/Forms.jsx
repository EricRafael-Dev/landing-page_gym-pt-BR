import React, { forwardRef, useState } from "react";

const Forms = forwardRef(({ sectionRef }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [value, setValue] = useState({
    nome: "",
    email: "",
    tel: "".trim(),
    cargo: "",
  });

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setIsSubmitted(true);
    } catch (error) {}
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  return (
    <div
      ref={sectionRef}
      className="border-3 border-[#F97316] bg-[#5F2BAA] rounded-xl mb-4"
    >
      <div className="p-8 text-center">
        <h2 className="text-white font-normal text-2xl">
          Preencha o formulário para receber o Kit
        </h2>
      </div>

      <form
        className="bg-white p-10 flex flex-col gap-8 rounded-b-lg [&_input]:bg-slate-100 [&_input]:h-[35px] [&_input]:w-full [&_input]:outline-none [&_input]:p-3 [&_input]:text-slate-500
        "
        onSubmit={handleSubmit}
        action=""
      >
        <div className={`${isSubmitted && !value.nome ? "text-red-500" : ""}`}>
          <label>Nome*</label>
          <input
            className={`border-2 rounded-lg ${
              isSubmitted && !value.nome
                ? "border-red-500 text-red-500 focus:border-red-500"
                : "border-slate-200 focus:border-[#F97316]"
            }`}
            type="text"
            id="nome"
            value={value.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${isSubmitted && !value.email ? "text-red-500" : ""}`}>
          <label>Email*</label>
          <input
            className={`border-2 rounded-lg  ${
              isSubmitted && !value.email
                ? "border-red-500 text-red-500 focus:border-red-500 "
                : "border-slate-200 focus:border-[#F97316] "
            }`}
            id="email"
            type="email"
            value={value.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${isSubmitted && !value.tel ? "text-red-500" : ""}`}>
          <label>Telefone*</label>
          <input
            className={`border-2  rounded-lg  ${
              isSubmitted && !value.tel
                ? "border-red-500 text-red-500 focus:border-red-500"
                : "border-slate-200 focus:border-[#F97316]"
            }`}
            type="tel"
            id="tel"
            pattern="[0-9]{2} [0-9]{5} [0-9]{4}"
            maxLength={13}
            placeholder="12 34567 8910"
            value={value.tel}
            onChange={handleChange}
            required
          />
          <label className="text-[14px] text-slate-400">
            Ex.: 99 12345 6789
          </label>
        </div>
        <div className="flex flex-col">
          <label>Cargo</label>
          <select
            className="bg-slate-100 outline-none border border-slate-200 h-[35px]"
            id="cargo"
            value={value.cargo}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="Personal">Personal</option>
            <option value="Aluno">Aluno</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#F97316] h-12 rounded-xl uppercase font-bold text-white"
          onClick={() => {
            handleSubmit();
          }}
        >
          Baixar kit grátis agora!
        </button>
      </form>
    </div>
  );
});

export default Forms;
