import ProductCard from "./ProductCard";

function ProductList({ products, onAdd }) {
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default ProductList;
		