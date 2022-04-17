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
import ProfileDetailPage from "./pages/profile/detail";
import NoticePage from "./pages/notice";
import FAQPage from "./pages/faq";
import ProfileEditPage from "./pages/profile/edit";
import ReportsPage from "./pages/reports";
import ReportsDetailPage from "./pages/reports/detail";
import ReportsWritePage from "./pages/reports/write";
import InquiryMessage from "./pages/inquiry/message";
import CancelPage from "./pages/sales/cancelList";
import CancelDetailPage from "./pages/sales/cancelDetail";
import SalesDetailPage from "./pages/sales/detail";
import ReviewPage from "./pages/review";
import ClassEditContentsPage from "./pages/class/editContents";
import ClassEditSchedulePage from "./pages/class/editSchedule";
import { useKakao } from "./context/kakao";
import Chat from "./service/chat";

const App = () => {
  const { kakaoService } = useKakao();
  const chatService = new Chat();

  kakaoService.init();

  return (
    <div className="App">
      <GlobalLayout>
        <BrowserRouter>
          <AuthProvider>
            <ProtectRouter>
              <Routes>
                <Route index element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />

                <Route path=":pid" element={<EditPartnerInfoPage />} />

                <Route path="profile" element={<ProfilePage />} />
                <Route path="profile/:pid" element={<ProfileDetailPage />} />
                <Route path="profile/:pid/edit" element={<ProfileEditPage />} />

                <Route path="class" element={<ClassPage />} />
                <Route path="class/:cid" element={<ClassDetailPage />} />
                <Route
                  path="class/:cid/edit/contents"
                  element={<ClassEditContentsPage />}
                />
                <Route
                  path="class/:cid/edit/schedule"
                  element={<ClassEditSchedulePage />}
                />

                <Route
                  path="inquiry"
                  element={<InquiryPage chatService={chatService} />}
                />
                <Route
                  path="inquiry/:mid"
                  element={<InquiryMessage chatService={chatService} />}
                />

                <Route path="sales" element={<SalesPage />} />
                <Route path="sales/:sid" element={<SalesDetailPage />} />
                <Route path="cancel" element={<CancelPage />} />
                <Route path="cancel/:cid" element={<CancelDetailPage />} />

                <Route path="viewmore" element={<ViewMore />} />
                <Route path="review" element={<ReviewPage />} />
                <Route path="notice" element={<NoticePage />} />
                <Route path="faq" element={<FAQPage />} />

                <Route path="reports" element={<ReportsPage />} />
                <Route path="reports/:sid" element={<ReportsDetailPage />} />
                <Route
                  path="reports/:sid/write"
                  element={<ReportsWritePage />}
                />

                <Route path="signup" element={<SignUpPage />} />

                <Route path="/*" element={<NotFound />} />
              </Routes>
            </ProtectRouter>
          </AuthProvider>

          <GNB />
        </BrowserRouter>
      </GlobalLayout>
    </div>
  );
};

export default App;
