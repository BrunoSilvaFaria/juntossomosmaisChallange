import { styled } from "styled-components";
import { align, alignSmall, cardConteiner, displayFlex } from '../../styles';
import { body14, body16, caption, header3, header5 } from "../../../helpers/tipografia";


export const Conteiner = styled.section`
  ${cardConteiner}
  height: 472px;
  overflow: scroll;

  .align {
    ${alignSmall};
  }

  .title {
    ${header3};
    margin: 25px 0 15px 0;
  }

  label, a{
    ${body16}
  }
  
  a{
    text-decoration: underline;
  }
  .conteiner-input {
    ${displayFlex};
    width: 100%;
    gap: 8px;
    margin-bottom: 10px;
  }


`;