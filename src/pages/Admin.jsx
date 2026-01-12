import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { fetchProduct } from "../hooks/useProducts";
import { Home, Package, Users, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { fetchUsers } from "../hooks/useUsers";

function Admin() {
  const [activeMenu, setActiveMenu] = useState("admin");
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: "admin", label: "Dashboard", icon: Home, path: "/admin" },
    { id: "products", label: "Products", icon: Package, path: "/products" },
    { id: "users", label: "Users", icon: Users, path: "/users" },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await fetchProduct();
        const user = await fetchUsers();

        setProducts(product);
        setUsers(user);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                const isActive =
                  location.pathname === item.path ||
                  location.pathname.startsWith(item.path);

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => navigate(item.path)}
                      className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg
              transition-colors duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link to="/" className="p-6">
            <Button variant="outline">
              <ArrowLeftIcon /> Home
            </Button>
          </Link>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Admin Panel
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area (Demo) */}
      <div className="ml-64 flex-1">
        <div className="p-10">
          <h1 className="text-3xl font-bold mb-8 capitalize">{activeMenu}</h1>
          <div className="mt-4 w-full gap-8 flex flex-col">
            <h1 className="font-semibold">List Semua Products :</h1>
            <Table className="mb-8">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Gambar</TableHead>
                  <TableHead>Nama Produk</TableHead>
                  <TableHead>Detail produk</TableHead>
                  <TableHead className="text-right">Harga</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover"
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      {item.detail.length > 100
                        ? item.detail.slice(0, 100) + "..."
                        : item.detail}
                    </TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <hr className="border-2" />

            <h1 className="font-semibold">List Semua Users :</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No.</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead >Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {index + 1}
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      {item.password}
                    </TableCell>
                    <TableCell>{item.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
