import React, { useState } from "react";
import { CAR_PRODUCTS_API } from "../Contact/Appcontact";
import axios from "axios";
import { useNavigate } from "react-router";

function CarAdd() {
  const [productAdd, setproductAdd] = useState({});
  const handleChange = (e) => {
    setproductAdd({ ...productAdd, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post(`${CAR_PRODUCTS_API}/Car`, productAdd)
      .then(() => {
        alert("Create New Car Successfully!");
      })
      .catch((error) => {
        console.log(error + "error");
      });
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="col">
        <div className="col m-2">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="col m-2">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Inventory"
            name="inventory"
            onChange={handleChange}
          />
        </div>
        <div className="col m-2">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Series"
            name="series"
            onChange={handleChange}
          />
        </div>
        <div className="col m-2">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary m-2 mt-2" onClick={handleSubmit}>
          Add
        </button>
        <button className="btn btn-primary m-2 mt-2" onClick={handleNavigate}>
          return
        </button>
      </div>
    </>
  );
}

export default CarAdd;
