import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import zIndex from "../styles/constants/z-index";
import bangIcon from "../assets/icon/class/bang.svg";
import flexbox from "../styles/func/flexbox";
import transition from "../styles/func/transition";

const Box = styled.div`
  width: 100%;
  height: 480px;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  bottom: 0px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  z-index: ${zIndex.navbar};
  overflow-y: scroll;
  padding: 20px;
  transform: translate3d(0, 100%, 0);
  opacity: 0;
  transition: ${transition()};

  ${({ open }) => (open ? `transform: translate3d(0, 0, 0); opacity: 1;` : "")};

  header {
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  font-size: ${typography.size.large}px;
  font-weight: ${typography.weight.regular};
  margin-bottom: 10px;
`;

const Notice = styled.div`
  width: 100%;
  ${flexbox("flex-start")}
  margin-bottom: 20px;

  img {
    margin-right: 10px;
  }

  span {
    font-weight: ${typography.weight.regular};
  }
`;

const Contents = styled.div`
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.vanilla};
  padding: 20px;
`;

const DescriptionBox = styled.div`
  margin-bottom: 30px;

  div:first-child {
    margin-right: 20px;
  }

  div:last-child {
    p:first-child {
      color: ${colors.blue};
      font-size: ${typography.size.medium}px;
      margin-bottom: 5px;
    }

    p:last-child {
      font-size: ${typography.size.small}px;
    }
  }

  span {
    display: block;
    white-space: nowrap;
    padding: 20px 30px;
    border-radius: 10px;
  }
`;

const Certain = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`;

const Uncertain = styled.div`
  display: flex;

  span {
    background-color: #2b84ef4a;
    color: ${colors.blue};
  }
`;

const BottomText = styled.p`
  font-size: ${typography.size.small}px;
`;

const RecommendationBox = ({ open }) => {
  return (
    <Box open={open}>
      <header>
        <Title>확정 예약과 확인 예약을 선택해 주세요.</Title>
        <p>
          예약 일정은 강습마다 선택이 가능하며, 자유롭게 수정할 수 있습니다.
        </p>
      </header>

      <Contents>
        <Notice>
          <img src={bangIcon} />
          <span> 세모스 예약 유형 안내</span>
        </Notice>

        <DescriptionBox>
          <Certain>
            <div>
              <span>확정 예약</span>
            </div>

            <div>
              <p>01. 확정 예약:</p>
              <p>수강생의 강습 결제와 동시에 예약이 확정돼요.</p>
            </div>
          </Certain>

          <Uncertain>
            <div>
              <span>확인 예약</span>
            </div>

            <div>
              <p>02. 확인 예약:</p>
              <p>
                수강생이 강습을 선 결제한 후에 강사님께 일정을 한번 더
                확인합니다. 강사님이 일정을 수락하거나 거절할 수 있어요.
              </p>
            </div>
          </Uncertain>
        </DescriptionBox>

        <BottomText>
          예약 진행 과정은 카카오 알림톡으로 안내해드립니다.
        </BottomText>
      </Contents>
    </Box>
  );
};

export default RecommendationBox;
