import { useRef } from "react";
import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import cameraIcon from "../../assets/icon/profile/camera-default.svg";
import flexbox from "../../styles/func/flexbox";

const Box = styled.div`
  position: relative;
  width: 160px;
  height: 100px;
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
  background-color: ${colors.white};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${base.borderRadius}px;
`;

const IconBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${flexbox("center", "center", "column")}

  p {
    color: ${colors.blue};
  }
`;

const Camera = styled.img`
  pointer-events: none;
  margin-bottom: 5px;
`;

const ClassThumbnail = ({ changeHandler, preview }) => {
  const inputRef = useRef();

  const fileHandler = () => {
    inputRef.current.click();
  };

  return (
    <Box>
      <Input
        type="file"
        accept="image/*"
        onChange={changeHandler}
        name={`mainImage`}
        ref={inputRef}
      />

      <Preview url={preview} onClick={fileHandler}>
        {!preview && (
          <IconBox>
            <Camera src={cameraIcon} />
            <p>업로드하기</p>
          </IconBox>
        )}
      </Preview>
    </Box>
  );
};

export default ClassThumbnail;
