import { Outlet } from "react-router-dom";
import PageLayout from "../../layouts/pageLayout";

const ClassPage = () => {
  return (
    <PageLayout>
      class
      <Outlet />
    </PageLayout>
  );
};

export default ClassPage;
