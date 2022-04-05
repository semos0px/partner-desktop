import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const publicRoutes = ["/", "/signup"];

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [uid, setUid] = useState(1);

  // 로그인 기능 구현

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!uid }}>
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
