//! Här samlar jag alla valideringsfunktioner som jag använder i min AddCardPage.jsx-fil. Jag har skrivit dem separat för att göra den mer lättläst. 

// Denna funktion kontrollerar om kortnumret är giltigt. Det måste vara exakt 16 siffror. inga bokstäver
export const isValidCardNumber = (cardNumber) => {
    return cardNumber.length === 16 && !isNaN(cardNumber);
};
// Denna funktion kontrollerar om utgångsdatumet är giltigt. Det får inte vara tidigare än dagens datum

export const isExpirationDateValid = (expireMonth, expireYear) => {
    const currentDate = new Date();
    const expirationDate = new Date(`20${expireYear}`, expireMonth - 1); // Månaderna är 0-indexerade
    return expirationDate >= currentDate;
};

// Denna funktion kontrollerar om kortinnehavarens namn är giltigt. Det får inte innehålla siffror
export const isValidCardHolderName = (cardHolder) => {
    return /^[a-zA-Z\s]+$/.test(cardHolder); // Endast bokstäver och mellanslag
};

// Denna funktion kontrollerar om CVC-koden är giltig. Den måste vara exakt 3 siffror. inga bokstäver
export const isCVCValid = (cvc) => {
    return cvc.length === 3 && !isNaN(cvc);
}