import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import selectIcon from "../assets/icon/input/select-chevron.svg";
import responsive from "../styles/constants/responsive";

const Div = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${({ isBottom }) => (isBottom ? `30px` : "0")};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  height: ${base.height.smallInput}px;
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

  ${responsive.mediaQuery.mobile} {
    height: ${base.height.input}px;
  }
`;

const Option = styled.option``;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  pointer-events: none;

  ${responsive.mediaQuery.mobile} {
    bottom: 20px;
  }
`;

const SelectField = ({
  name,
  value,
  label,
  defaultText,
  optionList = [],
  changeHandler,
  isBottom = true,
}) => {
  return (
    <Div isBottom={isBottom}>
      {label && <Label htmlFor={`select-${name}`}>{label}</Label>}

      <Select
        name={name}
        id={`select-${name}`}
        onChange={changeHandler}
        defaultValue={value}
      >
        {defaultText && <Option value="">{defaultText}</Option>}

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
