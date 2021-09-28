import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p className={styles.productName}>Product Name : {props.product.title}</p>
      <p className={styles.productPrice}>
        Product Price : {props.product.price}$
      </p>
      <p className={styles.quantity}>
        {props.product.quantity >= 1 ? props.product.quantity : 0}
      </p>
      <button
        onClick={props.onIncerement}
        className={`${styles.incerement} ${styles.button} ${styles.bgButton}`}
      >
        +
      </button>
      <button
        onClick={props.onDecerement}
        className={`${styles.decerement} ${styles.button} ${styles.bgButton} ${
          props.product.quantity <= 1 && styles.remove
        }`}
      >
        {props.product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <input
        type="text"
        onChange={props.onChange}
        className={styles.titleInput}
        value={props.product.title}
      />
      <button
        onClick={props.onDelete}
        className={`${styles.deleteButton} ${styles.button}`}
      >
        Delete
      </button>
    </div>
  );
};

export default Product;
