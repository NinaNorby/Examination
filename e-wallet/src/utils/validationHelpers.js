export const canAddCard = (cards) => {
    return cards.length < 4; // Returnerar true om antalet kort är mindre än 4
};

// Denna funktion kontrollerar om kortnumret är giltigt
export const isValidCardNumber = (cardNumber, cards = []) => {
    const errors = [];
    if (!/^\d+$/.test(cardNumber)) {
        errors.push("The card number may only contain numbers.");
    }
    if (cardNumber.length !== 16) {
        errors.push("The card number must be exactly 16 digits.");
    }
    const alreadyExists = cards.some(card => card.cardNumber === cardNumber);
    if (alreadyExists) {
        errors.push("The card number already exists.");
    }
    return errors.length > 0 ? { valid: false, message: errors.join(" ") } : { valid: true };
};

// Denna funktion kommer att ska kontrollera om kortinnehavarens namn är giltigt. 
export const isValidCardHolderName = (cardHolder) => {
    if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
        return { valid: false, message: "The name must contain only letters and spaces." };
    }
    return { valid: true };
};

// Denna funktion kontrollerar om utgångsdatumet är giltigt
export const isExpirationDateValid = (expireMonth, expireYear) => {
    const errors = [];

    // Kontrollerar om månaden är ett giltigt nummer mellan 1 och 12
    const month = parseInt(expireMonth, 10);
    if (isNaN(month) || month < 1 || month > 12) {
        errors.push("The month must be a number between 1 and 12.");
    }

    // Kontrollera om året är ett giltigt nummer och att datumet inte har passerat
    const currentDate = new Date();
    const expirationDate = new Date(`20${expireYear}`, expireMonth - 1); // Månaderna är 0-indexerade
    if (expirationDate < currentDate) {
        errors.push("The expiration date must not have passed.");
    }

    return errors.length > 0 ? { valid: false, message: errors.join(" ") } : { valid: true };
};

// Denna funktion kontrollerar om CVC-koden är giltig
export const isCVCValid = (cvc) => {
    const validLength = cvc.length === 3;
    const isNumeric = /^\d+$/.test(cvc);
    return validLength && isNumeric;
};

// Sammanfogad valideringsfunktion för att kontrollera hela kortet
export const validateCard = (card, cards = []) => {
    const { cardNumber, cardHolder, expireMonth, expireYear, cvc, vendor } = card;
    const errors = {};

    // Kontrollera om användaren kan lägga till fler kort
    if (!canAddCard(cards)) {
        errors.general = "You cannot add more than 4 cards.";
        return { valid: false, errors };
    }

    const cardNumberValidation = isValidCardNumber(cardNumber, cards);
    if (!cardNumberValidation.valid) {
        errors.cardNumber = cardNumberValidation.message;
    }

    const cardHolderValidation = isValidCardHolderName(cardHolder);
    if (!cardHolderValidation.valid) {
        errors.cardHolder = cardHolderValidation.message;
    }

    const expirationDateValidation = isExpirationDateValid(expireMonth, expireYear);
    if (!expirationDateValidation.valid) {
        errors.expireDate = expirationDateValidation.message;
    }

    if (!isCVCValid(cvc)) {
        errors.cvc = "The CVC code must be exactly 3 digits.";
    }

    if (!vendor) {
        errors.vendor = "You must select a card issuer.";
    }

    return { valid: Object.keys(errors).length === 0, errors };
};
