import { styled } from "styled-components";
import { align, alignSmall, cardConteiner, displayFlex } from '../../styles';
import { body14, body14Semi, body16, caption, header3, header5 } from "../../../helpers/tipografia";


export const Conteiner = styled.header`
  ${cardConteiner};
  margin-bottom: 15px;
  width: 850px;
  height: 60px;

  .align {
    ${align};
    flex-direction: row;
    justify-content: space-between;
  }


  p, span{
    ${body16}
  }
  .conteiner-select {
    ${displayFlex};
    gap: 8px;
  }

  label{
    ${body14Semi}
  }

  select{
    ${body14};
    padding-right: 20px;
  }

`;