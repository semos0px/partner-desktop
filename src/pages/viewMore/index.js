import { Link } from "react-router-dom";
import styled from "styled-components";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";
import editIcon from "../../assets/icon/page/edit.svg";

const Section = styled.section`
  padding: 0px 50px;
  border-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
`;

const SLink = styled(Link)``;

const PartnerInfoBox = styled.div`
  ${flexbox("space-between")}
`;

const Data = styled.div``;

const ViewMore = () => {
  // data fetching
  const partnerInfo = {
    id: "20200902",
    name: "김현주",
    mobile: "010-3305-3419",
  };

  return (
    <PageLayout headerTitle="더보기" backgroundColor={colors.darkWhite}>
      <PaddingLayout>
        <Section>
          <PartnerInfoBox>
            <Data>
              <p>{partnerInfo.name}강사님</p>
              <p>{partnerInfo.mobile}</p>
            </Data>
            <SLink to={`/${partnerInfo.id}`}>
              <img src={editIcon} />
            </SLink>
          </PartnerInfoBox>
        </Section>

        <Section></Section>
      </PaddingLayout>
    </PageLayout>
  );
};

export default ViewMore;
