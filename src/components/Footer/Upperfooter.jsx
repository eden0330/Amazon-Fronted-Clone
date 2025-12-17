import React from "react";
import styles from "../Footer/Footer.module.css";
import { PiCaretUpDownFill } from "react-icons/pi";
import Footer from "./Footer";

const Upperfooter = () => {
  return (
    <>
      <section className={styles.upper}>
        <div className={styles.upper_footer}>
          <li>
            <a href="" className={styles.al}>
              Back to top
            </a>
          </li>

          {/* <h3>Back To Top</h3> */}
        </div>

        <div className={styles.middle_footer}>
          <div className={styles.middle_container}>
            <div className={styles.cola}>
              <ul>
                <li>
                  <h3>Get to Know Us</h3>
                </li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations </li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
              </ul>
            </div>
            <div className={styles.colb}>
              <ul>
                <li>
                  <h3>Make Money with Us</h3>
                </li>
                <li>Sell products on Amazon </li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>
                  ›See More Make <br /> Money with Us
                </li>
              </ul>
            </div>
            <div className={styles.colc}>
              <ul>
                <li>
                  <h3>Amazon Payment Products</h3>
                </li>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>
            <div className={styles.cold}>
              <ul>
                <li>
                  <h3>Let Us Help You</h3>
                </li>
                <li>
                  Amazon and COVID- <br />
                  19
                </li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>
                  Shipping Rates & <br />
                  Policies
                </li>
                <li>Returns & Replacements</li>
                <li>
                  Manage Your <br /> Content and Devices
                </li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.lowest}>
          <div className={styles.lowest_container}>
            <div className={styles.images}>
              <a href="/">
                <img
                  className={styles.logo}
                  src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                  alt="amazon logo"
                />
              </a>
            </div>
            {/* <div> */}
            <ul className={styles.log}>
              <li className={styles.lli}>
                <span className={styles.list}>English</span>{" "}
                <a href="">
                  <PiCaretUpDownFill className={styles.col} />
                </a>
              </li>
              <li>
                <span value="">$ USD- U.S.Dollar</span>
              </li>
              <li className={styles.lang}>
                <img
                  src="https://image.shutterstock.com/image-vector/vector-illustration-flag-united-states-260nw-2640469025.jpg"
                  alt="American flag"
        
                />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Upperfooter;
