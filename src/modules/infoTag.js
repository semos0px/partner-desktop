import styled from "styled-components";
import colors from "../styles/constants/colors";
import deleteIcon from "../assets/icon/class/delete.svg";
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

  button {
    margin-left: 30px;
    ${flexbox()}
    padding: 5px;

    img {
      width: 10px;
    }
  }
`;

const InfoTag = ({ text, color }) => {
  return (
    <Tag color={color}>
      <span>{text}</span>

      <button type="button">
        <img src={deleteIcon} />
      </button>
    </Tag>
  );
};

export default InfoTag;
