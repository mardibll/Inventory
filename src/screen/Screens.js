import React, { useEffect, useState } from "react";
import Navbars from "../component/navbar/Navbars";
import Summary from "../component/summary/Summary";
import style from "./style.module.css";
import Dashboard from "./dashboard/Dashboard";
import Inventory from "./inventory/Inventory";
export default function Screens() {
  const [screen, setscreen] = useState(false);
  const [actionNav, setactionNav] = useState("");
  console.log(actionNav);
  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth >= 600 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleNavbarClick = (link) => {
    setactionNav(link);
  };
  return (
    <div className={style.container}>
      {screen && (
        <div className={style.sum_bar}>
          <div className={style.summary}>
            <Summary />
          </div>
          <div className={style.navbar}>
            <Navbars />
          </div>
        </div>
      )}
      {!screen && (
        <div className={style.navbar}>
          <Navbars setnavbar={handleNavbarClick} />
        </div>
      )}
      <div style={{ width: "100%" }}>
        {actionNav !== "Inventory" && !screen && (
          <div className={style.summary}>
            <Summary />
          </div>
        )}
        <div>
          {actionNav === "Dashboard" ? (
            <Dashboard />
          ) : actionNav === "Inventory" ? (
            <Inventory />
          ) : actionNav === "Sales Orders" ? (
            <Dashboard />
          ) : actionNav === "Suppliers" ? (
            <Dashboard />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </div>
  );
}
