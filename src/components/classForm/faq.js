import { useState } from "react";
import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";
import transition from "../../styles/func/transition";
import chevronIcon from "../../assets/icon/page/chevron.svg";

const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const QuestionBox = styled.div`
  width: 100%;
  height: 50px;
  ${flexbox("space-between")}
  margin-bottom: 20px;

  input {
    width: 100%;
    margin-left: 10px;
  }

  div {
    padding: 20px 0 20px 20px;
    cursor: pointer;

    img {
      transition: ${transition("transform")};
      transform: ${({ open }) => (open ? `rotate(180deg)` : null)};
    }
  }
`;

const AnswerBox = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  ${flexbox()};
  padding: 0 20px;
  background-color: ${colors.lightBlue};
  border-radius: ${base.borderRadius}px;
  max-height: ${({ open }) => (open ? "90px" : 0)};
  overflow: hidden;
  transition: ${transition("max-height")};

  span {
    position: absolute;
    top: 15px;
    left: 20px;
  }

  textarea {
    background-color: ${colors.vanilla};
    width: 100%;
    min-height: 100px;
    padding: 20px;
    border-radius: ${base.borderRadius}px;
    resize: none;
  }
`;

const ClassFAQInputItem = ({ changeHandler }) => {
  const [open, setOpen] = useState(false);

  const openToggleHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Item>
        <QuestionBox open={open}>
          <span>Q. </span>

          <input
            type="text"
            placeholder="질문 내용"
            name="faq-question"
            onChange={changeHandler}
          />

          <div onClick={openToggleHandler}>
            <img src={chevronIcon} />
          </div>
        </QuestionBox>

        <AnswerBox open={open}>
          <span>A.</span>
          <textarea
            name="faq-answer"
            placeholder="답변 내용"
            onChange={changeHandler}
          />
        </AnswerBox>
      </Item>
    </>
  );
};

export default ClassFAQInputItem;
