import { Link } from "react-router-dom";
import styled from "styled-components";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";
import editIcon from "../../assets/icon/viewmore/edit.svg";
import RowLayout from "../../layouts/rowLayout";
import typography from "../../styles/constants/typography";
import fonts from "../../styles/constants/fonts";
import chevron from "../../assets/icon/page/chevron.svg";
import reportsIcon from "../../assets/icon/viewmore/reports.png";
import reviewIcon from "../../assets/icon/viewmore/review.png";
import kakaoIcon from "../../assets/icon/login/kakao.svg";
import responsive from "../../styles/constants/responsive";
import BottomLayout from "../../layouts/bottomLayout";
import { useKakao } from "../../context/kakao";
import { useAuth } from "../../context/auth";

const KAKAO_CHANNEL_PUBLIC_ID = "_YxfVxfK";

const Section = styled.section`
  padding: 0px 20px;
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.white};
  font-family: ${fonts.kr.secondary};

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  ${responsive.mediaQuery.mobile} {
    padding: 0px 50px;
  }
`;

const KakaoSection = styled.section`
  padding: 0px 20px;
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  background-color: ${colors.yellow};
  font-family: ${fonts.kr.secondary};
  margin-bottom: 20px;

  ${responsive.mediaQuery.mobile} {
    padding: 0px 50px;
  }
`;

const FLink = styled(Link)``;

const SLink = styled(Link)`
  padding: 20px 0;
  ${flexbox("space-between")};
  width: 100%;

  div {
    ${flexbox("flex-start")}

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    padding: 30px 0;
  }
`;

const PartnerInfoBox = styled.div`
  ${flexbox("space-between")}
`;

const Data = styled.div`
  padding: 30px 0;

  p:not(:last-child) {
    margin-bottom: 5px;
  }

  p:last-child {
    font-size: ${typography.size.small}px;
  }
`;

const Title = styled.p`
  font-size: ${typography.size.medium}px;
  margin-bottom: 20px;
`;

const Border = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.vanilla};
  border-radius: 5px;
`;

const Chevron = styled.img`
  transform: rotate(-90deg);
  width: 15px;
  height: 15px;
`;

const ALink = styled.a`
  padding: 20px 0;
  ${flexbox("space-between")};
  width: 100%;

  div {
    ${flexbox("flex-start")}

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    padding: 30px 0;
  }
`;

const Button = styled.button`
  padding: 20px 0;
  ${flexbox("space-between")};
  width: 100%;

  div {
    ${flexbox("flex-start")}

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    span {
      font-size: ${typography.size.small}px;
    }
  }

  ${responsive.mediaQuery.mobile} {
    padding: 30px 0;
  }
`;

const ViewMore = () => {
  const { kakaoService } = useKakao();
  const { logoutHandler } = useAuth();

  // data fetching
  const partnerInfo = {
    id: "20200902",
    name: "김현주",
    mobile: "010-3305-3419",
  };

  const kakaoInquiryHandler = () => {
    kakaoService.chat(KAKAO_CHANNEL_PUBLIC_ID);
  };

  const shareHandler = () => {
    kakaoService.share();
  };

  return (
    <PageLayout headerTitle="더보기" backgroundColor={colors.darkWhite}>
      <PaddingLayout>
        <BottomLayout>
          <RowLayout>
            <Section>
              <PartnerInfoBox>
                <Data>
                  <p>{partnerInfo.name}강사님</p>
                  <p>{partnerInfo.mobile}</p>
                </Data>
                <FLink to={`/${partnerInfo.id}`}>
                  <img src={editIcon} />
                </FLink>
              </PartnerInfoBox>

              <Border />

              <SLink to="/reports">
                <div>
                  <img src={reportsIcon} />
                  <p>강습 리포트</p>
                </div>

                <Chevron src={chevron} />
              </SLink>

              <Border />

              <SLink to="/review">
                <div>
                  <img src={reviewIcon} />
                  <p>후기 답변 관리</p>
                </div>

                <Chevron src={chevron} />
              </SLink>
            </Section>

            <Title>고객센터</Title>

            <KakaoSection>
              <Button type="button" onClick={kakaoInquiryHandler}>
                <div>
                  <img src={kakaoIcon} />
                  <p>
                    카카오톡 문의 <span>(평일: 10:00 - 19:00)</span>
                  </p>
                </div>

                <Chevron src={chevron} />
              </Button>
            </KakaoSection>

            <Section>
              <SLink to="/faq">
                <div>
                  <p>자주 묻는 질문</p>
                </div>

                <Chevron src={chevron} />
              </SLink>

              <Border />

              <SLink to="/notice">
                <div>
                  <p>공지사항</p>
                </div>

                <Chevron src={chevron} />
              </SLink>

              <Border />

              <ALink href="http://reports.semos.kr/" target="_blank">
                <div>
                  <p>리포츠 정보</p>
                </div>

                <Chevron src={chevron} />
              </ALink>

              <Border />

              <Button type="button" onClick={shareHandler}>
                <div>
                  <p>세모스 공유하기</p>
                </div>

                <Chevron src={chevron} />
              </Button>

              <Border />

              <Button type="button" onClick={logoutHandler}>
                <div>
                  <p>로그아웃</p>
                </div>

                <Chevron src={chevron} />
              </Button>
            </Section>
          </RowLayout>
        </BottomLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ViewMore;
