// Componente Users
import React, { useState } from "react";
import { Conteiner } from "./styles";
import Filter from "../../componentes/Card/Filter/Filter";
import data from "../../helpers/user.json";
import PaginacaoUsuarios from "./Cria";

function Users() {
  const [filtroEstado, setFiltroEstado] = useState("all");

  const handleFilterChange = (valorSelecionado) => {
    setFiltroEstado(valorSelecionado);
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
            />
          </div>
        </div>
      </div>
    </Conteiner>
  );
}

export default Users;
