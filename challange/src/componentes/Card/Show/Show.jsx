import React from "react";
import { Conteiner } from "./styles";
function Show(props) {
  return (
    <Conteiner>
      <div className="align">
        <p>
          Exibindo <span>{props.atual}</span> de <span>{props.total}</span>{" "}
          itens
        </p>

        <div className="conteiner-select">
          <label for="order">Ordenar por:</label>
          <select name="order" id="order">
            <option value="name" onChange={props.function}>
              Nome
            </option>
            <option value="city" onChange={props.function}>
              Cidade
            </option>
            <option value="age" onChange={props.function}>
              Idade
            </option>
          </select>
        </div>
      </div>
    </Conteiner>
  );
}

export default Show