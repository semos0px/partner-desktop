import styled from "styled-components";
import base from "./styles/constants/base";
import colors from "./styles/constants/colors";
import responsive from "./styles/constants/responsive";
import typography from "./styles/constants/typography";

const Container = styled.div`
  overflow: hidden;
`;

const Box = styled.div`
  display: flex;
  margin: 20px 0px;
  flex-direction: ${({ isMe }) => isMe && "row-reverse"};

  padding-right: ${({ isMe }) => isMe && "20px;"};
  padding-left: ${({ isMe }) => !isMe && "20px;"};
`;

const TimeBox = styled.div`
  height: 100%;
  align-self: end;
  margin-left: 10px;

  time {
    color: ${colors.mediumGray};
    font-size: ${typography.size.small}px;
  }
`;

const BubbleBox = styled.div`
  position: relative;
  display: flex;
  filter: drop-shadow(1.95px 1.95px 2.5px rgba(0, 0, 0, 0.2));
`;

const Bubble = styled.div`
  max-width: 200px;
  padding: 10px;
  height: 100%;
  border-radius: ${base.borderRadius}px;
  background-color: ${({ isMe }) => (isMe ? colors.white : colors.lightBlue)};
  margin-left: ${({ isMe }) => isMe && "10px"};
  text-align: left;

  ${responsive.mediaQuery.mobile} {
    width: 360px;
  }

  p {
    padding: 0 5px;
    width: 100%;
  }
`;

const Tooltip = styled.div`
  width: 70px;
  height: 70px;
  top: 0;
  position: absolute;
  right: -40px;
  top: -17px;
  ${({ isMe }) => !isMe && `transform: scaleX(-1)`};
  ${({ isMe }) => !isMe && `left: -40px`};

  clip-path: polygon(
    25% 25%,
    73.44% 25%,
    56.22% 32.32%,
    48.76% 36.92%,
    41.6% 42%,
    36.29% 48.98%,
    30.65% 57.96%,
    25% 66.94%
  );
  background-color: ${({ isMe }) => (isMe ? colors.white : colors.lightBlue)};
`;

const MessageBubble = ({ text, time, isMe = true }) => {
  return (
    <Container isMe={isMe}>
      <Box isMe={isMe}>
        <BubbleBox>
          <Bubble isMe={isMe}>
            <p>{text}</p>
          </Bubble>

          <Tooltip isMe={isMe} />
        </BubbleBox>

        <TimeBox>
          <time>{time}</time>
        </TimeBox>
      </Box>
    </Container>
  );
};

export default MessageBubble;
