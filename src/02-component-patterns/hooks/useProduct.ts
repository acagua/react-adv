import { useEffect, useRef, useState } from "react";
import { onChangeArgs, IProduct } from "../interfaces/productInterfaces";

interface useProductArgs {
  product: IProduct;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(0, counter + value);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
