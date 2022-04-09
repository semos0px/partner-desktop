import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";

const Container = styled.div`
  width: 100%;
  height: 170px;

  ul {
    position: relative;
    width: 100%;
    display: flex;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 10px;
      position: absolute;
      border-radius: 30px;
      background-color: ${colors.vanilla};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.mediumBlue};
      border-radius: 30px;
    }

    li {
      flex-shrink: 0;
      width: 140px;
      height: 140px;
      margin-bottom: 20px;
      border-radius: ${base.borderRadius}px;
      overflow: hidden;

      &:not(:last-child) {
        margin-right: 10px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const ImageBox = ({ imageList }) => {
  return (
    <Container>
      <ul>
        {imageList.map((item, idx) => (
          <li key={idx}>
            <img src={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ImageBox;
