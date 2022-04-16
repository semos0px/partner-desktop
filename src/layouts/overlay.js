import { useEffect } from "react";
import styled from "styled-components";
import responsive from "../styles/constants/responsive";
import zIndex from "../styles/constants/z-index";
import flexbox from "../styles/func/flexbox";

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
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    ${flexbox()}
  }
`;

const Overlay = ({ toggleHandler }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <SOverlay aria-hidden>
      <div onClick={toggleHandler}></div>
    </SOverlay>
  );
};

export default Overlay;
