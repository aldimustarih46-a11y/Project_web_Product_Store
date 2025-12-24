import { useState } from "react";

function useProducts() {
  const [products] = useState([
    { id: 1, name: "Sepatu Sneakers", price: 250000 },
    { id: 2, name: "Kaos Polos", price: 100000 },
    { id: 3, name: "Tas Ransel", price: 300000 }
  ]);

  return { products };
}

export default useProducts;
