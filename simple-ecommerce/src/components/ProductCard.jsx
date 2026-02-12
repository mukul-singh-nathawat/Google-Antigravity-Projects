import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart, toggleWishlist, wishlist, cart } = useShop();
    const { user } = useAuth();
    const navigate = useNavigate();

    const isInWishlist = wishlist.some(item => item.id === product.id);
    const isInCart = cart.some(item => item.id === product.id);

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        addToCart(product);
    };

    const handleToggleWishlist = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        toggleWishlist(product);
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <button
                    onClick={handleToggleWishlist}
                    className={`absolute top-2 right-2 p-2 rounded-full shadow ${isInWishlist ? 'bg-red-50 text-red-500' : 'bg-white text-gray-400'} hover:scale-110 transition-transform`}
                >
                    <Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
                </button>
            </div>
            <div className="p-4">
                <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{product.category}</span>
                <h3 className="font-bold text-lg mb-1 truncate">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-slate-800">${product.price}</span>
                    <button
                        onClick={handleAddToCart}
                        className={`btn ${isInCart ? 'btn-outline border-green-500 text-green-600' : 'btn-primary'} flex items-center gap-2`}
                    >
                        <ShoppingCart size={18} />
                        {isInCart ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
