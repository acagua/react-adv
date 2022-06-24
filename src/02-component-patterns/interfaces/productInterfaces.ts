import { ReactElement } from "react";

interface IProduct {
  id: string;
  title: string;
  img?: string;
}
export interface ProductCardProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
}

export interface IProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;

  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
