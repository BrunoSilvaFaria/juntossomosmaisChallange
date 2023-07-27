import { styled, css } from "styled-components";

export const displayFlex = css`
    display: flex;
    align-items: center;
`;

export const cardConteiner = css`
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  width: 272px;
`;

export const align = css`
  ${displayFlex};
  flex-direction: column;
  justify-content: center;
  height: inherit;
  width: 90%;
  margin: auto;
`;

export const alignSmall = css`
  ${align};
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
`;