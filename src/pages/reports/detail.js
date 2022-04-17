import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReportsFillOut from "../../components/reportFillOut";
import reportsDetailData from "../../data/reports/detail";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";

const Wrapper = styled.div`
  ${flexbox("center", "center", "column")}

  time {
    color: ${colors.mediumGray};
    margin-bottom: 20px;
  }
`;

const ReportsDetailPage = () => {
  const { nickname, date, report, category } = reportsDetailData[0];

  const { sid } = useParams();

  const [inputValue, setInputValue] = useState({
    progress: report.length > 0 ? report[0].progressRate : 0,
    content: report.length > 0 ? report[0].content : "",
    feedback: report.length > 0 ? report[0].feedback.me : "",
  });

  //   const { nickname, date, report, category } = reportsDetailData.filter(
  //     (r) => r.id === parseInt(sid)
  //   )[0];

  //   const [value, setValue] = useState({
  //     progressRate: ,
  //     content: ,
  //     feedback: "",
  //   });

  // TODO: rid에 맞는 리포트 내용이 있는지 없는지에 따라 등록하기 수정하기 상태 달라짐

  //   useEffect(() => {
  //     if (true)
  //       setValue({
  //         ...value,
  //         progressRate: report.progressRate,
  //         content: report.content,
  //         feedback: report.feedback.me,
  //       });
  //   }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (report) {
      // REST API: patch or put
      console.log("수정하기");
    } else {
      // REST API: post
      console.log("등록하기");
    }
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <PageLayout headerTitle={nickname} isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <time>{date}</time>

            <ReportsFillOut
              inputValue={inputValue}
              report={report}
              category={category}
              submitHandler={submitHandler}
              changeHandler={formChangeHandler}
            />
          </Wrapper>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ReportsDetailPage;
