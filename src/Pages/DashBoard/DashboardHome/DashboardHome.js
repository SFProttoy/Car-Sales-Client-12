import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddCar from "../AddCar/AddCar";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageCars from "../ManageCars/ManageCars";
import ManageOrders from "../ManageOrders/ManageOrders";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const DashboardHome = () => {
  const { user, logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
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
          <h1 className="text-white ms-3">Dashboard</h1>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end me-5">
            <Nav.Link className="link" as={Link} to="/home">
              Home
            </Nav.Link>
            {admin ? (
              <>
                <Nav.Link className="link" as={Link} to={`${url}`}>
                  Add A Car
                </Nav.Link>
                <Nav.Link className="link" as={Link} to={`${url}/makeAdmin`}>
                  Make Admin
                </Nav.Link>
                <Nav.Link className="link" as={Link} to={`${url}/manageOrders`}>
                  Manage All Orders
                </Nav.Link>
                <Nav.Link className="link" as={Link} to={`${url}/manageCars`}>
                  Manage Cars
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="link" as={Link} to={`${url}`}>
                  My Orders
                </Nav.Link>
                <Nav.Link className="link" as={Link} to={`${url}/review`}>
                  Review
                </Nav.Link>
                <Nav.Link className="link" as={Link} to={`${url}/pay`}>
                  Pay
                </Nav.Link>
              </>
            )}

            {user.email ? (
              <>
                <p className="text-white mt-3 fw-bolder link name">
                  {user?.displayName}
                </p>
                <Button className="ms-4 btn-dark common-btn" onClick={logOut}>
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
      <Switch>
        {admin ? (
          <>
            <Route exact path={path}>
              <AddCar></AddCar>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/manageCars`}>
              <ManageCars></ManageCars>
            </Route>
          </>
        ) : (
          <>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
          </>
        )}
      </Switch>
    </>
  );
};

export default DashboardHome;
