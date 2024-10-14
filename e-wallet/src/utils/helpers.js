// funktion för att kontrollera antalet kort.
export const canAddCard = (cards) => {
    return cards.length < 4; // Returnerar true om antalet kort är mindre än 4
};
