import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { request_refresh } from "../actions/auth";
import Head from "next/head";
import Aos from "aos";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Layout = ({ title, content, children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(request_refresh());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      {/* <div data-aos="fade-down"> */}
      <Navbar className="sticky-sm-top" />
      {/* </div> */}
      <div className="container-fluid mt-5">{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "FabLanka",
  content: "FabLanka",
};

export default Layout;
