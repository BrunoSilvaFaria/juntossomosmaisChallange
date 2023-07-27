import { styled, css } from "styled-components";
import { body16 } from "../../helpers/tipografia";
import { align } from "../styles";

export const inputConteiner = css`
  ${align};
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 32px;
  border: 1px solid #b0b0b0;
  background-color: #fff;
  height: 48px;
  width: 464px;
`;

export const input = css`
  ${body16};
  background-color: #fff;
  color: #9b9b9b;
`;
