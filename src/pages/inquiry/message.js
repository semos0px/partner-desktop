import { useEffect, useState } from "react";
import PageLayout from "../../layouts/pageLayout";
import socketIOClient from "socket.io-client";
import SendMessageField from "../../components/sendMessageField";
import PaddingLayout from "../../layouts/paddingLayout";
import styled from "styled-components";
import flexbox from "../../styles/func/flexbox";
import colors from "../../styles/constants/colors";
import typography from "../../styles/constants/typography";
import MessageBubble from "../../messageBubble";
import RowLayout from "../../layouts/rowLayout";

const ENDPOINT = "http://localhost:8080";

const Section = styled.section`
  text-align: center;

  time {
    color: ${colors.mediumGray};
    font-size: ${typography.size.small}px;
    margin-bottom: 50px;
  }
`;

const InquiryMessage = () => {
  const [response, setResponse] = useState("");

  const [message, setMessage] = useState("");

  const nickname = "마늘쫑이야님";

  const messageChangeHandler = (e) => {
    const { value } = e.target;

    setMessage(value);
  };

  const messageSendHandler = () => {
    console.log("전송하기");
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("inquiry", (data) => {
      setResponse(data);
    });
  }, []);

  const date = new Date(response.date);

  return (
    <PageLayout isGoBack={true} headerTitle={nickname}>
      <PaddingLayout>
        <RowLayout>
          <Section>
            <time>{`${date.getFullYear()}년 ${
              date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
            }월 ${
              date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
            }일`}</time>

            <MessageBubble
              text="안녕하세요^^ 프리다이빙 배우고 싶은데...  수영을 못해도 가능할까용??"
              time="12:00"
              isMe={false}
            />

            <MessageBubble
              text="프리다이빙은 수영 실력과 무관합니다!"
              time="14:10"
              isMe={true}
            />

            <MessageBubble
              text="그럼 혹시 언제 12월 29일 2시에 예약이 가능할까용??"
              time="14:30"
              isMe={false}
            />
          </Section>
        </RowLayout>

        <SendMessageField
          changeHandler={messageChangeHandler}
          sendHandler={messageSendHandler}
        />
      </PaddingLayout>
    </PageLayout>
  );
};

export default InquiryMessage;
