import React from "react";
import Sidebar from "./Sidebar";
import {Route, Routes} from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard";
import InputData from "./Input/InputData";
import Emission from "./Emission/Emission";


const Layout = () => {
  return (
    <>
      <Sidebar>
        <Routes>          
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="/inputdata" element={<InputData/>} />
          <Route path="/emission" element={<Emission/>} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Layout;
