import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/admin/navbar/Navbar";
import Home from "../../components/admin/home/Home";
import AddProduct from "../../components/admin/addProduct/AddProduct";
import styles from "./Admin.module.scss";
const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-product/:id" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
