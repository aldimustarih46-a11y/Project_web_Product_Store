import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
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
import { createProduct, deleteProduct, fetchProduct } from "../hooks/useProducts";

function Admin() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    detail: "",
    price: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(formData);

      const data = await fetchProduct();
      setProducts(data);

      // reset form
      setFormData({
        title: "",
        image: "",
        detail: "",
        price: "",
      });

      // tutup dialog
      setOpen(false);

      // optional: refresh data
    } catch (error) {
      console.error("Gagal menambah data:", error);
      alert("Gagal menambahkan data");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data ini?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      // update UI tanpa reload
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Gagal menghapus data:", error);
      alert("Gagal menghapus data");
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <div className="mt-4 w-full flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost">Tambah Data</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambah Data Baru</DialogTitle>
              <DialogDescription>
                Isi form di bawah untuk menambahkan data baru.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="image">Link Gambar</Label>
                  <Input
                    id="image"
                    name="image"
                    type="text"
                    placeholder=""
                    value={formData.image}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Nike Air Jordan"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="detail">Detail</Label>
                  <Input
                    id="detail"
                    name="detail"
                    type="text"
                    placeholder="Deskripsi"
                    value={formData.detail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Harga</Label>
                  <Input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Rp. 12.000.000"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Batal
                </Button>
                <Button type="submit">Simpan</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableCaption>list seluruh product</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">gambar</TableHead>
            <TableHead>nama produk</TableHead>
            <TableHead>detail produk</TableHead>
            <TableHead className="text-right">harga</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.detail.length > 100 ? item.detail.slice(0, 100) + "..." : item.detail}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
              <TableCell className="text-center">
                <Button variant="link" className="text-red-600" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
}

export default Admin;
