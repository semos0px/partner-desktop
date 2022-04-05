import styled from "styled-components";
import iQRCode from "../assets/qrcode/ios/ios.png";
import aQRCode from "../assets/qrcode/adroid/adroid.png";
import colors from "../styles/constants/colors";
import flexbox from "../styles/func/flexbox";
import fonts from "../styles/constants/fonts";
import responsive from "../styles/constants/responsive";

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${colors.lightGray};

  p {
    margin-bottom: 10px;
    font-family: ${fonts.kr.point};
    font-size: 13px;
    white-space: nowrap;
  }

  div:not(:last-child) {
    margin-right: 20px;
  }

  ${responsive.mediaQuery.mobile} {
    width: auto;
    align-items: flex-end;
  }
`;

const Box = styled.div`
  ${flexbox("center", "center", "column")}
`;

const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  ${flexbox()}
  border-radius: 7px;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;

  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

const QRBox = () => {
  const qrList = [
    {
      imgURL: iQRCode,
      alt: "ios QR code",
      title: "ios 다운로드",
    },
    {
      imgURL: aQRCode,
      alt: "adroid QR code",
      title: "안드로이드 다운로드",
    },
  ];

  return (
    <Div>
      {qrList.map((qr, idx) => (
        <Box key={idx}>
          <p>{qr.title}</p>

          <ImgWrapper>
            <Img url={qr.imgURL} />
          </ImgWrapper>
        </Box>
      ))}
    </Div>
  );
};

export default QRBox;
