import styled from "styled-components";
import responsive from "../styles/constants/responsive";

const Div = styled.div`
  position: ${({ isRelative }) => isRelative && `relative`};
  max-width: ${responsive.maxWidth.sm}px;
  min-height: 100vh;
  margin: 0 auto;
`;

const GlobalLayout = ({ children, isRelative = false }) => {
  return <Div isRelative={isRelative}>{children}</Div>;
};

export default GlobalLayout;
