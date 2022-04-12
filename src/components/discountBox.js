import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import zIndex from "../styles/constants/z-index";
import transition from "../styles/func/transition";

const Box = styled.div`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  bottom: 0px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  z-index: ${zIndex.navbar};
  height: 540px;
  overflow-y: scroll;

  header {
    padding: 20px 20px 0 20px;
  }

  p:nth-child(2) {
    margin-bottom: 30px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  ${responsive.mediaQuery.mobile} {
    height: 430px;
  }
`;

const Title = styled.p`
  font-size: ${typography.size.large}px;
  font-weight: ${typography.weight.regular};
  margin-bottom: 10px;
`;

const Card = styled.li`
  width: calc(50% - 20px);
  margin: 10px;
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  text-align: center;
  overflow: hidden;

  ${responsive.mediaQuery.mobile} {
    width: calc(25% - 20px);
  }
`;

const Top = styled.p`
  font-size: ${typography.size.base}px;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 10px 0;
`;

const Bottom = styled.div`
  padding: 15px 0;
`;

const DiscountBox = ({ data, open }) => {
  return (
    <Box open={open}>
      <header>
        <Title>동반 할인가를 확인해 주세요.</Title>
        <p>기존 1인 강습 금액에서 다수일 시 추가되는 금액입니다.</p>
      </header>

      <ul>
        {data.map((item, idx) => (
          <Card key={idx}>
            <Top>{item.num}인권</Top>

            <Bottom>
              <p>+{item.price.toLocaleString()}원</p>
            </Bottom>
          </Card>
        ))}
      </ul>
    </Box>
  );
};

export default DiscountBox;
