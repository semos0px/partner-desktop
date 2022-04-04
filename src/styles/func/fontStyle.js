import fonts from "../constants/fonts";
import typography from "../constants/typography";

const fontStyle = (
  fontSize = `${typography.size.base}`,
  font = `${fonts.kr.primary}`
) => {
  switch (fontSize) {
    case 12:
      return `
          font-family: ${font};
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0px;
        `;
    case 14:
      return `
          font-family: ${font};
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0px;
        `;
    case 16:
      return `
          font-family: ${font};
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 0px;
        `;
    case 18:
      return `
          font-family: ${font};
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0px;
        `;
    case 20:
      return `
          font-family: ${font};
          font-size: 20x;
          line-height: 24px;
          letter-spacing: 0px;
        `;
    case 26:
      return `
          font-family: ${font};
          font-size: 26px;
          line-height: 28px;
          letter-spacing: 0px;
        `;
    default:
      throw new Error("폰트 크기 및 폰트 스타일을 다시 확인해주세요");
  }
};

export default fontStyle;
