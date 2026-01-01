function ProductDetail({ product, onBack }) {
  const waNumber = "6282231837178"; // pakai kode negara
  const waText = encodeURIComponent(
    `Halo, saya tertarik membeli produk ${product.name}`
  );

  return (
    <div className="relative p-10 flex gap-10">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-blue-600 font-semibold"
      >
        ⬅ Kembali
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-[350px] rounded-xl"
        />

      <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-green-600 text-2xl font-semibold mb-4">
           Rp {product.price.toLocaleString("id-ID")}
        </p>

        <p className="text-gray-700 mb-6">{product.description}</p>

        <div className="flex gap-4">
            <button
              onClick={() => onAddToCart(product)}
              className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300"
            >
              + Keranjang
            </button>
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="
                      bg-orange-500 text-white
                      px-6 py-3 rounded-lg
                      font-semibold
                      transition-all duration-300
                      hover:bg-orange-600
                      hover:scale-105
                      hover:shadow-lg
                      active:scale-95
                    ">
              Beli via WhatsApp
            </button>
          </a>
        </div>  
      </div>
    </div>
  </div>
  );
}

export default ProductDetail;
