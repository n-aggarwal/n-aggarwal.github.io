import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Work from "./work";
import Layout from "../components/Layout";

const DefaultPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Contact />
      <Work />
    </Layout>
  );
};

export default DefaultPage;
