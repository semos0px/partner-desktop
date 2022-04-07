import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";

const Card = styled.li`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  opacity: ${({ status }) => (status === "확정 예약" ? 0.5 : 1)};
`;

const SLink = styled(Link)`
  width: 100%;
  display: flex;
`;

const Thumbnail = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 7px;
  background-color: ${colors.mediumGray};
  object-fit: cover;
  overflow: hidden;
  margin-right: 20px;
`;

const MetaData = styled.div`
  width: calc(100% - 160px);
  position: relative;
`;

const TitleBox = styled.div``;

const Title = styled.p`
  font-weight: ${typography.weight.regular};
  margin-bottom: 5px;
`;

const Status = styled.p`
  font-size: ${typography.size.small}px;
  color: ${colors.mediumGray};
`;

const PriceBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ClassCard = ({ classItem }) => {
  return (
    <Card status={classItem.status}>
      <SLink to="/class/123">
        <Thumbnail />

        <MetaData>
          <TitleBox>
            <Title>{classItem.title}</Title>
            <Status>{classItem.status}</Status>
          </TitleBox>

          <PriceBox>
            <p>{classItem.price.toLocaleString()}원</p>
          </PriceBox>
        </MetaData>
      </SLink>
    </Card>
  );
};

export default ClassCard;
