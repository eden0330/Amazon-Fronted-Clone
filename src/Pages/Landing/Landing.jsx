import React from "react";
import Catagory from "../../components/Catagory/Catagory.jsx";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";
import CarouselEffect from "../../components/Carousol/CarouselEffect";

const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Catagory />
      <Product />
    </Layout>
  );
};

export default Landing;
