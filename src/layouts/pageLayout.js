import styled from "styled-components";
import Header from "../components/header";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 ${responsive.margin.sm}px;
  padding-bottom: 20px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "white" ? colors.white : backgroundColor};
`;

const PageLayout = ({
  children,
  backgroundColor = "white",
  headerTitle,
  isGoBack,
}) => {
  return (
    <>
      {headerTitle && <Header title={headerTitle} isGoBack={isGoBack} />}
      <Container backgroundColor={backgroundColor}>{children}</Container>
    </>
  );
};

export default PageLayout;
