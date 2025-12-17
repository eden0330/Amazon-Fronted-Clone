import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from "axios"
import styles from "./Product.module.css"
import Loader from '../Loader/Loader';


const Product = () => {
    const [products, setProduct]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    
    useEffect(()=>{
    setIsLoading(true);  
axios.get("https://fakestoreapi.com/products")
.then((res)=>{
    setProduct(res.data)
    setIsLoading(false);
    console.log(res);
}).catch((err)=>{
    console.log(err);
    setIsLoading(false);
})
    },[])
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={styles.product_container}>
            {products?.map((singleProduct) => {
              return (
                <ProductCard product={singleProduct} key={singleProduct.id} 
                renderAdd={true}/>
              );
            })}
          </section>
        )}
      </>
    );
}

export default Product