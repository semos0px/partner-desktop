import { useState } from "react";
import styled from "styled-components";
import ClassCard from "../../components/classCard";
import RatingBox from "../../components/ratingBox";
import classList from "../../data/class";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import colors from "../../styles/constants/colors";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import regionIcon from "../../assets/icon/region/region.png";

const ProfileSection = styled.section`
  width: 100%;
  ${flexbox("flex-start")};
  margin-bottom: 50px;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${colors.mediumGray};
  object-fit: cover;
  margin-right: 30px;
`;

const MetaData = styled.div``;

const Title = styled.p`
  font-size: ${typography.size.medium}px;
  margin-bottom: 5px;
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

const Main = styled.main`
  width: 100%;
`;

const ClassSection = styled.section`
  width: 100%;
  margin-bottom: 50px;

  ul {
    width: 100%;
  }
`;

const Description = styled.p`
  color: ${colors.mediumGray};
  font-size: ${typography.size.small}px;
  margin-bottom: 30px;
`;

const ClassPage = () => {
  const [profile, setProfile] = useState({
    id: "123",
    category: "스쿠버다이빙",
    name: "김현주",
    nickname: "핸강사",
    rating: 4.5,
    like: 101,
    region: ["서울 송파/강동", "경기 수원"],
    // thumbnail: profileThumbnail,
  });

  return (
    <PageLayout headerTitle="강습">
      <PaddingLayout>
        <RowLayout>
          <ProfileSection>
            <Avatar />

            <MetaData>
              <Title>{`[${profile.category}] ${profile.nickname}(${profile.name})`}</Title>

              <RatingBox rating={profile.rating} like={profile.like} />

              <RegionBox>
                <img src={regionIcon} />
                {profile.region.join(" | ")}
              </RegionBox>
            </MetaData>
          </ProfileSection>

          <Main>
            <ClassSection>
              <Title>일반강습</Title>
              <Description>
                수정 또는 일정 등록은 해당 강습을 클릭해 주세요.
              </Description>

              <ul>
                {classList.general.map((item, idx) => (
                  <ClassCard key={idx} classItem={item} />
                ))}
              </ul>
            </ClassSection>

            <ClassSection>
              <Title>세모스 크루 강습</Title>
              {classList.crew.map((item, idx) => (
                <ClassCard key={idx} classItem={item} />
              ))}
            </ClassSection>
          </Main>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ClassPage;
