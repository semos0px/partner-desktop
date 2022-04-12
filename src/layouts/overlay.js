import styled from "styled-components";
import responsive from "../styles/constants/responsive";
import zIndex from "../styles/constants/z-index";

const SOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  z-index: ${zIndex.overlay};

  div {
    max-width: ${responsive.maxWidth.sm}px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }
`;

const Overlay = ({ toggleHandler }) => (
  <SOverlay aria-hidden>
    <div onClick={toggleHandler}></div>
  </SOverlay>
);

export default Overlay;
