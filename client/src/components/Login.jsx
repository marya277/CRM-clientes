
import React, { useState } from "react";

function LoginPage({ onLogin, isAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //manejo de autenticación
    onLogin();
    };

    if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
    }

    return (
    <div>
        <h1>Login</h1>
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
    </div>
    );
}

export default LoginPage;
