import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

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

const InputBox = styled.div`
  width: 100%;
  position: relative;
`;

const ValueBox = styled.div`
  position: absolute;
  top: -2px;
  width: ${({ value }) => value}%;
  height: 100%;
  ${flexbox()}
  pointer-events: none;

  span {
    left: ${({ value }) => `calc(110px + ${value}px)`};
    top: 2px;
    color: ${colors.white};
    font-size: ${typography.size.tiny}px;
  }
`;

const RangeField = ({ label, name, value, changeHandler }) => {
  return (
    <Box>
      <Label>{label}</Label>
      <InputBox>
        <Input
          type="range"
          min="0"
          max="100"
          step="5"
          value={value}
          name={name}
          onChange={changeHandler}
        />
        <ValueBox value={value}>
          {value >= 10 && <span value={value}>{value}%</span>}
        </ValueBox>
      </InputBox>
    </Box>
  );
};

export default RangeField;
