import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";
import selectIcon from "../assets/icon/input/select-white.svg";

const Box = styled.div`
  width: 100%;
  ${flexbox("flex-start")}
`;

const Input = styled.input`
  position: relative;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  padding: 4px;
  font-size: ${typography.size.small}px;
  color: ${colors.white};

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 11px;
    right: 0px;
    width: 22px;
    height: 22px;
    background-image: url(${selectIcon});
    background-repeat: no-repeat;
  }
`;

const Label = styled.label`
  margin-left: 10px;
`;

const DateField = ({ label, value, changeHandler, name }) => {
  const currentDate = new Date();

  return (
    <Box>
      <Input
        type="month"
        name={name}
        min="2020-09"
        max={`${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1 < 10
            ? `0${currentDate.getMonth() + 1}`
            : currentDate.getMonth() + 1
        }`}
        value={value}
        onChange={changeHandler}
      />
      <Label>{label}</Label>
    </Box>
  );
};

export default DateField;
