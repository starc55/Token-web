import regularFont from "../assets/fonts/SF-Pro-Display-Regular.woff2";

const fontStyles = `
@font-face {
  font-family: "SF Pro Display";
  src: url(${regularFont}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "SF Pro Display";
  src: url(${boldFont}) format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

export default fontStyles;