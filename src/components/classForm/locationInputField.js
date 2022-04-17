import styled from "styled-components";
import AddButton from "../../modules/addButton";
import InfoTag from "../../modules/infoTag";
import colors from "../../styles/constants/colors";
import regionIcon from "../../assets/icon/class/region.svg";
import flexbox from "../../styles/func/flexbox";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import base from "../../styles/constants/base";
import { useRef, useState } from "react";
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

  ul {
    display: flex;
    flex-wrap: wrap;
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
  data,
  targetLocation,
  setTargetLocation,
}) => {
  const detailRef = useRef();
  const [open, setOpen] = useState(false);
  const [targetAddress, setTargetAddress] = useState("");

  const showDetailAddressHandler = (address) => {
    setTargetAddress({
      main: address.main,
      detail: address.detail,
    });
    setOpen(true);
  };

  const clearFunc = () => {
    detailRef.current.value = "";
    setTargetLocation("");
  };

  return (
    <>
      <Box>
        <MainAddress>
          <button onClick={searchAddressHandler}>
            <img src={regionIcon} />
            <span>주소 검색</span>
          </button>

          <p>{targetLocation}</p>
        </MainAddress>

        <SubAddress>
          <input type="text" placeholder="상세주소 입력" ref={detailRef} />

          <AddButton
            addHandler={() =>
              addHandler(
                "location",
                { detail: detailRef.current.value },
                clearFunc
              )
            }
          />
        </SubAddress>

        {/* 데이터 가져오기 */}
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>
              <InfoTag
                text={shortenAddress(item.main)}
                color="blue"
                isLine={true}
                deleteHandler={() => deleteHandler("location", item.id)}
                clickHandler={() => showDetailAddressHandler(item)}
                ispointer="true"
              />
            </li>
          ))}
        </ul>
      </Box>

      {open && (
        <Popup>
          <Modal>
            <p>{targetAddress.main}</p>
            <p>{targetAddress.detail}</p>

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

export const shortenAddress = (address) => {
  const [first, second, third] = address.split(" ");

  return `${first.slice(0, 2)} ${second.slice(0, 2)} ${third.slice(0, 2)}`;
};
