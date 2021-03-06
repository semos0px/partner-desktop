import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Card = styled.li`
  font-family: ${fonts.kr.secondary};
  width: 100%;
  height: 120px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  color: ${colors.mediumGray};
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  margin-bottom: 20px;
  font-family: ${fonts.kr.secondary.regular};
`;

const SLink = styled(Link)`
  ${flexbox("space-between", "center")};
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const LeftData = styled.div`
  height: 100%;
  ${flexbox("flex-start", "flex-start", "column")}
`;

const RightData = styled.div`
  max-width: 40%;
  height: 100%;
  ${flexbox("flex-end", "flex-end", "column")}

  time {
    display: block;
    font-size: ${typography.size.small}px;
    white-space: nowrap;
  }

  ${responsive.mediaQuery.mobile} {
    width: 100%;
  }
`;

const Status = styled.span`
  display: inline-block;
  color: ${colors.mediumGray};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${colors.mediumGray};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.tiny}px;
  margin-bottom: 5px;
  white-space: nowrap;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const Title = styled.p`
  font-size: ${typography.size.base}px;
  color: ${colors.black};
  font-weight: ${typography.weight.regular};

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.medium}px;
  }
`;

const Time = styled.p`
  color: ${colors.black};
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: ${typography.size.small}px;
`;

const CancelCard = ({ cancel }) => {
  return (
    <Card>
      <SLink to={`/cancel/${cancel.id}`}>
        <LeftData>
          <Title>{`[${cancel.category}] ${cancel.title}`}</Title>
          <Time>?????????: {cancel.datetime}</Time>
          <Price>{cancel.price.toLocaleString()}???</Price>
        </LeftData>

        <RightData>
          <Status>??????/??????</Status>
        </RightData>
      </SLink>
    </Card>
  );
};

export default CancelCard;
