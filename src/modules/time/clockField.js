import styled from "styled-components";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import addIcon from "../../assets/icon/class/add.svg";
import { useRef, useState } from "react";
import base from "../../styles/constants/base";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";

const Box = styled.div`
  button {
    padding: 5px;

    img {
      width: 20px;
    }
  }
`;

const List = styled.ul``;

const Item = styled.li``;

const Time = styled.div`
  ${flexbox("flex-start")}

  span {
    margin: 0 10px;
  }
`;

const ClockBox = styled.div`
  ${flexbox("flex-start")}
  margin-bottom: 10px;
`;

const Clock = styled.div`
  ${flexbox("flex-start")}
  margin-right: 10px;
`;

const AddButton = styled.button``;

const DeleteButton = styled.button``;

const SelectBox = styled.div`
  position: relative;
  width: 50px;

  select {
    padding: 5px !important;
    width: 100%;
    font-size: ${typography.size.small}px;
  }

  ${responsive.mediaQuery.mobile} {
    width: 84px;

    select {
      padding: 10px;
      font-size: ${typography.size.base}px;
    }
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 5px;
  bottom: 15px;
  pointer-events: none;

  ${responsive.mediaQuery.mobile} {
    right: 10px;
  }
`;

const MiddleIcon = styled.span`
  margin: 0 10px;
`;

const ClockField = ({ addHandler, deleteHandler }) => {
  const [clockData, setClockData] = useState({
    "start-hour": null,
    "start-minute": null,
    "finish-hour": null,
    "finish-minute": null,
  });

  const [mockData, setMockData] = useState({
    0: {
      "start-hour": "13",
      "start-minute": "00",
      "finish-hour": "14",
      "finish-minute": "00",
    },
  });

  const mockAddHandler = (key) => {
    if (Object.values(clockData).some((data) => data === null)) {
      // TODO - NOTICE: 시간을 입력해주세요
      return;
    } else {
      setMockData((prev) => ({ [key]: clockData, ...prev }));

      setClockData({
        "start-hour": null,
        "start-minute": null,
        "finish-hour": null,
        "finish-minute": null,
      });
    }
  };

  const mockChangeHandler = (e) => {
    const { name, value } = e.target;

    e.preventDefault();

    setClockData((prev) => ({ ...prev, [name]: value }));
  };

  const mockDeleteHandler = (key) => {
    const data = Object.keys(mockData).filter((k) => k !== key);

    setMockData(data);
  };

  const mockEditHandler = (key, e) => {
    const { name, value } = e.target;
    console.log(key, value, name);

    setMockData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [name]: value },
    }));
  };

  const hour = Array.from({ length: 18 }, (_, i) => {
    if (i + 6 < 10) {
      return `0${i + 6}`;
    } else {
      return i + 6;
    }
  });

  const minute = Array.from({ length: 60 }, (_, i) => {
    if (i < 10) {
      return `0${i}`;
    } else {
      return i;
    }
  });

  return (
    <Box>
      <ClockBox>
        <Clock>
          <Time>
            <SelectBox>
              <select name="start-hour" onChange={mockChangeHandler}>
                {hour.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>

            <span>:</span>

            <SelectBox>
              <select name="start-minute" onChange={mockChangeHandler}>
                {minute.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>
          </Time>

          <MiddleIcon>~</MiddleIcon>

          <Time>
            <SelectBox>
              <select name="finish-hour" onChange={mockChangeHandler}>
                {hour.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>

            <span>:</span>

            <SelectBox>
              <select name="finish-minute" onChange={mockChangeHandler}>
                {minute.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>
          </Time>
        </Clock>

        <AddButton type="button" onClick={() => mockAddHandler(new Date())}>
          <img src={addIcon} />
        </AddButton>
      </ClockBox>

      <List>
        {Object.keys(mockData).map((key, idx) => (
          <Item key={idx}>
            <ClockBox>
              <Clock>
                <Time>
                  <SelectBox>
                    <select
                      name="start-hour"
                      onChange={(e) => mockEditHandler(key, e)}
                      defaultValue={mockData[key]["start-hour"]}
                    >
                      {hour.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <SelectIcon>
                      <img src={selectIcon} />
                    </SelectIcon>
                  </SelectBox>

                  <span>:</span>

                  <SelectBox>
                    <select
                      name="start-minute"
                      onChange={(e) => mockEditHandler(key, e)}
                      defaultValue={mockData[key]["start-minute"]}
                    >
                      {minute.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <SelectIcon>
                      <img src={selectIcon} />
                    </SelectIcon>
                  </SelectBox>
                </Time>

                <MiddleIcon>~</MiddleIcon>

                <Time>
                  <SelectBox>
                    <select
                      name="finish-hour"
                      onChange={(e) => mockEditHandler(key, e)}
                      defaultValue={mockData[key]["finish-hour"]}
                    >
                      {hour.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <SelectIcon>
                      <img src={selectIcon} />
                    </SelectIcon>
                  </SelectBox>

                  <span>:</span>

                  <SelectBox>
                    <select
                      name="finish-minute"
                      onChange={(e) => mockEditHandler(key, e)}
                      defaultValue={mockData[key]["finish-minute"]}
                    >
                      {minute.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <SelectIcon>
                      <img src={selectIcon} />
                    </SelectIcon>
                  </SelectBox>
                </Time>
              </Clock>

              <DeleteButton
                type="button"
                onClick={() => mockDeleteHandler(key)}
              >
                <img src={deleteIcon} />
              </DeleteButton>
            </ClockBox>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default ClockField;
