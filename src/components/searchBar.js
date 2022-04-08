import InputField from "./inputField";

const SearchBar = ({ value, changeHandler, placeholder = "" }) => {
  return (
    <InputField
      placeholder={placeholder}
      value={value}
      changeHandler={changeHandler}
    />
  );
};

export default SearchBar;
