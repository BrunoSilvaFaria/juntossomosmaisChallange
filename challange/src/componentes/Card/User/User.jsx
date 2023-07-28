import React from "react";
import { Conteiner } from "./styles";
function User(props) {
  
  function capitalizeString(str) {
    return str.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  }


  function inverterOrdemNumeroRua(str) {
    // Usando expressão regular para separar o número e a rua
    const regex = /(\d+)\s+(.*?)\s*$/;
    const matches = str.match(regex);

    if (matches) {
      const numero = matches[1];
      const rua = matches[2].trim();
      const resultado = `${rua}, ${numero}`;
      return resultado;
    } else {
      return str;
    }
  }
 
  return (
    <Conteiner>
      <div className="align">
        <img
          src={props.item.picture.large}
          alt="Foto de usuário"
          className="photo"
        />
        <h5 className="name">
          {capitalizeString(`${props.item.name.first} ${props.item.name.last}`)}
        </h5>
        <p className="address">
          {capitalizeString(inverterOrdemNumeroRua(props.item.location.street))}
        </p>
        <span className="city">
          {capitalizeString(props.item.location.city)}
        </span>
        <span className="state">
          {capitalizeString(props.item.location.state)}
          <span> - </span>
          <span className="postcode">CEP: {props.item.location.postcode}</span>
        </span>
      </div>
    </Conteiner>
  );
}

export default User