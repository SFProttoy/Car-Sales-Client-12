import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const RegistrationHome = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser, error, isLoading } = useAuth();
  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, history);
  };

  return (
    <div>
      <img src="https://i.ibb.co/cvp5spF/reg.gif" alt="" width="100px" />
      <h1>Registration</h1>

      <form className="login mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size"
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <br />

        <input
          className="size"
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="size"
          type="password"
          placeholder="Your Password"
          {...register("password", { required: true })}
        />
        <br />
        <input className="sub-btn" type="submit" />
      </form>
      {isLoading && <Spinner animation="border" variant="dark" />}
      <h5 className="text-danger mb-4">{error}</h5>
      <h5>
        Already Registerd? <br />
        <Link className="toggle-link me-3" to="/login">
          Login
        </Link>
      </h5>
    </div>
  );
};

export default RegistrationHome;
