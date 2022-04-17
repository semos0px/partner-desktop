import styled from "styled-components";
import AddButton from "../../modules/addButton";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import flexbox from "../../styles/func/flexbox";
import deleteIcon from "../../assets/icon/class/delete-b.svg";
import { useRef } from "react";

const Box = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  ${responsive.mediaQuery.mobile} {
    width: calc(100% - 150px);
  }
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;

  input {
    width: 100%;
    margin-right: 10px;
    /* 포함 사항 리스트의 길이가 0일 경우 마진을 주지 않으면 된다 */
    margin-bottom: 20px;
  }
`;

const InfoTag = styled.span`
  display: inline-flex;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 40px;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  ${flexbox()}

  button {
    margin-left: 30px;
    ${flexbox()}
    padding: 5px;

    img {
      width: 10px;
    }
  }
`;

const MaterialsInputField = ({ addHandler, deleteHandler, data }) => {
  const inputRef = useRef();

  const clearFunc = () => {
    inputRef.current.value = "";
  };

  return (
    <Box>
      <InputBox>
        <input
          type="text"
          name="material"
          placeholder="준비물을 적어주세요."
          ref={inputRef}
        />

        <AddButton
          addHandler={() =>
            addHandler("material", inputRef.current.value, clearFunc)
          }
        />
      </InputBox>

      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <InfoTag>
              <span>{item.text}</span>

              <button
                type="button"
                onClick={() => deleteHandler("material", item.id)}
              >
                <img src={deleteIcon} />
              </button>
            </InfoTag>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default MaterialsInputField;
