import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import transition from "../styles/func/transition";

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

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 0 40px;

  button {
    width: 100%;
    height: 66px;
    padding: 10px 20px;
    border-radius: 40px;
    transition: ${transition("opacity")};
    font-size: ${typography.size.medium}px;
    font-weight: ${typography.weight.regular};

    &:first-child {
      margin-bottom: 10px;
    }
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }

  ${responsive.mediaQuery.mobile} {
    display: flex;

    button {
      margin: 0 10px;
    }
  }
`;

const KakaoButton = styled.button`
  background-color: ${colors.yellow};
`;

const AppleButton = styled.button`
  background-color: ${colors.black};
  color: ${colors.white};
`;

const LoginBox = () => {
  const loginHandler = () => {};

  return (
    <Box>
      <Title>login</Title>
      <p>카카오톡/애플로 회원가입부터 로그인까지 한번에 해결!</p>

      <ButtonBox>
        <KakaoButton type="button" onClick={loginHandler}>
          카카오톡으로 로그인하기
        </KakaoButton>
        <AppleButton type="button" onClick={loginHandler}>
          Apple로 로그인하기
        </AppleButton>
      </ButtonBox>
    </Box>
  );
};

export default LoginBox;
