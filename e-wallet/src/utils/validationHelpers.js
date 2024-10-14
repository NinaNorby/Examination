//! Här samlar jag alla valideringsfunktioner som jag använder i min AddCardPage.jsx-fil. Jag har skrivit dem separat för att göra den mer lättläst. 

// Denna funktion kontrollerar om kortnumret är giltigt. Det måste vara exakt 16 siffror. Det behöver vara ett unikt nummer och inga bokstäver
export const isValidCardNumber = (cardNumber, cards = []) => {
    const validLength = cardNumber.length === 2;
    const isNumeric = /^\d+$/.test(cardNumber);
    // Kontrollera om kortnumret redan existerar i listan
    const alreadyExists = cards?.some(card => card.cardNumber === cardNumber);

    return validLength && isNumeric && !alreadyExists;
}

// Denna funktion kontrollerar om utgångsdatumet är giltigt. Det får inte vara tidigare än dagens datum
export const isExpirationDateValid = (expireMonth, expireYear) => {
    const currentDate = new Date();
    const expirationDate = new Date(`20${expireYear}`, expireMonth - 1); // Månaderna är 0-indexerade
    return expirationDate >= currentDate;
};

// Denna funktion kontrollerar om kortinnehavarens namn är giltigt. Det får inte innehålla siffror eller lämnas tomt
export const isValidCardHolderName = (cardHolder) => {
    // Kontrollera att cardHolder inte är tomt och endast innehåller bokstäver och mellanslag
    return cardHolder.trim() !== '' && /^[a-zA-Z\s]+$/.test(cardHolder);
};

// Denna funktion kontrollerar om CVC-koden är giltig. Den måste vara exakt 3 siffror. inga bokstäver
export const isCVCValid = (cvc) => {
    const validLength = cvc.length === 3; // Max 3 siffror
    const isNumeric = /^\d+$/.test(cvc); // Kontrollera att alla tecken är siffror
    return validLength && isNumeric;
}

