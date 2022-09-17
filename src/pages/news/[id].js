import React from "react";
import axios from "axios";
import Layout from "../../hocs/Layout";
import dynamic from "next/dynamic";
import { API_URL } from "../../config/index";

const SingleNews = dynamic(
  () => import("../../components/news.component/SingleNews"),
  {
    ssr: false,
  }
);

const news = (props) => {
  console.log(props.news);
  return (
    <Layout title="FabLanka | News" content="Dashboard page">
      <div>
        <SingleNews
          title={props.news.title}
          summery={props.news.summery}
          content={props.news.content}
          image={props.news.image}
        />
      </div>
    </Layout>
  );
};

//getting props data from server
news.getInitialProps = async (context) => {
  const newsID = context.query.id;
  const response = await axios.get(`${API_URL}/api/newspage/${newsID}`);
  return { news: response.data};
};

export default news;
