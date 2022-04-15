import styled from "styled-components";
import BottomButton from "../modules/bottomButton";
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

    img {
      width: 25px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
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
  width: 340px;
  padding: 10px;
  border-radius: ${base.borderRadius}px;
  font-size: ${typography.size.small}px;
  ${flexbox()}
  top: 10px;
  left: 170px;
`;

const Section = styled.section`
  header {
    ${flexbox("space-between", "flex-start")}
  }

  button {
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 5px 10px;
    border-radius: 40px;
    font-size: ${typography.size.small}px;
  }
`;

const SchedulePanel = ({ open }) => {
  const [notice, setNotice] = useState(false);
  const addHandler = () => {};

  return (
    <>
      <Box open={open}>
        <Wrapper>
          <header>
            <Title>
              날짜 선택하기{" "}
              <img
                src={bangIcon}
                onMouseOver={() => setNotice(true)}
                onMouseOut={() => setNotice(false)}
              />
            </Title>
            <Comment>여러 날짜를 함께 선택할 수 있어요.</Comment>

            {notice && (
              <Popup>
                <p>
                  * 모든 강습 신청은 3일전에 마감되며 최소 인원을 넘기지 못할 시
                  강습을 진행 또는 취소할 수 있습니다.
                </p>
              </Popup>
            )}
          </header>

          <Section>
            <header>
              <div>
                <Title>일정 입력하기</Title>
                <Comment>추가하기로 여러개의 강습을 등록할 수 있어요.</Comment>
              </div>

              <button type="button" onClick={addHandler}>
                추가하기
              </button>
            </header>
          </Section>
        </Wrapper>

        <RowLayout>
          <BottomButton text="일정 저장하기" color={colors.blue} />
        </RowLayout>
      </Box>
    </>
  );
};

export default SchedulePanel;
