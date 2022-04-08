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

const List = styled.ul``;

const FilterBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InquiryPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [checked, setChecked] = useState(false);
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

  let filterdList = inquiryList;
  // let filterdList = [];

  return (
    <PageLayout headerTitle="문의">
      <PaddingLayout>
        <RowLayout>
          <SearchBar
            value={searchInput}
            changeHandler={searchInputChangeHandler}
            placeholder="닉네임/강습명/문의 내용을 검색해 보세요!"
          />

          <FilterBox>
            <SelectField optionList={optionList} isBottom={false} />
            <CheckBox
              label="미확인"
              name="checked"
              value={checked}
              checkHandler={() => setChecked(!checked)}
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
      </PaddingLayout>
    </PageLayout>
  );
};

export default InquiryPage;
