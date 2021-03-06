import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import salesDetailData from "../../data/sales/detail";
import PageLayout from "../../layouts/pageLayout";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import zIndex from "../../styles/constants/z-index";
import flexbox from "../../styles/func/flexbox";
import chevron from "../../assets/icon/page/chevron.svg";
import SalesHistoryBox from "../../components/salesHistoryBox";
import RowLayout from "../../layouts/rowLayout";

const LEFT_RIGHT_PADDING = 20;

const Header = styled.header`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  top: 0;
  font-weight: ${typography.weight.regular};
  background-color: ${colors.white};
  z-index: ${zIndex.header};
  border-bottom-left-radius: ${base.borderRadius}px;
  border-bottom-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  padding: 0 10px 30px;

  p {
    ${flexbox()}
    height: ${base.height.header}px;
  }
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0;
  padding: 10px;

  img {
    transform: rotate(90deg);
  }
`;

const WrapperLayout = styled.div`
  padding: 300px 10px ${base.height.bottomButton + 20}px 10px;
`;

const Border = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.vanilla};
  margin: 30px 0;
`;

const Section = styled.section``;

const Title = styled.p`
  font-size: ${typography.size.base}px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.medium}px;
  }
`;

const Comment = styled.p`
  font-size: ${typography.size.tiny}px;
  color: ${colors.mediumGray};
  margin-top: 5px;
  margin-bottom: 30px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const ServiceBox = styled.div`
  display: flex;
  margin-top: 30px;

  img {
    width: 94px;
    height: 94px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: ${base.borderRadius}px;
    background-color: ${colors.mediumGray};

    ${responsive.mediaQuery.mobile} {
      width: 120px;
      height: 120px;
    }
  }

  p:last-child {
    font-size: ${typography.size.small}px;
    color: ${colors.mediumGray};
    margin: 10px 0;
  }
`;

const UseBox = styled.div`
  div {
    display: flex;

    p:first-child {
      font-size: ${typography.size.small}px;
      color: ${colors.mediumGray};
      margin-right: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const PaymentBox = styled.div`
  margin-top: 30px;

  div {
    ${flexbox("space-between")}
    font-size: ${typography.size.small}px;
    margin-bottom: 10px;

    p:first-child {
      color: ${colors.mediumGray};
    }
  }

  div:last-child {
    margin-top: 40px;
    font-size: ${typography.size.base}px;

    p:first-child {
      color: ${colors.black};
    }

    p:last-child {
      color: ${colors.red};
    }
  }

  ${responsive.mediaQuery.mobile} {
    div:last-child {
      font-size: ${typography.size.medium}px;
    }
  }
`;

const BottomButtonBox = styled.div`
  max-width: ${responsive.maxWidth.sm - LEFT_RIGHT_PADDING}px;
  width: calc(100% - ${LEFT_RIGHT_PADDING}px);
  display: flex;
  position: fixed;
  bottom: 10px;

  button {
    border-radius: ${base.borderRadius}px;
    box-shadow: ${base.boxShadow};
    height: ${base.height.bottomButton}px;
  }
`;

const CancelButton = styled.button`
  width: 40%;
  color: ${colors.mediumGray};
  margin-right: 10px;
  background-color: ${colors.white};
`;

const ConfirmButton = styled.button`
  width: 60%;
  color: ${colors.white};
  background-color: ${colors.blue};
`;

const MetaData = styled.div``;

const SalesDetailPage = () => {
  const navigate = useNavigate();

  const {
    category,
    status,
    title,
    member,
    payment,
    member: { nickname },
  } = salesDetailData;

  const goBackHandler = () => navigate(-1);

  const cancelHandler = () => {
    console.log("?????? ????????????");
  };

  const confirmHandler = () => {
    console.log("?????? ????????????");
  };

  return (
    <PageLayout>
      <Header>
        <div>
          <GoBackButton onClick={goBackHandler}>
            <img src={chevron} alt="????????????" />
          </GoBackButton>

          <p>{nickname}??? ?????? ??????</p>
        </div>

        <SalesHistoryBox member={member} payment={payment} />
      </Header>

      <WrapperLayout>
        <Section>
          <Title>????????? ??????</Title>

          <ServiceBox>
            <img />

            <MetaData>
              <p>{`[${category}] ${title}`}</p>
              <p>?????????: {payment.date}</p>
            </MetaData>
          </ServiceBox>
        </Section>

        <Border />

        <Section>
          <Title>?????? ??????</Title>
          {!status && (
            <Comment>
              ????????? ????????? ????????? ??? ?????? ???????????? ????????? ???????????????!
            </Comment>
          )}

          <UseBox>
            <div>
              <p>??????</p>
              <p>{payment.date}(1??? ??????)</p>
            </div>

            <div>
              <p>??????</p>
              <p>{payment.time}</p>
            </div>
          </UseBox>
        </Section>

        <Border />

        <Section>
          <Title>?????? ??????</Title>

          <PaymentBox>
            <div>
              <p>?????? ??????</p>
              <p>{payment.price.product.toLocaleString()}???</p>
            </div>

            <div>
              <p>??????: ????????????</p>
              <p>+{payment.price.option.toLocaleString()}???</p>
            </div>

            <div>
              <p>??????: 2??????</p>
              <p>+{payment.price.cnt.toLocaleString()}???</p>
            </div>

            <div>
              <p>??? ??????</p>
              <p>
                {(
                  payment.price.option +
                  payment.price.cnt +
                  payment.price.product
                ).toLocaleString()}
                ???
              </p>
            </div>
          </PaymentBox>
        </Section>
      </WrapperLayout>

      {!status && (
        <RowLayout>
          <BottomButtonBox>
            <CancelButton type="button" onClick={cancelHandler}>
              ?????? ????????????
            </CancelButton>
            <ConfirmButton type="button" onClick={confirmHandler}>
              ?????? ????????????
            </ConfirmButton>
          </BottomButtonBox>
        </RowLayout>
      )}
    </PageLayout>
  );
};

export default SalesDetailPage;
