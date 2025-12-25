import { Navigate, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <p>Laman ini blum jadi awokawok</p>;

  return (
    <div className="detail-container">
		<button onClick={() => Navigate(-1)}> 
			⬅️Kembali
		</button>
      <img src={product.image} alt={product.name} />

      <div className="detail-info">
        <h2>{product.name}</h2>
        <h3>Rp {product.price}</h3>
        <p>{product.description}</p>

        <a
          href={`https://wa.me/082231837178?text=Saya mau beli ${product.name}`}
          target="_blank"
        >
          <button>Beli via WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default ProductDetail;
