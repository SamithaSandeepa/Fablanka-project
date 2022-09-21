import React from "react";
import axios from "axios";
import Layout from "../../hocs/Layout";
import dynamic from "next/dynamic";
import { API_URL } from "../../config/index";

const SingleProjectMakandura = dynamic(
  () => import("../../components/makandura.component/SingleProject"),
  {
    ssr: false,
  }
);

const project = (props) => {
  console.log(props.project);
  console.log("test");
  return (
    <Layout title="FabLanka | Project" content="Dashboard page">
      <div>
        <SingleProjectMakandura
          title={props.project.title_project_m}
          summery={props.project.summery_project_m}
          content={props.project.content_project_m}
          image={props.project.image_project_m}
        />
      </div>
    </Layout>
  );
};

//getting props data from server
export async function getServerSideProps(context){
  const projectID = context.query.id;
  const response = await axios.get(
    `${API_URL}/api/projectmakandura/${projectID}`
  );
  return {props:{ project: response.data }};
};

export default project;
