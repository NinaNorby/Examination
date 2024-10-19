import { createSlice } from '@reduxjs/toolkit';

// start tillstånd för korthanteringen i Redux
const initialState = {
    cards: [],  // En lista över alla kort som användaren har. tom initialt 
    activeCard: null,  
    newCard: {  // Ett nytt kort som läggs till via formuläret innehåller dessa delar
        cardNumber: "",
        cardHolder: "",
        expireMonth: "",
        expireYear: "",
        cvc: "",
        vendor: ""
    }
};

// Skapar en slice för korthanteringen i Redux toolkit
const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        // REDUCER för att lägga till ett nytt kort
        addCard: (state) => {
            if (state.cards.length < 4) {  // Kontrollerar att antalet kort är mer än 4 st. 
                state.cards.forEach(card => card.active = false);  // Sätter alla befintliga kort till inaktiva när man har lagt till ett nytt kort redan
                state.cards.push({ ...state.newCard, active: true });  // Lägger till det nya kortet som aktivt
            }
        },
        // Reducer för att RADERA ett kort
        deleteCard: (state, action) => {
            // Filtrera bort kortet som matchar cardNumber från kortlistan
            state.cards = state.cards.filter(card => card.cardNumber !== action.payload);
        },
        // Reducer för att AKTIVERA ett specifikt kort
        activateCard: (state, action) => {
            // Gör alla andra kort inaktiva och aktivera det kort som matchar cardNumber
            state.cards.forEach(card => card.active = false);
            const cardToActivate = state.cards.find(card => card.cardNumber === action.payload);
            if (cardToActivate) cardToActivate.active = true;
        },
        // Reducer för att UPPDATERA ett befintligt kort
        updateCard: (state, action) => {
            const { oldCardNumber, updatedCard } = action.payload;
            const index = state.cards.findIndex(card => card.cardNumber === oldCardNumber);
            if (index !== -1) {
                // Uppdatera endast de fält som ändrats, behåll övriga fält som de är
                state.cards[index] = { ...state.cards[index], ...updatedCard };
            }
        },
        // Reducer för att återställa newCard-inputten till dess initiala värden
        resetNewCard: (state) => {
            state.newCard = {
                cardNumber: "",
                cardHolder: "",
                expireMonth: "",
                expireYear: "",
                cvc: "",
                vendor: ""
            };
        },
        //  Hanterar fälten när ett nytt kort läggs till .


        // Sätter kortnumret för det nya kortet
        setCardNumber: (state, action) => {
            state.newCard.cardNumber = action.payload;
        },
        // Sätter kortinnehavarens namn för det nya kortet
        setCardHolder: (state, action) => {
            state.newCard.cardHolder = action.payload;
        },
        // Sätter utgångsmånaden för det nya kortet
        setExpireMonth: (state, action) => {
            state.newCard.expireMonth = action.payload;
        },
        // Sätter utgångsåret för det nya kortet
        setExpireYear: (state, action) => {
            state.newCard.expireYear = action.payload;
        },
        // Sätter CVC-koden för det nya kortet
        setCvc: (state, action) => {
            state.newCard.cvc = action.payload;
        },
        // Sätter (vendor) för det nya kortet
        setVendor: (state, action) => {
            state.newCard.vendor = action.payload;
        },
    },
});

// Exportera alla actions som genererats av createSlice fär att det ska kunna fungera globalt 
export const {
    addCard,
    deleteCard,
    activateCard,
    updateCard,
    resetNewCard,
    setCardNumber,
    setCardHolder,
    setExpireMonth,
    setExpireYear,
    setCvc,
    setVendor,
} = cardSlice.actions;

// Exporterar reducer funktionen för att användas i  store.js
export default cardSlice.reducer;
