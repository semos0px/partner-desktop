import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";

const Container = styled.div`
  width: 100%;
  height: 160px;

  ul {
    width: 100%;
    display: flex;
    overflow-x: scroll;

    li {
      flex-shrink: 0;
      width: 140px;
      height: 140px;
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

const ScrollBar = styled.div``;

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

      <ScrollBar>
        <bar></bar>
      </ScrollBar>
    </Container>
  );
};

export default ImageBox;
