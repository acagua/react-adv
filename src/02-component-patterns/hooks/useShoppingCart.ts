import { useState } from "react";
import { IProduct, ProductInCart } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    product: IProduct;
    count: number;
  }) => {
    console.log({ count });
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      //delete product
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if (!Boolean(count)) {
      //   delete oldShoppingCart[product.id];
      //   return { ...oldShoppingCart };
      // }
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
