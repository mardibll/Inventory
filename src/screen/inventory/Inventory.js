import React from "react";
import style from "./style.module.css";
export default function Inventory() {
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
            <table className="table table-primary table-striped table-hover">
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
                </tr>
              </thead>
              {list_product.map((item, index) => (
                <tbody key={index} style={{}}>
                  <tr
                    style={{
                      height: 70,
                      verticalAlign: "middle",
                      borderBottom: "10px solid white",
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
          <button>Create Order</button>
          <button>Add Product</button>
          <button>out of stock</button>
          <button>favorite product</button>
        </div>
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
  {
    name: "mack book",
    code: "#1234",
    Type: "laptop",
    price: "$1,300",
    Qantity: "55",
  },
];
