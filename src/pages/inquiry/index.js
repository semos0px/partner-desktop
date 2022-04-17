import { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../components/checkBox";
import CommonCard from "../../components/commonCard";
import NotExistBox from "../../components/notExistBox";
import SearchBar from "../../components/searchBar";
import SelectField from "../../components/selectField";
import inquiryList from "../../data/inquiry";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import inquiryImage from "../../assets/images/inquiry/inquiry-default.png";
import BottomLayout from "../../layouts/bottomLayout";

const List = styled.ul``;

const FilterBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InquiryPage = () => {
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

  let filterdList = inquiryList;
  // let filterdList = [];

  return (
    <PageLayout headerTitle="문의">
      <PaddingLayout>
        <BottomLayout>
          <RowLayout>
            <SearchBar
              name="word"
              value={inputValue.word}
              changeHandler={inputChangeHandler}
              placeholder="닉네임/강습명/문의 내용을 검색해 보세요!"
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
                label="미확인"
                name="status"
                value={inputValue.status}
                changeHandler={inputChangeHandler}
              />
            </FilterBox>

            {filterdList.length === 0 ? (
              <NotExistBox
                page="inquiry"
                imgURL={inquiryImage}
                redirectPath="/profile"
                comment="매력을 어필하는 프로필을 만들어 보세요!"
              />
            ) : (
              <List>
                {filterdList.map((item, idx) => (
                  <CommonCard key={idx} item={item} page="inquiry" />
                ))}
              </List>
            )}
          </RowLayout>
        </BottomLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default InquiryPage;
