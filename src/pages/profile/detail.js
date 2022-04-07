import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/carousel";
import ImageBox from "../../components/imageBox";
import profileDetailData from "../../data/profile/detail";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import BottomButton from "../../modules/bottomButton";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";

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
  width: 120px;
  height: 120px;
  object-fit: cover;
  background-color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
`;

const MetaDataBox = styled.div`
  padding: ${60 + 15}px 15px 15px;
`;

const Title = styled.p`
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.large}px;
  margin-bottom: 20px;
`;

const CareerBox = styled.div`
  width: 100%;
  margin-bottom: 50px;

  p {
    font-weight: ${typography.weight.regular};
    margin-bottom: 10px;
  }

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
    image: { lesson },
  } = profileDetailData;

  return (
    <PageLayout headerTitle={`[${sub}] ${title}`} isGoBack={true}>
      <PaddingLayout>
        <ProfileImageBox>
          <Carousel />

          <MainImage />
        </ProfileImageBox>

        <MetaDataBox>
          <Title>{`[${sub}] ${title}`}</Title>

          <CareerBox>
            <p>시설/강사 경력</p>

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
      </PaddingLayout>

      <BottomButton
        text="수정하기"
        color={colors.blue}
        clickHandler={() => navigate(`/profile/${pid}/edit`)}
      />
    </PageLayout>
  );
};

export default ProfileDetailPage;
