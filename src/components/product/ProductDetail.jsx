import { useParams } from "react-router";

function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.detail}</p>

      <p className="text-xl font-semibold mb-6">
        Rp {product.price}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
