"use client";

import { useEffect, useState } from "react";
import s from "./button.module.css";

import Image from "next/image";
import { TipoParms } from "@/app/api/produto/[tipo]/route";

type DadosType = {
  id: string;
  fotos: {
    titulo: string;
    src: string;
  }[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;
};

type ButtonProps = {
  tipo: TipoParms;
};

export default function ButtonProdutos({ tipo }: ButtonProps) {
  const [dados, setDados] = useState<DadosType | null>(null);

  async function fetchData() {
    const response = await fetch(`/api/produto/${tipo}`);
    const body = await response.json();
    setDados(body);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClear() {
    setDados(null);
  }

  return (
    <article className={s.container}>
      <button onClick={fetchData}>{tipo}</button>
      {dados && (
        <div className={s.containerDados}>
          <p>{dados.nome}</p>
          <p>{dados.descricao}</p>
          <p>R$ {dados.preco}</p>

          <Image
            src={dados.fotos[0].src}
            width={120}
            height={120}
            alt={dados.fotos[0].titulo}
            loading="eager"
          />
        </div>
      )}
      <button onClick={handleClear}>Clear Dados</button>
    </article>
  );
}
