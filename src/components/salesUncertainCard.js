import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import chevronIcon from "../assets/icon/page/chevron.svg";

const Card = styled.li`
  width: 100%;
  color: ${colors.mediumGray};
  overflow: hidden;
`;

const SLink = styled(Link)`
  ${flexbox("space-between", "center")};
  width: 100%;
  height: 100%;
`;

const LeftData = styled.div`
  height: 100%;
  ${flexbox("flex-start", "flex-start", "column")}
`;

const RightData = styled.div`
  max-width: 40%;
  height: 100%;
  ${flexbox("center", "flex-end", "column")}

  ${responsive.mediaQuery.mobile} {
    width: 100%;
  }
`;

const Chevron = styled.img`
  transform: rotate(-90deg);
`;

const Title = styled.p`
  font-size: ${typography.size.medium}px;
  color: ${colors.black};
  font-weight: ${typography.weight.regular};
`;

const Time = styled.p`
  color: ${colors.blue};
  font-weight: ${typography.weight.regular};
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: ${typography.size.small}px;
`;

const Border = styled.div`
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background-color: ${colors.vanilla};
`;

const SalesUncertainCard = ({ sales, length, idx }) => {
  return (
    <>
      <Card>
        <SLink to={`/sales/${sales.id}`}>
          <LeftData>
            <Title>{`[${sales.category}] ${sales.title}`}</Title>
            <Time>강습일: {sales.datetime}</Time>
            <Price>{sales.price.toLocaleString()}원</Price>
          </LeftData>

          <RightData>
            <Chevron src={chevronIcon} />
          </RightData>
        </SLink>
      </Card>
      {length - 1 !== idx && <Border />}
    </>
  );
};

export default SalesUncertainCard;
