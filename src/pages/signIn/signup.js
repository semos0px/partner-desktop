import { useState } from "react";
import styled from "styled-components";
import InputField from "../../components/inputField";
import SelectField from "../../components/selectField";
import SexField from "../../components/sexField";
import { ageGroupOptionList } from "../../data/signup";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";

const Wrapper = styled.div`
  padding-bottom: ${base.height.input + 20}px;
`;

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
  // form data
  const [inputValue, setInputValue] = useState({
    name: "",
    "age-group": "",
    isMale: true,
    mobile: "",
    "certification-number": "",
  });

  // 번호 인증 완료 여부
  const [validated, setValidated] = useState(false);

  // 인증 번호 전송 여부
  const [sendCertificationNum, setSendCertificationNum] = useState(false);

  const sendCertificationNumHandler = () => {
    setSendCertificationNum(true);
    console.log("인증번호 전송");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validated) {
      console.log("회원가입 완료");
    }
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "male" || name === "female") {
      setInputValue((prev) => ({
        ...prev,
        isMale: name === "male" ? true : false,
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const verifiedHandler = () => {
    // TODO
    console.log("인증하기");
    setValidated(true);
  };

  return (
    <PageLayout headerTitle="회원가입" isGoBack={true}>
      <PaddingLayout isBottomButton={true}>
        <RowLayout>
          <Wrapper>
            <Form onSubmit={submitHandler}>
              <InputField
                label="이름"
                placeholder="본명"
                name="name"
                value={inputValue.name}
                changeHandler={formChangeHandler}
              />

              <SelectField
                label="연령대"
                name="age-group"
                defaultText="연령대 선택"
                optionList={ageGroupOptionList}
                value={inputValue["age-group"]}
                changeHandler={formChangeHandler}
              />

              <SexField
                isMale={inputValue.isMale}
                changeHandler={formChangeHandler}
              />

              <MobileValidateBox>
                <p>전화번호를 알려주세요.</p>
                <InputField
                  name="mobile"
                  placeholder="-없이 입력"
                  changeHandler={formChangeHandler}
                >
                  <Button
                    type="button"
                    onClick={sendCertificationNumHandler}
                    isActive={sendCertificationNum}
                  >
                    인증번호 전송
                  </Button>
                </InputField>

                <InputField
                  name="certification-number"
                  placeholder="6자리 입력"
                  changeHandler={formChangeHandler}
                >
                  {sendCertificationNum && (
                    <Button type="button" onClick={verifiedHandler}>
                      인증하기
                    </Button>
                  )}
                </InputField>
              </MobileValidateBox>
            </Form>
          </Wrapper>

          <BottomButton
            text="회원가입 완료"
            color={validated ? colors.blue : colors.mediumGray}
            clickHandler={submitHandler}
          />
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default SignUpPage;
