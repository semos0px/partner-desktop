import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import flexbox from "../../styles/func/flexbox";
import questionIcon from "../../assets/icon/class/question.svg";
import typography from "../../styles/constants/typography";
import { getDay } from "../../func";
import { useState } from "react";
import Calendar from "../../components/calendar";

const Main = styled.main`
  width: 100%;

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

const RecommendationBox = styled.div`
  ${flexbox("flex-start", "center")}
  margin-bottom: 20px;

  span {
    border: 1px solid ${colors.mediumGray};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    padding: 5px 10px;
  }
`;

const ScheduleBox = styled.div`
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

  div {
    margin: 20px 0;
  }

  ul {
    width: 100%;
    padding: 0 20px;

    li {
      margin-bottom: 20px;

      p {
        font-weight: ${typography.weight.regular};

        &::before {
          content: "· ";
        }
      }

      span:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

const InfoTag = styled.span`
  display: inline-block;
  border: 1px solid
    ${({ color }) => (color === "blue" ? colors.blue : colors.red)};
  background-color: ${({ color }) =>
    color === "blue" ? colors.lightBlue : colors.lightRed};
  color: ${({ color }) => (color === "blue" ? colors.blue : colors.red)};
  border-radius: 40px;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
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

const QuestionButton = styled.button`
  margin-left: 10px;
`;

const FinishBox = styled.div`
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

const TargetScheduleBox = styled.div`
  time {
    display: block;
    font-weight: ${typography.weight.regular};
    margin-bottom: 30px;
  }

  ul {
    li {
      div {
        display: flex;

        p:last-child {
          margin-left: 20px;
          color: ${colors.black};
        }

        span {
          color: ${colors.blue};
        }
      }
    }
  }
`;

const ClassSchedule = ({ data, recommendationNoticeToggleHandler }) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const currentDate = new Date();

  const [datetime, setDatetime] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
    day: currentDate.getDay(),
  });

  const {
    lesson,
    lesson: { usage, faq, recommendation },
  } = data;

  return (
    <Main>
      <h1>{lesson.title}</h1>

      <Section>
        <RecommendationBox>
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
            <span>{recommendation.status ? "확정 예약" : "확인 예약"}</span>
          </Right>
        </RecommendationBox>
      </Section>

      <Section>
        <ScheduleBox>
          <p>기본 일정</p>
          <p>매달 자동으로 입력되는 일정입니다.</p>

          <ul>
            {lesson.schedule.base.map((item, idx) => (
              <li key={idx}>
                <p>
                  {item.day.map((day) => getDay(day)).join(", ")}{" "}
                  {item.time
                    .map(
                      (t) =>
                        `${t.start.hour}:${t.start.minute} ~ ${t.finish.hour}:${t.finish.minute}`
                    )
                    .join("/")}
                </p>

                <div>
                  {item.location &&
                    item.location.map((item, idx) => (
                      <InfoTag key={idx} color="blue">
                        {item}
                      </InfoTag>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </ScheduleBox>
      </Section>

      <Section>
        <FinishBox>
          <p>등록 완료 일정</p>
          <p>날짜를 클릭하면 일정을 확인할 수 있어요.</p>
          {/* 달력 */}
          <Calendar />

          <TargetScheduleBox>
            <time>{`${datetime.year}년 ${datetime.month + 1}월 ${
              datetime.date
            }일 (${week[datetime.day]}요일)`}</time>

            {/* 해당 날짜의 data 가져왔다고 가정하고 */}
            <ul>
              <li>
                <InfoTag color="blue">서울 송파 잠실</InfoTag>
                <div>
                  <p>강습 시간</p>
                  <p>13:00 - 14:00</p>
                </div>

                <div>
                  <p>강습 인원</p>
                  <p>
                    <span>1</span> / 4
                  </p>
                </div>
              </li>

              <li>
                <InfoTag color="blue">인천 연수 송도</InfoTag>
                <div>
                  <p>강습 시간</p>
                  <p>13:00 - 14:00</p>
                </div>

                <div>
                  <p>강습 인원</p>
                  <p>
                    <span>1</span> / 4
                  </p>
                </div>
              </li>
            </ul>
          </TargetScheduleBox>
        </FinishBox>
      </Section>
    </Main>
  );
};

export default ClassSchedule;
