// layout
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

// product
import ProductList from "./components/product/ProductList.jsx";

// hooks
import { useEffect, useState } from "react";
import { fetchProduct } from "./hooks/useProducts";

function App() {
  // const { products } = useProducts();

  // List Produk
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data);
      } catch (error) {
        console.error("Gagal mengambil produk:", error);
      }
    };

    getData();
  }, []);

  // 🛒 HALAMAN TOKO
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header/>

      <main className="flex-1 container mx-auto px-4 py-6">
        <ProductList
          products={products}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;