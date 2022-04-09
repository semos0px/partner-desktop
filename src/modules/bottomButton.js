import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const LEFT_RIGHT_PADDING = 20;

const Button = styled.button`
  max-width: ${responsive.maxWidth.sm - LEFT_RIGHT_PADDING}px;
  width: calc(100% - ${LEFT_RIGHT_PADDING}px);
  height: 66px;
  position: fixed;
  bottom: 10px;
  background-color: ${({ color }) => color};
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  font-size: ${typography.size.medium}px;
`;

const BottomButton = ({ text, color, clickHandler }) => {
  return (
    <Button type="button" onClick={clickHandler} color={color}>
      {text}
    </Button>
  );
};

export default BottomButton;
