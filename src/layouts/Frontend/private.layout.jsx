import React from "react";
import { Outlet} from "react-router-dom";
import { Header } from "../../components/Frontend";
import { Footer } from "../../components/Frontend";


function FrontendPrivateLayout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

export default FrontendPrivateLayout;
