import styled from "styled-components";
import NotExistBox from "../../components/notExistBox";
import salesData from "../../data/sales";
import PageLayout from "../../layouts/pageLayout";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import zIndex from "../../styles/constants/z-index";
import flexbox from "../../styles/func/flexbox";
import salesImage from "../../assets/images/sale/sale-default.png";
import { useState } from "react";
import HistoryBox from "../../components/historyBox";

const Header = styled.header`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  top: 0;
  font-weight: ${typography.weight.regular};
  background-color: ${colors.blue};
  color: ${colors.white};
  z-index: ${zIndex.header};
  border-bottom-left-radius: ${base.borderRadius}px;
  border-bottom-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  padding: 0 10px 50px;

  p {
    width: 100%;
    ${flexbox()}
    height: ${base.height.header}px;
  }
`;

const SalesPage = () => {
  // const [data, setData] = useState({});
  // let data = [];
  let data = salesData;

  return (
    <PageLayout>
      <Header>
        <p>판매</p>

        <HistoryBox
          cnt={data.certain.length + data.uncertain.length}
          income={data.income}
        />
      </Header>

      {data.length === 0 && (
        <NotExistBox
          page="sales"
          imgURL={salesImage}
          redirectPath="/class"
          comment="나의 강습을 확인하고 강습 일정을 등록해 보세요!"
        />
      )}
    </PageLayout>
  );
};

export default SalesPage;
