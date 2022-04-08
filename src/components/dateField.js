import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  width: 100%;
  ${flexbox("flex-start")}
`;

const Input = styled.input`
  border: 1px solid ${colors.white};
  border-radius: 5px;
  padding: 5px;
  font-size: ${typography.size.small}px;
`;

const Label = styled.label`
  margin-left: 10px;
`;

const DateField = ({ label, value, changeHandler, name }) => {
  return (
    <Box>
      <Input type="date" name={name} value={value} onChange={changeHandler} />
      <Label>{label}</Label>
    </Box>
  );
};

export default DateField;
