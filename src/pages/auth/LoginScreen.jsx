import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleClick = () => {};

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <React.Fragment>
            <main className="container center">
                <h1>IGClone</h1>

                <form className="center form" onSubmit={handleSubmit}>
                    <input
                        autoComplete="off"
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Teléfono, usuario o correo electrónico"
                    />

                    <input
                        autoComplete="off"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                    />

                    <button 
                        onClick={handleClick}
                    >
                        Iniciar Sesión
                    </button>

                    <div className="center__separation">
                        <hr />
                        Ó
                        <hr />
                    </div>

                    <a className="password" href="#">¿Olvidaste tú contraseña?</a>
                </form>

                <div className="contanier">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                </div>
            </main>
        </React.Fragment>
    );
};

export default LoginScreen;