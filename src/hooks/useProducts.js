import axios from "axios";
const api = axios.create({
	baseURL: "https://695a75ed950475ada466cf19.mockapi.io/api/v1",
});

export const fetchProduct = async () => {
  const res = await api.get('/product');
  return res.data;
}

export const createProduct = async (data) => {
  const res = await api.post("/product", data);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/product/${id}`);
  return res.data;
};