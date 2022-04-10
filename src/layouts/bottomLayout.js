import styled from "styled-components";
import base from "../styles/constants/base";

const Wrapper = styled.div`
  padding-bottom: ${base.height.gnb + 10}px;
`;

const BottomLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BottomLayout;
