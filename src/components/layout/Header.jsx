import { FaShoppingCart, FaBell, FaQuestionCircle } from "react-icons/fa";

function Header({ search, setSearch, isLogin, cartCount }) {
  return (
    <header className="flex items-center justify-between bg-blue-600 px-8 py-4 text-white">
      
      {/* LOGO */}
      <h1 className="text-2xl font-bold">TukuSepatu</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/3 rounded-md px-3 py-2 text-black outline-none"
      />

      {/* RIGHT MENU */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-1 hover:underline">
          <FaQuestionCircle /> Help
        </button>

        <button className="text-lg">
          <FaBell />
        </button>

        {/* 🛒 CART */}
        <button
          onClick={() => {
            if (!isLogin) {
              alert("Please login first");
            } else {
              alert("Go to cart");
            }
          }}
          className="relative text-lg"
        >
          <FaShoppingCart />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 text-xs">
              {cartCount}
            </span>
          )}
        </button>

        {/* LOGIN */}
        <button className="rounded-md bg-white px-4 py-1 font-bold text-blue-600 hover:bg-gray-200">
          {isLogin ? "Account" : "Login"}
        </button>
      </div>
    </header>
  );
}

export default Header;
