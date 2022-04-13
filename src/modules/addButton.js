import styled from "styled-components";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";

const Button = styled.button`
  height: ${base.height.smallInput}px;
  padding: 5px 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: ${base.borderRadius}px;
  white-space: nowrap;
`;

const AddButton = ({ addHandler }) => {
  return (
    <Button type="button" onClick={addHandler}>
      추가
    </Button>
  );
};

export default AddButton;
