import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import flexbox from "../styles/func/flexbox";
import questionIcon from "../assets/icon/class/question.svg";
import bangIcon from "../assets/icon/class/bang.svg";
import selectIcon from "../assets/icon/input/select-chevron.svg";
import ClassFAQInputItem from "../components/classForm/faq";
import ClassThumbnail from "../components/classForm/thumbnail";
import CertainInputField from "../components/classForm/certainInputField";
import AddButton from "./addButton";
import UncertainInputField from "../components/classForm/uncertainInputField";
import MaterialsInputField from "../components/classForm/materialsInputField";
import RecommendationStatusField from "../components/classForm/recommendationStatusField";
import DiscountInputField from "../components/classForm/discountInputField";
import OptionInputField from "../components/classForm/optionInputField";
import LocationInputField from "../components/classForm/locationInputField";
import BaseScheduleInputField from "../components/classForm/baseScheduleInputField";
import typography from "../styles/constants/typography";
import { useState } from "react";

const Box = styled.div`
  width: 100%;

  input,
  select {
    height: ${base.height.smallInput}px;
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    padding: 10px 20px;

    :focus {
      box-shadow: ${base.boxShadow};
    }
  }

  select {
    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;

    select::-ms-expand {
      display: none; /*for IE10,11*/
    }
  }

  textarea {
    background-color: ${colors.vanilla};
    width: 100%;
    min-height: 100px;
    padding: 20px;
    border-radius: ${base.borderRadius}px;
    resize: none;
  }
`;

const SelectBox = styled.div`
  position: relative;
  width: 40%;
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  pointer-events: none;
`;

const TitleDiv = styled.div`
  margin-bottom: 30px;

  label {
    display: block;
    width: 150px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox("flex-start")}

    input {
      width: 40%;
    }

    label {
      margin-bottom: 0px;
    }
  }
`;

const RecommendationDiv = styled.div`
  margin-bottom: 30px;
  ${flexbox()}
`;

const Left = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 120px;

  ${responsive.mediaQuery.mobile} {
    width: 150px;
  }
`;

const QuestionButton = styled.button`
  margin-left: 10px;
`;

const PriceDiv = styled.div`
  margin-bottom: 30px;

  label {
    display: block;
    width: 150px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox()}

    label {
      margin-bottom: 0px;
    }

    input {
      width: calc(100% - 150px);
    }
  }
`;

const MaximumDiv = styled.div`
  margin-bottom: 30px;
  ${flexbox("flex-start")}

  label {
    display: block;
    width: 150px;
  }

  select {
    width: 100%;
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox("flex-start")}
  }
`;

const DiscountDiv = styled.div`
  margin-bottom: 30px;

  label {
    margin-bottom: 20px;
  }

  ${responsive.mediaQuery.mobile} {
    label {
      display: block;
      width: 150px;
    }
  }
`;

const OptionDiv = styled.div`
  margin-bottom: 30px;

  label {
    margin-bottom: 20px;
  }

  ${responsive.mediaQuery.mobile} {
    display: flex;

    label {
      width: 150px;
      margin-bottom: 0;
    }
  }
`;

const LocationDiv = styled.div`
  margin-bottom: 30px;

  ${responsive.mediaQuery.mobile} {
    display: flex;

    label {
      width: 150px;
      margin-bottom: 0;
    }
  }
`;

const BaseScheduleDiv = styled.div`
  margin-bottom: 30px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  p {
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
  }
`;

const ThumbnailDiv = styled.div`
  margin-bottom: 30px;
  display: flex;

  label {
    display: block;
    width: 150px;
  }
`;

const CertainDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;

  label {
    margin-bottom: 20px;
    display: block;
    width: 150px;
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox()}

    label {
      margin-bottom: 0px;
      align-self: start;
    }
  }
`;

const Uncertain = styled.div`
  position: relative;
  margin-bottom: 30px;

  label {
    ${flexbox("flex-start")}
    margin-bottom: 20px;

    img {
      margin-left: 10px;
      width: 25px;
      cursor: pointer;
    }
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox()}

    label {
      width: 150px;
      margin-bottom: 0px;
      align-self: start;
    }
  }
`;

const NoticeBox = styled.div`
  position: absolute;
  font-size: ${typography.size.micro}px;
  background-color: ${colors.vanilla};
  border-radius: ${base.borderRadius}px;
  ${flexbox("center", "flex-start", "column")}
  color: ${colors.mediumGray};
  padding: 10px 10px;
  top: -20px;
  left: 130px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.base}px;
    top: 40px;
    left: 0;
  }
`;

const MaterialsDiv = styled.div`
  margin-bottom: 30px;

  label {
    ${flexbox("flex-start")}
    margin-bottom: 20px;

    img {
      margin-left: 10px;
      width: 25px;
      cursor: pointer;
    }
  }

  ${responsive.mediaQuery.mobile} {
    ${flexbox()}

    label {
      width: 150px;
      margin-bottom: 0px;
      align-self: start;
    }
  }
`;

const FAQDiv = styled.div`
  margin-bottom: 30px;

  label {
    margin-bottom: 10px;
    display: block;
  }
`;

const DetailDiv = styled.div`
  margin-bottom: 30px;

  label {
    margin-bottom: 10px;
    display: block;
  }
`;

const AdditionalDiv = styled.div`
  label {
    margin-bottom: 10px;
    display: block;
  }
`;

const Top = styled.div`
  ${flexbox("space-between")}
  margin-bottom: 20px;
`;

const ClassInputField = ({
  classData,
  targetLocation,
  setTargetLocation,
  openClassHandler,
  changeHandler,
  recommendationNoticeToggleHandler,
  certainHandler,
  uncertainHandler,
  searchAddressHandler,
  imageChangeHandler,
  addHandler,
  deleteHandler,
}) => {
  const [example, setExample] = useState(false);

  return (
    <>
      <Box>
        <TitleDiv>
          <label>강습명</label>

          <input
            type="text"
            placeholder="강습명"
            name="title"
            value={classData.title}
            onChange={changeHandler}
          />
        </TitleDiv>

        <RecommendationDiv>
          <Left>
            <label>예약 형태</label>

            <QuestionButton
              type="button"
              onClick={recommendationNoticeToggleHandler}
            >
              <img src={questionIcon} />
            </QuestionButton>
          </Left>

          <RecommendationStatusField
            status={classData.status}
            certainHandler={certainHandler}
            uncertainHandler={uncertainHandler}
          />
        </RecommendationDiv>

        <PriceDiv>
          <label>가격</label>

          <input
            type="text"
            placeholder="가격 입력"
            name="price"
            value={classData.price}
            onChange={changeHandler}
          />
        </PriceDiv>

        <MaximumDiv>
          <label>최대 인원</label>

          <SelectBox>
            <select name="maximum" defaultValue={4} onChange={changeHandler}>
              <option value={1}>1인</option>
              <option value={2}>2인</option>
              <option value={3}>3인</option>
              <option value={4}>4인</option>
              <option value={5}>5인</option>
              <option value={6}>6인</option>
              <option value={7}>7인</option>
              <option value={8}>8인</option>
              <option value={9}>9인</option>
              <option value={10}>10인</option>
              <option value={11}>11인</option>
              <option value={12}>12인</option>
            </select>

            <SelectIcon>
              <img src={selectIcon} />
            </SelectIcon>
          </SelectBox>
        </MaximumDiv>

        <DiscountDiv>
          <label>동반 할인가격</label>

          <DiscountInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData.discount}
          />
        </DiscountDiv>

        <OptionDiv>
          <label>옵션</label>

          <OptionInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData.option}
          />
        </OptionDiv>

        <LocationDiv>
          <label>강습 위치</label>

          <LocationInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            searchAddressHandler={searchAddressHandler}
            data={classData.location}
            targetLocation={targetLocation}
            setTargetLocation={setTargetLocation}
          />
        </LocationDiv>

        <BaseScheduleDiv>
          <BaseScheduleInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData}
          />
        </BaseScheduleDiv>

        <ThumbnailDiv>
          <label>대표 사진</label>

          <ClassThumbnail
            changeHandler={imageChangeHandler}
            preview={classData.mainImage.base}
          />
        </ThumbnailDiv>

        <CertainDiv>
          <label>포함사항</label>

          <CertainInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData.certain}
          />
        </CertainDiv>

        <Uncertain>
          <label>
            불포함사항
            <img src={bangIcon} onClick={() => setExample(!example)} />
          </label>

          {example && (
            <NoticeBox>
              <p>불포함사항은 금액을 함께 입력해 주세요.</p>
              <p>예) 장비 렌탈비 +30,000원</p>
            </NoticeBox>
          )}

          <UncertainInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData.uncertain}
          />
        </Uncertain>

        <MaterialsDiv>
          <label>준비물</label>

          <MaterialsInputField
            addHandler={addHandler}
            deleteHandler={deleteHandler}
            data={classData.material}
          />
        </MaterialsDiv>

        <FAQDiv>
          <Top>
            <label>자주 묻는 질문</label>

            <AddButton />
          </Top>

          <ClassFAQInputItem />
        </FAQDiv>

        <DetailDiv>
          <label>이용 상세 정보</label>
          <textarea
            name="detail"
            value={classData.detail}
            onChange={changeHandler}
          />
        </DetailDiv>

        <AdditionalDiv>
          <label>이용 추가 정보</label>
          <textarea
            name="additional"
            value={classData.additional}
            onChange={changeHandler}
          />
        </AdditionalDiv>
      </Box>
    </>
  );
};

export default ClassInputField;
