import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner/Banner";
import HomeCars from "./HomeCars/HomeCars";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeCars></HomeCars>
    </div>
  );
};

export default Home;
