import styled from "styled-components";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import checkIcon from "../../assets/icon/calendar/check-red.svg";
import { useState } from "react";

const Box = styled.div`
  font-size: ${typography.size.tiny}px;

  ul,
  ol {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 0 auto;
    max-width: 64em;
    padding: 0;
  }

  li {
    ${flexbox()}

    &:nth-child(7n + 1) {
      color: ${colors.red};
    }

    &:nth-child(7n) {
      color: ${colors.blue};
    }
  }

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.base}px;
  }
`;

const Weekdays = styled.ul`
  height: 40px;

  li {
    font-weight: ${typography.weight.regular};
  }
`;

const Month = styled.ol`
  li {
    height: 70px;
    cursor: pointer;
  }
`;

const Day = styled.li`
  ${({ selectable }) =>
    !selectable
      ? `color: ${colors.lightGray} !important; ; pointer-events: none;`
      : null}

  p {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${flexbox()}
    ${({ isactive }) =>
      isactive && `color: ${colors.white}; background-color: ${colors.blue}; `}
    
      ${({ check }) =>
      check && `color: ${colors.white}; background-color: ${colors.blue}; `} 

    &::before {
      position: absolute;
      top: -3px;
      right: 0px;
      content: url(${checkIcon});
      transform: scale(1.2);
      opacity: 0;

      ${({ isData }) => isData && `opacity: 1`}
    }
  }
`;

const DateBox = ({
  lastDay,
  lastDate,
  datetime,
  targetDay,
  targetDayList = "",
  setTargetDay,
  addTargetDayListHandler = "",
  data,
}) => {
  // 선택한 날은 파란색 동그라미
  // 일정이 있는 경우 체크 표시

  const daysList = Array.from({ length: lastDate + lastDay }, (_, i) =>
    i < lastDay ? "" : i - lastDay + 1
  );

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  const isData = (date) => {
    const result = data.find((item) => {
      const [year, month, day] = item.split("-");

      if (
        datetime.year == parseInt(year) &&
        datetime.month + 1 == parseInt(month) &&
        date == parseInt(day)
      ) {
        return true;
      }
    });

    return result;
  };

  const getDateIndex = (year, month, date) => {
    return `${year}-${parseInt(month) < 10 ? `0${month}` : month}-${
      parseInt(date) < 10 ? `0${date}` : date
    }`;
  };

  return (
    <Box>
      <Weekdays>
        {weekdays.map((day, idx) => (
          <li key={idx}>{day}</li>
        ))}
      </Weekdays>

      <Month>
        {daysList.map((day, idx) => (
          <Day
            key={idx}
            selectable={day >= datetime.date ? true : false}
            onClick={() => {
              setTargetDay(day);
              addTargetDayListHandler({
                year: datetime.year,
                month: datetime.month + 1,
                date: day,
              });
            }}
            check={
              targetDayList[
                getDateIndex(datetime.year, datetime.month + 1, day)
              ]
                ? true
                : false
            }
            isactive={targetDay === day ? true : false}
            isData={isData(day)}
          >
            <p>{day}</p>
          </Day>
        ))}
      </Month>
    </Box>
  );
};

export default DateBox;
