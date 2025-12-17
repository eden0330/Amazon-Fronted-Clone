
import React, { useEffect, useState } from "react";
import styles from "./Result.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/Endpoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";


function Results() {
  const [results, setResults] = useState([]);
  const { CategoryName } = useParams();
   const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${CategoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.title}>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {CategoryName}</p>
          <hr />
          <div className={styles.product_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDisc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}
export default Results;