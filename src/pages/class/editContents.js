import { useState } from "react";
import styled from "styled-components";
import RecommendationBox from "../../components/recommendationBox";
import Overlay from "../../layouts/overlay";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import ClassInputField from "../../modules/classInputField";
import OverlayPortal from "../../overlayPortal";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";

const Wrapper = styled.div`
  padding-bottom: ${base.height.input + 20}px;
`;

const Form = styled.form``;

const ClassEditContentsPage = () => {
  const [openRecommendationInfo, setOpenRecommendationInfo] = useState(false);
  const [openClass, setOpenClass] = useState(false);

  const [classData, setClassData] = useState({
    title: null,
    status: true,
    price: null,
    maximum: null,
    discount: [{}],
    option: [{}],
    location: [{}],
    mainImage: null,
    schedule: [],
    certain: [],
    except: [],
    material: [],
    faq: [],
    detail: null,
    additional: null,
  });

  console.log(classData.status);

  // TODO: data fetching - 강사 정보

  const recommendationNoticeToggleHandler = () => {
    setOpenRecommendationInfo(!openRecommendationInfo);
  };

  const recommendationCertainHandler = (e) => {
    e.preventDefault();
    setClassData((prev) => ({ ...prev, status: true }));
  };

  const recommendationUncertainHandler = (e) => {
    e.preventDefault();
    setClassData((prev) => ({ ...prev, status: false }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("강습 저장하기");
  };

  return (
    <>
      <PageLayout headerTitle="[프리다이빙] 고고다이브(백강사)" isGoBack={true}>
        <PaddingLayout>
          <RowLayout>
            <Wrapper>
              <Form>
                <ClassInputField
                  recommendationNoticeToggleHandler={
                    recommendationNoticeToggleHandler
                  }
                  certainHandler={recommendationCertainHandler}
                  uncertainHandler={recommendationUncertainHandler}
                  classData={classData}
                />
              </Form>
            </Wrapper>
            <BottomButton
              color={colors.blue}
              text="강습 저장하기"
              clickHandler={submitHandler}
            />
          </RowLayout>
        </PaddingLayout>

        <OverlayPortal>
          {openRecommendationInfo && (
            <Overlay toggleHandler={recommendationNoticeToggleHandler} />
          )}
        </OverlayPortal>

        {openRecommendationInfo && (
          <RecommendationBox open={openRecommendationInfo} />
        )}
      </PageLayout>
    </>
  );
};

export default ClassEditContentsPage;
