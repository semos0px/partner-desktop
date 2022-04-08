import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants/colors";
import typography from "../styles/constants/typography";
import flexbox from "../styles/func/flexbox";

const Box = styled.div`
  padding-top: 100px;
  width: 100%;
  ${flexbox("center", "center", "column")}

  img {
  }
`;

const CommentBox = styled.div`
  text-align: center;
  margin: 50px 0;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.medium}px;

  p:first-child {
    margin-bottom: 5px;
  }
`;

const SLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 30px;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.medium}px;
`;

const NotExistBox = ({ page, imgURL, redirectPath, comment }) => {
  return (
    <Box>
      <img src={imgURL} />

      <CommentBox>
        <p>
          {page === "inquiry" && "문의 내역이 없어요."}
          {page === "sales" && "판매 내역이 없어요."}
        </p>
        <p>{comment}</p>
      </CommentBox>

      <SLink to={redirectPath}>
        {page === "inquiry" && "프로필 수정하기"}
        {page === "sales" && "강습 확인하기"}
      </SLink>
    </Box>
  );
};

export default NotExistBox;

// 문의 내역이 없어요. 매력을 어필하는 프로필을 만들어 보세요!
// 프로필 수정하기

// 판매 내역이 없어요. 나의 강습을 확인하고 강습 일정을 등록해 보세요!
// 강습 확인하기
