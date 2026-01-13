import ProductCard from "./ProductCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ProductList({ products, onAddToCart, onSelectProduct }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Dialog>
          <DialogTrigger>
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          </DialogTrigger>
          <DialogContent className="max-w-2xl mx-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {product.title}
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                Detail lengkap produk
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-64 w-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-1">
                  Deskripsi Produk
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {product.detail}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-gray-500 mb-2">
                Harga
              </h4>
              <p className="text-3xl font-bold text-green-600">
                {typeof product.price === "number"
                  ? `Rp ${product.price.toLocaleString("id-ID")}`
                  : product.price}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export default ProductList;
