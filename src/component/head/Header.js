import React, { useEffect, useState } from "react";
import style from "./style.module.css";
export default function Header() {
  return (
    <div className={style.container}>
      <p>
        <span style={{ fontWeight: "bold", fontSize: 24, color: "black" }}>
          Ware
        </span>
        <span style={{ fontWeight: "bold", fontSize: 24, color: "#04B4FC" }}>
          View
        </span>
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="https://i.pinimg.com/736x/2c/7f/f6/2c7ff6e51b9c31f06af1e3a78667f551.jpg"
          alt="error"
          style={{ height: 40, width: 40, borderRadius: 100 }}
        />
        <div>
          <p style={{ fontWeight: "600" }}>Bryan Doe</p>
          <p style={{ fontSize: 13 }}>Admin</p>
        </div>
      </div>
    </div>
  );
}
