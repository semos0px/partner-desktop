import styled from "styled-components";
import logo from "../assets/logo/semos-b.png";

const Img = styled.img``;

const Logo = () => {
  return <Img src={logo} alt="세모스 로고" />;
};

export default Logo;
