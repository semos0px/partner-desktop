import { useState } from "react";
import styled from "styled-components";
import RecommendationBox from "../../components/recommendationBox";
import Overlay from "../../layouts/overlay";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import ClassInputField from "../../modules/classInputField";
import ToggleButton from "../../modules/toggleButton";
import OverlayPortal from "../../overlayPortal";
import MapService from "../../service/map";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";

const Wrapper = styled.div`
  padding-bottom: ${base.height.input + 20}px;
`;

const Form = styled.form`
  position: relative;
`;

const ClassEditContentsPage = () => {
  const [openRecommendationInfo, setOpenRecommendationInfo] = useState(false);
  const [openClass, setOpenClass] = useState(false);

  const [classData, setClassData] = useState({
    title: "",
    status: true,
    price: "",
    maximum: 4,
    discount: [],
    option: [],
    location: [{ main: null, detail: null }],
    mainImage: {
      base: "",
      files: "",
    },
    schedule: [],
    certain: [],
    uncertain: [],
    material: [],
    faq: [],
    detail: null,
    additional: null,
  });

  console.log(classData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("강습 저장하기");
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    setClassData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addHandler = (name, value, clearFunc) => {
    let newData;

    switch (name) {
      case "discount":
        newData = {
          id: new Date(),
          personnel: value.personnel,
          price: value.price,
        };
        break;

      case "option":
        newData = {
          id: new Date(),
          text: value.text,
          price: value.price,
        };
        break;
      default:
        newData = { id: new Date(), text: value };
    }

    setClassData((prev) => ({
      ...prev,
      [name]: [...prev[name], newData],
    }));

    clearFunc();
  };

  const deleteHandler = (name, id) => {
    console.log(name, id);
    const filteredData = classData[name].filter((item) => item.id !== id);

    setClassData((prev) => ({
      ...prev,
      [name]: filteredData,
    }));
  };

  const putAddress = (data) => {
    const { address } = data;

    setClassData((prev) => ({
      ...prev,
      location: [...prev.location, { main: address, text: null }],
    }));
  };

  const mapService = new MapService(putAddress);

  // TODO: data fetching - 강사 정보

  const recommendationNoticeToggleHandler = () => {
    setOpenRecommendationInfo(!openRecommendationInfo);
  };

  const recommendationCertainHandler = () => {
    setClassData((prev) => ({ ...prev, status: true }));
  };

  const recommendationUncertainHandler = () => {
    setClassData((prev) => ({ ...prev, status: false }));
  };

  const classToggleHandler = () => {
    setOpenClass(!openClass);
  };

  const searchAddressHandler = () => {
    mapService.open();
  };

  const imageChangeHandler = (e) => {
    const { name, files } = e.target;

    let reader = new FileReader();

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      setClassData((prev) => ({
        ...prev,
        mainImage: {
          base: previewImgUrl,
          files,
        },
      }));
    };
  };

  return (
    <>
      <PageLayout headerTitle="[프리다이빙] 고고다이브(백강사)" isGoBack={true}>
        <PaddingLayout>
          <RowLayout>
            <Wrapper>
              <Form onSubmit={submitHandler}>
                <ToggleButton
                  text="강습 열기"
                  subText="강습 닫기"
                  toggleHandler={classToggleHandler}
                  status={openClass}
                />
                <ClassInputField
                  recommendationNoticeToggleHandler={
                    recommendationNoticeToggleHandler
                  }
                  certainHandler={recommendationCertainHandler}
                  uncertainHandler={recommendationUncertainHandler}
                  classData={classData}
                  searchAddressHandler={searchAddressHandler}
                  changeHandler={formChangeHandler}
                  imageChangeHandler={imageChangeHandler}
                  addHandler={addHandler}
                  deleteHandler={deleteHandler}
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
