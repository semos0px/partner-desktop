import { useState } from "react";
import styled from "styled-components";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";
import base from "../../styles/constants/base";
import typography from "../../styles/constants/typography";
import ImageFileField from "../../components/imageFileField.js";
import SelectField from "../../components/selectField.js";
import InputField from "../../components/inputField.js";
import responsive from "../../styles/constants/responsive";
import BaseInfoField from "../../components/baseInfoField";
import CareerInputField from "../../components/careerInputField";
import ClassImageField from "../../components/classImageField";

const Wrapper = styled.div`
  padding-bottom: ${base.height.input + 20}px;
`;

const Form = styled.form`
  fieldset {
    display: block;
    margin-bottom: 50px;

    legend {
      font-weight: ${typography.weight.regular};
      margin-bottom: 10px;
    }

    p {
      font-size: ${typography.size.tiny}px;
      color: ${colors.mediumGray};
      margin-bottom: 20px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const BackgroundImageBox = styled.div`
  width: 100%;

  ${responsive.mediaQuery.mobile} {
    ${flexbox("space-between")}
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  ${flexbox("space-between", "center")}
  margin-bottom: 20px;

  button {
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 5px 10px;
    border-radius: ${base.borderRadius}px;
  }
`;

const CareerBox = styled.div`
  width: 100%;

  ${responsive.mediaQuery.mobile} {
    display: flex;
  }
`;

const BaseBox = styled.div`
  width: 100%;
  display: flex;
`;

const ProfileEditPage = () => {
  const [inputValue, setInputValue] = useState({
    base: {
      image: {
        base: "",
        files: "",
      },
      category: {
        main: "w",
        sub: "f",
      },
      name: "",
    },
    background: {
      first: {
        base: "",
        files: "",
      },
      second: {
        base: "",
        files: "",
      },
      third: {
        base: "",
        files: "",
      },
    },
    career: [],
    lesson: [],
  });

  const [career, setCareer] = useState("");

  const [lessonImage, setLessonImage] = useState({
    id: "",
    base: "",
    files: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("저장하기");

    // 이미지 폼 데이터

    // PATCH: base, background, career, class state 한번에 묶어서 저장
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    const [section, index, secondary] = name.split("-");

    // 리덕스를 사용해야하는 이유를 느낌.....
    setInputValue((prev) => {
      if (!secondary) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [index]: value,
          },
        };
      } else {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [index]: {
              ...prev[section][index],
              [secondary]: value,
            },
          },
        };
      }
    });
  };

  // Career
  const careerChangeHandler = (e) => {
    const { value } = e.target;

    setCareer(value);
  };

  const careerAddHandler = (e) => {
    setInputValue((prev) => ({
      ...prev,
      career: [...prev.career, { id: new Date(), text: career }],
    }));

    setCareer("");
  };

  const careerDeleteHandler = (id) => {
    const filterdCareer = inputValue.career.filter((item) => item.id !== id);
    setInputValue((prev) => ({
      ...prev,
      career: filterdCareer,
    }));
  };

  // Image 관련 로직: preview
  const imageChangeHandler = (e) => {
    const { name, files } = e.target;

    let reader = new FileReader();

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (name.includes("base")) {
        setInputValue((prev) => ({
          ...prev,
          base: {
            ...prev.base,
            image: {
              files,
              base: previewImgUrl,
            },
          },
        }));
      } else if (name.includes("background")) {
        const [category, num] = name.split("-");
        console.log(num, name);

        setInputValue((prev) => ({
          ...prev,
          background: {
            ...prev.background,
            [num]: {
              base: previewImgUrl,
              files,
            },
          },
        }));
      }
    };
  };

  const setLessonImageChangeHandler = (e) => {
    const { name, files } = e.target;

    let reader = new FileReader();

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      setInputValue((prev) => ({
        ...prev,
        lesson: [
          ...prev.lesson,
          {
            id: new Date(),
            base: previewImgUrl,
            files,
          },
        ],
      }));
    };
  };

  const deleteLessonImageHandler = (id) => {
    const filteredLessonImage = inputValue.lesson.filter(
      (item) => item.id !== id
    );
    setInputValue((prev) => ({
      ...prev,
      lesson: filteredLessonImage,
    }));
  };

  return (
    <PageLayout headerTitle="프로필 수정" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <Form onSubmit={submitHandler}>
              <fieldset>
                <legend>기본 정보</legend>

                <BaseBox>
                  <ImageFileField
                    name="base"
                    changeHandler={imageChangeHandler}
                    preview={inputValue.base.image.base}
                    isDelete={false}
                  />

                  <BaseInfoField
                    inputData={inputValue}
                    changeHandler={formChangeHandler}
                  />
                </BaseBox>
              </fieldset>

              <fieldset>
                <legend>배경사진 정보</legend>
                <p>
                  배경 사진은 최대 3장까지 선택할 수 있으며, 가로가 긴 사진을
                  권장합니다.
                </p>

                <BackgroundImageBox>
                  <ImageFileField
                    name="background-first"
                    changeHandler={imageChangeHandler}
                    preview={inputValue.background.first.base}
                    isDelete={false}
                    width={"31%"}
                    height={"160px"}
                    category="background"
                  />

                  <ImageFileField
                    name="background-second"
                    changeHandler={imageChangeHandler}
                    preview={inputValue.background.second.base}
                    isDelete={false}
                    width={"31%"}
                    height={"160px"}
                    category="background"
                  />

                  <ImageFileField
                    name="background-third"
                    changeHandler={imageChangeHandler}
                    preview={inputValue.background.third.base}
                    isDelete={false}
                    width={"31%"}
                    height={"160px"}
                    category="background"
                  />
                </BackgroundImageBox>
              </fieldset>

              <fieldset>
                <ButtonBox>
                  <legend>시설/강사 경력</legend>
                  <button type="button" onClick={careerAddHandler}>
                    + 추가하기
                  </button>
                </ButtonBox>

                <CareerInputField
                  deleteHandler={careerDeleteHandler}
                  changeHandler={careerChangeHandler}
                  value={career}
                />

                <ul>
                  {inputValue.career.map((item, idx) => (
                    <li key={idx} onClick={() => careerDeleteHandler(item.id)}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </fieldset>

              <fieldset>
                <legend>강습 사진</legend>
                <p>
                  강사님 또는 수강생 사진이나 센터 사진을 자유롭게 등록할 수
                  있어요.
                </p>

                <ClassImageField
                  name="lesson"
                  changeHandler={setLessonImageChangeHandler}
                  deleteHandler={deleteLessonImageHandler}
                  value={inputValue.lesson}
                />
              </fieldset>
            </Form>
          </Wrapper>

          <BottomButton
            text="저장하기"
            clickHandler={submitHandler}
            color={colors.blue}
            notice="작성한 내용은 승인 후 영업일 기준 3일내로 적용됩니다."
          />
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ProfileEditPage;
