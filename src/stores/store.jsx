// store.js
import { create } from 'zustand';

const store = create((set) => ({

    category: JSON.parse(localStorage.getItem('category')) || false, 
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

    topRating:  JSON.parse(localStorage.getItem('top-rating')) || [],
    setTopRating: (value) => {
        set({ topRating: value });
        localStorage.setItem('top-rating', JSON.stringify(value));
    }
}));



export default store;
