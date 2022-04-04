import styled from "styled-components";
import transition from "../styles/func/transition";
import colors from "../styles/constants/colors";

const SButton = styled.button`
  height: 44px;
  padding: 10px 20px;
  background-color: ${({ color }) => (color === "blue" ? colors.blue : color)};
  color: ${({ fontColor }) =>
    fontColor === "white" ? colors.white : fontColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  transition: ${transition("opacity")};

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
}) => {
  return (
    <SButton
      type="button"
      color={color}
      fontColor={fontColor}
      borderRadius={borderRadius}
    >
      {children}
      {text}
    </SButton>
  );
};

export default Button;
