function ProductCard({ product, onAdd }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      width: "200px"
    }}>
      <h3>{product.name}</h3>
      <p>Harga: Rp {product.price}</p>
      <button onClick={() => onAdd(product.name)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
