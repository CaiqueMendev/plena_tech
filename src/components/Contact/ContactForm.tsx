"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: ""});
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setStatusType("success");
      setFormData({ nome: "", email: "", mensagem: "" });
    } else {
      setStatus("Erro ao enviar mensagem.");
      setStatusType("error");
    };

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="menssagem"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Digite sua Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4 flex items-center gap-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            Enviar
          </button>
          {status && (
            <div
              className={`rounded-sm px-6 py-2 text-base font-medium text-white shadow-submit duration-300 
              ${statusType === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}