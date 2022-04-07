import styled from "styled-components";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  width: 30%;
  ${flexbox("flex-end")};
  margin-left: 20px;
`;

const Label = styled.label`
  color: ${colors.mediumGray};
  margin-left: 10px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckBox = ({ label = "", name, value }) => {
  return (
    <Box>
      <Input type="checkbox" name={name} value={value} />
      <Label>{label}</Label>
    </Box>
  );
};

export default CheckBox;
