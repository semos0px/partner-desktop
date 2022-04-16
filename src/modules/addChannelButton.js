import styled from "styled-components";
import { useKakao } from "../context/kakao";
import colors from "../styles/constants/colors";

const KAKAO_CHANNEL_PUBLIC_ID = "_YxfVxfK";

const Button = styled.button`
  text-decoration: underline;
  color: ${colors.blue};
`;

const AddChannelButton = () => {
  const { kakaoService } = useKakao();

  const addChannelHandler = () => {
    kakaoService.chat(KAKAO_CHANNEL_PUBLIC_ID);
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
