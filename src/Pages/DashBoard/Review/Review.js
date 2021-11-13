import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    if (data.ratings >= 0 && data.ratings <= 5) {
      axios
        .post("https://nameless-chamber-15143.herokuapp.com/reviews", data)
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
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Rating should be 0-5",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div>
      <h1 className="mt-4 mb-4">Please review about our company.</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size"
          value={user.displayName}
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="size"
          value={user.email}
          {...register("email", { required: true })}
        />
        <br />
        <textarea
          className="size"
          placeholder="give your valuable review here"
          {...register("description", { required: true })}
        />
        <br />
        <input
          type="number"
          className="size"
          placeholder="give us a rating"
          {...register("ratings", { required: true })}
        />
        <br />
        <input className="order-btn" type="submit" value="Done" />
      </form>
    </div>
  );
};

export default Review;
