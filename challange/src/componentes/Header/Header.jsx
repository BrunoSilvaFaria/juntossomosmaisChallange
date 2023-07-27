import React from "react";
import { Conteiner } from "./styles";
import logo from '../../juntossomosmais_logo.svg';
import { FaSearch } from 'react-icons/fa'
function Header() {
  return (
    <Conteiner>
      <div className="align">
        <a href="#">
          <img src={logo} alt="Logo do site" className="logo" />
        </a>

        <div className="conteiner-search">
          <span className="conteiner-icon">
            <FaSearch className="icon" />
          </span>
          <input type="text" name="search" id="search" placeholder="Buscar aqui"/>
        </div>
        
      </div>
    </Conteiner>
  );
}

export default Header