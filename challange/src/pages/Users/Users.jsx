// Componente Users
import React, { useState } from "react";
import { Conteiner } from "./styles";
import Filter from "../../componentes/Card/Filter/Filter";
import data from "../../helpers/user.json";
import PaginacaoUsuarios from "./Cria";

function Users() {
  const [filtroEstado, setFiltroState] = useState("all");
  const [filtroGenero, setFiltroGenero] = useState("all");
  const [filtroIdade, setFiltroIdade] = useState("all");
  const [filtroOrdem, setFiltroOrdem] = useState("name");

  const handleFilterChange = (
    filtroEstado,
    filtroGenero,
    filtroIdade,
    filtroOrdem
  ) => {
    setFiltroState(filtroEstado);
    setFiltroGenero(filtroGenero);
    setFiltroIdade(filtroIdade);
    setFiltroOrdem(filtroOrdem);
  };

  return (
    <Conteiner>
      <h1>Lista de Membros</h1>
      <div className="display">
        <Filter onFilter={handleFilterChange} />
        <div>
          <div className="display-user">
            <PaginacaoUsuarios
              usuarios={data.results}
              filtroEstado={filtroEstado}
              filtroGenero={filtroGenero}
              filtroIdade={filtroIdade}
              filtroOrdem={filtroOrdem}
            />
          </div>
        </div>
      </div>
    </Conteiner>
  );
}

export default Users;
