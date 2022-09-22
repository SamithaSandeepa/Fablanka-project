import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import axios from "axios";
import dynamic from "next/dynamic";
import { API_URL } from "../../../config/index";
// import EditNews from "../../../components/news.component/EditNews";

const EditEvents = dynamic(
  () => import("../../../components/pastevent.component/EditPastEvents"),
  {
    ssr: false,
  }
);

const editevents = (props) => {
  console.log(props.events);
  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <div>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container mb-10">
          <EditEvents
            id={props.events.id}
            title={props.events.title_pastevent}
            summery={props.events.summery_pastevent}
            content={props.events.content_pastevent}
            image={props.events.image_project_m}
            status={props.events.status}
          />
        </div>
      </Layout>
    </div>
  );
};

//return evetsID from params
editevents.getInitialProps = async (context) => {
  const evetsID = context.query.id;
  const response = await axios.get(`${API_URL}/api/pastevent/${evetsID}`);
  return { events: response.data };
};

export default editevents;
