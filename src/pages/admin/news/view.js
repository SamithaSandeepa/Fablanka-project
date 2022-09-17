import React from 'react'
import Layout from "../../../hocs/Layout";

const view = () => {
  return (
    <div>
      
    </div>
  )
}

view.getInitialProps = async (context) => {
    const newsID = context.query.id;
    return { newsID };
  };

export default view
