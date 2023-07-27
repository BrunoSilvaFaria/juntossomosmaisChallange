// Componente PaginacaoUsuarios
import React, { useState } from "react";
import User from "../../componentes/Card/User/User";
import Show from "../../componentes/Card/Show/Show";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const PaginacaoUsuarios = ({ usuarios, filtroEstado }) => {
  const itensPorPagina = 9;
  const [paginaAtual, setPaginaAtual] = useState(1);

  if (!Array.isArray(usuarios)) {
    return null;
  }

  // Filtrar os resultados com base no estado selecionado
  const resultadosFiltrados =
    filtroEstado === "all"
      ? usuarios
      : usuarios.filter((item) => item.location.state === filtroEstado);

  const totalItens = resultadosFiltrados.length;
  const totalPages = Math.ceil(totalItens / itensPorPagina);
  let indiceUltimoItem
  if (totalItens > 9) {
    indiceUltimoItem = paginaAtual * itensPorPagina;
  } else {
    indiceUltimoItem = paginaAtual / itensPorPagina;
  }
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensPaginaAtual = resultadosFiltrados.slice(
    indicePrimeiroItem,
    indiceUltimoItem
  );

  const handlePageChange = (pageNumber) => {
    setPaginaAtual(pageNumber);
  };
  
  return (
    <div>
      <Show atual={indiceUltimoItem} total={totalItens} />
      <div className="display-user">
        {itensPaginaAtual.map((item) => (
          <User key={item.email} item={item} />
        ))}
      </div>

      <div className="bread">
        <button
          className={`btn ${paginaAtual === 1 ? "btn-desactive" : ""}`}
          disabled={paginaAtual === 1}
          onClick={() => handlePageChange(paginaAtual - 1)}
        >
          <MdKeyboardArrowLeft className="icon" />
        </button>
        <button
          className="btn"
          disabled={paginaAtual === totalPages}
          onClick={() => handlePageChange(paginaAtual + 1)}
        >
          <MdKeyboardArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default PaginacaoUsuarios;
