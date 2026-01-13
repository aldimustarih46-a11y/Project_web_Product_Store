import axios from "axios";
const api = axios.create({
	baseURL: "https://695a75ed950475ada466cf19.mockapi.io/api/v1",
});

const fetchUser = async () => {
	const res = await api.get('/user');
	return res.data;
}

const vailedLogin = (users, email, password) => {
	const user = users.find(
		(user) => user.email === email && user.password === password
	);

	if (!user) throw new Error("Invalid email or password");
	return user;
}

const createFakeToken = (user) => {
	return btoa(
		JSON.stringify({
			id: user.id,
			email: user.email,
			exp: Date.now() + 60 * 60 * 1000, // 1 jam
		}))
}

export default async function LoginControler(
	email,
	password,
	navigate
) {
	try {
		const users = await fetchUser();
		const user = vailedLogin(users, email, password);
		const token = createFakeToken(user);

		sessionStorage.setItem("token", token);
		sessionStorage.setItem("user", JSON.stringify(user));

		if (user.role === "admin") {
			navigate("/admin");
		}
		else {
			navigate("/");
		}
	}
	catch (error) {
		throw error;
	}
}

export const getAuthUser = () => {
	const token = sessionStorage.getItem("token");
	const user = JSON.parse(sessionStorage.getItem("user"));

	if (!token || !user) return null;

	return user;
}

// Logout
export const logout = (navigate) => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");

  navigate("/");
};