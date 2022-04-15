import InputField from "./inputField";
import searchIcon from "../assets/icon/input/search.svg";
import styled from "styled-components";
import base from "../styles/constants/base";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 12px;
    right: 15px;
  }

  ${responsive.mediaQuery.mobile} {
    img {
      top: 20px;
    }
  }
`;

const SearchBar = ({ value, changeHandler, placeholder = "" }) => {
  return (
    <Box>
      <InputField
        placeholder={placeholder}
        value={value}
        changeHandler={changeHandler}
        isIcon={true}
      />
      <img src={searchIcon} />
    </Box>
  );
};

export default SearchBar;
