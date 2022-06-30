// import { ProductButton } from "./ProductButton";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

// type stylesType = {
//   [key: string]: string;
// };

// interface IProductButtons {
//   counter: number;
//   increaseBy: (value: number) => void;
// }

export interface ProductButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      {/* <ProductButton
        style={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
        text="-"
      /> */}
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
      {/* <ProductButton
        style={styles.buttonAdd}
        onClick={() => increaseBy(+1)}
        text="+"
      /> */}
    </div>
  );
};
