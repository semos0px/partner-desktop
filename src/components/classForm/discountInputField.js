import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import selectIcon from "../../assets/icon/input/select-chevron.svg";
import responsive from "../../styles/constants/responsive";
import AddButton from "../../modules/addButton";
import flexbox from "../../styles/func/flexbox";
import { useRef } from "react";
import deleteIcon from "../../assets/icon/class/delete-circle.svg";

const Box = styled.div`
  margin-top: 20px;
  ${flexbox()}

  ${responsive.mediaQuery.mobile} {
    margin-top: 0;
  }
`;

const Div = styled.div`
  position: relative;
  width: 140px;
  flex-shrink: 0;
  margin-bottom: ${({ isBottom }) => (isBottom ? `30px` : "0")};

  &:first-child {
    margin-right: 10px;
  }
`;

const Select = styled.select`
  width: 100%;

  height: ${base.height.input - 10}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;
  padding-right: 40px;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  :focus {
    box-shadow: ${base.boxShadow};
  }

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  ${responsive.mediaQuery.mobile} {
    padding-right: 20px;
  }
`;

const Input = styled.input`
  width: calc(100% - 140px - 60px);
  height: ${base.height.smallInput - 10}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;
  margin-right: 10px;

  :focus {
    box-shadow: ${base.boxShadow};
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  pointer-events: none;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    height: 100%;
    ${flexbox("flex-start")}
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;

    p {
      height: 100%;
      display: inline-block;
      margin-right: 10px;
    }

    button {
      transform: translateY(2px);
    }
  }
`;

const DiscountInputField = ({ data, addHandler, deleteHandler }) => {
  const selectRef = useRef();
  const inputRef = useRef();

  const clearFunc = () => {
    inputRef.current.value = "";
    selectRef.current.value = "";
  };

  console.log(data);

  return (
    <>
      <Box>
        <Div>
          <Select ref={selectRef}>
            <option>2인권</option>
            <option>3인권</option>
            <option>4인권</option>
            <option>5인권</option>
            <option>6인권</option>
            <option>7인권</option>
            <option>8인권</option>
            <option>9인권</option>
            <option>10인권</option>
            <option>11인권</option>
            <option>12인권</option>
          </Select>

          <SelectIcon>
            <img src={selectIcon} />
          </SelectIcon>
        </Div>

        <Input type="text" placeholder="+90,000" ref={inputRef} />

        <AddButton
          addHandler={() =>
            addHandler(
              "discount",
              {
                personnel: selectRef.current.value,
                price: inputRef.current.value,
              },
              clearFunc
            )
          }
        />
      </Box>

      <List>
        {data.map((item, idx) => (
          <li key={idx}>
            <p>{`${item.personnel} +${item.price}`}</p>

            <button onClick={() => deleteHandler("discount", item.id)}>
              <img src={deleteIcon} />
            </button>
          </li>
        ))}
      </List>
    </>
  );
};

export default DiscountInputField;
