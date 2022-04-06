import { useState } from "react";
import styled from "styled-components";
import InputField from "../../components/inputField";
import SelectField from "../../components/selectField";
import SexField from "../../components/sexField";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import BottomButton from "../../modules/bottomButton";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";

const Form = styled.form`
  color: ${colors.black};
`;

const MobileValidateBox = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 40%;
  margin-left: 10px;
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  background-color: ${({ isActive }) =>
    isActive ? colors.mediumGray : colors.blue};
`;

const SignUpPage = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    ageGroup: "",
    isMale: true,
  });

  const [validated, setValidated] = useState(false);

  const [sendCertificationNum, setSendCertificationNum] = useState(false);

  const sendCertificationNumHandler = () => {
    setSendCertificationNum(true);
    console.log("인증번호 전송");
  };

  const signUpHandler = () => {
    if (validated) {
      console.log("회원가입 완료");
    }
  };

  const infoChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(inputValue);
  };

  const verifiedHandler = () => {
    // TODO
    console.log("인증하기");
    setValidated(true);
  };

  const maleCheckHandler = (e) => {
    e.preventDefault();
    setInputValue((prev) => ({
      ...prev,
      isMale: true,
    }));
  };

  const femaleCheckHandler = (e) => {
    e.preventDefault();
    setInputValue((prev) => ({
      ...prev,
      isMale: false,
    }));
  };

  const ageGroupOptionList = [
    {
      text: "20대(20 ~ 29)",
      value: 20,
    },
    {
      text: "30대(30 ~ 39)",
      value: 30,
    },
    {
      text: "40대(40 ~ 49)",
      value: 40,
    },
    {
      text: "50대(50 ~ 59)",
      value: 50,
    },
    {
      text: "60대 이상(60 ~)",
      value: 60,
    },
  ];

  return (
    <PageLayout headerTitle="회원가입" isGoBack={true}>
      <PaddingLayout>
        <Form onSubmit={signUpHandler}>
          <InputField
            label="이름"
            placeholder="본명"
            name="name"
            value={inputValue.name}
            changeHandler={infoChangeHandler}
          />

          <SelectField
            label="연령대"
            name="ageGroup"
            optionList={ageGroupOptionList}
            value={inputValue.ageGroup}
            changeHandler={infoChangeHandler}
          />

          <SexField
            isMale={inputValue.isMale}
            maleCheckHandler={maleCheckHandler}
            femaleCheckHandler={femaleCheckHandler}
          />

          <MobileValidateBox>
            <p>전화번호를 알려주세요.</p>
            <InputField name="mobileNumber" placeholder="-없이 입력">
              <Button
                type="button"
                onClick={sendCertificationNumHandler}
                isActive={sendCertificationNum}
              >
                인증번호 전송
              </Button>
            </InputField>
            <InputField name="mobileNumber" placeholder="6자리 입력">
              {sendCertificationNum && (
                <Button type="button" onClick={verifiedHandler}>
                  인증하기
                </Button>
              )}
            </InputField>
          </MobileValidateBox>
        </Form>

        <BottomButton
          text="회원가입 완료"
          color={validated ? colors.blue : colors.mediumGray}
          clickHandler={signUpHandler}
        />
      </PaddingLayout>
    </PageLayout>
  );
};

export default SignUpPage;
