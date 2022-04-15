import styled from "styled-components";
import LoginBox from "../../components/loginBox";
import SNSBox from "../../components/snsBox";
import Footer from "../../layouts/footer";
import PageLayout from "../../layouts/pageLayout";
import RowLayout from "../../layouts/rowLayout";
import AddChannelButton from "../../modules/addChannelButton";
import Logo from "../../modules/logo";
import colors from "../../styles/constants/colors";
import responsive from "../../styles/constants/responsive";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";

const Header = styled.header`
  width: 100%;
  height: 80px;
  ${flexbox()}
  margin-bottom: 50px;
`;

const Greeting = styled.div`
  width: 100%;
  ${flexbox("center", "center", "column")};
  text-align: center;

  strong {
    display: inline-block;
    font-size: ${typography.size.base}px;
    margin-bottom: 10px;
  }

  p {
    font-size: ${typography.size.tiny}px;
  }

  ${responsive.mediaQuery.mobile} {
    strong {
      font-size: 20px;
    }

    p {
      font-size: ${typography.size.base}px;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  ${flexbox("center", "center", "column")};
  text-align: center;

  font-size: ${typography.size.small}px;

  time {
    font-size: ${typography.size.tiny}px;
    color: ${colors.darkGray};
    margin-top: 10px;
  }

  ${responsive.mediaQuery.mobile} {
    font-size: ${typography.size.base}px;

    time {
      font-size: ${typography.size.small}px;
    }
  }
`;

const A = styled.a`
  text-decoration: underline;
  color: ${colors.blue};
  margin-bottom: 50px;
`;

const SignInPage = () => {
  return (
    <PageLayout>
      <RowLayout>
        <Header>
          <Logo />
        </Header>

        <Greeting>
          <strong>세모스 입점 강사님 환영합니다!</strong>
          <p>강사님의 강습 등록부터 관리까지 세모스로 해결하세요.</p>
        </Greeting>

        <LoginBox />

        <Box>
          <A href="http://reports.semos.kr/" target="_blank">
            세모스에 대해 궁금하다면?
          </A>

          <p>
            고객센터: 카카오톡 채널 <AddChannelButton />
          </p>

          <time>(평일 AM 10:00 - PM 07:00)</time>

          <SNSBox />
        </Box>

        <Footer />
      </RowLayout>
    </PageLayout>
  );
};

export default SignInPage;
