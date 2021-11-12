import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner/Banner";
import HomeCars from "./HomeCars/HomeCars";
import Info from "./Info/Info";
import ReviewHome from "./ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeCars></HomeCars>
      <Info></Info>
      <ReviewHome></ReviewHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
