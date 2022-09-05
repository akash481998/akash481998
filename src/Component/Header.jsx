import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <div>
        <Navbar className="nav_header">
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar>
        <hr className="m-0"/>
      </div>
    </>
  );
};

export default Header;
