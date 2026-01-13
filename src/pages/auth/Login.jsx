import { use, useState } from "react";
import LoginControler from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    LoginControler(email, password, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">
        {/* <form onChange={handleLogin}> */}
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
          // type="submint"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Login;
