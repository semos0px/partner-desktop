import { BrowserRouter, Routes, Route } from "react-router-dom";

import GNB from "./layouts/gnb";
import GlobalLayout from "./layouts/globalLayout";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signIn/signup";
import ProfilePage from "./pages/profile";
import ClassPage from "./pages/class";
import InquiryPage from "./pages/inquiry";
import SalesPage from "./pages/sales";
import ViewMore from "./pages/viewMore";
import NotFound from "./pages/notFound";
import ClassDetailPage from "./pages/class/detail";
import AuthProvider, { ProtectRouter } from "./context/auth";
import EditPartnerInfoPage from "./pages/user/edit";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalLayout>
          <BrowserRouter>
            <ProtectRouter>
              <Routes>
                <Route index element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />

                <Route path=":pid" element={<EditPartnerInfoPage />} />

                <Route path="profile" element={<ProfilePage />} />

                <Route path="class/*" element={<ClassPage />}>
                  <Route path=":cid" element={<ClassDetailPage />} />
                </Route>

                <Route path="inquiry" element={<InquiryPage />} />
                <Route path="sales" element={<SalesPage />} />
                <Route path="viewmore" element={<ViewMore />} />
                <Route path="signup" element={<SignUpPage />} />

                <Route path="/*" element={<NotFound />} />
              </Routes>
            </ProtectRouter>

            {/* <GNB /> */}
          </BrowserRouter>
        </GlobalLayout>
      </AuthProvider>
    </div>
  );
};

export default App;
