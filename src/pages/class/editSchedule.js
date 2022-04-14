import { useState } from "react";
import styled from "styled-components";
import RecommendationBox from "../../components/recommendationBox";
import Overlay from "../../layouts/overlay";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import OverlayPortal from "../../overlayPortal";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import questionIcon from "../../assets/icon/class/question.svg";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import TargetDayCard from "../../components/classForm/targetDayCard";

const LEFT_RIGHT_PADDING = 20;

const Wrapper = styled.div`
  padding-bottom: ${base.height.input + 20}px;

  h1 {
    font-size: ${typography.size.large}px;
    margin: 30px 0;
  }
`;

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const QuestionButton = styled.button`
  margin-left: 10px;
`;

const RecommendationDiv = styled.div`
  ${flexbox("flex-start", "center")}
  margin-bottom: 20px;

  span {
    border: 1px solid ${colors.mediumGray};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    padding: 5px 10px;
  }
`;

const BottomButtonBox = styled.div`
  max-width: ${responsive.maxWidth.sm - LEFT_RIGHT_PADDING}px;
  width: calc(100% - ${LEFT_RIGHT_PADDING}px);
  display: flex;
  position: fixed;
  bottom: 10px;

  button {
    border-radius: ${base.borderRadius}px;
    box-shadow: ${base.boxShadow};
    height: ${base.height.bottomButton}px;
  }
`;

const CancelButton = styled.button`
  width: 40%;
  color: ${colors.mediumGray};
  margin-right: 10px;
  background-color: ${colors.white};
`;

const ConfirmButton = styled.button`
  width: 60%;
  color: ${colors.white};
  background-color: ${colors.blue};
`;

const Left = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 120px;

  ${responsive.mediaQuery.mobile} {
    width: 150px;
  }
`;

const Right = styled.div`
  ${flexbox("flex-start")}
  height: 100%;
  flex-wrap: wrap;
`;

const CalendarDiv = styled.div`
  margin-bottom: 20px;

  p:first-child {
    margin-bottom: 5px;
    font-weight: ${typography.weight.regular};
  }

  p:nth-child(2) {
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
    margin-bottom: 20px;
  }
`;

const Top = styled.div`
  ${flexbox("space-between")}

  button {
    white-space: nowrap;
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 10px;
    border-radius: 40px;
    font-size: ${typography.size.small}px;
  }
`;

const TargetDayDiv = styled.div`
  p {
    font-size: ${typography.size.medium}px;
    font-weight: ${typography.weight.regular};
    margin-bottom: 20px;
  }
`;

const ClassEditSchedulePage = ({ recommendation = true }) => {
  const [date, setDate] = useState(new Date());

  const [openRecommendationInfo, setOpenRecommendationInfo] = useState(false);

  const recommendationNoticeToggleHandler = () => {
    setOpenRecommendationInfo(!openRecommendationInfo);
  };

  const cancelHandler = () => {
    console.log("일정 취소하기");
  };

  const confirmHandler = () => {
    console.log("일정 저장하기");
  };

  const addScheduleHandler = () => {
    console.log("일정 추가하기");
  };

  return (
    <PageLayout headerTitle="[프리다이빙] 고고다이브(백강사)" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <h1>체험 다이빙</h1>

            <Section>
              <RecommendationDiv>
                <Left>
                  <p>예약 형태</p>

                  <QuestionButton
                    type="button"
                    onClick={recommendationNoticeToggleHandler}
                  >
                    <img src={questionIcon} />
                  </QuestionButton>
                </Left>

                <Right>
                  <span>
                    {recommendation.status ? "확정 예약" : "확인 예약"}
                  </span>
                </Right>
              </RecommendationDiv>

              <CalendarDiv>
                <Top>
                  <div>
                    <p>일정 확인</p>
                    <p>날짜를 클릭하면 일정을 확인할 수 있어요.</p>
                  </div>

                  <button type="button" onClick={addScheduleHandler}>
                    일정 추가하기
                  </button>
                </Top>
              </CalendarDiv>

              <TargetDayDiv>
                <p>2022년 2월 11일 (금요일)</p>

                <ul>
                  <TargetDayCard />
                </ul>
              </TargetDayDiv>
            </Section>
          </Wrapper>

          <BottomButtonBox>
            <CancelButton type="button" onClick={cancelHandler}>
              일정 삭제하기
            </CancelButton>
            <ConfirmButton type="button" onClick={confirmHandler}>
              일정 저장하기
            </ConfirmButton>
          </BottomButtonBox>
        </RowLayout>
      </PaddingLayout>

      <OverlayPortal>
        {openRecommendationInfo && (
          <Overlay toggleHandler={recommendationNoticeToggleHandler} />
        )}
      </OverlayPortal>

      {openRecommendationInfo && (
        <RecommendationBox open={openRecommendationInfo} />
      )}
    </PageLayout>
  );
};

export default ClassEditSchedulePage;
