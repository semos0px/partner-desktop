import { useState } from "react";
import styled from "styled-components";
import FAQItem from "../../components/faqItem";
import InputField from "../../components/inputField";
import Pagination from "../../components/pagination";
import FAQList from "../../data/faq/faqList";
import usePagination from "../../hooks/usePagination";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import SearchBar from "../../components/searchBar";
import RowLayout from "../../layouts/rowLayout";

const FAQ_PER_PAGE = 10;

const Main = styled.main`
  height: ${FAQ_PER_PAGE * 70}px;
  overflow-y: scroll;
`;

const List = styled.ul``;

const Footer = styled.footer`
  width: 100%;
  height: 70px;
  margin-top: 50px;
`;

const FAQPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const { offset, faqList, limit, currentPage, setCurrentPage } =
    usePagination();

  const searchInputChangeHandler = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <PageLayout headerTitle="자주 묻는 질문" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <SearchBar
            placeholder="어떤 내용이 궁금한가요?"
            value={searchInput}
            changeHandler={searchInputChangeHandler}
          />

          <Main>
            <List>
              {FAQList.slice(offset, offset + limit).map((faq) => (
                <FAQItem key={faq.id} faq={faq} idx={faq.id} />
              ))}
            </List>
          </Main>

          <Footer>
            <Pagination
              total={faqList.length}
              limit={limit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Footer>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default FAQPage;
