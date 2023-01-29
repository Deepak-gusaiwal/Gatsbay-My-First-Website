import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { container,mainContent } from "../components/style.module.css";

const Layout = ({ pageTitle }) => {
  return (
    <>
      <div className={container}>
        <Navbar />
        <main className={mainContent}>
          <h2>pageTitle : {pageTitle}</h2>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
