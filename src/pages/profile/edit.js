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

const Form = styled.form`
  fieldset {
    display: block;
    margin-bottom: 50px;

    legend {
      font-weight: ${typography.weight.regular};
      margin-bottom: 10px;
    }

    p {
      font-size: ${typography.size.small}px;
      color: ${colors.mediumGray};
      margin-bottom: 20px;
    }
  }
`;

const BackgroundImageBox = styled.div`
  width: 100%;

  ${responsive.mediaQuery.mobile} {
    ${flexbox("space-between")}
  }
`;

const ButtonBox = styled.button`
  width: 100%;
  ${flexbox("space-between", "center")}
  margin-bottom: 20px;

  span {
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
  const [open, setOpen] = useState(false);

  const [baseInfo, setBaseInfo] = useState({
    image: {
      base: null,
      files: null,
    },
    category: {
      main: "워터스포츠",
      sub: "프리다이빙",
    },
    name: "",
  });

  const [backroundImage, setBackgroundImage] = useState({
    first: {
      base: null,
      files: null,
    },
    second: {
      base: null,
      files: null,
    },
    third: {
      base: null,
      files: null,
    },
  });

  const [career, setCareer] = useState([
    "SDI 스쿠버다이빙 강사",
    "수중 사진 작가",
    "SDI 스쿠버다이빙 강사",
  ]);

  const [classImage, setClassImage] = useState([
    {
      id: 0,
      base: null,
      files: null,
    },
    {
      id: 1,
      base: null,
      files: null,
    },
    {
      id: 2,
      base: null,
      files: null,
    },
    {
      id: 3,
      base: null,
      files: null,
    },
    {
      id: 3,
      base: null,
      files: null,
    },
  ]);

  const submitHandler = () => {
    console.log("저장하기");

    // 이미지 폼 데이터

    // PATCH: base, background, career, class state 한번에 묶어서 저장
  };

  // Image 관련 로직: preview,

  const imagePreview = (e) => {
    const { name, files } = e.target;

    let reader = new FileReader();

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      setBaseInfo((prev) => ({
        ...prev,
        image: { ...prev.image, base: previewImgUrl },
      }));
    };
  };

  const imageChangeHandler = (e) => {
    const { name, files } = e.target;

    imagePreview(e);

    if (name.includes("base")) {
      setBaseInfo((prev) => ({ ...prev, image: { ...prev.image, files } }));
    }
  };

  const deleteHandler = (e) => {
    const { name } = e.target;

    if (name.includes("base")) {
      setBaseInfo((prev) => ({ ...prev, image: { files: null, base: null } }));
    }
  };

  const careerAddHandler = (e) => {
    e.preventDefault();
  };

  return (
    <PageLayout headerTitle="프로필 수정" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Form onSubmit={submitHandler}>
            <fieldset>
              <legend>기본 정보</legend>

              <BaseBox>
                <ImageFileField
                  name="base"
                  changeHandler={imageChangeHandler}
                  preview={baseInfo.image.base}
                  isDelete={false}
                />

                <BaseInfoField />
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
                  name="background-1"
                  changeHandler={imageChangeHandler}
                  preview={backroundImage.one}
                  isDelete={false}
                  width={"31%"}
                  height={"160px"}
                  category="background"
                />

                <ImageFileField
                  name="background-2"
                  changeHandler={imageChangeHandler}
                  preview={backroundImage.second}
                  isDelete={false}
                  width={"31%"}
                  height={"160px"}
                  category="background"
                />

                <ImageFileField
                  name="background-3"
                  changeHandler={imageChangeHandler}
                  preview={backroundImage.third}
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
                <span type="button" onClick={careerAddHandler}>
                  + 추가하기
                </span>
              </ButtonBox>

              <CareerInputField />
            </fieldset>

            <fieldset>
              <legend>강습 사진</legend>
              <p>
                강사님 또는 수강생 사진이나 센터 사진을 자유롭게 등록할 수
                있어요.
              </p>

              <ClassImageField
                name="class"
                changeHandler={imageChangeHandler}
                deleteHandler={deleteHandler}
                value={classImage}
              />
            </fieldset>
          </Form>

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
