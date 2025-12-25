import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Login from "./components/login";
import useProducts from "./hooks/useProducts";
import ProductDetail from "./components/ProductDetail";

function App() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleAddToCart = (product) => {
    alert(`Produk ${product.name} ditambahkan ke keranjang`);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔒 BELUM LOGIN
  if (!isLogin) {
    return <Login onLogin={handleLogin} />;
  }

  // 🛍️ DETAIL PRODUK
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  // 🏠 HALAMAN TOKO
  return (
    <>
      <Header search={search} setSearch={setSearch} cartCount={2} />
      <ProductList products={filteredProducts}
        onAddToCart={handleAddToCart}
        onSelectProduct={setSelectedProduct}
      />
      <Footer />
    </>
  );
}

export default App;
