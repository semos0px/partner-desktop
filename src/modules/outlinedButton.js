import styled from "styled-components";
import transition from "../styles/func/transition";
import colors from "../styles/constants/colors";

const SButton = styled.button`
  height: 44px;
  padding: 10px 20px;
  background-color: ${({ color }) =>
    color === "blue" ? colors.lightBlue : color};
  color: ${({ color }) => (color === "blue" ? colors.blue : color)};
  border: 1px solid ${({ color }) => (color === "blue" ? colors.blue : color)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  transition: ${transition("opacity")};

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const OutlinedButton = ({
  children,
  text,
  color = "blue",
  borderRadius = "30",
}) => {
  return (
    <SButton type="button" color={color} borderRadius={borderRadius}>
      {children}
      {text}
    </SButton>
  );
};

export default OutlinedButton;
