import { useContext, useEffect } from "react";
import { createContext } from "react";
import KakaoService from "../service/kakao";

const KakaoContext = createContext({});

const KakaoProvider = ({ children }) => {
  const kakaoService = new KakaoService(process.env.REACT_APP_KAKAO_API_KEY);

  return (
    <KakaoContext.Provider value={{ kakaoService }}>
      {children}
    </KakaoContext.Provider>
  );
};

export default KakaoProvider;

export const useKakao = () => useContext(KakaoContext);
