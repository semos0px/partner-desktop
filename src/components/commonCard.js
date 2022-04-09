import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Card = styled.li`
  width: 100%;
  height: 120px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  color: ${colors.mediumGray};
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  margin-bottom: 20px;
`;

const SLink = styled(Link)`
  ${flexbox("space-between")};
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

const LeftData = styled.div`
  height: 100%;
  ${flexbox("flex-start", "flex-start", "column")}
`;

const RightData = styled.div`
  max-width: 40%;
  height: 100%;
  ${flexbox("space-between", "flex-end", "column")}

  time {
    display: block;
    font-size: ${typography.size.small}px;
    white-space: nowrap;
  }

  ${responsive.mediaQuery.mobile} {
    width: 100%;
  }
`;

const StatusIcon = styled.span`
  display: inline-block;
  background-color: ${({ color }) => color};
  color: ${colors.white};
  padding: 5px;
  border-radius: 5px;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.small}px;
  margin-bottom: 5px;
  white-space: nowrap;
`;

const Nickname = styled.p`
  font-size: ${typography.size.medium}px;
  color: ${colors.black};
  font-weight: ${typography.weight.regular};
`;

const Title = styled.p`
  color: ${colors.black};
  margin: 10px 0;
`;

const Category = styled.p`
  font-size: ${typography.size.small}px;
`;

const CommonCard = ({ item, page }) => {
  return (
    <Card>
      <SLink to={`/${page}/${item.id}`}>
        <LeftData>
          <Nickname>{item.nickname}님</Nickname>
          <Title>{item.lesson}</Title>
          <Category>
            {page === "reports" ? item.category : item.comment}
          </Category>
        </LeftData>

        <RightData>
          <time>{item.datetime}</time>
          {page === "reports" && (
            <StatusIcon color={item.status ? colors.mediumGray : colors.red}>
              {item.status ? "작성 완료" : "미작성"}
            </StatusIcon>
          )}

          {page === "inquiry" && (
            <StatusIcon color={item.status ? colors.mediumGray : colors.red}>
              {item.status ? "확인 완료" : "미확인"}
            </StatusIcon>
          )}
        </RightData>
      </SLink>
    </Card>
  );
};

export default CommonCard;