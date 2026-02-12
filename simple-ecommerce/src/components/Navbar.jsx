import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Package, User, LogOut } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { cart, wishlist } = useShop();
    const { user, logout } = useAuth();

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="container flex items-center justify-between" style={{ height: '64px' }}>
                <Link to="/" className="text-xl font-bold flex items-center gap-2">
                    <span className="text-accent">Shop</span>Simple
                </Link>

                <div className="flex items-center gap-4">
                    <Link to="/" className="hover:text-accent">Store</Link>

                    {user ? (
                        <>
                            <Link to="/orders" className="flex items-center gap-1 hover:text-accent" title="My Orders">
                                <Package size={20} />
                            </Link>
                            <Link to="/wishlist" className="flex items-center gap-1 hover:text-accent relative" title="Wishlist">
                                <Heart size={20} />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="/cart" className="flex items-center gap-1 hover:text-accent relative" title="Cart">
                                <ShoppingCart size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <div className="flex items-center gap-2 border-l pl-4 ml-2">
                                <span className="text-sm font-medium">{user.name}</span>
                                <button onClick={logout} className="text-gray-500 hover:text-red-500" title="Logout">
                                    <LogOut size={18} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/login" className="btn btn-outline">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
