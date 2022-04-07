import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
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
  height: 100%;
  ${flexbox("space-between", "flex-end", "column")}

  time {
    display: block;
    font-size: ${typography.size.small}px;
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

const ReportsCard = ({ report }) => {
  return (
    <Card>
      <SLink to={`/reports/${report.id}`}>
        <LeftData>
          <Nickname>{report.nickname}님</Nickname>
          <Title>{report.lesson}</Title>
          <Category>{report.category}</Category>
        </LeftData>

        <RightData>
          <time>{report.datetime}</time>
          <StatusIcon color={report.status ? colors.mediumGray : colors.red}>
            {report.status ? "작성 완료" : "미작성"}
          </StatusIcon>
        </RightData>
      </SLink>
    </Card>
  );
};

export default ReportsCard;
