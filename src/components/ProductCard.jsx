import "./ProductCard.css";

function ProductCard({ product, onAddToCart, onSelectProduct }) {

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => onSelectProduct(product)}
      />

      <h4>{product.name}</h4>
      <p>Rp {product.price.toLocaleString("id-ID")}</p>

      <button onClick={() => onAddToCart(product)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
}

export default ProductCard;
