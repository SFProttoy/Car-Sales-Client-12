import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/cars", data).then((res) => {
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
      <h1>Add A New Car</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size"
          defaultValue=""
          placeholder="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="size"
          defaultValue=""
          placeholder="price"
          {...register("price", { required: true })}
        />
        <br />
        <textarea
          className="size"
          placeholder="description"
          defaultValue=""
          {...register("description", { required: true })}
        />
        <br />
        <input
          className="size"
          placeholder="image url"
          defaultValue=""
          {...register("img")}
        />
        <br />

        <input className="order-btn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCar;
