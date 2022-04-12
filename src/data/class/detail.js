const classDetailData = {
  id: 0,
  profile: {
    category: "프리다이빙",
    name: "고고다이브(백강사)",
  },
  lesson: {
    title: "체험 다이빙",
    // false: 강습 닫기, true: 강습 열기
    status: true,
    recommendation: {
      // false: 확인 예약, true: 확정 예약
      status: false,
    },
    price: 80000,
    occupancy: {
      maximum: 4,
    },
    discount: [
      {
        num: 2,
        price: 60000,
      },
      {
        num: 3,
        price: 60000,
      },
      {
        num: 4,
        price: 70000,
      },
      {
        num: 5,
        price: 120000,
      },
      {
        num: 6,
        price: 140000,
      },
      {
        num: 7,
        price: 140000,
      },
    ],
    schedule: {
      base: [
        {
          location: ["서울 송파 잠실", "인천 연수 송도"],
          day: [1, 2, 3],
          time: [
            {
              start: {
                hour: "13",
                minute: "00",
              },
              finish: {
                hour: "14",
                minute: "00",
              },
            },
          ],
        },
        {
          location: ["서울 송파 잠실", "인천 연수 송도", "인천 연수 송도"],
          day: [4, 5, 6],
          time: [
            {
              start: {
                hour: "15",
                minute: "00",
              },
              finish: {
                hour: "16",
                minute: "00",
              },
            },
            {
              start: {
                hour: "14",
                minute: "00",
              },
              finish: {
                hour: "15",
                minute: "00",
              },
            },
          ],
        },
        {
          day: [7],
          time: [],
        },
      ],
      detail: [
        {
          datetime: "2022년 2월 11일 (금요일)",
          location: "인천 연수 선학",
          time: [
            {
              start: {
                hour: "13",
                minute: "00",
              },
              finish: {
                hour: "14",
                minute: "00",
              },
            },
          ],
          personnel: 1,
        },
        {
          datetime: "2022년 2월 16일 (수요일)",
          location: "서울 송파 잠실",
          time: [
            {
              start: {
                hour: "13",
                minute: "00",
              },
              finish: {
                hour: "14",
                minute: "00",
              },
            },
          ],
          personnel: 1,
        },
      ],
    },
    option: [
      {
        content: "풀장 입장료",
        price: 33000,
      },
      {
        content: "풀장 입장료",
        price: 33000,
      },
    ],
    location: ["서울 송파 잠실", "인천 연수 송도", "인천 연수 송도"],
    thumbnail: null,
    included: ["풀장 입장료", "장비 렌탈비", "장비 렌탈비"],
    except: ["라이센스 발급비 +50,000", "해양실습비 가격상이"],
    materials: ["수영복(레쉬가드 가능)", "세면도구", "세면도구"],
    faq: [
      {
        question: "수영을 못해도 괜찮을까요?",
        answer:
          "네 수영과 프리다이빙은 전혀 무관합니다^^ 물을 무서워하시는 분들도 체험다이빙은 문제 없이 가능합니다!!",
      },
    ],
    usage: {
      detail: "*강습 일정: 원데이 3시간 강습",
      additional:
        "*백신패스가 의무화 됨에 따라 어플 인증 후 입장이 가능합니다.",
    },
  },
};

export default classDetailData;
