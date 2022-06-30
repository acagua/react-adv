import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface ProductImageProps {
  className?: string;
  img?: string | undefined;
  style?: React.CSSProperties;
}
export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={img || product.img || noImage}
      alt="coffee-mug"
    />
  );
};
