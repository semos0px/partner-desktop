import styled from "styled-components";
import base from "../styles/constants/base";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${base.height.header + 20}px;
`;

const PaddingLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PaddingLayout;
