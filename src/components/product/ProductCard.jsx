function ProductCard({ product, onAddToCart, onSelectProduct }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col h-[360px]">
      
      <img
        src={product.image}
        alt={product.name}
        onClick={() => onSelectProduct(product)}
        className="h-[160px] object-contain cursor-pointer mb-3"
      />

      <h4 className="text-sm font-semibold mb-1">{product.name}</h4>

      <p className="text-green-500 font-bold mb-3">
        Rp {product.price.toLocaleString("id-ID")}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}

export default ProductCard;
