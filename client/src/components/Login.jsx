/* import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        const isEmailValid = email.trim() !== "";
        const isPasswordValid = password.trim() !== "";
        let errorMessage = "";

        if (!isEmailValid || !email.includes("@")) {
            errorMessage += "Por favor, ingresa un correo electrónico válido. ";
        }

        if (password.length < 6) {
            errorMessage += "La contraseña debe tener al menos 6 caracteres. ";
        }

        if (errorMessage !== "") {
            Swal.fire("Error", errorMessage, "error");
            return;
        }
        Swal.fire("Usuario logueado correctamente", "", "success");

        // Redirigir a la página de datos
        window.location.href = "/data";
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="w-100 max-w-sm bg-white border border-gray-400 shadow p-4 rounded">
                <h1 className="text-center mb-4 font-weight-bold">TEST-ELECTIONS</h1>
                <form className="" onSubmit={handleSubmit}>
                    <h3 className="text-center mb-4 font-weight-bold">Sign in to start your session</h3>
                    <div className="mb-3">
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                placeholder="Email"
                                className="form-control"
                            />
                            <span className="input-group-text">
                                <AiOutlineMail />
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="input-group">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                placeholder="Password"
                                className="form-control"
                            />
                            <span className="input-group-text">
                                <AiOutlineLock />
                            </span>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
 */
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
