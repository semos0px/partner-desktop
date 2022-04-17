import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LocalStorage from "../service/localstorage";
import { useKakao } from "./kakao";

const publicRoutes = ["/", "/signup"];

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const localStorage = new LocalStorage();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [uid, setUid] = useState(localStorage.getItem());

  const { kakaoService } = useKakao();

  const loginHandler = (provider) => {
    /**
     * 카카오 로그인
     */

    kakaoService.login(
      (success) => {
        // 로컬 스토리지 저장
        // state에 저장
        // viewmore로 리다이렉션
        // 에러시 /로 리다이렉션

        const { access_token } = success;

        setUid(access_token);

        localStorage.setItem(access_token);

        if (uid) {
          navigate("/viewmore");
        } else {
          navigate("/");
        }
      },
      (error) => {
        console.log(error);
        navigate("/");
      }
    );
  };

  const logoutHandler = () => {
    /**
     * 카카오 로그아웃
     */
    kakaoService.logout((res) => {
      // 로컬 스토리지 삭제
      localStorage.setItem("");

      // state에 삭제
      setUid("");

      // /로 리다이렉션
      if (res) {
        navigate("/");
      }
    });
  };

  // 로그인 기능 구현
  useEffect(() => {
    if (uid && pathname === "/") {
      navigate("/viewmore");
    } else {
      navigate(pathname);
    }
  }, [uid]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!uid,
        loginHandler,
        logoutHandler,
        localStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

/* ProtectRouter: auth 인증 체크 */
export const ProtectRouter = ({ children }) => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && !publicRoutes.some((route) => route === pathname)) {
    return <div>권한이 없습니다.</div>;
  }

  return children;
};
