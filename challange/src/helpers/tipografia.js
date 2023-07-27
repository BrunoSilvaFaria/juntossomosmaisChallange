import { css } from "styled-components";

const fonts = {
  weight: {
    400: "400",
    500: "500",
    600: "600",
    700: "700",
  },
  size: {
    small: "12px",
    regular: "14px",
    medium: "16px",
    large: "20px",
    extra: "32px",
  }
};

const header1 = css`
  font-size: ${fonts.size.extra};
  font-weight: ${fonts.weight[700]};
  line-height: 48px;
`;
const header3 = css`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight[700]};
  line-height: 24px;
`;

const header5 = css`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight[700]};
  line-height: 26px;
`;


const body16 = css`
  font-size: ${fonts.size.medium};
  line-height: 28px;
`;

const body16Semi = css`
  ${body16};
  font-weight: ${fonts.weight[700]};
`;

const body14 = css`
  font-size: ${fonts.size.regular};
  line-height: 24px;
`;

const body14Semi = css`
  ${body14};
  font-weight: ${fonts.weight[500]};
`;

const caption = css`
  font-size: ${fonts.size.small};
  line-height: 16px;
`;
export {
  fonts,
  header1,
  header5,
  header3,
  body14,
  body14Semi,
  body16,
  body16Semi,
  caption,
};
