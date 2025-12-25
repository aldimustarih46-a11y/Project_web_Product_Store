import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, onAddToCart, onSelectProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
