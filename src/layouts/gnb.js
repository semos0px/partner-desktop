import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavList from "../components/navList";
import profileIcon from "../assets/icon/navbar/profile.svg";
import colors from "../styles/constants/colors";
import base from "../styles/constants/base";

const Navbar = styled.nav`
  max-width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

  height: 85px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  /* background-color: ${colors.white}; */
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
