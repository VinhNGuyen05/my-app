import Headers from "./Headers";
import SideBar from "./SideBar";
import React from "react";
import "./index.css";

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      
      <div class="sidenav">
        <SideBar />
      </div>

      <div class="main">{children}</div>
    </div>
  );
}

export default DefaultLayout;
