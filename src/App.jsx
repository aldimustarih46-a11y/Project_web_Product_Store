import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import useProducts from "./hooks/useProducts";

function App() {
  const { products } = useProducts();

  const handleAddToCart = (productName) => {
    alert(productName + " ditambahkan ke cart");
  };

  return (
    <div>
      <Header />
      <ProductList products={products} onAdd={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
