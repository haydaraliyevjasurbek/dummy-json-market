import { create } from 'zustand';

const store = create((set) => ({
    category: JSON.parse(localStorage.getItem('category')) || true,
    setCategory: (value) => {
        set({ category: value });
        localStorage.setItem('category', JSON.stringify(value));
    },

    searchBtn: JSON.parse(localStorage.getItem('search-btn')) || false,
    setSearchBtn: (value) => {
        set({ searchBtn: value });
        localStorage.setItem('search-btn', JSON.stringify(value));
    },

    searchText: "",
    setSearchText: (value) => set({ searchText: value }),

    loader: true,
    setLoader: (value) => set({ loader: value }),

    categoryObj: JSON.parse(localStorage.getItem('category-obj')) || [],
    setCategoryObj: (value) => {
        set({ categoryObj: value });
        localStorage.setItem('category-obj', JSON.stringify(value));
    },

    topRating: JSON.parse(localStorage.getItem('top-rating')) || [],
    setTopRating: (value) => {
        set({ topRating: value });
        localStorage.setItem('top-rating', JSON.stringify(value));
    },

    categoryList: JSON.parse(localStorage.getItem('category-list')) || [],
    setCategoryList: (value) => {
        set({ categoryList: value });
        localStorage.setItem('category-list', JSON.stringify(value));
    },

    // cart
    cart: JSON.parse(localStorage.getItem('cart')) || [],

    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find((item) => item.productId === product.productId);
        let newCart;
        console.log(state.cart);

        if (existingProduct) {
            newCart = state.cart.map((item) =>
                item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            newCart = [...state.cart, { ...product, quantity: 1 }];
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    removeFromCart: (id) => set((state) => {
        const newCart = state.cart
            .map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0);

        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    clearFromCart: (id) => set((state) => {
        const newCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    clearFromCart: (id) => set((state) => {
        const newCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    totalItems: (cart) => cart.reduce((acc, item) => acc + item.quantity, 0),

    distinctItems: (cart) => cart.length,
}));

export default store;
