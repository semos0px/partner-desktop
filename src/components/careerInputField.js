import styled from "styled-components";
import deleteIcon from "../assets/icon/profile/image-delete.svg";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  width: 100%;
`;

const CareerItem = styled.li`
  width: 100%;
  position: relative;

  ${responsive.mediaQuery.mobile} {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  width: 100%;
  height: ${base.height.input}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;

  :focus {
    box-shadow: ${base.boxShadow};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 15px;
`;

const CareerInputField = ({
  name,
  value,
  changeHandler,
  deleteHandler,
  careerList,
}) => {
  return (
    <Box>
      <ul>
        <CareerItem>
          <Input
            id={`input-${name}`}
            name={name}
            type="text"
            value={value}
            onChange={changeHandler}
          />

          <Button type="button" onClick={deleteHandler}>
            <img src={deleteIcon} />
          </Button>
        </CareerItem>
      </ul>
    </Box>
  );
};

export default CareerInputField;
