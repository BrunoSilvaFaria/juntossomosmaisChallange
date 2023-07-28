import { styled } from "styled-components";
import { header1 } from "../../helpers/tipografia";
import { displayFlex } from "../../componentes/styles";
export const Conteiner = styled.header`
  width: 90%;
  max-width: 1136px;
  margin: auto auto 80px auto;
  h1 {
    ${header1};
    margin-bottom: 35px;
  }
  .display {
    ${displayFlex};
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .display-user {
    ${displayFlex};
    max-width: 850px;
    gap: 17px;
    flex-wrap: wrap;
  }

  .bread {
    ${displayFlex};
    align-items: center;
    gap: 18px;
    width: fit-content;
    margin: 40px auto 0 auto;
  }

  .icon {
    font-size: 22px;
    font-weight: 700;
  }
  .icon path {
    color: #fff;
  }
  .btn {
    ${displayFlex};
    justify-content: center;
    background-color: #4a4a4a;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  .btn-desactive {
    background: #e5e5e5;
  }
  a {
    text-align: center;
    padding-bottom: 5px;
    height: 24px;
  }
  .link-active {
    width: 32px;
    border-bottom: 4px solid #9b9b9b;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;
