import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import { shortenAddress } from "./locationInputField";
import { useState } from "react";

const Card = styled.li`
  width: 100%;
  ${flexbox("space-between")}
  margin-bottom: 30px;
`;

const Left = styled.div`
  width: 100%;
  ${flexbox("center", "flex-start", "column")}
`;

const Right = styled.div`
  height: 100%;
  align-self: flex-start;

  input[type="checkbox"] {
    transform: scale(1.5);
  }
`;

const SelectBox = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  margin-bottom: ${({ isBottom }) => (isBottom ? `30px` : "0")};
  margin-right: 10px;

  &:first-child {
    margin-right: 10px;
  }

  select {
    width: 100%;
    height: ${base.height.smallInput - 10}px;
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    padding: 5px 20px;
    padding-right: 40px;

    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;

    :focus {
      box-shadow: ${base.boxShadow};
    }
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  pointer-events: none;
`;

const LocationBox = styled.div`
  ${flexbox("flex-start")}
  margin-bottom: 10px;

  label {
    white-space: nowrap;
    width: 100px;
  }

  button {
    white-space: nowrap;
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 10px;
    border-radius: 40px;
    font-size: ${typography.size.small}px;
  }

  ${responsive.mediaQuery.mobile} {
    label {
      width: 150px;
    }
  }
`;

const TimeBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  label {
    white-space: nowrap;
    width: 100px;
  }

  ${responsive.mediaQuery.mobile} {
    label {
      width: 150px;
    }
  }
`;

const ClockBox = styled.div`
  position: relative;
  width: 50px;

  select {
    padding: 5px !important;
    width: 100%;
    font-size: ${typography.size.small}px;
    height: ${base.height.smallInput - 10}px;
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    padding-right: 40px;

    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;

    :focus {
      box-shadow: ${base.boxShadow};
    }
  }

  ${responsive.mediaQuery.mobile} {
    width: 84px;

    select {
      padding: 10px;
      font-size: ${typography.size.base}px;
    }
  }
`;

const ClockSelectIcon = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
  pointer-events: none;

  ${responsive.mediaQuery.mobile} {
    right: 10px;
  }
`;

const MiddleIcon = styled.span`
  margin: 0 10px;
`;

const Time = styled.div`
  ${flexbox("flex-start")}

  span {
    margin: 0 10px;
  }
`;

const Clock = styled.div`
  ${flexbox("flex-start")}
  margin-right: 10px;
`;

const MaximumBox = styled.div`
  ${flexbox()}

  label {
    white-space: nowrap;
    width: 100px;
  }

  input {
    width: 50px;
    height: ${base.height.smallInput - 10}px;
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;
    color: ${colors.mediumGray};
    margin-right: 10px;
    border: 1px solid ${colors.blue};
    padding: 5px 18px;

    :focus {
      box-shadow: ${base.boxShadow};
    }
  }

  ${responsive.mediaQuery.mobile} {
    label {
      width: 150px;
    }
  }
`;

const TargetDayCard = ({ targetDayData }) => {
  const { location, time, personnel } = targetDayData;

  const [updatedData, setUpdatedData] = useState({
    location,
    time: {
      "start-hour": time["start-hour"],
      "start-minute": time["start-minute"],
      "finish-hour": time["finish-hour"],
      "finish-minute": time["finish-minute"],
    },
    personnel,
  });

  const checkAddressHandler = () => {
    console.log("?????? ????????????");
  };

  const updatedDataChangeHandler = (e) => {
    const { name, value } = e.target;

    e.preventDefault();

    if (name.includes("hour") || name.includes("minute")) {
      setUpdatedData((prev) => ({
        ...prev,
        time: {
          ...prev.time,
          [name]: value,
        },
      }));
    } else {
      setUpdatedData((prev) => ({ ...prev, [name]: value }));
    }
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
    <Card>
      <Left>
        <LocationBox>
          <label>??????</label>

          <SelectBox width="150">
            <select defaultValue={shortenAddress(targetDayData.location)}>
              <option>{shortenAddress(targetDayData.location)}</option>
            </select>

            <SelectIcon>
              <img src={selectIcon} />
            </SelectIcon>
          </SelectBox>

          <button type="button" onClick={checkAddressHandler}>
            ?????? ??????
          </button>
        </LocationBox>

        <TimeBox>
          <label>?????? ??????</label>

          <Clock>
            <Time>
              <ClockBox>
                <select
                  name="start-hour"
                  defaultValue={targetDayData.time["start-hour"]}
                  onChange={updatedDataChangeHandler}
                >
                  {hour.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ClockSelectIcon>
                  <img src={selectIcon} />
                </ClockSelectIcon>
              </ClockBox>

              <span>:</span>

              <ClockBox>
                <select
                  name="start-minute"
                  defaultValue={targetDayData.time["start-hour"]}
                  onChange={updatedDataChangeHandler}
                >
                  {minute.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ClockSelectIcon>
                  <img src={selectIcon} />
                </ClockSelectIcon>
              </ClockBox>
            </Time>

            <MiddleIcon>~</MiddleIcon>

            <Time>
              <ClockBox>
                <select
                  name="finish-hour"
                  defaultValue={targetDayData.time["start-hour"]}
                  onChange={updatedDataChangeHandler}
                >
                  {hour.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ClockSelectIcon>
                  <img src={selectIcon} />
                </ClockSelectIcon>
              </ClockBox>

              <span>:</span>

              <ClockBox>
                <select
                  name="finish-minute"
                  defaultValue={targetDayData.time["start-hour"]}
                  onChange={updatedDataChangeHandler}
                >
                  {minute.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <ClockSelectIcon>
                  <img src={selectIcon} />
                </ClockSelectIcon>
              </ClockBox>
            </Time>
          </Clock>
        </TimeBox>

        <MaximumBox>
          <label>?????? ??????</label>

          <div>
            <input
              type="text"
              value={updatedData.personnel}
              name="personnel"
              onChange={updatedDataChangeHandler}
              max={4}
            />
            <span>/ 4</span>
          </div>
        </MaximumBox>
      </Left>

      <Right>
        <input type="checkbox" />
      </Right>
    </Card>
  );
};

export default TargetDayCard;
