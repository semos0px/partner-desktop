import styled from "styled-components";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import InfoTag from "../../modules/infoTag";
import ClockField from "../../modules/time/clockField";
import WeekField from "../../modules/time/weekField";
import base from "../../styles/constants/base";

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

const BaseScheduleInputField = ({
  deleteHandler,
  addRegionHandler,
  deleteRegionHandler,
  addTimeHandler,
}) => {
  return (
    <Box>
      <List>
        {/* list의 item이 추가되어야 함 */}
        <Item>
          <DeleteButton>
            <img src={deleteIcon} />
          </DeleteButton>

          <SelectBox>
            <select>
              <option>위치 추가하기</option>
            </select>

            <SelectIcon>
              <img src={selectIcon} />
            </SelectIcon>
          </SelectBox>

          <LocationList>
            <LocationItem>
              <InfoTag
                text="서울 송파 잠실"
                color="blue"
                isLine={true}
                deleteHandler={deleteRegionHandler}
              />
            </LocationItem>

            <LocationItem>
              <InfoTag
                text="서울 송파 잠실"
                color="blue"
                isLine={true}
                deleteHandler={deleteRegionHandler}
              />
            </LocationItem>
          </LocationList>

          <WeekField />

          <ClockField />
        </Item>
      </List>
    </Box>
  );
};

export default BaseScheduleInputField;
