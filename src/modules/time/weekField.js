import { useState } from "react";
import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";

const Week = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Day = styled.li`
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid
    ${({ isCheck }) => (isCheck ? `${colors.blue}` : `transparent`)};
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${responsive.mediaQuery.mobile} {
    padding: 5px 15px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const WeekField = ({ addHandler, data }) => {
  const [mockData, setMockData] = useState([1, 2, 3]);

  const mockToggleHandler = (idx) => {
    // 중복 체크
    if (mockData.includes(idx)) {
      const list = mockData.filter((item) => item !== idx);

      setMockData(list);
    } else {
      setMockData((prev) => [...prev, idx]);
    }
  };

  const week = [
    {
      text: "월",
      idx: 1,
    },
    {
      text: "화",
      idx: 2,
    },
    {
      text: "수",
      idx: 3,
    },
    {
      text: "목",
      idx: 4,
    },
    {
      text: "금",
      idx: 5,
    },
    {
      text: "토",
      idx: 6,
    },
    {
      text: "일",
      idx: 7,
    },
    {
      text: "공휴일",
      idx: 8,
    },
  ];

  return (
    <Week>
      {week.map((day) => (
        <Day
          key={day.idx}
          idx={day.idx}
          isCheck={mockData.includes(day.idx)}
          onClick={() => mockToggleHandler(day.idx)}
        >
          {day.text}
        </Day>
      ))}
    </Week>
  );
};

export default WeekField;
