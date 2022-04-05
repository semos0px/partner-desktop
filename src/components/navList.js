import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;

const NavList = ({ navList }) => {
  return (
    <List>
      {navList.map((item, idx) => (
        <li key={idx}>
          <Link to={item.pathname}>
            <img src={item.icon} />
            <p>{item.text}</p>
          </Link>
        </li>
      ))}
    </List>
  );
};

export default NavList;
