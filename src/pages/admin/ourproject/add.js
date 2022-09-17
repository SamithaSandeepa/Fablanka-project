import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import dynamic from "next/dynamic";

const AddOurProject = dynamic(
  () => import("../../../components/makandura.component/AddOurProject"),
  {
    ssr: false,
  }
);

const AddEvent = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  console.log(loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated) {
    console.log(loading, window, isAuthenticated);
    router.push("/login");
  }
  
  return (
    <>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container-fluid mb-10">
          <AddOurProject />
        </div>
      </Layout>
    </>
  );
};

export default AddEvent;
