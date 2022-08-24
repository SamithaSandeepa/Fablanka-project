import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import dynamic from "next/dynamic";

const AddPastEvent = dynamic(
  () => import("../../../components/pastevent.component/AddPastEvent"),
  {
    ssr: false,
  }
);

const AddEvent = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  console.log(loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated)
    router.push("/login");
  return (
    <>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container-fluid mb-10">
          <AddPastEvent />
        </div>
      </Layout>
    </>
  );
};

export default AddEvent;
