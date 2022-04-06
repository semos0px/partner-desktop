import styled from "styled-components";
import ProfileCard from "../../components/profileCard";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import profileThumbnail from "../../assets/images/profile/thumbnail.png";

const CardList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProfilePage = () => {
  // TODO: partner의 profile data fetching
  const profiles = [
    {
      id: "123",
      category: "스쿠버다이빙",
      name: "김현주",
      nickname: "핸강사",
      rating: 4.5,
      like: 101,
      region: ["서울 송파/강동", "경기 수원"],
      thumbnail: profileThumbnail,
    },
    {
      id: "123",
      category: "프리다이빙",
      name: "김현주",
      nickname: "핸강사",
      rating: 4.5,
      like: 101,
      region: ["서울 송파/강동", "경기 수원"],
      thumbnail: profileThumbnail,
    },
    {
      id: "123",
      category: "수영",
      name: "김현주",
      nickname: "핸강사",
      rating: 4.5,
      like: 101,
      region: ["서울 송파/강동", "경기 수원"],
      thumbnail: profileThumbnail,
    },
    {
      id: "123",
      category: "서핑",
      name: "김현주",
      nickname: "핸강사",
      rating: 4.5,
      like: 101,
      region: ["서울 송파/강동", "경기 수원"],
      thumbnail: profileThumbnail,
    },
  ];

  return (
    <PageLayout headerTitle="프로필">
      <PaddingLayout>
        <CardList>
          {profiles.map((profile, idx) => (
            <ProfileCard key={idx} profile={profile} />
          ))}
        </CardList>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ProfilePage;
