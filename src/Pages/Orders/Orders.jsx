import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Utility/Firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Layout from "../../components/Layout/Layout";
import styles from "./Orders.module.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../components/Product/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);


  // ✅ FIXED CODE (matches Firebase v9 modular syntax)
  useEffect(() => {
    if (!user?.uid) return;

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot);
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
          // ...doc.data(),
        }))
      );
    });

    return unsubscribe;
  }, [user?.uid]);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.ordered_container}>
          <h2>Your Orders</h2>
{
  orders?.length == 0 && <div style={{padding:"20px"}}> you dont have orders yet.</div>
}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <p>Order ID: {eachOrder?.id} </p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
