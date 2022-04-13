import styled from "styled-components";
import AddButton from "../../modules/addButton";
import InfoTag from "../../modules/infoTag";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";

const Box = styled.div`
  width: 100%;

  ul {
    display: flex;
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

const DeleteButton = styled.button`
  color: ${colors.red};
`;

const UncertainInputField = ({ addHandler, deleteHandler }) => {
  return (
    <Box>
      <InputBox>
        <input
          type="text"
          name="uncertain"
          placeholder="포함되지 않은 사항을 금액과 함께 적어주세요."
        />

        <AddButton addHandler={addHandler} />
      </InputBox>

      <ul>
        <li>
          <InfoTag text="해양 실습비 가격 상이">
            <DeleteButton type="button" onClick={deleteHandler}>
              x
            </DeleteButton>
          </InfoTag>
        </li>
      </ul>
    </Box>
  );
};

export default UncertainInputField;
