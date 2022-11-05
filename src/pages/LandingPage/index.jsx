import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Go-Catering App</title>
        <meta name="description" content="Grab your foods now." />
        <meta name="keywords" content="Menu, Cart, About" />
      </Helmet>
      <Banner />
    </>
  );
};

export default LandingPage;
