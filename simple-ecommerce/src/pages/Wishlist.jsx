import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    const { wishlist } = useShop();

    if (wishlist.length === 0) {
        return (
            <div className="container py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
                <p className="text-gray-500 mb-8">You haven't saved any items yet.</p>
                <Link to="/" className="btn btn-primary">Browse Products</Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
