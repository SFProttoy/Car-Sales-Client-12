import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header,.css";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        className="p-0"
        style={{ backgroundColor: "#2874A6" }}
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <>
          <h1 className="text-white ms-5">BuyCar</h1>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end me-5">
            <Nav.Link className="link" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/allCars">
              All Cars
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link className="link" as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <p className="text-white mt-3 me-3 fw-bolder link name">
                  {user?.displayName}
                </p>
                <Button className="ms-4 btn-dark" onClick={logOut}>
                  LogOut
                </Button>
              </>
            ) : (
              <>
                <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default Header;
