import React from "react";
import style from "./style.module.css";
export default function Summary() {
  return (
    <div className={style.container}>
      <p style={{ fontWeight: "bold" }}>Sales Summary</p>
      <div className={style.content}>
        {summary.map((item, index) => (
          <button
            key={index}
            style={{ display: "flex", gap: 10, alignItems: "center" }}
          >
            <i className={item.icon} style={getIconStyle(item.icon)} />
            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <span>{item.amount}</span>
              <p>{item.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const getIconStyle = (icon) => {
  switch (icon) {
    case "bi bi-graph-up":
      return { backgroundColor: "#E7F8FC", color: "#04B4FC" };
    case "bi bi-calendar3":
      return { backgroundColor: "#F0E8FC", color: "#6E13DF" };
    case "bi bi-currency-dollar":
      return { backgroundColor: "#FCF3EC", color: "#C8895D" };
    case "bi bi-bag":
      return { backgroundColor: "#FCE0EC", color: "#FB407D" };
    default:
      return { backgroundColor: "transparent", color: "transparent" };
  }
};
const summary = [
  {
    icon: "bi bi-graph-up",
    amount: "143.3k",
    desc: "Today’s Sale",
  },
  {
    icon: "bi bi-calendar3",
    amount: "$ 250,423",
    desc: "Yearly Total Sales",
  },
  {
    icon: "bi bi-currency-dollar",
    amount: "$68.9k",
    desc: "Net Income",
  },
  {
    icon: "bi bi-bag",
    amount: "343",
    desc: "Products",
  },
];
