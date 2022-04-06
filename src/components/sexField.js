import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";

const Div = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Label = styled.p`
  margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  width: 100%;
  ${flexbox("space-between")}

  button {
    width: calc(50% - 10px);
    height: ${base.height.input}px;
    background-color: ${colors.white};
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;
  }
`;

const MaleButton = styled.button`
  border: ${({ isMale }) => (isMale ? `1px solid ${colors.blue}` : "")};
  color: ${({ isMale }) => (isMale ? colors.blue : colors.mediumGray)};
`;

const FemaleButton = styled.button`
  border: ${({ isMale }) => (isMale ? "" : `1px solid ${colors.blue}`)};
  color: ${({ isMale }) => (isMale ? colors.mediumGray : colors.blue)};
`;

const SexField = ({ isMale, maleCheckHandler, femaleCheckHandler }) => {
  return (
    <Div>
      <Label>성별을 알려주세요.</Label>
      <ButtonBox>
        <MaleButton onClick={maleCheckHandler} isMale={isMale}>
          남성
        </MaleButton>
        <FemaleButton onClick={femaleCheckHandler} isMale={isMale}>
          여성
        </FemaleButton>
      </ButtonBox>
    </Div>
  );
};

export default SexField;
