import { ShoppingCart, MessageCircle } from 'lucide-react';

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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      {/* Image Container with Overlay */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-56 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
          onClick={() => onSelectProduct && onSelectProduct(product)}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h4 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h4>

        {/* Price */}
        <div className="mb-4 mt-auto">
          <p className="text-2xl font-bold text-green-600">
            {typeof product.price === 'number' 
              ? `Rp ${product.price.toLocaleString("id-ID")}`
              : product.price
            }
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn"
        >
          <MessageCircle className="h-5 w-5 transition-transform group-hover/btn:rotate-12" />
          <span>Checkout via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;