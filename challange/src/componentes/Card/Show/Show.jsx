import React, { useState, useEffect } from "react";
import { Conteiner } from "./styles";

function Show({ atual, total, onFilter, handleOrderChange }) {
  const [selectOrder, setSelectOrder] = useState("name");

  const handleSelect = (event) => {
    setSelectOrder(event.target.value);
  };
  useEffect(() => {
    onFilter(selectOrder);
  }, [selectOrder]);
  return (
    <Conteiner>
      <div className="align">
        <p>
          Exibindo <span>{atual}</span> de <span>{total}</span>{" "}
          itens
        </p>

        <div className="conteiner-select">
          <label htmlFor="order">Ordenar por:</label>
          <select name="order" id="order" onChange={handleOrderChange}>
            <option value="name">Nome</option>
            <option value="city">Cidade</option>
            <option value="age">Idade</option>
          </select>
        </div>
      </div>
    </Conteiner>
  );
}

export default Show;
