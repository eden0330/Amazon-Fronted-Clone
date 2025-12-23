import React from 'react'
import { IoMenu } from "react-icons/io5";
import styles from "./Header.module.css"
import download from "../../assets/images/download.png";


const Lowerheader = () => {
  return (
    <div className={styles.lower_container}>
      <ul>
        <li>
          <IoMenu />
          <p>All</p>
        </li>
        <li className={styles.cat}>
          <button className={styles.button}>
          
              <img src={download} alt="" />
            
            <div className={styles.rufus}>Rufus</div>
          </button>
        </li>
        <li>Today's Deal</li>
        <li>Buy Again</li>
        {/* <li></li> */}
        <li className={styles.lli}>
          <span className={styles.list}>Browsing History</span>
          <a href="">
            <div>
              <select name="" id="">
                <option value=""></option>
              </select>
            </div>
          </a>
        </li>

        <li>Sell</li>
        <li>Gift Cards</li>
        <li>Amazon.com</li>
        <li>Customer Service</li>
        <li>Prime Video</li>
      </ul>
    </div>
  );
}

export default Lowerheader