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
  const { sid } = useParams();

  const { nickname, date, report, category } = reportsDetailData[0];

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

  const submitHandler = () => {
    if (report) {
      // REST API: patch or put
      console.log("수정하기");
    } else {
      // REST API: post
      console.log("등록하기");
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
  };

  const changeHandler = () => {
    // textarea event
  };

  return (
    <PageLayout headerTitle={nickname} isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <time>{date}</time>

            <ReportsFillOut
              report={report}
              category={category}
              submitHandler={submitHandler}
              inputHandler={inputHandler}
              changeHandler={changeHandler}
            />
          </Wrapper>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ReportsDetailPage;
