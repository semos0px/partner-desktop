import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";

const Div = styled.div`
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: ${base.height.smallInput}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;
  padding-right: ${({ isIcon }) => (isIcon ? "50px" : "20px")};

  :focus {
    box-shadow: ${base.boxShadow};
  }

  ${responsive.mediaQuery.mobile} {
    height: ${base.height.input}px;
  }
`;

const InputField = ({
  children,
  value,
  label,
  name,
  placeholder = "",
  type = "text",
  changeHandler,
  isIcon = false,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={`input-${name}`}>{label}</Label>}
      <InputWrapper>
        <Input
          id={`input-${name}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={changeHandler}
          isIcon={isIcon}
        />
        {children}
      </InputWrapper>
    </Div>
  );
};

export default InputField;
