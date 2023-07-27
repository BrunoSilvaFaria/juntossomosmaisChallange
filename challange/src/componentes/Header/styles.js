import { styled } from "styled-components";
import { align } from '../styles';
import { input, inputConteiner } from "../Form/styles";
export const Conteiner = styled.header`
  background: #f5f5f5;
  height: 96px;
  margin-bottom: 25px;

  .align {
    ${align};
    max-width: 1136px;
    flex-direction: row;
    justify-content: space-between;
  }

  .conteiner-search{
    ${inputConteiner};
  }
  .conteiner-icon{
    padding: 0 15px 0 20px;
  }
  .icon{
    font-size: 17px;
  }
  input{
    ${input};
    width: 80%;
  }

`;