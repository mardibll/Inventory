import React, { useState } from "react";
import style from "./style.module.css";
export default function Inventory() {
  const [showAll, setShowAll] = useState(false);

  const limitedList = list_product.slice(0, 4);

  return (
    <div className={style.container}>
      <div className={style.content_left}>
        <div className={style.action}>
          <p style={{ fontWeight: "bold" }}>Inventory</p>
          <input type="search" placeholder=" Search " />
          <i className="bi bi-plus-circle"> Add New Product</i>
        </div>
        <div className={style.list_product}>
          <p style={{ fontWeight: "bold" }}>Product List</p>
          <div style={{ maxHeight: 600, overflowY: "scroll" }}>
            <table className="table table-striped table-hover">
              <thead>
                <tr
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderBottom: "10px solid white",
                  }}
                >
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">name</th>
                  <th scope="col">code</th>
                  <th scope="col">Type</th>
                  <th scope="col">price</th>
                  <th scope="col">Qantity</th>
                  <th scope="col">Picture</th>
                </tr>
              </thead>
              {list_product.map((item, index) => (
                <tbody key={index} style={{}}>
                  <tr
                    style={{
                      height: 70,
                      verticalAlign: "middle",
                      borderTop: "10px solid white",
                    }}
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <th>{item.name}</th>
                    <th>{item.code}</th>
                    <th>{item.Type}</th>
                    <th>{item.price}</th>
                    <th>{item.Qantity}</th>
                    <th>
                      <img
                        src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ThinkCentre_A57e_01_(1).jpg"
                        alt="error"
                        style={{ height: 50, width: 50, borderRadius: 5 }}
                      />
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className={style.content_right}>
        <p style={{ fontWeight: "bold" }}>Quick Actions</p>
        <div className={style.actions}>
          <button>Stock Product</button>
          <button>Sold Product</button>
          <button>Incoming product</button>
          <button>out of stock</button>
          <button>favorite product</button>
        </div>
        <p style={{ fontWeight: "bold" }}>Recent Activity</p>
        <p>
          Restocked <span style={{ color: "#04B4FC" }}>{list_product.length}</span>{" "}
          Products
        </p>
        {limitedList.map((item, index) => (
          <div key={index} className={style.Recent}>
            <img
              src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ThinkCentre_A57e_01_(1).jpg"
              alt="error"
              style={{ height: 30, width: 30, borderRadius: 100 }}
            />
            <p>
              {item.name} <span style={{ paddingLeft: 10 }}>-</span>
            </p>
            <p>1 m ago</p>
          </div>
        ))}

        {list_product.length > 4 && (
          <p
            style={{
              textAlign: "end",
              textDecoration: "underline",
              color: "#04B4FC",
            }}
          >
            Lihat semua
          </p>
        )}
        <p>
          Sold <span style={{ color: "#04B4FC" }}>{list_product.length}</span>{" "}
          Products
        </p>
        {limitedList.map((item, index) => (
          <div key={index} className={style.Recent}>
            <img
              src="https://cdn.eurekabookhouse.co.id/ebh/product/all/ThinkCentre_A57e_01_(1).jpg"
              alt="error"
              style={{ height: 30, width: 30, borderRadius: 100 }}
            />
            <p>
              {item.name} <span style={{ paddingLeft: 35 }}>-</span>
            </p>
            <p>1 m ago</p>
          </div>
        ))}

        {list_product.length > 4 && (
          <p
            style={{
              textAlign: "end",
              textDecoration: "underline",
              color: "#04B4FC",
            }}
          >
            Lihat semua
          </p>
        )}
      </div>
    </div>
  );
}

const list_product = [
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack bookdssss",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
];
