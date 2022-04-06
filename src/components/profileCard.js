import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const Card = styled.li`
  width: 100%;
  height: 300px;
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  margin: 10px;

  ${responsive.mediaQuery.mobile} {
    width: calc(50% - 20px);
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MetaData = styled.div`
  padding: 10px 20px;
`;

const Title = styled.p`
  font-size: ${typography.size.medium}px;
  margin-bottom: 5px;
`;

const RatingBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 5px;
  }

  span {
    margin-left: 3px;
    font-size: ${typography.size.tiny}px;
    color: ${colors.mediumGray}
    
`;

const RegionBox = styled.div`
  font-size: ${typography.size.micro}px;
`;

const ProfileCard = ({ profile }) => {
  return (
    <Card>
      <SLink to={`/profile/${profile.id}`}>
        <Thumbnail src={profile.thumbnail} />

        <MetaData>
          <Title>{`[${profile.category}] ${profile.nickname}(${profile.name})`}</Title>

          <RatingBox>
            <Rating>
              {profile.rating} <span>/5</span>
            </Rating>

            <Rating>{profile.like}</Rating>
          </RatingBox>

          <RegionBox>{profile.region.join(" | ")}</RegionBox>
        </MetaData>
      </SLink>
    </Card>
  );
};

export default ProfileCard;