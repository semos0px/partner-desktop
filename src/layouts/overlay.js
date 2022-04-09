import styled from "styled-components";
import zIndex from "../styles/constants/z-index";

const SOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: ${zIndex.overlay};
`;

const Overlay = ({ toggleHandler }) => (
  <SOverlay aria-hidden onClick={toggleHandler}></SOverlay>
);

export default Overlay;
