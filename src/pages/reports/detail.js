import { useParams } from "react-router-dom";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";

const ReportsDetailPage = () => {
  const { rid } = useParams();

  return (
    <PageLayout isGoBack={true}>
      <PaddingLayout></PaddingLayout>
    </PageLayout>
  );
};

export default ReportsDetailPage;
