import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "../components/";

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
        <ProductCard product={products[0]}>
          <ProductCard.Image />
          <ProductCard.Title title={"oli"} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={products[0]}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
