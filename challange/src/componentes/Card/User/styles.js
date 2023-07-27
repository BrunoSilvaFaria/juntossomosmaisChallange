import { styled } from "styled-components";
import { align, cardConteiner } from "../../styles";
import { body14, caption, header5 } from "../../../helpers/tipografia";

export const Conteiner = styled.section`
  ${cardConteiner}
  text-align: center;
  height: 310px;

  .align {
    ${align};
  }
  .photo {
    border-radius: 50%;
    margin-bottom: 25px;
    height: 80px;
    width: 80px;
  }
  .name {
    ${header5};
    margin-bottom: 20px;
  }
  .address {
    ${body14}
    margin-bottom: 10px;
  }

  .city {
    margin-bottom: 2px;
  }
  .city,
  .state,
  .postcode {
    ${caption}
  }
`;
