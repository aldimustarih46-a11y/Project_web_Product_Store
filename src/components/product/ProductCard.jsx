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
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col h-">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-[160px] object-contain cursor-pointer mb-3"
      />

      <h4 className="text-sm font-semibold mb-1 self-start">{product.title}</h4>

      <p className="text-green-500 font-bold self-start">
        {product.price.toLocaleString("id-ID")}
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
