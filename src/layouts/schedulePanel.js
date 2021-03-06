import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import zIndex from "../styles/constants/z-index";
import flexbox from "../styles/func/flexbox";
import transition from "../styles/func/transition";
import RowLayout from "./rowLayout";
import bangIcon from "../assets/icon/class/bang-blue.svg";
import { useState } from "react";
import Calendar from "../components/calendar";
import ScheduleInputCard from "../components/classForm/scheduleInputCard";
import TargetDayCard from "../components/classForm/targetDayCard";

const getFilteredData = (scheduleData, targetDatetime) => {
  const { year, month, date } = targetDatetime;

  const index = `${year}-${
    parseInt(month) + 1 < 10 ? `0${month + 1}` : month + 1
  }-${parseInt(date) < 10 ? `0${date}` : date}`;

  return scheduleData[index];
};

const LEFT_RIGHT_PADDING = 20;

const Box = styled.div`
  width: 100%;
  height: 600px;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  bottom: 0px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  z-index: ${zIndex.navbar};
  overflow-y: scroll;
  transform: translate3d(0, 100%, 0);
  opacity: 0;
  transition: ${transition()};

  ${({ open }) => (open ? `transform: translate3d(0, 0, 0); opacity: 1;` : "")};

  header {
    margin-bottom: 20px;
  }
`;

const Bang = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  /* position: relative; */
  padding: 20px;
`;

const Title = styled.p`
  font-size: ${typography.size.base}px;
  font-weight: ${typography.weight.regular};
  margin-bottom: 10px;
  ${flexbox("flex-start")}
`;

const Comment = styled.p`
  font-size: ${typography.size.tiny}px;
  margin-bottom: 20px;
  color: ${colors.mediumGray};
`;

const Popup = styled.div`
  position: absolute;
  background-color: ${colors.vanilla};
  width: 300px;
  padding: 10px;
  border-radius: ${base.borderRadius}px;
  font-size: ${typography.size.micro}px;
  ${flexbox()}
  top: 10px;
  left: 170px;
`;

const AddButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 5px 10px;
  border-radius: 40px;
  font-size: ${typography.size.small}px;
`;

const CalendarHeader = styled.header`
  ${flexbox("space-between", "flex-start")}
`;

const Section = styled.section``;

const ButtonBox = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const BottomButton = styled.button`
  width: 100%;
  height: 66px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  font-size: ${typography.size.base}px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.medium}px;
  }
`;

const SchedulePanel = ({ open }) => {
  const scheduleData = {
    "2022-04-25": {
      0: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "1",
      },
      1: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "0",
      },
    },
    "2022-05-05": {
      0: {
        location: "?????? ????????? ?????????????????? 157 ?????????",
        time: {
          "start-hour": "08",
          "start-minute": "00",
          "finish-hour": "11",
          "finish-minute": "00",
        },
        personnel: "1",
      },
    },
  };

  const [notice, setNotice] = useState(false);

  const [newScheduleList, setNewScheduleList] = useState({});
  const [newSchedule, setNewSchedule] = useState({
    location: "",
    time: {
      "start-hour": "",
      "start-minute": "",
      "finish-hour": "",
      "finish-minute": "",
    },
    personnel: "",
  });

  const addHandler = () => {};

  const week = ["???", "???", "???", "???", "???", "???", "???"];

  const currentDate = new Date();

  const [datetime, setDatetime] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
    day: currentDate.getDay(),
  });

  const [targetDatetime, setTargetDatetime] = useState({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    date: currentDate.getDate(),
  });

  const [targetDay, setTargetDay] = useState(currentDate.getDate());

  const [targetDayList, setTargetDayList] = useState([]);

  const [targetDayData, setTargetDayData] = useState(
    getFilteredData(scheduleData, {
      year: targetDatetime.year,
      month: targetDatetime.month,
      date: targetDay,
    })
  );

  const targetDayDataChangeHandler = (day) => {
    setTargetDay(day);

    setTargetDayData(
      getFilteredData(scheduleData, {
        year: targetDatetime.year,
        month: targetDatetime.month,
        date: day,
      })
    );
  };

  const addTargetDayListHandler = (datetime) => {
    const index = `${datetime.year}-${
      parseInt(datetime.month) < 10 ? `0${datetime.month}` : datetime.month
    }-${parseInt(datetime.date) < 10 ? `0${datetime.date}` : datetime.date}`;

    if (targetDayList[index]) {
      setTargetDayList((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    } else {
      setTargetDayList((prev) => ({
        ...prev,
        [index]: datetime,
      }));
    }
  };

  const newScheduleChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name.includes("hour") || name.includes("minute")) {
      setNewSchedule((prev) => ({
        ...prev,
        time: {
          ...prev.time,
          [name]: value,
        },
      }));
    } else {
      setNewSchedule((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const newScheduleSaveHandler = () => {
    setNewScheduleList((prev) => ({
      ...prev,
      [new Date()]: newSchedule,
    }));

    setNewSchedule({
      location: "",
      time: {
        "start-hour": "",
        "start-minute": "",
        "finish-hour": "",
        "finish-minute": "",
      },
      personnel: "",
    });
  };

  const newScheduleDeleteHandler = (id) => {
    setNewScheduleList((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <>
      <Box open={open}>
        <Wrapper>
          <header>
            <Title>
              ?????? ????????????{" "}
              <Bang
                src={bangIcon}
                onMouseOver={() => setNotice(true)}
                onMouseOut={() => setNotice(false)}
              />
            </Title>
            <Comment>?????? ????????? ?????? ????????? ??? ?????????.</Comment>

            {notice && (
              <Popup>
                <p>
                  * ?????? ?????? ????????? 3????????? ???????????? ?????? ????????? ????????? ?????? ???
                  ????????? ?????? ?????? ????????? ??? ????????????.
                </p>
              </Popup>
            )}
          </header>

          <Section>
            <Calendar
              allData={scheduleData}
              targetDay={null}
              targetDayList={targetDayList}
              currentDate={currentDate}
              targetDatetime={targetDatetime}
              setTargetDatetime={setTargetDatetime}
              setTargetDay={targetDayDataChangeHandler}
              addTargetDayListHandler={addTargetDayListHandler}
            />

            <CalendarHeader>
              <div>
                <Title>?????? ????????????</Title>
                <Comment>??????????????? ???????????? ????????? ????????? ??? ?????????.</Comment>
              </div>

              <AddButton type="button" onClick={newScheduleSaveHandler}>
                ????????????
              </AddButton>
            </CalendarHeader>
          </Section>

          <ScheduleInputCard
            data={newSchedule}
            targetDayData={targetDayData}
            changeHandler={newScheduleChangeHandler}
            saveHandler={newScheduleSaveHandler}
            deleteHandler={newScheduleDeleteHandler}
          />

          <ul>
            {Object.keys(newScheduleList).map((key) => (
              <ScheduleInputCard key={key} />
            ))}
          </ul>
        </Wrapper>

        <ButtonBox>
          <BottomButton type="button" onClick={addHandler}>
            ?????? ????????????
          </BottomButton>
        </ButtonBox>
      </Box>
    </>
  );
};

export default SchedulePanel;
