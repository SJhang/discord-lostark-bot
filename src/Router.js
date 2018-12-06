import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// custom components
import App from './App';
import Header from "./shared/Header";
import SideNavbar from "./shared/SideNavbar";

const AppRouter = function() {
  return (
    <Router>
      <div className="">
        <Header />
        <SideNavbar/>
      </div>
    </Router>
  )
};

export default AppRouter;