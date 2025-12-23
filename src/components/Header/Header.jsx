import React, { useContext } from "react";

import { IoLocationOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.css";
import Lowerheader from "./Lowerheader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";


const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return (item.amount ?? 1) + amount;
  }, 0);

  // keep your Header split safe like this
  const email = typeof user?.email === "string" ? user.email : "";
  const username = email.includes("@") ? email.split("@")[0] : "";

  <p>Hello {username}</p>;

  // console.log(basket.length);
  return (
    <section className={styles.fix}>
      <section className={styles.header_outer_container}>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            {/* logo */}

            <Link to="/">
              <img
                className={styles.logo}
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </Link>
            <div className={styles.delivery}>
              {/* Delivery */}
              <span>
                <IoLocationOutline />
              </span>
              <div>
                <p>Deliver to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search bar */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" id="" />
            <IoSearch size={40} />
          </div>

          {/* right side link... */}
          <div className={styles.order_container}>
            <Link to="/" className={styles.lang}>
              <div>
                <img
                  src="https://image.shutterstock.com/image-vector/vector-illustration-flag-united-states-260nw-2640469025.jpg"
                  alt="American flag"
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </div>
            </Link>
            {/* {user?.email?.split("@")[0]} */}
            <Link to={user ? "/" : "/auth"}>
              <div className={styles.list}>
                {user ? (
                  <>
                    <p>Hello {username}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>{" "}
                  </>
                ) : (
                  <>
                    <p>Helo, Sign In</p>
                    <select name="" id="">
                      <option value="">Account & Lists</option>
                    </select>
                  </>
                )}
              </div>
            </Link>

            {/* return&order */}
            <Link to="/orders">
              <div className={styles.list}>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            {/* cartaway */}
            {/* <Link to="/cart" className={styles.cart_container}></Link> */}
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </section>
      <Lowerheader />
    </section>
  );
};

export default Header;
