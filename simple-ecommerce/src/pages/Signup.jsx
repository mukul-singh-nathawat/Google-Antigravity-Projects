import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signup(email, password, name)) {
            navigate('/');
        }
    };

    return (
        <div className="flex bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto my-12" style={{ minHeight: '500px' }}>

            <div className="w-1/2 bg-slate-900 flex items-center justify-center p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black"></div>
                <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-bold mb-4">Join the Club</h3>
                    <p className="text-slate-300">Get exclusive access to members-only products and priority shipping.</p>
                </div>
            </div>

            <div className="w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                <p className="text-gray-500 mb-8">Start your shopping journey today.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
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
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="w-full btn btn-primary py-3 mt-4">Create Account</button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
