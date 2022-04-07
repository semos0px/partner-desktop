import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";

const Box = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 5px;
  }

  span {
    margin-left: 3px;
    font-size: ${typography.size.tiny}px;
    color: ${colors.mediumGray};
  }
`;

const RatingBox = ({ rating, like }) => {
  return (
    <Box>
      <Rating>
        {rating} <span>/5</span>
      </Rating>

      <Rating>{like}</Rating>
    </Box>
  );
};

export default RatingBox;
