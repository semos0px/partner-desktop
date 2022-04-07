import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import transition from "../styles/func/transition";

const Div = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("space-between")};
  font-weight: ${typography.weight.regular};
`;

const SectionButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${colors.white};
  border-radius: 7px;
  box-shadow: ${base.boxShadow};

  &:focus {
    box-shadow: ${base.boxShadow};
  }
`;

const List = styled.ul`
  ${flexbox()}
`;

const PageButton = styled.li`
  width: 40px;
  height: 40px;
  background-color: ${({ isActive }) =>
    isActive ? colors.blue : colors.white};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black)};
  ${flexbox()};
  border-radius: 7px;
  box-shadow: ${base.boxShadow};
  margin: 0 5px;
  cursor: pointer;
  transition: ${transition()};
`;

const Pagination = ({ total, limit, currentPage, setCurrentPage }) => {
  const numPages = Math.ceil(total / limit);

  const prevHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Div>
      <SectionButton onClick={prevHandler}>&lt;</SectionButton>

      <List>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <PageButton
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : null}
              isActive={currentPage === i + 1 ? true : false}
            >
              {i + 1}
            </PageButton>
          ))}
      </List>

      <SectionButton onClick={nextHandler}>&gt;</SectionButton>
    </Div>
  );
};

export default Pagination;
