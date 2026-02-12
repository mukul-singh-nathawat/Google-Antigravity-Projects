import React from 'react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { orders } = useShop();
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="container py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Please log in</h2>
                <Link to="/login" className="btn btn-primary">Log In</Link>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="container py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
                <p className="text-gray-500 mb-8">Start shopping to see your orders here.</p>
                <Link to="/" className="btn btn-primary">Browse Products</Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">My Orders</h1>

            <div className="space-y-6">
                {orders.map(order => (
                    <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b flex flex-wrap justify-between items-center gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Order Placed</p>
                                <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Order ID</p>
                                <p className="font-medium">#{order.id}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total</p>
                                <p className="font-medium">${order.total.toFixed(2)}</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                {order.status}
                            </div>
                        </div>

                        <div className="p-4">
                            {order.items.map(item => (
                                <div key={item.id} className="flex items-center gap-4 py-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-gray-100" />
                                    <div className="flex-1">
                                        <h4 className="font-medium">{item.name}</h4>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="font-medium">${item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
