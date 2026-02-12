import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto my-12" style={{ minHeight: '500px' }}>
            <div className="w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-8">Please enter your details.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="user@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="w-full btn btn-primary py-3 mt-4">Sign In</button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
                </p>
            </div>

            <div className="w-1/2 bg-blue-600 flex items-center justify-center p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
                <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-bold mb-4">New Arrivals are here!</h3>
                    <p className="text-blue-100">Discover the latest trends and exclusive collections.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
