import { useState } from "react";
import { isValidCardNumber, isExpirationDateValid, isValidCardHolderName, isCVCValid } from "../../utils/validationHelpers";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardForm from "../../components/CardForm/CardForm";
import "./AddCardPage.css";

function AddCardPage() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expireMonth, setExpireMonth] = useState("");
    const [expireYear, setExpireYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [vendor, setVendor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidCardNumber(cardNumber)) {
            alert("Ogiltigt kortnummer. Det måste vara exakt 16 siffror.");
            return;
        }

        if (!isExpirationDateValid(expireMonth, expireYear)) {
            alert("Utgångsdatumet har passerat.");
            return;
        }
        if (!isValidCardHolderName(cardHolder)) {
            alert("Namnet får inte innehålla siffror.");
            return;
        }
        if (!isCVCValid(cvc)) {
            alert("Ogiltig CVC-kod. Det måste vara exakt 3 siffror.");
            return;
        }

        console.log("Kort tillagt!");// Ta bort sen 
    };

    return (
        <>
            <h2>Förhandsgranska ditt kort</h2>

            {/* Förhandsvisning av kortet */}
            <CardPreview
                cardNumber={cardNumber}
                cardHolder={cardHolder}
                expireMonth={expireMonth}
                expireYear={expireYear}
                cvc={cvc}
                vendor={vendor}
            />

            {/* Formulärkomponenten */}
            <h2>Lägg till kort</h2>
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
                handleSubmit={handleSubmit} // Skickar med handleSubmit-funktionen
            />
        </>
    );
}

export default AddCardPage;
