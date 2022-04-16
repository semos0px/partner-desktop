import styled from "styled-components";
import AddButton from "../../modules/addButton";
import InfoTag from "../../modules/infoTag";
import colors from "../../styles/constants/colors";
import regionIcon from "../../assets/icon/class/region.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import base from "../../styles/constants/base";
import { useState } from "react";
import OverlayPortal from "../../overlayPortal";
import Overlay from "../../layouts/overlay";
import Popup from "../../layouts/popup";

const Modal = styled.div`
  position: relative;
  background-color: ${colors.white};
  padding: 20px 40px;
  border-radius: ${base.borderRadius}px;
  text-align: center;
  pointer-events: auto;

  button {
    position: absolute;
    top: 15px;
    right: 0px;
    transform: translate(-50%, -50%);
    padding: 5px;
  }
`;

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
  const [open, setOpen] = useState(false);

  const showDetailAddressHandler = () => {
    setOpen(true);
  };

  return (
    <>
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
              clickHandler={showDetailAddressHandler}
              ispointer="true"
            />
          </li>
        </ul>
      </Box>

      {open && (
        <Popup>
          <Modal>
            <p>인천 연수구 송도문화로 123-1</p>
            <p>송도풀장 203호</p>

            <button onClick={() => setOpen(false)}>x</button>
          </Modal>
        </Popup>
      )}

      <OverlayPortal>
        {open && <Overlay toggleHandler={() => setOpen(false)}></Overlay>}
      </OverlayPortal>
    </>
  );
};

export default LocationInputField;
