import { useState } from "react";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";
import chevronIcon from "../assets/icon/page/chevron.svg";
import transition from "../styles/func/transition";
import base from "../styles/constants/base";

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
  cursor: pointer;

  img {
    transition: ${transition("transform")};
    transform: ${({ open }) => (open ? `rotate(180deg)` : null)};
  }
`;

const AnswerBox = styled.div`
  width: 100%;
  height: 100px;
  ${flexbox()};
  padding: 0 20px;
  background-color: ${colors.lightBlue};
  border-radius: ${base.borderRadius}px;
  max-height: ${({ open }) => (open ? "100px" : 0)};
  overflow: hidden;
  transition: ${transition("max-height")};

  p {
    color: ${colors.darkGray};
  }
`;

const Border = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.vanilla};
`;

const FAQItem = ({ idx, faq, isBorder = false }) => {
  const [open, setOpen] = useState(false);

  const openToggleHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Item onClick={openToggleHandler} isBorder={isBorder}>
        <QuestionBox onClick={openToggleHandler} open={open}>
          {faq.category && <p>{`${idx}. [${faq.category}] ${faq.question}`}</p>}
          {!faq.category && <p>Q. {faq.question}</p>}
          <img src={chevronIcon} />
        </QuestionBox>

        <AnswerBox open={open}>
          <p>{faq.answer.replaceAll(/(<br>|<br \/>|<br\/>)/g, "\r\n")}</p>
        </AnswerBox>
      </Item>

      {isBorder && <Border />}
    </>
  );
};

export default FAQItem;
