import React from "react";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";
import Work from "./work";
import Layout from "../components/Layout";
import Skills from "./skills";

const DefaultPage = () => {
  return (
    <Layout>
      <Home />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default DefaultPage;
