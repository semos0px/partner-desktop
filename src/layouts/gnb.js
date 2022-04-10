import styled from "styled-components";
import NavList from "../components/navList";
import colors from "../styles/constants/colors";
import base from "../styles/constants/base";
import responsive from "../styles/constants/responsive";
import viewmoreIcon from "../assets/icon/gnb/viewmore.png";
import viewmoreActiveIcon from "../assets/icon/gnb/viewmore-a.png";
import profileIcon from "../assets/icon/gnb/profile.png";
import profileActiveIcon from "../assets/icon/gnb/profile-a.png";
import salesIcon from "../assets/icon/gnb/sales.png";
import salesActiveIcon from "../assets/icon/gnb/sales-a.png";
import classIcon from "../assets/icon/gnb/class.png";
import classActiveIcon from "../assets/icon/gnb/class-a.png";
import inquiryIcon from "../assets/icon/gnb/inquiry.png";
import inquiryActiveIcon from "../assets/icon/gnb/inquiry-a.png";
import zIndex from "../styles/constants/z-index";
import { useLocation } from "react-router-dom";

const Navbar = styled.nav`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  bottom: 0;
  padding: 0 10px;

  height: ${base.height.gnb}px;
  border-top-left-radius: ${base.borderRadius}px;
  border-top-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  z-index: ${zIndex.navbar};
`;

const GNB = () => {
  const { pathname } = useLocation();

  const navList = [
    {
      text: "프로필",
      pathname: "profile",
      icon: {
        default: profileIcon,
        active: profileActiveIcon,
      },
    },
    {
      text: "강습",
      pathname: "class",
      icon: {
        default: classIcon,
        active: classActiveIcon,
      },
    },
    {
      text: "문의",
      pathname: "inquiry",
      icon: {
        default: inquiryIcon,
        active: inquiryActiveIcon,
      },
    },
    {
      text: "판매",
      pathname: "sales",
      icon: {
        default: salesIcon,
        active: salesActiveIcon,
      },
    },
    {
      text: "더보기",
      pathname: "viewmore",
      icon: {
        default: viewmoreIcon,
        active: viewmoreActiveIcon,
      },
    },
  ];

  return (
    (pathname === "/profile" ||
      pathname === "/class" ||
      pathname === "/viewmore" ||
      pathname === "/inquiry" ||
      pathname === "/sales") && (
      <Navbar>
        <NavList navList={navList} />
      </Navbar>
    )
  );
};

export default GNB;
