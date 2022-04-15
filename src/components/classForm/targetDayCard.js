import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";

const Card = styled.li`
  width: 100%;
  ${flexbox("space-between")}
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
    padding: 10px 20px;
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
  const checkAddressHandler = () => {
    console.log("주소 확인하기");
  };

  const mockChangeHandler = (e) => {
    const { name, value } = e.target;

    e.preventDefault();

    // setClockData((prev) => ({ ...prev, [name]: value }));
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
          <label>위치</label>

          <SelectBox width="150">
            <select defaultValue={"인천 연수 선학"}>
              <option></option>
            </select>

            <SelectIcon>
              <img src={selectIcon} />
            </SelectIcon>
          </SelectBox>

          <button type="button" onClick={checkAddressHandler}>
            주소 확인
          </button>
        </LocationBox>

        <TimeBox>
          <label>강습 시간</label>

          <Clock>
            <Time>
              <ClockBox>
                <select name="start-hour" onChange={mockChangeHandler}>
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
                <select name="start-minute" onChange={mockChangeHandler}>
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
                <select name="finish-hour" onChange={mockChangeHandler}>
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
                <select name="finish-minute" onChange={mockChangeHandler}>
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
          <label>강습 인원</label>

          <div>
            <input type="text" />
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
