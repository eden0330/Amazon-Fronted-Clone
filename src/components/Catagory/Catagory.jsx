import React from 'react'
import {imageCatagory} from "./Catagory.js"
import CatagoryCard from './CatagoryCard.jsx';
import styles from "./Catagory.module.css"

const Catagory = () => {
    
  return (
    <section className={styles.container}>
      {imageCatagory.map((item) => {
        return <CatagoryCard data={item} key={item.id} />;
      })}
    </section>
  );
}

export default Catagory;

