import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import dynamic from "next/dynamic";

const AddNews = dynamic(
  () => import("../../../components/news.component/AddNews"),
  {
    ssr: false,
  }
);

const NewsAdd = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated)
    router.push("/login");

  return (
    <>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container-fluid mb-10">
          <AddNews />
        </div>
      </Layout>
    </>
  );
};

export default NewsAdd;
