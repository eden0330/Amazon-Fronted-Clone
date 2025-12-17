import React,{useContext} from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Format/CurrencyFormat";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import {Type} from "../../Utility/action.type"
import {DataContext} from "../DataProvider/DataProvider"

const ProductCard = ({ product, flex, renderDisc,renderAdd }) => {
  const { image, title, id, rating, price ,description} = product;

const [state,dispatch]=useContext(DataContext)
console.log(state);


const addToCart = ()=>{
  dispatch({
    type: Type.ADD_TO_BASKET,
    item: { image, title, id, rating, price, description},
  });
}


  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        {image && (
          <img src={image} alt={title} className={styles.img_container} />
        )}
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDisc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={styles.rating}>
          {/* rating */}
          {rating && (
            <>
              <Rating value={rating.rate} precision={0.1} />
              {/* counting */}
              <small>{rating.count}</small>
            </>
          )}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && <button className={styles.button} onClick={addToCart}>add To cart</button>}
        {/* <button className={styles.button} onClick={addToCart}>
          add to cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
