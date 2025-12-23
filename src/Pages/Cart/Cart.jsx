import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/Format/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider";
import styles from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  console.log(basket);

  const increament = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <>
      <Layout>
        <section className={styles.container}>
          <div className={styles.cart_container}>
            <h2>Hello</h2>
            <h3>Your Shopping basket</h3>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps ! No item in your Cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <section className={styles.cart_product}>
                    <ProductCard
                      key={i}
                      product={item}
                      renderDisc={true}
                      renderAdd={false}
                      flex={true}
                    />
                    <div className={styles.btn_container}>
                      <button
                        className={styles.btn}
                        onClick={() => increament(item)}
                      >
                        <IoIosArrowUp size={30} />
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={styles.btn}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown size={30} />
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>

          {basket?.length !== 0 && (
            <div className={styles.subtotal}>
              <div>
                <p>SubTotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This Order Contains a gift</small>
              </span>
              <Link to="/payment"> Continue to Checkout </Link>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};

export default Cart;
