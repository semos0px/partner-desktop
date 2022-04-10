import styled from "styled-components";
import starIcon from "../assets/icon/review/star.svg";
import starGrayIcon from "../assets/icon/review/star-g.svg";

const Box = styled.div`
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 2px;
  }
`;

const StarListBox = ({ rating }) => {
  return (
    <Box>
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <img key={idx} src={idx + 1 <= rating ? starIcon : starGrayIcon} />
        ))}
    </Box>
  );
};

export default StarListBox;
