import { styled } from "styled-components";
import { align, displayFlex } from "../styles";
import { input, inputConteiner } from "../Form/styles";
import { body16, body16Semi } from "../../helpers/tipografia";
export const Conteiner = styled.header`
  height: 300px;
  background-color: #3a3a3a;

  p,
  .icon path {
    color: #fff;
  }

  .align {
    ${align};
    width: fit-content;
  }

  .logo {
    background: white;
    margin-bottom: 30px;
  }

  p {
    ${body16};
    margin-bottom: 20px;
  }
  .subtitle {
    ${body16Semi};
    margin-bottom: 25px;
  }
  .icon {
    font-size: 20px;
  }
  ul,
  a {
    ${displayFlex};
    justify-content: center;
  }

  ul {
    gap: 15px;
  }
  li {
    a {
      background-color: #28b0fc;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
`;
