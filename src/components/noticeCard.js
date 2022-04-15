import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const Card = styled.li`
  width: 100%;
  height: 250px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  margin: 10px;

  ${responsive.mediaQuery.mobile} {
    width: calc(50% - 20px);
  }
`;

const A = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${colors.lightGray};

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(transparent 1%, ${colors.darkGray});
  }
`;

const MetaData = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Date = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 5px;
  font-size: ${typography.size.tiny}px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const NoticeIcon = styled.span`
  display: inline-block;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 5px;
  border-radius: 5px;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.tiny}px;
  margin-bottom: 5px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const Title = styled.p`
  font-size: ${typography.size.base}px;
  color: ${colors.white};

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.medium}px;
  }
`;

const NoticeCard = ({ notice }) => {
  return (
    <Card>
      <A href={notice.url}>
        <ImgBox />

        <MetaData>
          <Date>{`${notice.year} - ${notice.month}/${notice.day}`}</Date>

          <Footer>
            <NoticeIcon>공지사항</NoticeIcon>
            <Title>{notice.title}</Title>
          </Footer>
        </MetaData>
      </A>
    </Card>
  );
};

export default NoticeCard;
