import styled from "styled-components";
import colors from "../styles/constants/colors";
import deleteIcon from "../assets/icon/class/delete.svg";
import deleteBlueIcon from "../assets/icon/class/delete-blue.svg";
import flexbox from "../styles/func/flexbox";

const Tag = styled.span`
  display: inline-flex;
  border: 1px solid
    ${({ color }) => (color === "blue" ? colors.blue : colors.red)};
  background-color: ${({ color }) =>
    color === "blue" ? colors.lightBlue : colors.lightRed};
  color: ${({ color }) => (color === "blue" ? colors.blue : colors.red)};
  border-radius: 40px;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  text-decoration: ${({ isLine }) => (isLine ? `underline` : null)};

  span {
    cursor: ${({ ispointer }) => (ispointer === "true" ? "pointer" : null)};
  }

  button {
    margin-left: 30px;
    ${flexbox()}
    padding: 5px;

    img {
      width: 10px;
    }
  }
`;

const InfoTag = ({
  text,
  color,
  isLine = false,
  deleteHandler,
  clickHandler = null,
  ispointer = "false",
}) => {
  return (
    <Tag color={color} isLine={isLine}>
      <span onClick={clickHandler} ispointer={ispointer}>
        {text}
      </span>

      <button type="button" onClick={deleteHandler}>
        <img src={color === "blue" ? deleteBlueIcon : deleteIcon} />
      </button>
    </Tag>
  );
};

export default InfoTag;
