import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CAR_PRODUCTS_API } from "../Contact/Appcontact";
import { useNavigate } from "react-router";

function CarUpdate() {
  const [products, setProducts] = useState({});
  const { id } = useParams("id");
  useEffect(() => {
    fectDaTaEditProduct(id);
  }, [id]);
  const fectDaTaEditProduct = async (id) => {
    await axios
      .get(`${CAR_PRODUCTS_API}/Car/${id}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    axios
      .put(`${CAR_PRODUCTS_API}/Car/${id}`, products)
      .then(() => {
        alert("Edit Product Sucessfully!");
      })
      .catch((error) => {
        console.log("Errorr" + error);
      });
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h2>Edit</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={products.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inventory">inventory</label>
          <input
            type="text"
            name="inventory"
            value={products.inventory || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="series">Series</label>
          <input
            type="text"
            name="series"
            value={products.Series || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={products.Price || ""}
            onChange={handleChange}
          />
        </div>
        <input type="button" onClick={submit} value="Edit" />
      </form>
      <button onClick={handleNavigate}>Return</button>
    </>
  );
}

export default CarUpdate;
