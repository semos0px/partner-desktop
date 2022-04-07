import { useEffect, useState } from "react";
import FAQList from "../data/faq/faqList";

const usePagination = () => {
  const [faqList, setFaqList] = useState(FAQList);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limit;

  const TOTAL_FAQ_LENGTH = faqList.length;

  useEffect(() => {
    // TODO: dataFetching
  }, []);

  return {
    offset,
    faqList,
    limit,
    setLimit,
    currentPage,
    setCurrentPage,
  };
};

export default usePagination;
