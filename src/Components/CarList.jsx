import React, { useEffect, useState } from "react";
import axios from "axios";
import { CAR_PRODUCTS_API } from "../Contact/Appcontact";
import { Link } from "react-router-dom";

function CarList() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    if (product.length === 0) {
      fectProduct();
    }
  });
  const fectProduct = async () => {
    await axios
      .get(`${CAR_PRODUCTS_API}/Car`)
      .then((response) => {
        setproduct(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button className="btn btn-primary mb-3">
        <Link to="/Products/CarAdd" className="text-white text-decoration-none">
          Add Product
        </Link>
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Inventory</th>
            <th scope="col">Series</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.inventory}</td>
              <td>{item.Series}</td>
              <td>{item.Price}</td>
              <td>
                <button className="btn btn-primary me-1">
                  <Link
                    className="text-white text-decoration-none"
                    to={`Products/Edit/${item.id}`}
                  >
                    Update
                  </Link>
                </button>
                <button className="btn btn-danger">
                  <Link
                    className="text-white text-decoration-none"
                    to={`Products/Delete/${item.id}`}
                  >
                    Delete
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CarList;
