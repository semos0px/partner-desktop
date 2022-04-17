import { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../components/checkBox";
import CommonCard from "../../components/commonCard";
import SearchBar from "../../components/searchBar";
import SelectField from "../../components/selectField";
import reportsList from "../../data/reports";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";

const List = styled.ul``;

const FilterBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ReportsPage = () => {
  const [inputValue, setInputValue] = useState({
    word: "",
    filter: "all",
    status: false,
  });

  const optionList = [
    { text: "전체", value: "all" },
    { text: "스쿠버다이빙", value: "s" },
  ];

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "status") {
      setInputValue((prev) => ({
        ...prev,
        status: !prev.status,
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const searchHandler = () => {
    console.log("search");
  };

  // TODO: Data Fetching

  let filterdList = reportsList;

  return (
    <PageLayout headerTitle="강습 리포트" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <SearchBar
            name="word"
            value={inputValue.word}
            changeHandler={inputChangeHandler}
            placeholder="닉네임/강습명/리포트 내용을 검색해 보세요!"
            clickHandler={searchHandler}
          />

          <FilterBox>
            <SelectField
              name="filter"
              changeHandler={inputChangeHandler}
              optionList={optionList}
              isBottom={false}
            />

            <CheckBox
              label="미작성"
              name="status"
              value={inputValue.status}
              changeHandler={inputChangeHandler}
            />
          </FilterBox>

          <List>
            {filterdList.map((item, idx) => (
              <CommonCard key={idx} item={item} page="reports" />
            ))}
          </List>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ReportsPage;
