import InputField from "../../components/inputField";
import PageLayout from "../../layouts/pageLayout";
import PaddingLayout from "../../layouts/paddingLayout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BottomButton from "../../modules/bottomButton";
import colors from "../../styles/constants/colors";
import SelectField from "../../components/selectField";
import base from "../../styles/constants/base";
import RowLayout from "../../layouts/rowLayout";
import responsive from "../../styles/constants/responsive";

const Form = styled.form`
  color: ${colors.black};
`;

const MobileValidateBox = styled.div`
  p {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 50%;
  margin-left: 10px;
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  background-color: ${({ isActive }) =>
    isActive ? colors.mediumGray : colors.blue};

  ${responsive.mediaQuery.mobile} {
    width: 40%;
  }
`;

const EditPartnerInfoPage = () => {
  // pid: partner id
  const { pid } = useParams();

  const [inputValue, setInputValue] = useState({
    name: "세모링",
    ageGroup: 20,
  });

  const [validated, setValidated] = useState(false);

  const [sendCertificationNum, setSendCertificationNum] = useState(false);

  const sendCertificationNumHandler = () => {
    setSendCertificationNum(true);
    console.log("인증번호 전송");
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

  // TODO: data fetching - pid를 통해 name, age group 정보 가져오기
  // 가져온 데이터 input의 default value로 넣어주기

  const partnerInfoSubmitHandler = () => {
    console.log("수정완료");
  };

  const infoChangeHandler = (e) => {
    const { name, value } = e.target;

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

  return (
    <>
      <PageLayout headerTitle="개인정보 수정" isGoBack={true}>
        <PaddingLayout isBottomButton={true}>
          <RowLayout>
            <Form onSubmit={partnerInfoSubmitHandler}>
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
              text="수정완료"
              color={validated ? colors.blue : colors.mediumGray}
              clickHandler={partnerInfoSubmitHandler}
            />
          </RowLayout>
        </PaddingLayout>
      </PageLayout>
    </>
  );
};

export default EditPartnerInfoPage;
