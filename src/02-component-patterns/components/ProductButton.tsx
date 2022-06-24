import React, { MouseEventHandler } from "react";

interface IProductButton {
  text: string;
  style: string;
  onClick: MouseEventHandler<HTMLButtonElement>; //(value: number) => void;
}
export const ProductButton = ({ text, style, onClick }: IProductButton) => {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};
