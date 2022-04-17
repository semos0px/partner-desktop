import styled from "styled-components";
import AddButton from "../../modules/addButton";
import flexbox from "../../styles/func/flexbox";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";
import responsive from "../../styles/constants/responsive";
import { useRef } from "react";

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

const OptionInputField = ({ data, addHandler, deleteHandler }) => {
  const nameRef = useRef();
  const priceRef = useRef();

  const clearFunc = () => {
    nameRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <Box>
      <InputName>
        <Input type="text" placeholder="장비 렌탈" ref={nameRef} />

        <div>
          <Input type="text" placeholder="+30,000원" ref={priceRef} />

          <AddButton
            addHandler={() =>
              addHandler(
                "option",
                { text: nameRef.current.value, price: priceRef.current.value },
                clearFunc
              )
            }
          />
        </div>
      </InputName>

      {/* data 가져와서 넣는 부분 */}
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <p>{`${item.text} ${item.price}원`}</p>

            <button onClick={() => deleteHandler("option", item.id)}>
              <img src={deleteIcon} />
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default OptionInputField;
