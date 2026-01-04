function ProductCard({ product, onAddToCart, onSelectProduct }) {
  const handleAddToCart = (product) => {
    const phoneNumber = "6282231837178"; 
    const message = `Halo, saya ingin memesan produk berikut:%0A
Nama: ${product.title}%0A
Harga: ${product.price}`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, "_blank");
  };
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col h-[360px]">
      
      <img
        src={product.image}
        alt={product.title}
        onClick={() => onSelectProduct(product)}
        className="h-[160px] object-contain cursor-pointer mb-3"
      />

      <h4 className="text-sm font-semibold mb-1">{product.title}</h4>

      <p className="text-green-500 font-bold mb-3">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
      <p>
        {product.detail.length > 100
                  ? product.detail.slice(0, 50) + "..."
                  : product.detail}
      </p>

      <button
        onClick={() => handleAddToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        checkout via WhatsApp
      </button>
    </div>
  );
}

export default ProductCard;
