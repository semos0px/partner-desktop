import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const Box = styled.div`
  max-width: ${responsive.maxWidth.sm}px;
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0px;
  background-color: ${colors.white};
  color: ${colors.white};
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  font-size: ${typography.size.medium}px;
  padding: 20px 10px;

  ${responsive.mediaQuery.mobile} {
    height: 200px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Textarea = styled.textarea`
  background-color: ${colors.lightBlue};
  width: 100%;
  height: 34px;
  border-radius: 40px;
  resize: none;
  padding: 5px 10px;
  font-size: ${typography.size.base}px;

  ${responsive.mediaQuery.mobile} {
    height: 110px;
    padding: 20px;
    border-radius: ${base.borderRadius}px;
  }
`;

const Button = styled.button`
  width: 60px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  margin-left: 10px;
  flex-shrink: 0;
  font-size: ${typography.size.small}px;

  ${responsive.mediaQuery.mobile} {
    width: 100px;
    font-size: ${typography.size.base}px;
  }
`;

const SendMessageField = ({ name, value, changeHandler, sendHandler }) => {
  return (
    <Box>
      <Wrapper>
        <Textarea name={name} value={value} onChange={changeHandler} />
        <Button type="button" onClick={sendHandler}>
          전송
        </Button>
      </Wrapper>
    </Box>
  );
};

export default SendMessageField;
