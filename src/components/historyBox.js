import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import DateField from "./dateField";

const Box = styled.div`
  width: 100%;
`;

const TopBox = styled.div`
  width: 100%;
  ${flexbox("space-between")}
  margin: 30px 0 50px 0;
`;

const BottomBox = styled.div`
  width: 100%;
  ${flexbox("space-between")}
`;

const SLink = styled(Link)`
  display: none;
  color: ${colors.blue};
  background-color: ${colors.white};
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 5px;

  ${responsive.mediaQuery.mobile} {
    display: block;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  ${flexbox("flex-end")}
`;

const FLink = styled(Link)`
  display: inline-block;
  color: ${colors.blue};
  background-color: ${colors.white};
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 5px;
  margin-top: 30px;
  justify-self: flex-end;

  ${responsive.mediaQuery.mobile} {
    display: none;
  }
`;

const Total = styled.div`
  font-size: 22px;
  font-weight: 400;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.large}px;
  }
`;

const Income = styled.div`
  font-weight: ${typography.weight.bold};

  span {
    font-size: ${typography.size.small}px;
    margin-left: 3px;
  }
`;

const HistoryBox = ({ changeHandler, cnt, income, value }) => {
  return (
    <Box>
      <TopBox>
        <DateField
          label="판매 금액을 확인해 보세요!"
          name="datetime"
          value={value}
          changeHandler={changeHandler}
        />

        <SLink to="/cancel">취소/환불 내역 &gt;</SLink>
      </TopBox>

      <BottomBox>
        <Total>총 {cnt}건</Total>
        <Income>
          {income.toLocaleString()}
          <span>원</span>
        </Income>
      </BottomBox>

      <Wrapper>
        <FLink to="/cancel">취소/환불 내역 &gt;</FLink>
      </Wrapper>
    </Box>
  );
};

export default HistoryBox;
