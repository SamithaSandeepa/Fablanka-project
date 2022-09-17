import React from "react";
import Layout from "../hocs/Layout";
import ContactUs from "../components/contact";

const contact = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <ContactUs />
      </div>
    </Layout>
  );
};

export default contact;
