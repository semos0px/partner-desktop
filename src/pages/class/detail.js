import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DiscountBox from "../../components/discountBox";
import RecommendationBox from "../../components/recommendationBox";
import Tab from "../../components/tab";
import classDetailData from "../../data/class/detail";
import Overlay from "../../layouts/overlay";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import OverlayPortal from "../../overlayPortal";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import ClassContents from "./contents";
import ClassSchedule from "./schedule";

const VerticalLayout = styled.div`
  padding-bottom: ${base.height.bottomButton + 20}px;
`;

const ClassDetailPage = () => {
  const navigate = useNavigate();
  const { cid } = useParams();
  const [contents, setContents] = useState(true);
  const [openRecommendationInfo, setOpenRecommendationInfo] = useState(false);
  const [openDiscountInfo, setOpenDiscountInfo] = useState(false);

  const recommendationNoticeToggleHandler = () => {
    setOpenRecommendationInfo(!openRecommendationInfo);
  };

  const discountInfoToggleHandler = () => {
    setOpenDiscountInfo(!openDiscountInfo);
  };

  const viewContentsHandler = () => {
    setContents(true);
  };

  const viewScheduleHandler = () => {
    setContents(false);
  };

  // TODO: data fetching
  const {
    profile,
    lesson,
    lesson: { usage, faq, discount },
  } = classDetailData;

  const data = classDetailData;

  return (
    <>
      <PageLayout
        headerTitle={`[${profile.category}] ${profile.name}`}
        isGoBack={true}
      >
        <PaddingLayout>
          <RowLayout>
            <VerticalLayout>
              <Tab
                contents={contents}
                viewContentsHandler={viewContentsHandler}
                viewScheduleHandler={viewScheduleHandler}
              />

              {contents && (
                <ClassContents
                  data={data}
                  recommendationNoticeToggleHandler={
                    recommendationNoticeToggleHandler
                  }
                  openDiscountInfoHandler={discountInfoToggleHandler}
                />
              )}

              {!contents && (
                <ClassSchedule
                  data={data}
                  recommendationNoticeToggleHandler={
                    recommendationNoticeToggleHandler
                  }
                />
              )}

              <BottomButton
                text={contents ? "강습 수정하기" : "일정 수정하기"}
                clickHandler={() =>
                  navigate(
                    contents
                      ? `/class/${cid}/edit/contents`
                      : `/class/${cid}/edit/schedule`
                  )
                }
                color={colors.blue}
              />
            </VerticalLayout>
          </RowLayout>
        </PaddingLayout>

        <OverlayPortal>
          {openRecommendationInfo && (
            <Overlay toggleHandler={recommendationNoticeToggleHandler} />
          )}

          {openDiscountInfo && (
            <Overlay toggleHandler={discountInfoToggleHandler} />
          )}
        </OverlayPortal>

        {openDiscountInfo && (
          <DiscountBox data={discount} open={openDiscountInfo} />
        )}

        {openRecommendationInfo && (
          <RecommendationBox open={openRecommendationInfo} />
        )}
      </PageLayout>
    </>
  );
};

export default ClassDetailPage;
