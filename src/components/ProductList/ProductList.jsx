import React, { Component } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  render(props) {
    if (this.props.products.length <= 0)
      return (
        <div id={styles.clearCard}>Sabad Kharid Shoma Khali Mibashad.</div>
      );
    let allPrice = 0;
    this.props.products.forEach((p) => {
      const productsPrice = p.price * p.quantity;
      allPrice = allPrice + productsPrice;
    });
    return (
      <div>
        <div>
          <div className={styles.productInformation}>
            Products: {this.props.products.length}
          </div>
          <div className={styles.productInformation}>
            Total Price: {allPrice}$
          </div>
        </div>
        {this.props.products.map((product, index) => {
          return (
            <Product
              product={product}
              key={index}
              onDelete={() => this.props.onDelete(product.id)}
              onIncerement={() => this.props.onIncerement(product.id)}
              onDecerement={() => this.props.onDecerement(product.id)}
              onChange={(e) => this.props.onChange(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
