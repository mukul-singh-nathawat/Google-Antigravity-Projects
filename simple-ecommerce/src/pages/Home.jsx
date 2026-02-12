import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const { products } = useShop();
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="container py-8">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Curated Collection</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Discover our premium selection of essentials designed for modern living.</p>
            </header>

            <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === cat
                                ? 'bg-slate-900 text-white'
                                : 'bg-white text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
