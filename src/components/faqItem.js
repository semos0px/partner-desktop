import { useState } from "react";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";
import chevronIcon from "../assets/icon/page/chevron.svg";
import transition from "../styles/func/transition";

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
  padding: 0 20px;
  cursor: pointer;

  img {
    transition: ${transition("transform")};
    transform: ${({ open }) => (open ? `rotate(180deg)` : null)};
  }
`;

const AnswerBox = styled.div`
  width: 100%;
  height: 90px;
  ${flexbox()};
  padding: 0 20px;
  background-color: ${colors.lightBlue};
  max-height: ${({ open }) => (open ? "90px" : 0)};
  overflow: hidden;
  transition: ${transition("max-height")};

  p {
    color: ${colors.darkGray};
  }
`;

const FAQItem = ({ idx, faq }) => {
  const [open, setOpen] = useState(false);

  const openToggleHandler = () => {
    setOpen(!open);
  };

  return (
    <Item onClick={openToggleHandler}>
      <QuestionBox onClick={openToggleHandler} open={open}>
        <p>{`${idx}. [${faq.category}] ${faq.question}`}</p>
        <img src={chevronIcon} />
      </QuestionBox>

      <AnswerBox open={open}>
        <p>{faq.answer.replaceAll(/(<br>|<br \/>|<br\/>)/g, "\r\n")}</p>
      </AnswerBox>
    </Item>
  );
};

export default FAQItem;
