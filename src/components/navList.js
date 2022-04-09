import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const List = styled.ul`
  width: 100%;
  height: 100%;
  ${flexbox("space-around")}
`;

const SNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  ${flexbox("center", "center", "column")}
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`;

const P = styled.p`
  font-size: ${typography.size.small}px;
  color: ${({ isActive }) => (isActive ? colors.blue : colors.mediumGray)};
`;

const NavList = ({ navList }) => {
  const { pathname } = useLocation();

  return (
    <List>
      {navList.map((item, idx) => (
        <li key={idx}>
          <SNavLink to={item.pathname}>
            {pathname.includes(item.pathname) ? (
              <Img src={item.icon.active} />
            ) : (
              <Img src={item.icon.default} />
            )}

            <P isActive={pathname.includes(item.pathname) ? true : false}>
              {item.text}
            </P>
          </SNavLink>
        </li>
      ))}
    </List>
  );
};

export default NavList;
