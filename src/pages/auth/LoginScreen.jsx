import React, { useState } from 'react';

const LoginScreen = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleClick = () => {
        console.log(form);
    };

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
        console.log("submit", form);
    };

    return (
        <React.Fragment>
            <main className="container center">
                <h1>IGClone</h1>

                <form className="center form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Teléfono, usuario o correo electrónico"
                    />

                    <input
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

                    <a href="#">¿Olvidaste tú contraseña?</a>
                </form>

                <div className="contanier">
                    ¿No tienes una cuenta? <a href="#">Regístrate</a>
                </div>
            </main>
        </React.Fragment>
    );
};

export default LoginScreen;