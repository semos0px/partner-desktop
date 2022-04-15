import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/carousel";
import ImageBox from "../../components/imageBox";
import profileDetailData from "../../data/profile/detail";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import awardsIcon from "../../assets/icon/profile/awards.svg";
import flexbox from "../../styles/func/flexbox";

const PaddingLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${base.height.header}px;
  padding-bottom: 56px;
`;

const ProfileImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${colors.vanilla};
`;

const MainImage = styled.img`
  position: absolute;
  left: 15px;
  bottom: -60px;
  width: 90px;
  height: 90px;
  object-fit: cover;
  background-color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};

  ${responsive.mediaQuery.mobile} {
    width: 120px;
    height: 120px;
  }
`;

const MetaDataBox = styled.div`
  padding: ${60 + 15}px 15px;
`;

const Title = styled.p`
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.medium}px;
  margin-bottom: 20px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.large}px;
  }
`;

const CareerBox = styled.div`
  width: 100%;
  margin-bottom: 50px;

  ul {
    width: 100%;

    li {
      width: 50%;
      margin-bottom: 10px;
    }

    li::before {
      content: "•";
      margin-right: 5px;
    }

    ${responsive.mediaQuery.mobile} {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    margin-right: 5px;
  }

  p {
    font-weight: ${typography.weight.regular};
  }
`;

const ClassImageBox = styled.div`
  p {
    font-weight: ${typography.weight.regular};
    margin-bottom: 10px;
  }
`;

const ProfileDetailPage = () => {
  const { pid } = useParams();
  const navigate = useNavigate();

  // TODO: pid 통해서 data fetching
  const {
    title,
    career,
    category: { main, sub },
    image: { lesson, background },
  } = profileDetailData;

  return (
    <PageLayout headerTitle={`[${sub}] ${title}`} isGoBack={true}>
      <PaddingLayout>
        <ProfileImageBox>
          <Carousel classImageList={background} />

          <MainImage />
        </ProfileImageBox>

        <MetaDataBox>
          <Title>{`[${sub}] ${title}`}</Title>

          <CareerBox>
            <TitleBox>
              <img src={awardsIcon} />
              <p>시설/강사 경력</p>
            </TitleBox>

            <ul>
              {career.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CareerBox>

          <ClassImageBox>
            <p>강습 사진</p>
            <ImageBox imageList={lesson} />
          </ClassImageBox>
        </MetaDataBox>

        <RowLayout>
          <BottomButton
            text="수정하기"
            color={colors.blue}
            clickHandler={() => navigate(`/profile/${pid}/edit`)}
          />
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ProfileDetailPage;
