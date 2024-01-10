import React from "react";
import Header from "@/components/blocks/headers/Header";
import Footer from "./blocks/footers/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
