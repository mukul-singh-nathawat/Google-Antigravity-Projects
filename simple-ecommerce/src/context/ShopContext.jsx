import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const MOCK_PRODUCTS = [
    { id: 1, name: "Premium Wireless Headphones", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop", category: "Electronics" },
    { id: 2, name: "Minimalist Watch", price: 150, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop", category: "Accessories" },
    { id: 3, name: "Ergonomic Office Chair", price: 450, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop", category: "Furniture" },
    { id: 4, name: "Smart Speaker 4th Gen", price: 99, image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=1000&auto=format&fit=crop", category: "Electronics" },
    { id: 5, name: "Running Shoes", price: 120, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop", category: "Apparel" },
    { id: 6, name: "Travel Backpack", price: 80, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop", category: "Accessories" },
];

export const ShopProvider = ({ children }) => {
    const [products] = useState(MOCK_PRODUCTS);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [orders, setOrders] = useState([]);

    // Load state from localStorage on mount
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setCart(savedCart);
        setWishlist(savedWishlist);
        setOrders(savedOrders);
    }, []);

    // Save changes
    useEffect(() => { localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);
    useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist)); }, [wishlist]);
    useEffect(() => { localStorage.setItem('orders', JSON.stringify(orders)); }, [orders]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
    };

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev.filter(item => item.id !== product.id);
            return [...prev, product];
        });
    };

    const placeOrder = () => {
        if (cart.length === 0) return;
        const newOrder = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: 'Preparing'
        };
        setOrders(prev => [newOrder, ...prev]);
        setCart([]); // Clear cart
    };

    return (
        <ShopContext.Provider value={{
            products,
            cart,
            wishlist,
            orders,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleWishlist,
            placeOrder
        }}>
            {children}
        </ShopContext.Provider>
    );
};
