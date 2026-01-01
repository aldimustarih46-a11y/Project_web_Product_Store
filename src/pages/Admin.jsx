function Admin({ products, setProducts }) {
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {products.map(p => (
        <div key={p.id} className="flex justify-between mb-3">
          <span>{p.name}</span>
          <button
            onClick={() => deleteProduct(p.id)}
            className="text-red-500"
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
