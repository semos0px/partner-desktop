import { useState } from "react";
import styled from "styled-components";
import chevronIcon from "../../assets/icon/page/chevron.svg";
import calendarData from "../../data/calendar";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import DateBox from "./dateBox";

const Container = styled.div`
  margin: 50px 0;

  header {
    width: 100%;
    position: relative;
    ${flexbox()}

    button {
      padding: 15px;
    }

    button:first-child {
      text-decoration: underline;
      color: ${colors.blue};
      position: absolute;
      left: 0;
      padding-left: 0;
      font-size: ${typography.size.small}px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    header {
      button:first-child {
        font-size: ${typography.size.base}px;
      }
    }
  }
`;

const DatetimeInfo = styled.div`
  font-weight: ${typography.weight.regular};

  span:first-child {
    margin-right: 10px;
  }
`;

const PrevButton = styled.button`
  margin-right: 20px;

  img {
    transform: rotate(90deg);
  }
`;

const NextButton = styled.button`
  margin-left: 20px;

  img {
    transform: rotate(-90deg);
  }
`;

const Calendar = () => {
  const currentDate = new Date();

  const [targetDatetime, setTargetDatetime] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
  });

  const [targetLastDate, setTargetLastDate] = useState({
    date: new Date(targetDatetime.year, targetDatetime.month + 1, 0).getDate(),
    day: new Date(targetDatetime.year, targetDatetime.month, 1).getDay(),
  });

  const [targetDay, setTargetDay] = useState(currentDate.getDate());

  // TODO: data fetching 필요
  const data = calendarData;
  const [dataOfTargetDay, setDataOfTargetDay] = useState(data[1]);

  // 오늘로 돌아오기
  const comeBackTodayHandler = () => {
    setTargetDatetime({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      date: currentDate.getDate(),
    });

    setTargetLastDate({
      date: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate(),
      day: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getDay(),
    });

    setTargetDay(currentDate.getDate());
  };

  // 이전 달
  const movePrevMonth = () => {
    const { year, month } = targetDatetime;

    if (
      year === currentDate.getFullYear() &&
      month - 1 < currentDate.getMonth()
    ) {
      return;
    }

    if (month - 1 === currentDate.getMonth()) {
      setTargetDatetime((prev) => ({
        ...prev,
        date: currentDate.getDate(),
      }));
    }

    if (month - 1 < 0) {
      setTargetDatetime((prev) => ({
        ...prev,
        year: prev.year - 1,
        month: 11,
      }));
    } else {
      setTargetDatetime((prev) => ({
        ...prev,
        month: prev.month - 1,
      }));
    }

    setTargetLastDate({
      date: new Date(targetDatetime.year, targetDatetime.month, 0).getDate(),
      day: new Date(targetDatetime.year, targetDatetime.month - 1, 1).getDay(),
    });

    setTargetDay(null);
  };

  // 다음 달
  const moveNextMonth = () => {
    const { month } = targetDatetime;

    if (month + 1 > 11) {
      setTargetDatetime((prev) => ({
        ...prev,
        year: prev.year + 1,
        month: 0,
        date: 1,
      }));
    } else {
      setTargetDatetime((prev) => ({
        ...prev,
        month: prev.month + 1,
        date: 1,
      }));
    }

    setTargetLastDate({
      date: new Date(
        targetDatetime.year,
        targetDatetime.month + 2,
        0
      ).getDate(),
      day: new Date(targetDatetime.year, targetDatetime.month + 1, 1).getDay(),
    });

    setTargetDay(null);
  };

  return (
    <Container>
      <header>
        <button type="button" onClick={comeBackTodayHandler}>
          오늘
        </button>

        <PrevButton type="button" onClick={movePrevMonth}>
          <img src={chevronIcon} />
        </PrevButton>

        <DatetimeInfo>
          <span>{targetDatetime.year}년</span>
          <span>{targetDatetime.month + 1}월</span>
        </DatetimeInfo>

        <NextButton type="button" onClick={moveNextMonth}>
          <img src={chevronIcon} />
        </NextButton>
      </header>

      <DateBox
        lastDay={targetLastDate.day}
        lastDate={targetLastDate.date}
        datetime={targetDatetime}
        targetDay={targetDay}
        setTargetDay={setTargetDay}
        data={["2022-04-20", "2022-05-05"]}
      />
    </Container>
  );
};

export default Calendar;
