import styled from "styled-components";
import colors from "../styles/constants/colors";

const Button = styled.button`
  text-decoration: underline;
  color: ${colors.blue};
`;

const AddChannelButton = () => {
  const addChannelHandler = () => {
    // Kakao.Channel.chat({
    //   channelPublicId: "_YxfVxfK",
    // });
  };

  return (
    <Button
      type="button"
      aria-label="세모스 카카오 채널 추가하기"
      onClick={addChannelHandler}
    >
      @세모스, 세상의 모든 스포츠
    </Button>
  );
};

export default AddChannelButton;
