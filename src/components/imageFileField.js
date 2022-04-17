import { useRef } from "react";
import styled from "styled-components";
import base from "../styles/constants/base";
import deleteIcon from "../assets/icon/profile/image-delete.svg";
import cameraIcon from "../assets/icon/profile/camera.svg";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  position: relative;
  width: ${({ category, width }) =>
    category === "background" ? "100%" : width};

  margin-bottom: ${({ category }) =>
    category === "background" ? "20px" : null};

  height: ${({ category, height }) =>
    category === "background" ? "250px" : height};
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};

  ${responsive.mediaQuery.mobile} {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

const Preview = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.mediumGray};
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: ${base.borderRadius}px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Camera = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  pointer-events: none;
`;

const ImageFileField = ({
  name,
  changeHandler,
  deleteHandler,
  isIcon = true,
  isDelete = true,
  preview,
  width = "120px",
  height = "120px",
  category = "base",
}) => {
  const inputRef = useRef();

  const fileHandler = () => {
    inputRef.current.click();
  };

  return (
    <Box width={width} height={height} category={category}>
      <Input
        type="file"
        accept="image/*"
        onChange={changeHandler}
        name={`${name}`}
        ref={inputRef}
      />

      <Preview url={preview} onClick={fileHandler}>
        {isIcon && <Camera src={cameraIcon} />}
      </Preview>

      {isDelete && (
        <DeleteButton onClick={deleteHandler}>
          <img src={deleteIcon} />
        </DeleteButton>
      )}
    </Box>
  );
};

export default ImageFileField;
