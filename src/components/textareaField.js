import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";

const Box = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;

const Textarea = styled.textarea`
  background-color: ${colors.vanilla};
  width: 100%;
  min-height: 100px;
  padding: 20px;
  border-radius: ${base.borderRadius}px;
  resize: none;
`;

const TextareaField = ({ label, name, value, changeHandler }) => {
  return (
    <Box>
      <Label>{label}</Label>
      <Textarea name={name} value={value} onChange={changeHandler} />
    </Box>
  );
};

export default TextareaField;
