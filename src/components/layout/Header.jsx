import { FaShoppingCart, FaBell, FaQuestionCircle } from "react-icons/fa";
import { getAuthUser, logout } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

function Header() {
  const user = getAuthUser();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-blue-600 px-8 py-4 text-white">
      {/* LOGO */}
      <h1 className="text-2xl font-bold">TukuSepatu</h1>

      {/* RIGHT MENU */}
      <div className="flex items-center gap-5">
        {/* Admin */}
        {user?.role === "admin" && (
          <Link to="/admin">
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="text-black" />
            </Button>
          </Link>
        )}

        {/* LOGIN */}
        {user && (
          <button
            onClick={() => logout(navigate)}
            className="rounded-md bg-white px-4 py-1 font-bold text-blue-600 hover:bg-gray-200"
          >
            Logout
          </button>
        )}
        {!user && (
          <a
            href="/login"
            className="rounded-md bg-white px-4 py-1 font-bold text-blue-600 hover:bg-gray-200"
          >
            Login
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
