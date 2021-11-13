import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const RegistrationHome = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser, error, isLoading, errorType, setError } = useAuth();
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
        <input className="sub-btn" type="submit" value="Register" />
      </form>
      {isLoading && <Spinner animation="border" variant="dark" />}
      {errorType === "register" ? (
        <h5 className="text-danger mb-4">{error}</h5>
      ) : (
        setError("")
      )}

      <h5>
        Already Registerd? <br />
      </h5>
      <Link className="toggle-link me-3" to="/login">
        Login
      </Link>
    </div>
  );
};

export default RegistrationHome;
