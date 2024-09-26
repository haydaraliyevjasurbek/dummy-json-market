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

    cart: JSON.parse(localStorage.getItem('cart')) || [],

    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);
        let newCart;

        if (existingProduct) {
            // Agar mahsulot mavjud bo'lsa, uning sonini oshiramiz
            newCart = state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // Mahsulot yo'q bo'lsa, uni qo'shamiz
            newCart = [...state.cart, { ...product, quantity: 1 }];
        }

        localStorage.setItem('cart', JSON.stringify(newCart)); // LocalStorage yangilanadi
        return { cart: newCart };
    }),

    removeFromCart: (id) => set((state) => {
        // Faqat mahsulotni miqdorini kamaytiradi
        const newCart = state.cart
            .map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0); // Mahsulot miqdori 0 bo'lsa, uni o'chirish

        localStorage.setItem('cart', JSON.stringify(newCart)); // LocalStorage yangilanadi
        return { cart: newCart };
    }),

    clearFromCart: (id) => set((state) => {
        // Mahsulotni butunlay o'chirish
        const newCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { cart: newCart };
    }),

    totalItems: (cart) => cart.reduce((acc, item) => acc + item.quantity, 0),

    distinctItems: (cart) => cart.length,
}));

export default store;
