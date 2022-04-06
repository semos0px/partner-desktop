import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavList from "../components/navList";
import profileIcon from "../assets/icon/navbar/profile.svg";
import colors from "../styles/constants/colors";
import base from "../styles/constants/base";
import responsive from "../styles/constants/responsive";

const Navbar = styled.nav`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  bottom: 0;

  height: ${base.gnbHeight}px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  background-color: ${colors.white};
  background-color: pink;
`;

const GNB = () => {
  const { pathname } = useLocation();

  const navList = [
    {
      text: "프로필",
      pathname: "profile",
      icon: profileIcon,
    },
    {
      text: "강습",
      pathname: "class",
      // icon:
    },
    {
      text: "문의",
      pathname: "inquiry",
      // icon:
    },
    {
      text: "판매",
      pathname: "sales",
      // icon:
    },
    {
      text: "더보기",
      pathname: "viewmore",
      // icon:
    },
  ];

  return (
    <Navbar>
      <NavList navList={navList} />
    </Navbar>
  );
};

export default GNB;
