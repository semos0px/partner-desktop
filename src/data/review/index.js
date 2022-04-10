import thumbnailImage from "../../assets/images/profile/thumbnail.png";

const reviewList = [
  {
    id: 0,
    rating: 2,
    member: {
      nickname: "니콜라스",
      thumbnail: "",
    },
    lesson: "입문 레벨(1DAY 과정)",
    datetime: "22.02.03",
    comment:
      "갈비를 먹고갔더니 배가 불러서 잘 못하겠다니까 말도 안대는 소리하지 말라고 하심. 그래도 재미있는 경험이였네요 -_- ㅋㅋ",
    answer:
      "일단 갈비 사건은 죄송합니다. 다음번에는 더 즐거운 강습 되게 노력하겠습니다. ^^",
  },
  {
    id: 1,
    rating: 4,
    member: {
      nickname: "니콜라스",
      thumbnail: thumbnailImage,
    },
    lesson: "입문 레벨(1DAY 과정)",
    datetime: "22.02.03",
    comment:
      "아이랑 함께 받아봤는데 아이가 너무 좋아했어요!! 다음에또 받고 싶네요 ~ 감사합니다~~",
    answer: null,
  },
];

export default reviewList;
