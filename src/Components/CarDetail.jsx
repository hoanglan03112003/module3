import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CAR_PRODUCTS_API } from "../Contact/Appcontact";

function CarDetail() {
  const [producted, setproducted] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(producted).length === 0) {
      fetchProductCar();
    }
  }, [producted]);

  const fetchProductCar = async () => {
    await axios
      .get(`${CAR_PRODUCTS_API}/Car/${id}`)
      .then((respr) => {
        setproducted(respr.data);
        console.log(respr);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRemove = async () => {
    try {
      await axios.delete(`${CAR_PRODUCTS_API}/Car/${id}`);
      alert("Remove Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error + "error");
    }
  };
  return (
    <>
      <div>
        <h3>ID:</h3>
        <p>{producted.id}</p>
        <h3> Tên sản phẩm:</h3>
        <p>{producted.name}</p>
        <h3> Tồn Kho:</h3>
        <p>{producted.inventory}</p>
        <h3> Mã Số:</h3>
        <p>{producted.Series}</p>
        <h3>Giá:</h3>
        <p>{producted.Price}</p>
      </div>
      <button onClick={handleRemove}>Delete</button>
    </>
  );
}

export default CarDetail;
