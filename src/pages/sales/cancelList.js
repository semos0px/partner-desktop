import styled from "styled-components";
import CancelCard from "../../components/cancelCard";
import cancelList from "../../data/sales/cancel";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import fonts from "../../styles/constants/fonts";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import salesImage from "../../assets/images/sale/sale-default.png";
import NotExistBox from "../../components/notExistBox";

const Wrapper = styled.div``;

const Title = styled.p`
  font-size: ${typography.size.small}px;
  margin-bottom: 30px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.base}px;
  }
`;

const List = styled.ul`
  font-family: ${fonts.kr.secondary.regular};
`;

const CancelPage = () => {
  const data = cancelList;

  return (
    <PageLayout headerTitle="취소/환불 내역" isGoBack={true}>
      <PaddingLayout>
        <RowLayout>
          <Title>취소 또는 환불 된 내역이에요.</Title>

          <Wrapper>
            {data.length === 0 && (
              <NotExistBox
                imgURL={salesImage}
                comment="취소/환불내역이 없습니다."
              />
            )}

            <List>
              {data.map((item, idx) => (
                <CancelCard key={idx} cancel={item} />
              ))}
            </List>
          </Wrapper>
        </RowLayout>
      </PaddingLayout>
    </PageLayout>
  );
};

export default CancelPage;
