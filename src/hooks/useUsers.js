import axios from "axios";
const api = axios.create({
	baseURL: "https://695a75ed950475ada466cf19.mockapi.io/api/v1",
});

export const fetchUsers = async () => {
  const res = await api.get('/user');
  return res.data;
}

export const createUsers = async (data) => {
  const res = await api.post("/user", data);
  return res.data;
};

export const deleteUsers = async (id) => {
  const res = await api.delete(`/user/${id}`);
  return res.data;
};