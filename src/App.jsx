import { useState } from "react";

// layout
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

// product
import ProductList from "./components/product/ProductList.jsx";
import ProductDetail from "./components/product/ProductDetail.jsx";

// login
import Login from "./components/login/login.jsx";

// hooks
import useProducts from "./hooks/useProducts.js";

function App() {
  const { products } = useProducts();

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("user");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLogin = (type = "user") => {
    setIsLogin(true);
    setRole(type);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    if (!isLogin) {
      alert("Silakan login dulu");
      return;
    }
    alert(`Produk ${product.name} ditambahkan ke keranjang`);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔒 BELUM LOGIN
  if (isLogin && role === "admin") {
    return <Admin products={products} setProducts={setProducts} />;
  }

  if (!isLogin) {
    return <Login onLogin={handleLogin} />;
  }

  // 📦 DETAIL PRODUK
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    );
  }

  // 🛒 HALAMAN TOKO
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onSelectProduct={setSelectedProduct}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
