import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from React Icons

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('https://sqrft-website-backend.onrender.com/api/auth/login', {
                username,
                password,
            });

            const { token, message } = response.data;

            // Store token in local storage
            localStorage.setItem('authToken', token);

            // Redirect to dashboard
            alert(message);
            window.location.href = '/#my-account';
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login failed';
            setError(errorMessage);
        }
    };

    return (
        <div>
            <div className="ltn__login-area pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area text-center">
                                <h3 className="section-title">Admin Login</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className="col-lg-6">
                            <div className="account-login-inner" style={{ textAlign: 'center' }}>
                                <form onSubmit={handleLogin} className="ltn__form-box contact-form-box">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username*"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Password*"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ width: '100%' }}
                                        />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: 'absolute',
                                                right: '10px',
                                                top: '35%',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                                fontSize: '18px',
                                                color: '#888',
                                            }}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <div className="btn-wrapper mt-0">
                                        <button className="theme-btn-1 btn btn-block" type="submit">
                                            SIGN IN
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;