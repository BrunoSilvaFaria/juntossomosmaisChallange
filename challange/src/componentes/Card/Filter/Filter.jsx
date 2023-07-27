import React from "react";
import { Conteiner } from "./styles";
import SelecionaElementos from "../../../helpers/selecionaElementos";
function Filter({ onFilter }) {
  const handleCheckboxChange = (event) => {
    const valorSelecionado = event.target.value;
    onFilter(valorSelecionado);
  };
  return (
    <Conteiner>
      <div className="align">
        <form>
          <h3 className="title">Por Estado</h3>
          <label className="conteiner-input">
            <input type="radio" name="estado" id="acre" onChange={handleCheckboxChange} value="acre" />
            Acre
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="alagoas" onChange={handleCheckboxChange} value="alagoas" />
            Alagoas
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="amapá" onChange={handleCheckboxChange} value="amapá" />
            Amapá
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="amazonas" onChange={handleCheckboxChange} value="amazonas" />
            Amazonas
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="bahia" onChange={handleCheckboxChange} value="bahia" />
            Bahia
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="ceará" onChange={handleCheckboxChange} value="ceará" />
            Ceará
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="distrito_federal"
              onChange={handleCheckboxChange} value="distrito federal"
            />
            Distrito Federal
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="espírito_santo"
              onChange={handleCheckboxChange} value="espírito santo"
            />
            Espírito Santo
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="goiás" onChange={handleCheckboxChange} value="goiás" />
            Goiás
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="maranhão" onChange={handleCheckboxChange} value="maranhão" />
            Maranhão
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="mato_grosso"
              onChange={handleCheckboxChange} value="mato grosso"
            />
            Mato Grosso
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="mato_grosso_do_sul"
              onChange={handleCheckboxChange} value="mato grosso do sul"
            />
            Mato Grosso do Sul
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="minas_gerais"
              onChange={handleCheckboxChange} value="minas gerais"
            />
            Minas Gerais
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="pará" onChange={handleCheckboxChange} value="pará" />
            Pará
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="paraíba" onChange={handleCheckboxChange} value="paraíba" />
            Paraíba
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="paraná" onChange={handleCheckboxChange} value="paraná" />
            Paraná
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="pernambuco"
              onChange={handleCheckboxChange} value="pernambuco"
            />
            Pernambuco
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="piauí" onChange={handleCheckboxChange} value="piauí" />
            Piauí
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="rio_de_janeiro"
              onChange={handleCheckboxChange} value="rio de janeiro"
            />
            Rio de Janeiro
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="rio_grande_do_norte"
              onChange={handleCheckboxChange} value="rio grande do norte"
            />
            Rio Grande do Norte
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="rio_grande_do_sul"
              onChange={handleCheckboxChange} value="rio grande do sul"
            />
            Rio Grande do Sul
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="rondônia" onChange={handleCheckboxChange} value="rondônia" />
            Rondônia
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="roraima" onChange={handleCheckboxChange} value="roraima" />
            Roraima
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="santa_catarina"
              onChange={handleCheckboxChange} value="santa catarina"
            />
            Santa Catarina
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="são_paulo"
              onChange={handleCheckboxChange} value="são paulo"
            />
            São Paulo
          </label>

          <label className="conteiner-input">
            <input type="radio" name="estado" id="sergipe" onChange={handleCheckboxChange} value="sergipe" />
            Sergipe
          </label>

          <label className="conteiner-input">
            <input
              type="radio"
              name="estado"
              id="tocantins"
              onChange={handleCheckboxChange} value="tocantins"
            />
            Tocantins
          </label>
          
          <button onClick={handleCheckboxChange} value="all" type="button">
            Ver Todos
          </button>
        </form>
      </div>
    </Conteiner>
  );
}

export default Filter;
