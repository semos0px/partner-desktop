import styled from "styled-components";
import NotExistBox from "../../components/notExistBox";
import salesData from "../../data/sales";
import PageLayout from "../../layouts/pageLayout";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import zIndex from "../../styles/constants/z-index";
import flexbox from "../../styles/func/flexbox";
import salesImage from "../../assets/images/sale/sale-default.png";
import { useState } from "react";
import HistoryBox from "../../components/historyBox";
import RowLayout from "../../layouts/rowLayout";
import SalesCertainCard from "../../components/salesCertainCard";
import SalesUncertainCard from "../../components/salesUncertainCard";
import BottomLayout from "../../layouts/bottomLayout";
import selectIcon from "../../assets/icon/input/select-chevron.svg";

const Header = styled.header`
  width: 100%;
  max-width: ${responsive.maxWidth.sm}px;
  position: fixed;
  top: 0;
  font-weight: ${typography.weight.regular};
  background-color: ${colors.blue};
  color: ${colors.white};
  z-index: ${zIndex.header};
  border-bottom-left-radius: ${base.borderRadius}px;
  border-bottom-right-radius: ${base.borderRadius}px;
  box-shadow: ${base.boxShadow};
  overflow: hidden;
  padding: 0 10px 30px;

  p {
    width: 100%;
    ${flexbox()}
    height: ${base.height.header}px;
  }
`;

const WrapperLayout = styled.div`
  padding-top: 250px;

  ${responsive.mediaQuery.mobile} {
    padding-top: 210px;
  }
`;

const Section = styled.section`
  margin: 50px 0;
`;

const List = styled.ul`
  box-shadow: ${base.boxShadow};
  padding: 20px;
  border-radius: ${base.borderRadius}px;
`;

const Title = styled.p`
  span {
    color: ${colors.blue};
  }
`;

const Comment = styled.p`
  margin-top: 5px;
  color: ${colors.mediumGray};
  font-size: ${typography.size.tiny}px;

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.small}px;
  }
`;

const Top = styled.div`
  margin-bottom: 20px;
  ${flexbox("space-between")}
`;

const SelectBox = styled.div`
  position: relative;

  select {
    width: 100%;
    height: ${base.height.smallInput}px;
    box-shadow: ${base.boxShadow};
    border-radius: 10px;
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
  }
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  pointer-events: none;
`;

const SalesPage = () => {
  // const [data, setData] = useState({});
  // let data = [];
  let data = salesData;

  return (
    <PageLayout>
      <BottomLayout>
        <Header>
          <p>판매</p>

          <HistoryBox
            cnt={data ? data.certain.length + data.uncertain.length : 0}
            income={data ? data.income : 0}
          />
        </Header>

        <WrapperLayout>
          {data.length === 0 && (
            <NotExistBox
              page="sales"
              imgURL={salesImage}
              redirectPath="/class"
              comment="나의 강습을 확인하고 강습 일정을 등록해 보세요!"
            />
          )}

          {data && (
            <RowLayout>
              <Section>
                <Top>
                  <div>
                    <Title>
                      일정 확인이 필요해요!{" "}
                      <span>({data.uncertain.length}건)</span>
                    </Title>
                    <Comment>
                      아래 강습을 클릭해서 일정을 확정해 주세요.
                    </Comment>
                  </div>
                </Top>

                <List>
                  {data.uncertain.map((item, idx) => (
                    <SalesUncertainCard
                      length={data.uncertain.length}
                      idx={idx}
                      key={idx}
                      sales={item}
                    />
                  ))}
                </List>
              </Section>

              <Section>
                <Top>
                  <Title>
                    일정이 확인 된 강습이에요. ({data.certain.length}건)
                  </Title>

                  <SelectBox>
                    <select>
                      <option>전체</option>
                      <option>강습 예정</option>
                      <option>강습 완료</option>
                    </select>

                    <SelectIcon>
                      <img src={selectIcon} />
                    </SelectIcon>
                  </SelectBox>
                </Top>

                <ul>
                  {data.certain.map((item, idx) => (
                    <SalesCertainCard sales={item} key={idx} />
                  ))}
                </ul>
              </Section>
            </RowLayout>
          )}
        </WrapperLayout>
      </BottomLayout>
    </PageLayout>
  );
};

export default SalesPage;
