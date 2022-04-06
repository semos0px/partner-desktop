import PageLayout from "../../layouts/pageLayout";
import PaddingLayout from "../../layouts/paddingLayout";
import NoticeCard from "../../components/noticeCard";
import styled from "styled-components";

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const NoticePage = () => {
  const noticeList = [
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "양양바다서핑은 세모스에서!",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "[크루EVENT] 서핑 1Day 클래스",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "9월달 크루 모집 안내",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "8월달 크루 모집 안내",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "3배 이상 할인받는 크루 모집",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "워터 스포츠 강사님들 주목!",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "워터 스포츠 강사님들 주목!",
      url: "#",
    },
    {
      year: 2021,
      month: "08",
      day: 30,
      thumbnail: "",
      title: "워터 스포츠 강사님들 주목!",
      url: "#",
    },
  ];
  return (
    <PageLayout headerTitle="공지사항" isGoBack={true}>
      <PaddingLayout>
        <List>
          {noticeList.map((notice, idx) => (
            <NoticeCard key={idx} notice={notice} />
          ))}
        </List>
      </PaddingLayout>
    </PageLayout>
  );
};

export default NoticePage;
