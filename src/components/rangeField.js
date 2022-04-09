import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  position: relative;
`;

const Label = styled.label`
  margin-right: 50px;
  white-space: nowrap;
`;

const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 20px;
  background-color: ${colors.vanilla};
  border-radius: 30px;
  background: ${({ value }) =>
    `linear-gradient(to right, ${colors.blue} 0%, ${colors.blue} ${value}%, ${colors.vanilla} ${value}%, ${colors.vanilla} 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    background: ${colors.blue};
    border-radius: 50%;
    cursor: pointer;
    margin-top: 0px;
    box-shadow: ${base.boxShadow};
  }

  &::-webkit-track {
  }

  /** FF*/
  &::-moz-range-progress {
    background-color: ${colors.blue};
  }
  &::-moz-range-track {
    background-color: ${colors.blue};
  }
  /* IE*/
  &::-ms-fill-lower {
    background-color: ${colors.blue};
  }
  &::-ms-fill-upper {
    background-color: ${colors.blue};
  }
`;

const Text = styled.span`
  position: absolute;
  left: ${({ value }) => `calc(110px + ${value}px)`};
  top: 2px;
  color: ${colors.white};
  font-size: ${typography.size.tiny}px;
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
        step="5"
        value={value}
        name={name}
        onInput={inputHandler}
      />
      {value >= 5 && <Text value={value}>{value}%</Text>}
    </Box>
  );
};

export default RangeField;
