import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/purchases/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  return (
    <div>
      <h1 className="mt-4">My Car Orders: {myOrders.length}</h1>
      <Row xs={1} md={3} className="container g-4 mx-auto">
        {myOrders.map((myOrder) => (
          <MyOrder
            key={myOrder._id}
            myOrder={myOrder}
            myOrders={myOrders}
            setMyOrders={setMyOrders}
          ></MyOrder>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;
