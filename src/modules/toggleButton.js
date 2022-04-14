import styled from "styled-components";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const Box = styled.div`
  position: absolute;
  right: 0;
  top: 0px;
  width: 110px;
  height: 24px;
  background-color: ${colors.white};
  border: 2px solid
    ${({ status }) => (!status ? colors.lightGray : colors.blue)};
  color: ${colors.white};
  border-radius: 40px;
  font-size: ${typography.size.tiny}px;
  display: flex;

  button {
    position: absolute;
    height: 100%;
    color: ${colors.white};
    border-radius: 20px;
    padding: 0 10px;
  }

  ${responsive.mediaQuery.mobile} {
    top: 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const OpenButton = styled.button`
  background-color: ${colors.lightGray};
`;

const CloseButton = styled.button`
  background-color: ${colors.blue};

  transform: translateX(43%);
`;

const ToggleButton = ({ status, text, subText, toggleHandler }) => {
  return (
    <Box onClick={toggleHandler} status={status}>
      <Wrapper>
        {!status && <OpenButton>{text}</OpenButton>}

        {status && <CloseButton>{subText}</CloseButton>}
      </Wrapper>
    </Box>
  );
};

export default ToggleButton;
