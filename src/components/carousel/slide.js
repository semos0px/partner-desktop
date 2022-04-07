import React from "react";
import styled from "styled-components";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";

const Card = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${colors.mediumGray};
  ${flexbox("flex-start", "center", "column")};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Slide = ({ img }) => {
  return (
    <Card>
      <Img src={img} />
    </Card>
  );
};

export default Slide;
