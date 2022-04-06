import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import selectIcon from "../assets/icon/input/select-chevron.svg";

const Div = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  height: ${base.height.input}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  :focus {
    box-shadow: ${base.boxShadow};
  }

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const Option = styled.option``;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  top: ${base.height.input / 2 + 15}px;
  pointer-events: none;
`;

const SelectField = ({
  name,
  value,
  label,
  optionList = [],
  changeHandler,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={`select-${name}`}>{label}</Label>}
      <Select name={name} id={`select-${name}`} onChange={changeHandler}>
        <Option value={value}>연령대 선택</Option>

        {optionList.map((option, idx) => (
          <Option key={idx} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
      <SelectIcon>
        <img src={selectIcon} />
      </SelectIcon>
    </Div>
  );
};

export default SelectField;
