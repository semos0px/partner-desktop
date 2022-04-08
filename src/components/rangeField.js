import styled from "styled-components";
import colors from "../styles/constants/colors";

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const Label = styled.label`
  margin-right: 50px;
  white-space: nowrap;
`;

const Input = styled.input`
  -webkit-appearance: none;
  /* all: unset; */
  width: 100%;
  height: 30px;
  background-color: ${colors.vanilla};
  border-radius: 30px;

  &::-webkit-slider-thumb {
    position: relative;
    height: 40px;
    width: 40px;
    background: ${colors.blue};
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }

  &::-webkit-slider-runnable-track {
    height: 100%;
    background-color: ${colors.blue};
    border-radius: 40px;
    -webkit-appearance: none;
  }
`;

const RangeField = ({ label, name, value, inputHandler }) => {
  // TODO: rangeField
  return (
    <Box>
      <Label>{label}</Label>
      <Input
        type="range"
        min="0"
        max="100"
        value={value}
        name={name}
        onInput={inputHandler}
      />
    </Box>
  );
};

export default RangeField;
