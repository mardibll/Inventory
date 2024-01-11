import React, { useEffect, useState } from "react";
import style from "./style.module.css";
export default function Navbars({ setnavbar }) {
  const [screen, setscreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth < 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleNavclick = (link) => {
  setnavbar(link);
  };
  return (
    <div className={style.container}>
      <div>
        {screen ? (
          <p style={{ fontWeight: "bold" }}>Quick Actions</p>
        ) : (
          <p style={{ fontWeight: "bold" }}>GENERAL</p>
        )}
        <div className={style.content}>
          {general.map((item, index) => (
            <button
              key={index}
              style={{ display: "flex", gap: 10 }}
              onClick={() => handleNavclick(item.link)}
            >
              <i className={item.icons} />
              <p>{item.link}</p>
            </button>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>SUPPORT</p>
        <div className={style.content}>
          {support.map((i, x) => (
            <button key={x} style={{ display: "flex", gap: 10 }}>
              <i className={i.icons} />
              <p>{i.link}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const general = [
  {
    icons: "bi bi-grid",
    link: "Dashboard",
  },
  {
    icons: "bi bi-box-seam",
    link: "Inventory",
  },
  {
    icons: "bi bi-cart2",
    link: "Sales Orders",
  },
  {
    icons: "bi bi-car-front",
    link: "Suppliers",
  },
];
const support = [
  {
    icons: "bi bi-info-circle",
    link: "Help",
  },
  {
    icons: "bi bi-gear",
    link: "Settings",
  },
];
