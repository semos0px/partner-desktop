class KakaoService {
  constructor(key) {
    this.key = key;
  }

  init = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(this.key);
    }
  };

  login = () => {};

  logout = () => {};

  chat = (publicId) => {
    window.Kakao.Channel.chat({
      channelPublicId: publicId,
    });
  };

  share = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "세모스, 세상의 모든 스포츠",
        description:
          "세상의 모든 스포츠, 세모스에 있다! 익스트림, 하이엔드 스포츠 강습 전문 큐레이션 세모스입니다!",
        imageUrl:
          "http://localhost:3000/src/assets/images/semos/semos-thumbnail.png",
        link: {
          mobileWebUrl: "https://semos.kr",
          webUrl: "https://semos.kr",
        },
      },
      buttons: [
        {
          title: "iOS 앱",
          link: {
            mobileWebUrl:
              "https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%8A%A4/id1578637889",
            webUrl:
              "https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%8A%A4/id1578637889",
          },
        },
        {
          title: "안드로이드 앱",
          link: {
            mobileWebUrl:
              "https://play.google.com/store/apps/details?id=com.report.semos",
            webUrl:
              "https://play.google.com/store/apps/details?id=com.report.semos",
          },
        },
      ],
    });
  };
}

export default KakaoService;
