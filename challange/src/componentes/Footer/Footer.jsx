import React from "react";
import { Conteiner } from "./styles";
import logo from '../../juntossomosmais_logo.svg';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
function Footer() {
  return (
    <Conteiner>
      <div className="align">
        <a href="#">
          <img src={logo} alt="Logo do site" className="logo" />
        </a>
        <p className="subtitle">Juntos Somos Mais Fidelização S.A.</p>

        <nav>
          <p>Siga-nos nas redes sociais:</p>
          <ul>
            <li>
              <a href="#">
                <FaFacebookF className="icon"/>
              </a>
            </li>

            <li>
              <a href="#">
                <FaLinkedinIn className="icon"/>
              </a>
            </li>

            <li>
              <a href="#">
                <FaInstagram className="icon"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Conteiner>
  );
}

export default Footer