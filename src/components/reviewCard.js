import { useState } from "react";
import styled from "styled-components";
import reviewDefaultIcon from "../assets/icon/review/review-default.svg";
import StarListBox from "../modules/starListBox";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import TextareaField from "./textareaField";
import editIcon from "../assets/icon/review/edit.svg";
import saveIcon from "../assets/icon/review/save.svg";
import deleteIcon from "../assets/icon/review/delete.svg";

const Item = styled.li`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Thumbnail = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const Metadata = styled.div`
  ${flexbox("space-between", "flex-start")}

  time {
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
  }
`;

const Left = styled.div`
  p {
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

const ReviewBox = styled.div`
  p {
    width: 100%;
  }
`;

const Status = styled.p`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  color: ${colors.red};
  border: 1px solid ${colors.red};
  font-size: ${typography.size.tiny}px;
  margin-top: 10px;
`;

const NoticeBox = styled.div`
  width: 100%;
  ${flexbox("space-between", "center")}
  margin-top: 10px;

  button {
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 5px 10px;
    border-radius: 20px;
  }
`;

const AnswerBox = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;

  time {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
  }
`;

const Form = styled.form``;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 15px;
  right: 20px;
  ${flexbox("flex-end")};

  button {
    margin-left: 10px;
  }
`;

const SaveButton = styled.button``;

const ReviewCard = ({
  review,
  inputValue,
  changeHandler,
  submitHandler,
  deleteHandler,
}) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const hideNickname = (name) => {
    let hideName = name.charAt(0);
    for (var i = 1; i < name.length; i++) {
      hideName += i < name.length ? "*" : name.charAt(i);
    }
    return hideName;
  };

  const answerOpenHandler = () => {
    setOpen(!open);
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  return (
    <Item>
      <Thumbnail
        src={
          review.member.thumbnail ? review.member.thumbnail : reviewDefaultIcon
        }
      />

      <ContentBox>
        <Metadata>
          <Left>
            <StarListBox rating={review.rating} />
            <p>
              {hideNickname(review.member.nickname)} | {review.lesson}
            </p>
          </Left>

          <time>{review.datetime}</time>
        </Metadata>

        <ReviewBox>
          <p>{review.comment}</p>
        </ReviewBox>

        {!review.answer && !open && (
          <NoticeBox>
            <Status>답변 미작성</Status>
            <button type="button" onClick={answerOpenHandler}>
              답변 남기기
            </button>
          </NoticeBox>
        )}

        <AnswerBox>
          {!review.answer && open && (
            <Form onSubmit={submitHandler}>
              <Wrapper>
                <TextareaField
                  color="blue"
                  changeHandler={changeHandler}
                  value={review.answer ? review.answer : ""}
                  isPadding={true}
                />
                <ButtonBox>
                  <SaveButton type="button" onClick={submitHandler}>
                    <img src={saveIcon} />
                  </SaveButton>
                </ButtonBox>
              </Wrapper>
            </Form>
          )}

          {review.answer && (
            <Form onSubmit={submitHandler}>
              <Wrapper>
                <TextareaField
                  color="blue"
                  changeHandler={changeHandler}
                  value={review.answer ? review.answer : ""}
                  isPadding={true}
                />

                {!edit && <time>{review.datetime}</time>}

                <ButtonBox>
                  <button type="button" onClick={editHandler}>
                    <img src={editIcon} />
                  </button>

                  {!edit && (
                    <button type="button" onClick={deleteHandler}>
                      <img src={deleteIcon} />
                    </button>
                  )}

                  {edit && (
                    <button type="button" onClick={submitHandler}>
                      <img src={saveIcon} />
                    </button>
                  )}
                </ButtonBox>
              </Wrapper>
            </Form>
          )}
        </AnswerBox>
      </ContentBox>
    </Item>
  );
};

export default ReviewCard;
