import { Link } from "react-router-dom";
import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import RatingBox from "./ratingBox";
import regionIcon from "../assets/icon/region/region.png";
import flexbox from "../styles/func/flexbox";

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
  font-size: ${typography.size.base}px;
  margin-bottom: 5px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.medium}px;
  }
`;

const RegionBox = styled.div`
  font-size: ${typography.size.micro}px;
  ${flexbox("flex-start")}

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;

const ProfileCard = ({ profile }) => {
  return (
    <Card>
      <SLink to={`/profile/${profile.id}`}>
        <Thumbnail src={profile.thumbnail} />

        <MetaData>
          <Title>{`[${profile.category}] ${profile.nickname}(${profile.name})`}</Title>

          <RatingBox rating={profile.rating} like={profile.like} />

          <RegionBox>
            <img src={regionIcon} />
            {profile.region.join(" | ")}
          </RegionBox>
        </MetaData>
      </SLink>
    </Card>
  );
};

export default ProfileCard;
