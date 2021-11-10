import React from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./LoginHome.css";

const LoginHome = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser, isLoading, error } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
  };
  return (
    <div>
      <img src="https://i.ibb.co/6nYgz5G/login.png" alt="" width="100px" />
      <h1>Log In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="login mx-auto">
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
        <span className="mb-1">New User?</span> <br />
        <Link className="toggle-link me-3" to="/register">
          Register
        </Link>
      </h5>
    </div>
  );
};

export default LoginHome;
