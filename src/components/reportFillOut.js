import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import RangeField from "./rangeField";
import TextareaField from "./textareaField";

const Box = styled.div`
  width: 100%;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
  ${flexbox("space-between")}
  margin-bottom: 30px;

  p {
    font-size: ${typography.size.medium}px;
    font-weight: ${typography.weight.regular};
  }

  button {
    padding: 10px 20px;
    color: ${colors.white};
    background-color: ${colors.blue};
    border-radius: 40px;
  }
`;

const Form = styled.form``;

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }
`;

const FeedbackBox = styled.div`
  p {
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    padding: 20px;
    background-color: ${colors.lightBlue};
    border-radius: ${base.borderRadius}px;
  }
`;

const ReportsFillOut = ({
  category,
  report,
  inputValue,
  submitHandler,
  changeHandler,
}) => {
  const isEditable = !report[0]?.feedback.student ? true : false;

  return (
    <Box>
      <Header>
        <p>{category}</p>

        <button onClick={submitHandler}>
          {report.length > 0 ? "수정하기" : "등록하기"}
        </button>
      </Header>

      <Form>
        <RangeField
          label="진도율"
          name="progress"
          changeHandler={changeHandler}
          value={inputValue.progress}
        />

        <TextBox>
          <TextareaField
            label="강습 내용을 적어주세요."
            name="content"
            value={inputValue.content}
            changeHandler={changeHandler}
            isEditable={isEditable}
          />
        </TextBox>

        <TextBox>
          <TextareaField
            label="피드백을 적어주세요."
            name="feedback"
            value={inputValue.feedback}
            changeHandler={changeHandler}
            isEditable={isEditable}
          />
        </TextBox>
      </Form>

      {report.length > 0 && report[0].feedback.student && (
        <FeedbackBox>
          <p>수강생 피드백</p>
          <div>
            <p>{report[0].feedback.student}</p>
          </div>
        </FeedbackBox>
      )}
    </Box>
  );
};

export default ReportsFillOut;
