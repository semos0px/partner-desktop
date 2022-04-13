class KakaoService {
  login = () => {};

  logout = () => {};

  share = (title, description, imageUrl, link) => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "세모스, 세상의 모든 스포츠",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
            },
          },
          {
            title: "iOS앱 다운받기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
            },
          },
          {
            title: "안드로이드 앱 다운받기",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
            },
          },
        ],
      },
    });
  };
}

export default KakaoService;
