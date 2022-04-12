import styled from "styled-components";
import colors from "../styles/constants/colors";
import transition from "../styles/func/transition";

const Box = styled.nav`
  width: 100%;

  ul {
    width: 100%;
    display: flex;

    li {
      width: 50%;
      text-align: center;
      transition: ${transition()};
      cursor: pointer;

      p {
        margin-bottom: 10px;
      }
    }
  }
`;

const ContentsTab = styled.li`
  color: ${({ isActive }) => (isActive ? colors.blue : colors.black)};
  border-bottom: 5px solid
    ${({ isActive }) => (isActive ? colors.blue : colors.vanilla)};
`;

const ScheduleTab = styled.li`
  color: ${({ isActive }) => (isActive ? colors.blue : colors.black)};
  border-bottom: 5px solid
    ${({ isActive }) => (isActive ? colors.blue : colors.vanilla)};
`;

const Tab = ({ contents, viewContentsHandler, viewScheduleHandler }) => {
  return (
    <Box>
      <ul>
        <ContentsTab isActive={contents} onClick={viewContentsHandler}>
          <p>강습 내용</p>
        </ContentsTab>

        <ScheduleTab isActive={!contents} onClick={viewScheduleHandler}>
          <p>일정</p>
        </ScheduleTab>
      </ul>
    </Box>
  );
};

export default Tab;
