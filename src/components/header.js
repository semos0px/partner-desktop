import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron from "../assets/icon/page/chevron.svg";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import zIndex from "../styles/constants/z-index";

const SHeader = styled.header`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  height: ${base.height.header}px;
  ${flexbox()};
  position: fixed;
  top: 0;
  font-weight: ${typography.weight.regular};
  background-color: ${colors.white};
  z-index: ${zIndex.header};
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 10px;
  padding: 10px;

  img {
    transform: rotate(90deg);
  }
`;

const Header = ({ title, isGoBack = false }) => {
  const navigate = useNavigate();

  const goBackHandler = () => navigate(-1);

  return (
    <SHeader isGoBack={isGoBack}>
      {isGoBack && (
        <GoBackButton onClick={goBackHandler}>
          <img src={chevron} alt="뒤로가기" />
        </GoBackButton>
      )}
      {title}
    </SHeader>
  );
};

export default Header;
