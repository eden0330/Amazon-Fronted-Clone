import React from "react";
import styles from "./Catagory.module.css"
import {Link} from "react-router-dom"


const CatagoryCard = ({data}) => {
 
  return (
    <div className={styles.cate}>
      <Link to={`/Category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CatagoryCard;
