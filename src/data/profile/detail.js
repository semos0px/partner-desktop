import lessonImg from "../../assets/images/profile/thumbnail.png";
import scubaImg from "../../assets/images/profile/scuba.jpg";

const profileDetailData = {
  id: "123",
  category: {
    main: "워터스포츠",
    sub: "프리다이빙",
  },
  title: "핸강사(김현주)",
  region: ["서울 송파/강동", "경기 수원"],
  image: {
    main: "",
    background: [scubaImg, scubaImg, scubaImg],
    lesson: [lessonImg, lessonImg, lessonImg, lessonImg, lessonImg, lessonImg],
  },
  career: ["SDI 스쿠버다이빙 강사", "SDI 스쿠버다이빙 강사", "수중 사진 작가"],
};

export default profileDetailData;
