import "./Header.css";
import { FaShoppingCart, FaBell, FaQuestionCircle } from "react-icons/fa";

function Header({ search, setSearch, cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">TukuSepatu</h1>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="header-right">
        <button className="menu-btn">
          <FaQuestionCircle /> Bantuan
        </button>

        <button className="icon-btn">
          <FaBell />
          <span className="badge"></span>
        </button>

        <button className="icon-btn">
          <FaShoppingCart />
        </button>

        <button className="menu-btn">Daftar</button>
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;
