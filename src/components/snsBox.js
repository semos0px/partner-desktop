import styled from "styled-components";
import instaIcon from "../assets/icon/sns/insta.svg";
import blogIcon from "../assets/icon/sns/blog.svg";
import youtubeIcon from "../assets/icon/sns/youtube.svg";
import facebookIcon from "../assets/icon/sns/facebook.svg";
import transition from "../styles/func/transition";

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0;

  li {
    margin: 0 10px;
    transition: ${transition("opacity")};

    &:hover,
    &:active {
      opacity: 0.8;
    }
  }

  li:not(:last-child) {
    a {
      display: flex;
      width: 44px;
      height: 44px;
      background-color: #8d8d8d;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      img {
        width: 60%;
      }
    }
  }
`;

const FacebookLink = styled.a``;

const Facebook = styled.img`
  width: 44px;
`;

const SNSBox = () => {
  return (
    <Ul>
      <li>
        <a
          href="https://www.instagram.com/semos_sports/"
          target="_blank"
          aria-label="세모스 인스타그램"
        >
          <img src={instaIcon} alt="인스타그램" />
        </a>
      </li>

      <li>
        <a
          href="https://www.youtube.com/channel/UCJPnOxX_AxNCL11A2ar7liw"
          target="_blank"
          aria-label="세모스 유튜브"
        >
          <img src={youtubeIcon} alt="유튜브" />
        </a>
      </li>

      <li>
        <a
          href="https://blog.naver.com/semos2020"
          target="_blank"
          aria-label="세모스 블로그"
        >
          <img src={blogIcon} alt="블로그" />
        </a>
      </li>

      <li>
        <FacebookLink
          href="https://www.facebook.com/semossports/"
          target="_blank"
          aria-label="세모스 페이스북"
        >
          <Facebook src={facebookIcon} alt="페이스북" />
        </FacebookLink>
      </li>
    </Ul>
  );
};

export default SNSBox;
