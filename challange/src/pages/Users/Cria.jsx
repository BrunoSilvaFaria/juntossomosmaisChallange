// Componente PaginacaoUsuarios
import React, { useState } from "react";
import User from "../../componentes/Card/User/User";
import Show from "../../componentes/Card/Show/Show";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const PaginacaoUsuarios = ({ usuarios, filtroEstado, filtroGenero, filtroIdade }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);

  if (!Array.isArray(usuarios)) {
    return null;
  }
  // Filtrar os resultados com base no estado selecionado
  function resultadosFiltrados() {
    console.log(filtroIdade)
    let resultadosFiltrados = usuarios;
    if (filtroEstado !== "all") {
      resultadosFiltrados = resultadosFiltrados.filter(
        (item) => item.location.state === filtroEstado
      );
    }

    if (filtroIdade !== "all") {
      if (filtroIdade === "18") {
        resultadosFiltrados = resultadosFiltrados.filter(
          (item) => item.dob.age >= 18 && item.dob.age < 30
        );
      } else if (filtroIdade === "30") {
        resultadosFiltrados = resultadosFiltrados.filter(
          (item) => item.dob.age >= 30 && item.dob.age < 50
        );
      } else if (filtroIdade === "50") {
        resultadosFiltrados = resultadosFiltrados.filter(
          (item) => item.dob.age >= 50
        );
      }
    }

    if (filtroGenero !== "all") {
      resultadosFiltrados = resultadosFiltrados.filter(
        (item) => item.gender === filtroGenero
      );
    }

    return resultadosFiltrados;
  }

  const resultadosFiltradosArray = resultadosFiltrados();
  const totalItens = resultadosFiltradosArray.length;

  const itensPorPagina = 9;
  const totalPages = Math.ceil(totalItens / itensPorPagina);
  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensPaginaAtual = resultadosFiltradosArray.slice(
    indicePrimeiroItem,
    indiceUltimoItem
  );

  let atual;
  if (totalItens <= itensPorPagina) {
    atual = totalItens;
  } else if (paginaAtual === 1) {
    atual = itensPorPagina;
  } else if (itensPaginaAtual.length % itensPorPagina === 0) {
    atual = paginaAtual * itensPorPagina;
  } else {
    atual = totalItens;
  }

  const handlePageChange = (pageNumber) => {
    setPaginaAtual(pageNumber);
  };

  return (
    <div>
      <Show atual={atual} total={totalItens} />
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
          className={`btn ${paginaAtual === totalPages ? "btn-desactive" : ""}`}
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
