import "./login.css";

function Login({ onLogin }) {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign In</h2>
        <p>Masuk untuk melanjutkan ke tuku sepatu</p>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={onLogin}>Login</button>

        <small>© 2025 Product Store</small>
      </div>
    </div>
  );
}

export default Login;
