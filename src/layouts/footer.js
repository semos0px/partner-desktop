import styled from "styled-components";
import QRBox from "../components/qrBox";
import colors from "../styles/constants/colors";
import responsive from "../styles/constants/responsive";
import typography from "../styles/constants/typography";

const SFooter = styled.footer`
  color: ${colors.lightGray};
  font-size: ${typography.size.tiny}px;

  ${responsive.mediaQuery.mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

const CustomerCenter = styled.div`
  strong {
    display: inline-block;
    font-size: ${typography.size.small}px;
    color: ${colors.darkGray};
    margin-bottom: 10px;
  }
`;

const MetaData = styled.div`
  margin-bottom: 50px;

  p {
    margin-bottom: 5px;
  }

  ${responsive.mediaQuery.mobile} {
    margin-bottom: 0px;
  }
`;

const Copyright = styled.div`
  margin: 30px 0 50px 0;
  font-size: ${typography.size.micro}px;
`;

const CompanyInfo = styled.div`
  font-size: ${typography.size.micro}px;

  strong {
    color: ${colors.darkGray};
  }
`;

const DList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const DDiv = styled.div`
  display: flex;
  margin-right: 10px;
  /* flex-wrap: wrap; */
`;

const DTerm = styled.dt`
  &:after {
    content: ":";
    margin: 5px;
  }
`;

const Contact = styled.div`
  margin-top: 5px;

  p {
    display: inline;
    margin-right: 10px;
  }

  a {
    margin-right: 10px;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <MetaData>
        <CustomerCenter>
          <strong>고객센터</strong>

          <p>카카오톡 채널 @세모스, 세상의 모든 스포츠</p>
          <time>(평일 10:00 - 18:00)</time>
        </CustomerCenter>

        <Copyright>
          <p>
            리포츠(주)는 통신판매중개자이며 서비스 상품에 대한 당사자 및
            주최자가 아닙니다.
          </p>
          <p>따라서 리포츠는 등록 된 서비스 상품에 대해 책임지지 않습니다.</p>
        </Copyright>

        <CompanyInfo>
          <strong>상호명: 리포츠(주)</strong>

          <DList>
            <DDiv>
              <DTerm>대표이사</DTerm>
              <dd>변민지</dd>
            </DDiv>

            <DDiv>
              <DTerm>개인정보책임자</DTerm>
              <dd>허재혁</dd>
            </DDiv>

            <DDiv>
              <DTerm>주소</DTerm>
              <dd>인천 연수구 송도문화로 119, B1041-5, 6 리포츠(주)</dd>
            </DDiv>
          </DList>

          <Contact>
            <p>사업자등록번호 : 206-88-01662</p>

            <a href="mailto:operate.senior@semos.kr">
              이메일: operate.senior@semos.kr
            </a>

            <a href="tel:0507-1354-2961">전화번호: 0507-1354-2961</a>
          </Contact>
        </CompanyInfo>
      </MetaData>

      <QRBox />
    </SFooter>
  );
};

export default Footer;
