import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://nameless-chamber-15143.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully admin selected",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry! something wrong",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="mt-3 mb-5">Make an admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size mb-5"
          type="email"
          placeholder="choose an email"
          {...register("email", { required: true })}
        />
        <br />
        <input type="submit" className="order-btn" value="make" />
      </form>
    </div>
  );
};

export default MakeAdmin;
