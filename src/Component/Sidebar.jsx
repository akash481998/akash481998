import React, { Fragment } from "react";
import "../Component/sidebar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { BsViewStacked, BsLayoutThreeColumns } from "react-icons/bs";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const Sidebar = ({ children }) => {
  const [onClick, setOnClick] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isShow, setIsShow] = useState(false);

  const onMouseEnter = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);

  const closeSubmenu = (key) => setOnClick(key === onClick ? null : key);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RiDashboardLine />,
    },

    {
      path: "/inputdata",
      name: "Input Data",
      icon: <BsViewStacked />,
    },

    {
      path: "/emission",
      name: "Emissions",
      icon: <BsLayoutThreeColumns />,
    },
  ];
  return (
    <>
      <div className="header">
        <div className="bars" style={{ marginLeft: isOpen ? "10px" : "10px" }}>
          <FaBars onClick={toggle} className="d-lg-none d-md-none d-block" />
        </div>
        <div className="page-title-box">
          <h3>Zoonkie</h3>
        </div>
      </div>
      <div className="combind">
        <div className="sidebar" style={{ width: isOpen ? "0px" : "230px" }} >
          {menuItem.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="d-flex">
                  <div className="ms-2 fs-4">{item.icon}</div>
                  <div className="sidebar_name">{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <main className="contain">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
