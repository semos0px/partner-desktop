import styled from "styled-components";
import AddButton from "../../modules/addButton";
import flexbox from "../../styles/func/flexbox";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";
import responsive from "../../styles/constants/responsive";

const Box = styled.div`
  width: 100%;

  ${flexbox("center", "flex-start", "column")}
  margin-top: 20px;

  ${responsive.mediaQuery.mobile} {
    margin-top: 0px;
    width: calc(100% - 150px);
  }

  li {
    width: 100%;
    height: 100%;
    ${flexbox()}

    p {
      height: 100%;
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

const InputName = styled.div`
  width: 100%;
  margin-bottom: 10px;

  div {
    width: 100%;
    display: flex;

    input {
      margin-right: 10px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    display: flex;

    input:first-child {
      margin-right: 10px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const OptionInputField = ({ addHandler, deleteHandler }) => {
  return (
    <Box>
      <InputName>
        <Input type="text" placeholder="장비 렌탈" name="option-name" />

        <div>
          <Input type="text" placeholder="+30,000원" name="option-price" />

          <AddButton addHandler={addHandler} />
        </div>
      </InputName>

      {/* data 가져와서 넣는 부분 */}
      <ul>
        <li>
          <p>풀장 입장료 33,000원</p>

          <button onClick={deleteHandler}>
            <img src={deleteIcon} />
          </button>
        </li>
      </ul>
    </Box>
  );
};

export default OptionInputField;
