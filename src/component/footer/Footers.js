import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footers() {
  const [screen, setscreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.head}>
        <p>
          <span style={{ fontWeight: "bold", fontSize: 24, color: "black" }}>
            Ware
          </span>
          <span style={{ fontWeight: "bold", fontSize: 24, color: "#04B4FC" }}>
            View
          </span>
        </p>
        {!screen && (
          <div className={style.navbar}>
            <button>Dashboard</button>
            <button>Sales</button>
            <button>Banking</button>
            <button>Records</button>
            <button>Contact Us</button>
          </div>
        )}
      </div>
      <div className={style.body}>
        <p>
          Cultivating Efficiency, Tracking Excellence —Your Trusted Inventory
          Management Partner
        </p>
        <div className={style.icon}>
          <i className="bi bi-facebook" />
          <i className="bi bi-twitter" />
          <i className="bi bi-instagram" />
        </div>
      </div>
      {screen && (
        <div className={style.navbar}>
          <button>Dashboard</button>
          <button>Sales</button>
          <button>Banking</button>
          <button>Records</button>
          <button>Contact Us</button>
        </div>
      )}
      <div className={style.footer}>
        <p>Privacy Policy</p>
        {screen ? (
          <>
            <p>Terms & Conditions</p>
            <p>© 2023 Mugna Technologies, Inc.</p>
          </>
        ) : (
          <>
            <p>© 2023 Mugna Technologies, Inc.</p>
            <p>Terms & Conditions</p>
          </>
        )}
      </div>
    </div>
  );
}
