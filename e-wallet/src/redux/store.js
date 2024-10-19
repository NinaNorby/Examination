import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import themeReducer from './themeSlice'; 

const store = configureStore({
  reducer: {
    cards: cardReducer,  // Reducer för kort
    theme: themeReducer, // Reducer för temat
  },
});

export default store;
