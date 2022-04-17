import { useRef, useState } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import AddButton from "../../modules/addButton";
import InfoTag from "../../modules/infoTag";
import ClockField from "../../modules/time/clockField";
import WeekField from "../../modules/time/weekField";
import base from "../../styles/constants/base";
import flexbox from "../../styles/func/flexbox";
import { shortenAddress } from "./locationInputField";

const Container = styled.div``;

const Top = styled.div`
  ${flexbox("space-between")}
  margin-bottom: 20px;
`;

const Box = styled.div`
  width: 100%;
`;

const List = styled.ul`
  width: 100%;
  margin-top: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Item = styled.li`
  position: relative;
  width: 100%;
  padding: 20px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px;
`;

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  margin-bottom: 20px;

  select {
    width: 100%;
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  pointer-events: none;
`;

const LocationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const LocationItem = styled.li``;

const BaseScheduleInputField = ({ deleteHandler, addHandler, data }) => {
  const locationList = data.location;

  const [targetLocationList, setTargetLocation] = useState([]);
  const [daysData, setDaysData] = useState([1, 2, 3]);
  const [clockData, setClockData] = useState({
    "start-hour": null,
    "start-minute": null,
    "finish-hour": null,
    "finish-minute": null,
  });

  const [updatedClock, setUpdatedClock] = useState({
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

  const scheduleAddHandler = () => {
    addHandler("schedule", {
      location: targetLocationList,
      days: daysData,
      time: clockList,
    });
  };

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

  // days

  const daysToggleHandler = (idx) => {
    // 중복 체크
    if (daysData.includes(idx)) {
      const list = daysData.filter((item) => item !== idx);

      setDaysData(list);
    } else {
      setDaysData((prev) => [...prev, idx]);
    }
  };

  const targetLocationAddHandler = (e) => {
    const { value } = e.target;

    setTargetLocation((prev) => [...prev, { id: new Date(), region: value }]);
  };

  const targetLocationDeleteHandler = (id) => {
    const filteredData = targetLocationList.filter((item) => item.id !== id);
    setTargetLocation(filteredData);
  };

  console.log(data);

  return (
    <Container>
      <Top>
        <div>
          <label>기본 일정</label>
          <p>매달 자동으로 입력되는 일정입니다.</p>
        </div>

        <AddButton addHandler={scheduleAddHandler} />
      </Top>

      <Box>
        <List>
          <Item>
            <SelectBox>
              <select onChange={targetLocationAddHandler}>
                <option>위치 추가하기</option>
                {locationList.map((item, idx) => (
                  <option key={idx} value={shortenAddress(item.main)}>
                    {shortenAddress(item.main)}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>

            <LocationList>
              {targetLocationList.map((item, idx) => (
                <LocationItem key={idx}>
                  <InfoTag
                    text={item.region}
                    color="blue"
                    isLine={true}
                    deleteHandler={() => targetLocationDeleteHandler(item.id)}
                  />
                </LocationItem>
              ))}
            </LocationList>

            <WeekField daysData={daysData} toggleHandler={daysToggleHandler} />

            <ClockField
              targetData={clockData}
              data={clockList}
              addHandler={clockAddHandler}
              deleteHandler={clockDeleteHandler}
              changeHandler={clockChangeHandler}
              editHandler={clockEditHandler}
            />
          </Item>
        </List>
      </Box>

      <List>
        {data.schedule.map((item, idx) => (
          <Item key={idx}>
            <DeleteButton
              deleteHandler={() => deleteHandler("schedule", item.id)}
            >
              <img src={deleteIcon} />
            </DeleteButton>

            <SelectBox>
              <select onChange={targetLocationAddHandler}>
                <option>위치 추가하기</option>
                {locationList.map((item, idx) => (
                  <option key={idx} value={shortenAddress(item.main)}>
                    {shortenAddress(item.main)}
                  </option>
                ))}
              </select>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </SelectBox>

            <LocationList>
              {targetLocationList.map((item, idx) => (
                <LocationItem key={idx}>
                  <InfoTag
                    text={item.region}
                    color="blue"
                    isLine={true}
                    deleteHandler={() => targetLocationDeleteHandler(item.id)}
                  />
                </LocationItem>
              ))}
            </LocationList>

            <WeekField daysData={daysData} toggleHandler={daysToggleHandler} />

            <ClockField
              targetData={clockData}
              data={clockList}
              addHandler={clockAddHandler}
              deleteHandler={clockDeleteHandler}
              changeHandler={clockChangeHandler}
              editHandler={clockEditHandler}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default BaseScheduleInputField;
