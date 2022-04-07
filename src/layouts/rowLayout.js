import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const RowLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RowLayout;
