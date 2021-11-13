import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import "./PurchaseHome.css";

const PurchaseHome = () => {
  const { buyId } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://nameless-chamber-15143.herokuapp.com/cars/${buyId}`)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [buyId]);

  const { img, name, description, price } = carDetails;

  const onSubmit = (data) => {
    data.carDetails = carDetails;
    axios
      .post("https://nameless-chamber-15143.herokuapp.com/purchases", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Ordered",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };

  return (
    <Row
      xs={1}
      md={2}
      className="mt-5 d-flex justify-content-center align-items-center w-100 mx-auto"
    >
      <Col className="details">
        <img className="car-img" src={img} width="500" alt="" />
        <h1>{name}</h1>
        <p className="mt-5 mb-4 details-para fs-5 info">{description}</p>
        <h5 className="text-dark fw-bolder">Price: ${price}</h5>
      </Col>
      <Col>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input className="ph-size" value="pending" {...register("status")} />
          <br />
          <input
            className="ph-size"
            value={user.displayName}
            {...register("name")}
          />
          <br />
          <input
            className="ph-size"
            value={user.email}
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="ph-size"
            placeholder="Address"
            defaultValue=""
            {...register("address", { required: true })}
          />
          <br />
          <input
            className="ph-size"
            placeholder="City"
            defaultValue=""
            {...register("city", { required: true })}
          />
          <br />
          <input
            className="ph-size"
            placeholder="phone number"
            defaultValue=""
            {...register("phone", { required: true })}
          />
          <br />

          <input className="order" type="submit" value="Add" />
        </form>
      </Col>
    </Row>
  );
};

export default PurchaseHome;
