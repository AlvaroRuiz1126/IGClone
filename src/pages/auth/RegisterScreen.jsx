import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    const [form, setForm] = useState({
        email: '',
        name: '',
        username: '',
        password: ''
    });

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
                    <fieldset>
                        <legend>Regístrate para ver tus fotos y vídeos</legend>
                        <div className="center__separation">
                            <hr />
                            Ó
                            <hr />
                        </div>

                        <input
                            autoComplete="off"
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Teléfono o correo electrónico"
                        />

                        <input
                            autoComplete="off"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nombre Completo"
                        />

                        <input
                            autoComplete="off"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Nombre de Usuario"
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
                            onClick={handleSubmit}
                        >
                            Regístrate
                        </button>

                    </fieldset>
                </form>

                <div className="contanier">
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
                </div>
            </main>
        </React.Fragment>
    );
};

export default RegisterScreen;