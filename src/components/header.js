import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron from "../assets/icon/page/chevron.svg";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const SHeader = styled.header`
  width: 100%;
  height: ${base.headerHeight}px;
  ${flexbox()};
  position: fixed;
  top: 0;
  left: 0;
  font-weight: ${typography.weight.regular};
  background-color: ${colors.white};
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
