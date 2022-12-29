import {
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductButtons,
} from "../components/";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((productKey) => (
          <ProductCard
            key={productKey}
            product={shoppingCart[productKey]}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={shoppingCart[productKey].count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
