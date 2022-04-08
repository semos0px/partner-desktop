import { useParams } from "react-router-dom";
import PaddingLayout from "../../layouts/paddingLayout";
import PageLayout from "../../layouts/pageLayout";

const ReportsWritePage = () => {
  const { rid } = useParams();

  return (
    <PageLayout isGoBack={true}>
      <PaddingLayout>write</PaddingLayout>
    </PageLayout>
  );
};

export default ReportsWritePage;
