import React from "react";
import SplashFilterIcon from "../resources/icons/SplashFilterIcon";
import Footer from "./Footer";
import Header from "./Header";

const data = {
  copyRight: `© ${new Date().getFullYear()}. prachigarg19.Made With Love by.`,
  dev: "Prachi Garg",
};

export default function Layout({ children }) {
  return (
    <>
      <Header data={data} />
      {children}
      <SplashFilterIcon />
      <Footer data={data} />
    </>
  );
}
