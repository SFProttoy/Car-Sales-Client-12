import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://nameless-chamber-15143.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="mt-3 mb-3">Add A New Car</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size"
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="size"
          type="number"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <br />
        <textarea
          className="size"
          placeholder="description"
          {...register("description", { required: true })}
        />
        <br />
        <input className="size" placeholder="image url" {...register("img")} />
        <br />

        <input className="order-btn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCar;
