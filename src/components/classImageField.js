import { useRef } from "react";
import styled from "styled-components";
import cameraIcon from "../assets/icon/profile/camera-default.svg";
import deleteIcon from "../assets/icon/profile/image-delete.svg";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  width: 100%;
  display: flex;
`;

const InputFileBox = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: ${base.borderRadius}px;
  border: 1px solid ${colors.blue};
  margin-right: 10px;

  input {
    width: 100%;
    height: 100%;
    display: none;
  }
`;

const InputIcon = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox()}
  background-color: ${colors.white};
  border-radius: ${base.borderRadius}px;
`;

const ImageListBox = styled.div`
  width: calc(100% - 120px - 10px);
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
  }
`;

const ImageItem = styled.li`
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.mediumGray};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${base.borderRadius}px;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 100%;
  }
`;

const ClassImageField = ({ changeHandler, deleteHandler, value, name }) => {
  const inputRef = useRef();

  const fileHandler = () => {
    inputRef.current.click();
  };

  return (
    <Box>
      <InputFileBox>
        <input
          type="file"
          accept="image/*"
          onChange={changeHandler}
          name={`image-${name}`}
          ref={inputRef}
        />

        <InputIcon onClick={fileHandler}>
          <img src={cameraIcon} />
        </InputIcon>
      </InputFileBox>

      <ImageListBox>
        <ul>
          {value.map((item, idx) => (
            <ImageItem key={idx}>
              <Image src={item} />
              <DeleteButton type="button">
                <img src={deleteIcon} onClick={deleteHandler} />
              </DeleteButton>
            </ImageItem>
          ))}
        </ul>
      </ImageListBox>
    </Box>
  );
};

export default ClassImageField;
