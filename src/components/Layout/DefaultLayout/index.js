import './index.css';

import React from 'react';

import Headers from './Headers';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Headers />
      
      <div className="sidenav">
        <SideBar />
      </div>

      <div className="main">{children}</div>
    </div>
  );
}

export default DefaultLayout;
