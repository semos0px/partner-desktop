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
import BottomLayout from "../../layouts/bottomLayout";
import responsive from "../../styles/constants/responsive";
import SelectField from "../../components/selectField";

const ProfileSection = styled.section`
  width: 100%;
  margin-bottom: 50px;

  ${responsive.mediaQuery.mobile} {
    ${flexbox()}
  }
`;

const Top = styled.div`
  ${flexbox("flex-start")};
  margin-bottom: 20px;

  ${responsive.mediaQuery.mobile} {
    width: 100%;
    flex-shrink: 0.6;
    margin-right: 50px;
  }
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors.mediumGray};
  object-fit: cover;
  margin-right: 30px;

  ${responsive.mediaQuery.mobile} {
    width: 90px;
    height: 90px;
  }
`;

const MetaData = styled.div``;

const Title = styled.p`
  font-size: ${typography.size.base}px;
  margin-bottom: 5px;
  font-weight: ${typography.weight.regular};

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

const Main = styled.main`
  width: 100%;
`;

const ClassSection = styled.section`
  width: 100%;
  margin-bottom: 50px;

  ul {
    width: 100%;
    margin-top: 30px;
  }
`;

const Description = styled.p`
  color: ${colors.mediumGray};
  font-size: ${typography.size.tiny}px;
  /* margin-bottom: 30px; */

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const ClassPage = () => {
  const [inputValue, setInputValue] = useState({
    filter: "",
  });

  const [profile, setProfile] = useState({
    id: "123",
    category: "??????????????????",
    name: "?????????",
    nickname: "?????????",
    rating: 4.5,
    like: 101,
    region: ["?????? ??????/??????", "?????? ??????"],
    // thumbnail: profileThumbnail,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(inputValue);

  return (
    <PageLayout headerTitle="??????">
      <PaddingLayout>
        <BottomLayout>
          <RowLayout>
            <ProfileSection>
              <Top>
                <Avatar />

                <MetaData>
                  <Title>{`[${profile.category}] ${profile.nickname}(${profile.name})`}</Title>

                  <RatingBox rating={profile.rating} like={profile.like} />

                  <RegionBox>
                    <img src={regionIcon} />
                    {profile.region.join(" | ")}
                  </RegionBox>
                </MetaData>
              </Top>

              <SelectField
                name="filter"
                defaultText="????????? ??????"
                value={inputValue.filter}
                optionList={[{ text: "?????????(?????????)", value: "1" }]}
                changeHandler={inputChangeHandler}
              />
            </ProfileSection>

            <Main>
              <ClassSection>
                <Title>????????????</Title>
                <Description>
                  ?????? ?????? ?????? ????????? ?????? ????????? ????????? ?????????.
                </Description>

                <ul>
                  {classList.general.map((item, idx) => (
                    <ClassCard key={idx} classItem={item} />
                  ))}
                </ul>
              </ClassSection>

              <ClassSection>
                <Title>????????? ?????? ??????</Title>
                <ul>
                  {classList.crew.map((item, idx) => (
                    <ClassCard key={idx} classItem={item} />
                  ))}
                </ul>
              </ClassSection>
            </Main>
          </RowLayout>
        </BottomLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ClassPage;
