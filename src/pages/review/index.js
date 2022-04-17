import styled from "styled-components";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import colors from "../../styles/constants/colors";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import regionIcon from "../../assets/icon/region/region.png";
import { useState } from "react";
import profileThumbnail from "../../assets/images/profile/thumbnail.png";
import RatingBox from "../../components/ratingBox";
import base from "../../styles/constants/base";
import responsive from "../../styles/constants/responsive";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import reviewList from "../../data/review";
import StarBox from "../../modules/starBox";
import ReviewCard from "../../components/reviewCard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 2px solid ${colors.vanilla};

  ${responsive.mediaQuery.mobile} {
    ${flexbox("flex-start")}
  }
`;

const Main = styled.main`
  header {
    width: 100%;
    margin-bottom: 30px;
    ${flexbox("space-between", "flex-start")}
  }
`;

const ProfileBox = styled.div`
  position: relative;
  width: 30%;
  align-self: end;
  margin-bottom: 10px;

  ${responsive.mediaQuery.mobile} {
    width: 30%;
    align-self: flex-start;
    margin-bottom: 0px;
  }
`;

const SortBox = styled.div`
  position: relative;
  width: 30%;
  align-self: start;
  margin-bottom: 10px;

  ${responsive.mediaQuery.mobile} {
    width: 30%;
    align-self: flex-start;
    margin-bottom: 0px;
  }
`;

const ProfileSelectField = styled.select`
  width: 100%;
  padding: 10px;
  background-color: ${colors.white};
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  &:focus {
    box-shadow: ${base.boxShadow};
  }
`;

const SortSelectField = styled.select`
  width: 100%;
  padding: 10px;
  background-color: ${colors.white};
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  &:focus {
    box-shadow: ${base.boxShadow};
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 12px;
  pointer-events: none;
`;

const ProfileSection = styled.section`
  width: 100%;
  ${flexbox("flex-start")};

  ${responsive.mediaQuery.mobile} {
    width: 70%;
  }
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

const ReviewPage = () => {
  const reviewData = reviewList;

  const reviews = Object.keys(reviewData).map((key) => reviewData[key]);

  const [inputValue, setInputValue] = useState({
    profile: "",
    sort: "",
  });

  const [reviewValue, setReviewValue] = useState(
    Object.keys(reviewData).map((key) => ({
      id: key,
      answer: reviewData[key].answer,
    }))
  );

  console.log(reviewValue);

  console.log(inputValue);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reviewChangeHandler = (e) => {
    const { name, value } = e.target;

    setReviewValue((prev) => {
      const data = prev.filter((item) => name.includes(item.id));

      return [...prev];
    });
  };

  // profileOption을 통해 필터된 프로필이 선택되어야 함(쿼리 사용)
  const profile = {
    id: "123",
    category: "스쿠버다이빙",
    name: "김현주",
    nickname: "핸강사",
    rating: 4.5,
    like: 101,
    region: ["서울 송파/강동", "경기 수원"],
    thumbnail: profileThumbnail,
  };

  return (
    <PageLayout headerTitle="후기 답변 관리" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
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

            <ProfileBox>
              <ProfileSelectField
                name="profile"
                defaultValue={inputValue.profile}
                onChange={inputChangeHandler}
              >
                <option value="">프로필 선택</option>
                <option value="1">핸강사[김현주]</option>
                {/* 파트너의 프로필 수에 따라서 달라질 것 */}
              </ProfileSelectField>

              <SelectIcon>
                <img src={selectIcon} />
              </SelectIcon>
            </ProfileBox>
          </Wrapper>

          <Main>
            <header>
              <div>
                <Title>후기({reviews.length}개)</Title>

                <StarBox
                  rating={
                    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                  }
                />
              </div>

              <SortBox>
                <SortSelectField
                  name="sort"
                  defaultValue={inputValue.sort}
                  onChange={inputChangeHandler}
                >
                  <option value="">별점 낮은 순</option>
                  <option value="1">별점 높은 순</option>
                </SortSelectField>

                <SelectIcon>
                  <img src={selectIcon} />
                </SelectIcon>
              </SortBox>
            </header>

            <ul>
              {reviews.map((item, idx) => (
                <ReviewCard
                  key={idx}
                  review={item}
                  changeHandler={inputChangeHandler}
                  inputValue={inputValue}
                />
              ))}
            </ul>
          </Main>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ReviewPage;
