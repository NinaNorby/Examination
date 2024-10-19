// Importera createSlice från Redux Toolkit för att skapa en REDUCERS och ACTIONS för att hantera temat
import { createSlice } from '@reduxjs/toolkit';

// sätter det initiala statet för temat, där standardtemat är 'light' . 
const initialState = {
  theme: 'light',  // Standardtemat är light
};

// Skapar en slice för tema-hantering med initialt tillstånd och reducer för att ändra temat
const themeSlice = createSlice({
  name: 'theme', // Namn på slicen 
  initialState,  
  reducers: {
    // Reducer för att uppdatera temat. action.payload innehåller det nya temat somö då kan vara dark eller green
    setTheme: (state, action) => {
      state.theme = action.payload; // Uppdatera temat i state med det nya värdet som ánvändaren gjort
    },
  },
});

// Exporterar setTheme som genererats av createSlice så att den kan användas i komponenter för att byta tema
export const { setTheme } = themeSlice.actions;


export default themeSlice.reducer;
