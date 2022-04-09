import ReactDOM from "react-dom";

const OverlayPortal = ({ children }) => {
  const el = document.getElementById("overlay");

  return ReactDOM.createPortal(children, el);
};

export default OverlayPortal;
