const flexbox = (justify = "center", align = " center", direction = "row") => {
  return `
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `;
};

export default flexbox;
