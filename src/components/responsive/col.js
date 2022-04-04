import styled from "styled-components";
import responsive from "../../styles/constants/responsive";

const SCol = styled.div`
  ${({ sm }) => (sm ? `width: ${(sm / responsive.columns.sm) * 100}%` : null)};
  padding: 0 ${responsive.gutter}px;
`;

const Col = ({ children, sm = 4 }) => {
  return sm ? <SCol sm={sm}>{children}</SCol> : null;
};

export default Col;
