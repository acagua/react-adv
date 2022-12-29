import { ReactElement } from "react";

import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  IProduct,
  IProductContextProps,
  onChangeArgs,
} from "../interfaces/productInterfaces";
import styles from "../styles/styles.module.css";

export interface ProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
