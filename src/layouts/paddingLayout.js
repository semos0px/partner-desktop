import styled from "styled-components";
import base from "../styles/constants/base";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${base.height.header + 20}px;
  ${({ isBottomButton }) => (isBottomButton ? "56px" : null)}
`;

const PaddingLayout = ({ children, isBottomButton = false }) => {
  return <Container isBottomButton={isBottomButton}>{children}</Container>;
};

export default PaddingLayout;
