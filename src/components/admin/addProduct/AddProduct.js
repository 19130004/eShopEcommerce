import React, { useState } from "react";
import Card from "../../card/Card";
import styles from "./AddProduct.module.scss";
const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
    imageURL: "",
    category: "",
    brand: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImageChange = (e) => {};
  const addProduct = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <React.Fragment>
      <div className={styles.product}>
        <h1>Add New Product</h1>
        <Card cardClass={styles.card}>
          <form onSubmit={addProduct}>
            <label>Product name:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={product.name}
              onChange={(e) => handleInputChange(e)}
            />

            <label>Product image:</label>
            <Card cardClass={styles.group}>
              <div className={styles.progress}>
                <div className={styles["progress-bar"]}>Upload 50%</div>
              </div>
              <input
                type="file"
                accept="image/*"
                placeholder="Product Image"
                name="image"
                onChange={(e) => handleImageChange(e)}
              />
              <input
                type="text"
                // required
                placeholder="Image URL"
                name="imageURL"
                value={product.imageURL}
                disabled
              />
            </Card>
            <label>Product price:</label>
            <input
              type="number"
              placeholder="Product price"
              required
              name="price"
              value={product.price}
              onChange={(e) => handleInputChange(e)}
            />
            <label>Product Category:</label>
            <select
              required
              name="category"
              value={product.category}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                -- choose product category --
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
            <label>Product Company/Brand:</label>
            <input
              type="text"
              placeholder="Product brand"
              required
              name="brand"
              value={product.brand}
              onChange={(e) => handleInputChange(e)}
            />
            <label>Product Description</label>
            <textarea
              name="desc"
              required
              value={product.desc}
              onChange={(e) => handleInputChange(e)}
              cols="30"
              rows="10"
            ></textarea>
            <button className="--btn --btn-primary">Add Product</button>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
