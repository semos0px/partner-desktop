import { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../components/checkBox";
import ReportsCard from "../../components/reportsCard";
import SearchBar from "../../components/searchBar";
import SelectField from "../../components/selectField";
import reportsList from "../../data/reports";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import flexbox from "../../styles/func/flexbox";

const List = styled.ul``;

const FilterBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ReportsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [written, setWritten] = useState(false);
  const [category, setCategory] = useState("all");

  const optionList = [
    { text: "강습종목", value: "c" },
    { text: "전체", value: "all" },
    { text: "스쿠버다이빙", value: "s" },
  ];

  const searchInputChangeHandler = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  // TODO: Data Fetching

  let filterdList = reportsList;

  return (
    <PageLayout headerTitle="강습 리포트" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <SearchBar
            value={searchInput}
            changeHandler={searchInputChangeHandler}
            placeholder="닉네임/강습명/리포트 내용을 검색해 보세요!"
          />

          <FilterBox>
            <SelectField optionList={optionList} isBottom={false} />
            <CheckBox label="미작성" name="written" value={written} />
          </FilterBox>

          <List>
            {filterdList.map((item, idx) => (
              <ReportsCard key={idx} report={item} />
            ))}
          </List>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ReportsPage;
