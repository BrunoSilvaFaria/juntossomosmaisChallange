// Componente PaginacaoUsuarios
import React, { useState, useEffect } from "react";
import User from "../../componentes/Card/User/User";
import Show from "../../componentes/Card/Show/Show";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const PaginacaoUsuarios = ({
  usuarios,
  filtroEstado,
  filtroGenero,
  filtroIdade,
}) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [filtroOrdem, setFiltroOrdem] = useState("name");

  const handleOrderChange = (event) => {
    setFiltroOrdem(event.target.value);
  };

  useEffect(() => {}, [filtroOrdem]);

  if (!Array.isArray(usuarios)) {
    return null;
  }
  // Filtrar os resultados com base no estado selecionado
  function resultadosFiltrados() {
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

    if (filtroOrdem === "name") {
      resultadosFiltrados.sort((a, b) => {
        const nomeA = `${a.name.first} ${a.name.last}`;
        const nomeB = `${b.name.first} ${b.name.last}`;
        return nomeA.localeCompare(nomeB);
      });
    } else if (filtroOrdem === "city") {
      resultadosFiltrados.sort((a, b) => {
        const cityA = a.location.city ? a.location.city.toString() : "";
        const cityB = b.location.city ? b.location.city.toString() : "";
        return cityA.localeCompare(cityB);
      });
    } else if (filtroOrdem === "age") {
      resultadosFiltrados.sort((a, b) => a.dob.age - b.dob.age);
    }

    return resultadosFiltrados;
  }
  const sortedData = resultadosFiltrados();
  const sortedDataArray = sortedData;
  const totalItens = sortedDataArray.length;

  const itensPorPagina = 6;
  const totalPages = Math.ceil(totalItens / itensPorPagina);
  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensPaginaAtual = sortedData.slice(
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
      <Show
        atual={atual}
        total={totalItens}
        onFilter={() => {}}
        handleOrderChange={handleOrderChange}
      />
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
