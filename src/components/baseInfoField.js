import styled from "styled-components";
import InputField from "./inputField";
import selectIcon from "../assets/icon/input/select-chevron.svg";
import base from "../styles/constants/base";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";

const Box = styled.div`
  width: calc(100% - 140px);
  margin-left: 20px;
`;

const Top = styled.div`
  display: flex;
`;

const Div = styled.div`
  position: relative;
  width: 100%;
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
  width: 100%;
  height: ${base.height.input - 10}px;
  box-shadow: ${base.boxShadow};
  border-radius: ${base.borderRadius}px;
  color: ${colors.mediumGray};
  padding: 10px 20px;
  margin-top: 15px;

  :focus {
    box-shadow: ${base.boxShadow};
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: none;
`;

const BaseInfoField = ({ inputData, changeHandler }) => {
  return (
    <Box>
      <Top>
        <Div>
          <Select
            name="base-category-main"
            defaultValue={inputData.base.category.main}
            onChange={changeHandler}
          >
            <option value="">대분류</option>
            <option value="w">워터스포츠</option>
            <option value="o">야외스포츠</option>
            <option value="i">실내스포츠</option>
          </Select>

          <SelectIcon>
            <img src={selectIcon} />
          </SelectIcon>
        </Div>

        <Div>
          <Select
            name="base-category-sub"
            defaultValue={inputData.base.category.sub}
            onChange={changeHandler}
          >
            <option value="">소분류</option>
            <option value="s">스쿠버다이빙</option>
            <option value="f">프리다이빙</option>
            <option value="">서핑</option>
            <option value="">수영</option>
            <option value="">웨이크보드</option>
            <option value="">수상스키</option>
            <option value="">조정</option>
            <option value="">카누/카약</option>
            <option value="">수상레저</option>
          </Select>

          <SelectIcon>
            <img src={selectIcon} />
          </SelectIcon>
        </Div>
      </Top>

      <Input
        name="base-name"
        type="text"
        placeholder="강사명/센터명"
        value={inputData.base.name}
        onChange={changeHandler}
      />
    </Box>
  );
};

export default BaseInfoField;
