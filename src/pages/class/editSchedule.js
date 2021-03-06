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
import SchedulePanel from "../../layouts/schedulePanel";
import Calendar from "../../components/calendar";

const getFilteredData = (scheduleData, targetDatetime) => {
  const { year, month, date } = targetDatetime;

  const index = `${year}-${
    parseInt(month) + 1 < 10 ? `0${month + 1}` : month + 1
  }-${parseInt(date) < 10 ? `0${date}` : date}`;

  return scheduleData[index];
};

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

    &:focus {
      box-shadow: ${base.boxShadow};
    }
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
  // Data fetching
  const scheduleData = {
    "2022-04-25": {
      0: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "1",
      },
      1: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "0",
      },
    },
    "2022-05-05": {
      0: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "1",
      },
    },
  };

  const currentDate = new Date();

  const [targetDatetime, setTargetDatetime] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
  });

  const [targetDay, setTargetDay] = useState(currentDate.getDate());

  const [targetDayData, setTargetDayData] = useState(
    getFilteredData(scheduleData, {
      year: targetDatetime.year,
      month: targetDatetime.month,
      date: targetDay,
    })
  );

  const targetDayDataChangeHandler = (day) => {
    setTargetDay(day);

    setTargetDayData(
      getFilteredData(scheduleData, {
        year: targetDatetime.year,
        month: targetDatetime.month,
        date: day,
      })
    );
  };

  const [panel, setPanel] = useState(false);
  const [openRecommendationInfo, setOpenRecommendationInfo] = useState(false);

  const recommendationNoticeToggleHandler = () => {
    setOpenRecommendationInfo(!openRecommendationInfo);
  };

  const cancelHandler = () => {
    console.log("?????? ????????????");
  };

  const confirmHandler = () => {
    console.log("?????? ????????????");
  };

  const addScheduleHandler = () => {
    setPanel(!panel);
  };

  const week = ["???", "???", "???", "???", "???", "???", "???"];

  return (
    <PageLayout headerTitle="[???????????????] ???????????????(?????????)" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <h1>?????? ?????????</h1>

            <Section>
              <RecommendationDiv>
                <Left>
                  <p>?????? ??????</p>

                  <QuestionButton
                    type="button"
                    onClick={recommendationNoticeToggleHandler}
                  >
                    <img src={questionIcon} />
                  </QuestionButton>
                </Left>

                <Right>
                  <span>
                    {recommendation.status ? "?????? ??????" : "?????? ??????"}
                  </span>
                </Right>
              </RecommendationDiv>

              <CalendarDiv>
                <Top>
                  <div>
                    <p>?????? ??????</p>
                    <p>????????? ???????????? ????????? ????????? ??? ?????????.</p>
                  </div>

                  <button type="button" onClick={addScheduleHandler}>
                    ?????? ????????????
                  </button>
                </Top>

                <Calendar
                  allData={scheduleData}
                  targetDay={targetDay}
                  currentDate={currentDate}
                  targetDatetime={targetDatetime}
                  setTargetDatetime={setTargetDatetime}
                  setTargetDay={targetDayDataChangeHandler}
                />
              </CalendarDiv>

              {targetDayData && (
                <TargetDayDiv>
                  <p>{`${targetDatetime.year}??? ${
                    targetDatetime.month + 1
                  }??? ${targetDay}??? (${
                    week[
                      new Date(
                        targetDatetime.year,
                        targetDatetime.month,
                        targetDay
                      ).getDay()
                    ]
                  }??????)`}</p>

                  <ul>
                    {Object.keys(targetDayData).map((key) => (
                      <TargetDayCard
                        key={key}
                        targetDayData={targetDayData[key]}
                      />
                    ))}
                  </ul>
                </TargetDayDiv>
              )}
            </Section>
          </Wrapper>

          <BottomButtonBox>
            <CancelButton type="button" onClick={cancelHandler}>
              ?????? ????????????
            </CancelButton>
            <ConfirmButton type="button" onClick={confirmHandler}>
              ?????? ????????????
            </ConfirmButton>
          </BottomButtonBox>
        </RowLayout>
      </PaddingLayout>

      <OverlayPortal>
        {openRecommendationInfo && (
          <Overlay toggleHandler={recommendationNoticeToggleHandler} />
        )}

        {panel && <Overlay toggleHandler={addScheduleHandler} />}
      </OverlayPortal>

      {openRecommendationInfo && (
        <RecommendationBox open={openRecommendationInfo} />
      )}

      {panel && <SchedulePanel open={addScheduleHandler} />}
    </PageLayout>
  );
};

export default ClassEditSchedulePage;
