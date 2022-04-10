import styled from "styled-components";
import starIcon from "../assets/icon/review/star.svg";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  ${flexbox("flex-start")}
  margin: 10px 0;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  span {
    color: ${colors.mediumGray};

    strong {
      font-size: ${typography.size.large}px;
      color: ${colors.black};
      margin-right: 3px;
    }
  }
`;

const StarBox = ({ rating }) => {
  return (
    <Box>
      <img src={starIcon} />
      <span>
        <strong>{rating}</strong>/5점
      </span>
    </Box>
  );
};

export default StarBox;
