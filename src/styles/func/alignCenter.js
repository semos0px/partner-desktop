const alignCenter = (direction = "center") => {
  switch (direction) {
    case "center":
      return `
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `;
    case "x":
      return `
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        `;
    case "y":
      return `
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          `;
    default:
      return ``;
  }
};

export default alignCenter;
