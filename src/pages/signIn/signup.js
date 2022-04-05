import styled from "styled-components";
import PageLayout from "../../layouts/pageLayout";
import Button from "../../modules/button";

const Footer = styled.footer`
  max-width: 100%;
  position: fixed;
  bottom: 10px;
`;

const SignUpPage = () => {
  const signUpHandler = () => {};

  return (
    <PageLayout headerTitle="회원가입" isGoBack={true}>
      <Footer>
        <Button
          text="회원가입 완료"
          borderRadius={16}
          clickHandler={signUpHandler}
        />
      </Footer>
    </PageLayout>
  );
};

export default SignUpPage;
