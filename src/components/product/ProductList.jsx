import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, onSelectProduct }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
