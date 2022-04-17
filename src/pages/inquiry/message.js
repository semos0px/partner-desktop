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
import base from "../../styles/constants/base";
import responsive from "../../styles/constants/responsive";
import { useLocation } from "react-router-dom";

const ENDPOINT = "http://localhost:8080";

const socket = socketIOClient(ENDPOINT);

const Section = styled.section`
  text-align: center;

  time {
    color: ${colors.mediumGray};
    font-size: ${typography.size.small}px;
    margin-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  padding-bottom: ${80 + 20}px;

  ${responsive.mediaQuery.mobile} {
    padding-bottom: ${200 + 20}px;
  }
`;

const InquiryMessage = ({ chatService }) => {
  // 유저 정보 가져오기
  const { pathname } = useLocation();
  const [category, uid] = pathname.slice(1, pathname.length).split("/");
  const [socketId, setSocketId] = useState("");

  const [roomName, setRooName] = useState(uid);

  const date = new Date();

  const [state, setState] = useState({
    message: "",
    name: "",
    time: "",
  });

  const [chat, setChat] = useState([]);

  console.log(chat, socketId);

  const textChangeHandler = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const messageSubmitHandler = (e) => {
    e.preventDefault();

    const { name, message } = state;

    socket.emit("message", { name, message, time: new Date() });

    setState({ message: "", name: "", time: "" });
  };

  const renderChat = () => {
    return chat.map(({ name, message, time }, index) => (
      <MessageBubble
        key={index}
        text={message}
        time={`${new Date(time).getHours()}:${new Date(time).getMinutes()}`}
        isMe={socketId === name ? true : false}
      />
    ));
  };

  useEffect(() => {
    socket.on("send_msg", ({ name, message, time }, id) => {
      setChat([...chat, { name: id, message, time }]);
    });

    socket.on("connect", (res) => {
      setSocketId(socket.id);
    });
  });

  return (
    <PageLayout isGoBack={true} headerTitle={roomName}>
      <PaddingLayout>
        <RowLayout>
          <Wrapper>
            <Section>
              <time>{`${date.getFullYear()}년 ${
                date.getMonth() + 1 < 10
                  ? `0${date.getMonth() + 1}`
                  : date.getMonth() + 1
              }월 ${
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
              }일`}</time>

              <MessageBubble
                key={0}
                text="안녕하세요"
                time={`12:00`}
                isMe={true}
              />
              <MessageBubble
                key={1}
                text="안녕하세요 !"
                time={`12:01`}
                isMe={false}
              />

              {renderChat()}
            </Section>
          </Wrapper>
        </RowLayout>

        <SendMessageField
          name="message"
          value={state.message}
          changeHandler={textChangeHandler}
          sendHandler={messageSubmitHandler}
        />
      </PaddingLayout>
    </PageLayout>
  );
};

export default InquiryMessage;
