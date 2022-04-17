import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import { shortenAddress } from "./locationInputField";
import { useRef, useState } from "react";
import ClockField from "../../modules/time/clockField";

const Card = styled.li`
  width: 100%;
  ${flexbox("space-between")}
  margin-bottom: 30px;

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

const Left = styled.div`
  width: 100%;
  ${flexbox("center", "flex-start", "column")}
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

const ScheduleInputCard = ({
  data = "",
  targetDayData = "",
  changeHandler,
  saveHandler,
  deleteHandler,
}) => {
  const [clockData, setClockData] = useState({
    "start-hour": null,
    "start-minute": null,
    "finish-hour": null,
    "finish-minute": null,
  });

  const [clockList, setClockList] = useState({
    0: {
      "start-hour": "13",
      "start-minute": "00",
      "finish-hour": "14",
      "finish-minute": "00",
    },
  });

  // clock
  const clockAddHandler = (key) => {
    if (Object.values(clockData).some((data) => data === null)) {
      // TODO - NOTICE: 시간을 입력해주세요
      return;
    } else {
      setClockList((prev) => ({ [key]: clockData, ...prev }));

      setClockData({
        "start-hour": null,
        "start-minute": null,
        "finish-hour": null,
        "finish-minute": null,
      });
    }
  };

  const clockChangeHandler = (e) => {
    const { name, value } = e.target;

    e.preventDefault();

    setClockData((prev) => ({ ...prev, [name]: value }));
  };

  const clockDeleteHandler = (key) => {
    const data = Object.keys(clockList).filter((k) => k !== key);

    setClockList(data);
  };

  const clockEditHandler = (key, e) => {
    const { name, value } = e.target;
    console.log(key, value, name);

    setClockList((prev) => ({
      ...prev,
      [key]: { ...prev[key], [name]: value },
    }));
  };

  return (
    <Card>
      <Left>
        <LocationBox>
          <label>위치</label>

          <SelectBox width="150">
            <select name="location" defaultValue={data.location}>
              <option>인천 연수 송도</option>
              <option>
                {/* {targetDayData && shortenAddress(targetDayData.location)} */}
              </option>
            </select>

            <SelectIcon>
              <img src={selectIcon} />
            </SelectIcon>
          </SelectBox>
        </LocationBox>

        <TimeBox>
          <label>강습 시간</label>

          <ClockField
            targetData={clockData}
            data={clockList}
            addHandler={clockAddHandler}
            deleteHandler={clockDeleteHandler}
            changeHandler={clockChangeHandler}
            editHandler={clockEditHandler}
          />
        </TimeBox>

        <MaximumBox>
          <label>강습 인원</label>

          <div>
            <input
              type="text"
              value={data.personnel}
              name="personnel"
              onChange={changeHandler}
              max={4}
            />
            <span>/ 4</span>
          </div>
        </MaximumBox>
      </Left>
    </Card>
  );
};

export default ScheduleInputCard;
