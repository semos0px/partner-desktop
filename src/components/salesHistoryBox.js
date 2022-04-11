import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  width: 100%;
  ${flexbox("space-between")}
  margin-top: 20px;
  margin-bottom: 30px;

  p:last-child {
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
  }
`;

const MetaData = styled.div`
  width: 100%;

  div {
    ${flexbox("space-between")}

    p:first-child {
      color: ${colors.mediumGray};
    }
  }
`;

const A = styled.a`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 5px;
  border-radius: 5px;
`;

const SalesHistoryBox = ({ payment, member }) => {
  return (
    <Box>
      <TitleBox>
        <p>수강생 정보</p>
        <p>결제 번호: {payment.number}</p>
      </TitleBox>

      <MetaData>
        <div>
          <p>이름</p>
          <p>{member.nickname}님</p>
        </div>

        <div>
          <p>전화 걸기</p>
          <A href={`tel:${member.mobile}`}>통화하기</A>
        </div>
      </MetaData>
    </Box>
  );
};

export default SalesHistoryBox;
