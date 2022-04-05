import styled from "styled-components";
import transition from "../styles/func/transition";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";

const SButton = styled.button`
  width: 100%;
  height: 66px;
  padding: 10px 20px;
  background-color: ${({ color }) => (color === "blue" ? colors.blue : color)};
  color: ${({ fontColor }) =>
    fontColor === "white" ? colors.white : fontColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  transition: ${transition("opacity")};
  font-size: ${typography.size.medium}px;
  font-weight: ${typography.weight.regular};

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const Button = ({
  children,
  text,
  color = "blue",
  fontColor = "white",
  borderRadius = "30",
  clickHandler,
}) => {
  return (
    <SButton
      type="button"
      color={color}
      fontColor={fontColor}
      borderRadius={borderRadius}
      onClick={clickHandler}
    >
      {children}
      {text}
    </SButton>
  );
};

export default Button;
