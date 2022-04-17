import InputField from "./inputField";
import searchIcon from "../assets/icon/input/search.svg";
import styled from "styled-components";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  }

  ${responsive.mediaQuery.mobile} {
    img {
      top: 20px;
    }
  }
`;

const SearchBar = ({
  name,
  value,
  changeHandler,
  placeholder = "",
  clickHandler,
}) => {
  return (
    <Box>
      <InputField
        name={name}
        placeholder={placeholder}
        value={value}
        changeHandler={changeHandler}
        isIcon={true}
      />
      <img src={searchIcon} onClick={clickHandler} />
    </Box>
  );
};

export default SearchBar;
