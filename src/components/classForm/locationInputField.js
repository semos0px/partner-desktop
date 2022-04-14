import styled from "styled-components";
import AddButton from "../../modules/addButton";
import InfoTag from "../../modules/infoTag";
import colors from "../../styles/constants/colors";
import regionIcon from "../../assets/icon/class/region.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import base from "../../styles/constants/base";

const Box = styled.div`
  width: 100%;
  margin-top: 20px;

  ${responsive.mediaQuery.mobile} {
    width: calc(100% - 150px);
    margin-top: 0px;
  }
`;

const MainAddress = styled.div`
  width: 100%;
  ${flexbox("flex-start")}
  margin-bottom: 10px;

  button {
    background-color: ${colors.blue};
    color: ${colors.white};
    padding: 5px 10px;
    border-radius: 40px;
    font-size: ${typography.size.small}px;
    ${flexbox()}
    margin-right: 10px;

    img {
      margin-right: 5px;
    }
  }

  p {
    color: ${colors.mediumGray};
  }
`;

const SubAddress = styled.div`
  width: 100%;
  ${flexbox()}
  margin-bottom: 20px;

  input {
    width: 100%;
    margin-right: 10px;
  }
`;

const LocationInputField = ({
  searchAddressHandler,
  addHandler,
  deleteHandler,
}) => {
  return (
    <Box>
      <MainAddress>
        <button onClick={searchAddressHandler}>
          <img src={regionIcon} />
          <span>주소 검색</span>
        </button>

        <p>인천 연수구 새말로 693-1</p>
      </MainAddress>

      <SubAddress>
        <input type="text" placeholder="상세주소 입력" name="location-sub" />

        <AddButton addHandler={addHandler} />
      </SubAddress>

      {/* 데이터 가져오기 */}
      <ul>
        <li>
          <InfoTag
            text="서울 송파 잠실"
            color="blue"
            isLine={true}
            deleteHandler={deleteHandler}
          />
        </li>
      </ul>
    </Box>
  );
};

export default LocationInputField;
