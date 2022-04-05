import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import fonts from "../styles/constants/fonts";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  width: 100%;
  ${flexbox("center", "center", "column")};
  margin: 50px 0;
  padding: 50px 0;
  background-color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  text-align: center;
`;

const Title = styled.p`
  text-transform: uppercase;

  font-size: ${typography.size.large}px;
  font-weight: ${typography.weight.bold};
  margin-bottom: 10px;
`;

const LoginBox = () => {
  return (
    <Box>
      <Title>login</Title>
      <p>카카오톡/애플로 회원가입부터 로그인까지 한번에 해결!</p>
    </Box>
  );
};

export default LoginBox;
