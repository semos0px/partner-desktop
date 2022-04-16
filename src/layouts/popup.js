import styled from "styled-components";
import zIndex from "../styles/constants/z-index";
import flexbox from "../styles/func/flexbox";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  ${flexbox()}
  top: 0;
  left: 0;
  z-index: ${zIndex.modal};
  pointer-events: none;
`;

const Popup = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Popup;
