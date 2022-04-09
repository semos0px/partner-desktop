import styled from "styled-components";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import BottomButton from "../../modules/bottomButton";
import colors from "../../styles/constants/colors";

const Form = styled.form``;

const ProfileEditPage = () => {
  const submitHandler = () => {
    console.log("저장하기");
  };

  return (
    <PageLayout headerTitle="프로필 수정" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Form onSubmit={submitHandler}></Form>

          <BottomButton
            text="저장하기"
            clickHandler={submitHandler}
            color={colors.blue}
          />
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ProfileEditPage;
