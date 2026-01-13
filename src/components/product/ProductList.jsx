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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{product.title}</DialogTitle>
              <DialogDescription>
                {product.detail}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-cover mt-4" />
              <p>{product.price}</p>
              </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export default ProductList;
