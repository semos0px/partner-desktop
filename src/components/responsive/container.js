import styled from "styled-components";
import responsive from "../../styles/constants/responsive";

const SContainer = styled.div`
  width: ${responsive.maxWidth.sm}px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 ${responsive.margin.sm}px;
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
