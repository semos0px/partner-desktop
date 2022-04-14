import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";

const ButtonBox = styled.div`
  width: 100%;
  ${flexbox("space-between")}

  button {
    width: calc(50% - 10px);
    height: ${base.height.smallInput}px;
    background-color: ${colors.white};
    box-shadow: ${base.boxShadow};
    border-radius: ${base.borderRadius}px;

    &:focus {
      box-shadow: ${base.boxShadow};
    }
  }
`;

const CertainButton = styled.button`
  border: ${({ status }) => (status ? `1px solid ${colors.blue}` : "")};
  color: ${({ status }) => (status ? colors.blue : colors.mediumGray)};
`;

const UncertainButton = styled.button`
  border: ${({ status }) => (status ? "" : `1px solid ${colors.blue}`)};
  color: ${({ status }) => (status ? colors.mediumGray : colors.blue)};
`;

const RecommendationStatusField = ({
  status,
  certainHandler,
  uncertainHandler,
}) => {
  return (
    <ButtonBox>
      <CertainButton onClick={certainHandler} status={status}>
        확정 예약
      </CertainButton>
      <UncertainButton onClick={uncertainHandler} status={status}>
        확인 예약
      </UncertainButton>
    </ButtonBox>
  );
};

export default RecommendationStatusField;
