import { useState } from "react";
import { isValidCardNumber, isExpirationDateValid, isValidCardHolderName, isCVCValid } from "../../utils/validationHelpers";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardForm from "../../components/CardForm/CardForm";
import { canAddCard } from "../../utils/helpers";

import styles from "./AddCardPage.module.css";

// Skickar med cards och setCards som props
function AddCardPage({ cards, setCards }) {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expireMonth, setExpireMonth] = useState("");
    const [expireYear, setExpireYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [vendor, setVendor] = useState("");

    // handleSubmit-funktionen ska validera kortnummer, utgångsdatum, kortinnehavarens namn och CVC. Om något av fälten inte uppfyller kraven, visas ett felmeddelande och kortet läggs INTE till.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validering av kortdata
        if (!canAddCard(cards)) {
            alert("Du kan inte lägga till fler än 4 kort.");
            return;
        }
        
        if (!isValidCardNumber(cardNumber, cards)) {
            alert("Ogiltigt kortnummer. Det måste vara exakt 16 siffror och unikt. Du behöver fylla i detta fält.");
            return;
        }
        if (!isValidCardHolderName(cardHolder)) {
            alert("Namnet får inte lämnas tomt eller innehålla siffror.");
            return;
        }
        
        if (!isExpirationDateValid(expireMonth, expireYear)) {
            alert("Utgångsdatumet får inte lämnas tomt eller ha passerat.");
            return;
        }

        if (!isCVCValid(cvc)) {
            alert("Ogiltig CVC-kod. Det måste vara exakt 3 siffror.");
            return;
        }
        if (!vendor) {
            alert("Du måste välja en kortutgivare.");
            return;
        }

        // Ett nytt kortobjekt (newCard).
        const newCard = {
            cardNumber, // Använd cardNumber som unik identifierare
            cardHolder,
            expireMonth,
            expireYear,
            cvc,
            vendor,
            active: true, // Sätt det nya kortet som aktivt
        };

        // Uppdaterar kortlistan genom att först sätta alla befintliga kort som inaktiva (active: false!) och sedan lägg till det nya kortet (newCard) som det enda aktiva kortet
        const updatedCards = cards.map(card => ({ ...card, active: false }));

        // lägger till nya kortet
        setCards([...updatedCards, newCard]);

    

        // Rensar formulärfält efter att kortet har lagts till.
        setCardNumber("");
        setCardHolder("");
        setExpireMonth("");
        setExpireYear("");
        setCvc("");
        setVendor("");
    };

    return (
        <>
            {/* Förhandsvisning av kortet */}
            <CardPreview
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                expireMonth={expireMonth}
                expireYear={expireYear}
                cvc={cvc}
                vendor={vendor}
            />

            {/* Formulär för att fylla i nytt kort */}
            <CardForm
                cardNumber={cardNumber}
                setCardNumber={setCardNumber}
                cardHolder={cardHolder}
                setCardHolder={setCardHolder}
                expireMonth={expireMonth}
                setExpireMonth={setExpireMonth}
                expireYear={expireYear}
                setExpireYear={setExpireYear}
                cvc={cvc}
                setCvc={setCvc}
                vendor={vendor}
                setVendor={setVendor}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default AddCardPage;