import React from "react";
import axios from "axios";
import Layout from "../../hocs/Layout";
import dynamic from "next/dynamic";
import { API_URL } from "../../config/index";

const SingleEvents = dynamic(
  () => import("../../components/pastevent.component/SingleEvent"),
  {
    ssr: false,
  }
);

const events = (props) => {
  console.log(props.events);
  console.log("test");
  return (
    <Layout title="FabLanka | News" content="Dashboard page">
      <div>
        <SingleEvents
          title={props.events.title_pastevent}
          summery={props.events.summery_pastevent}
          content={props.events.content_pastevent}
          image={props.events.image_project_m}
        />
      </div>
    </Layout>
  );
};
export async function getStaticPaths(c) {
  // console.log(c, "sffgsgf");

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
}

//getting props data from server
export async function getStaticProps(context) {
  const eventsID = context.params.id;
  const response = await axios.get(`${API_URL}/api/pastevent/${eventsID}`);
  return { props: { events: response.data } };
}

export default events;
