import styled from "styled-components";
import responsive from "../../styles/constants/responsive";

const SContainer = styled.div`
  position: ${({ isRelative }) => isRelative && `relative`};
  width: ${responsive.maxWidth.sm}px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 ${responsive.margin.sm}px;
  background-color: pink;
`;

const Container = ({ children, isRelative = false }) => {
  return <SContainer isRelative={isRelative}>{children}</SContainer>;
};

export default Container;
