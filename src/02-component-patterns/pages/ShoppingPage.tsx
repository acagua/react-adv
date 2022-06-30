import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "../components/";
import "../styles/custom-styles.css";

const products = [
  {
    id: "123",
    title: "Coffee Mug",
    img: "coffee-mug.png",
  },
  {
    id: "123",
    title: "untitled",
  },
];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products[0]} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={"oli"} className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={products[0]} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={products[0]}
          style={{ backgroundColor: "#70D1F8" }}
        >
          <ProductImage style={{ width: "50%" }} />
          <ProductTitle style={{ backgroundColor: "red", color: "blue" }} />
          <ProductButtons style={{ color: "green" }} />
        </ProductCard>
      </div>
    </div>
  );
};
