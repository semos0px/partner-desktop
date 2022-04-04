import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron from "../assets/icon/page/chevron.svg";
import flexbox from "../styles/func/flexbox";

const SHeader = styled.header`
  width: 100%;
  height: 52px;
  ${flexbox()};
  background-color: coral;
  position: relative;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: -10px;
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
        <>
          <GoBackButton onClick={goBackHandler}>
            <img src={chevron} alt="뒤로가기" />
          </GoBackButton>
          {title}
        </>
      )}
    </SHeader>
  );
};

export default Header;
