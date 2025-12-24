function Header() {
  const handleSearch = (e) => {
    console.log("User mencari:", e.target.value);
  };

  return (
    <header style={{ padding: "20px", backgroundColor: "#222", color: "white" }}>
      <h1>Product Store</h1>
      <input
        type="text"
        placeholder="Cari produk..."
        onChange={handleSearch}
        style={{ padding: "6px", marginTop: "10px" }}
      />
    </header>
  );
}

export default Header;
