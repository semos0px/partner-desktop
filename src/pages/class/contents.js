import { useState } from "react";
import styled from "styled-components";
import FAQItem from "../../components/faqItem";
import typography from "../../styles/constants/typography";
import questionIcon from "../../assets/icon/class/question.svg";
import locationIcon from "../../assets/icon/class/location.svg";
import colors from "../../styles/constants/colors";
import base from "../../styles/constants/base";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import { getDay } from "../../func";

const Main = styled.main`
  width: 100%;

  h1 {
    font-size: ${typography.size.large}px;
    margin: 30px 0;
  }

  h2 {
    font-size: ${typography.size.medium}px;
    margin-bottom: 20px;
  }
`;

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Contents = styled.div`
  padding: 0 20px;
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

const PriceBox = styled.div`
  ${flexbox("flex-start", "center")}
  margin-bottom: 20px;

  p {
    margin-right: 10px;
    font-weight: ${typography.weight.regular};
    white-space: nowrap;
  }

  button {
    font-size: ${typography.size.tiny}px;
    border-radius: ${base.borderRadius}px;
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 5px 10px;
    margin-left: 10px;

    ${responsive.mediaQuery.mobile} {
      font-size: ${typography.size.base}px;
      padding: 5px 10px;
    }
  }
`;

const OccupancyBox = styled.div`
  ${flexbox("flex-start", "center")}
  margin-bottom: 20px;
`;

const OptionBox = styled.div`
  ${flexbox("flex-start", "flex-start")}
  margin-bottom: 20px;
`;

const LocationBox = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
      ${flexbox("flex-start")}
      width: 100%;
      margin-bottom: 5px;

      img {
        margin-right: 5px;
      }

      ${responsive.mediaQuery.mobile} {
        width: 50%;
      }
    }
  }
`;

const ScheduleBox = styled.div`
  margin-bottom: 20px;

  p:first-child {
    margin-bottom: 5px;
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
          content: "?? ";
        }
      }

      span:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

const MaterialsBox = styled.div`
  p {
    margin-bottom: 20px;
  }

  span {
    background-color: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${colors.black};
  }

  span:not(:last-child) {
    margin-right: 10px;
  }
`;

const IncludedBox = styled.div`
  margin-bottom: 30px;

  p {
    margin-bottom: 20px;
  }

  span:not(:last-child) {
    margin-right: 10px;
  }
`;

const ExceptBox = styled.div`
  margin-bottom: 30px;

  p {
    margin-bottom: 20px;
  }

  span:not(:last-child) {
    margin-right: 10px;
  }
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

const MainImage = styled.img`
  width: 100%;
  height: 230px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.mediumGray};
  margin-bottom: 50px;

  ${responsive.mediaQuery.mobile} {
    height: 400px;
  }
`;

const ClassContents = ({
  data,
  recommendationNoticeToggleHandler,
  openDiscountInfoHandler,
}) => {
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
            <p>?????? ??????</p>

            <QuestionButton
              type="button"
              onClick={recommendationNoticeToggleHandler}
            >
              <img src={questionIcon} />
            </QuestionButton>
          </Left>

          <Right>
            <span>{recommendation.status ? "?????? ??????" : "?????? ??????"}</span>
          </Right>
        </RecommendationBox>

        <PriceBox>
          <Left>
            <span>??????</span>
          </Left>

          <Right>
            <span>1??? {lesson.price.toLocaleString()}???</span>
            <button type="button" onClick={openDiscountInfoHandler}>
              ????????? ????????????
            </button>
          </Right>
        </PriceBox>

        <OccupancyBox>
          <Left>
            <span>?????? ??????</span>
          </Left>

          <Right>
            <span>4???</span>
          </Right>
        </OccupancyBox>

        <OptionBox>
          <Left>
            <span>??????</span>
          </Left>

          <Right>
            {!lesson.option ? (
              <span>????????????</span>
            ) : (
              lesson.option.map((item, idx) => (
                <InfoTag key={idx} color="blue">
                  {item.content} {item.price.toLocaleString()}???
                </InfoTag>
              ))
            )}
          </Right>
        </OptionBox>

        <LocationBox>
          <p>?????? ??????</p>

          <ul>
            {!lesson.location ? (
              <li>?????? ??????</li>
            ) : (
              lesson.location.map((item, idx) => (
                <li key={idx}>
                  <img src={locationIcon} />
                  {item}
                </li>
              ))
            )}
          </ul>
        </LocationBox>

        <ScheduleBox>
          <p>?????? ??????</p>
          <p>?????? ???????????? ???????????? ???????????????.</p>

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

        <IncludedBox>
          <p>????????????</p>

          {!lesson.included ? (
            <span>?????? ??????</span>
          ) : (
            lesson.included.map((item, idx) => (
              <InfoTag key={idx} color="red">
                {item}
              </InfoTag>
            ))
          )}
        </IncludedBox>

        <ExceptBox>
          <p>???????????????</p>

          {!lesson.except ? (
            <span>?????? ??????</span>
          ) : (
            lesson.except.map((item, idx) => (
              <InfoTag key={idx} color="red">
                {item}
              </InfoTag>
            ))
          )}
        </ExceptBox>

        <MaterialsBox>
          <p>?????????</p>

          {!lesson.materials ? (
            <span>?????? ??????</span>
          ) : (
            lesson.materials.map((item, idx) => (
              <InfoTag key={idx} color="red">
                {item}
              </InfoTag>
            ))
          )}
        </MaterialsBox>
      </Section>

      <MainImage src={lesson.thumbnail} />

      <Section>
        <h2>?????? ?????? ??????</h2>

        <ul>
          {faq.map((item, idx) => (
            <FAQItem idx={idx} key={idx} faq={item} isBorder={true} />
          ))}
        </ul>
      </Section>

      <Section>
        <h2>?????? ?????? ??????</h2>

        <Contents>
          <p>{usage.detail}</p>
        </Contents>
      </Section>

      <Section>
        <h2>?????? ?????? ??????</h2>

        <Contents>
          <p>{usage.additional}</p>
        </Contents>
      </Section>
    </Main>
  );
};

export default ClassContents;
