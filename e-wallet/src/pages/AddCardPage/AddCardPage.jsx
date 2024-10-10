import { useState } from "react";
import { isValidCardNumber, isExpirationDateValid, isValidCardHolderName, isCVCValid } from "../../utils/validationHelpers";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardForm from "../../components/CardForm/CardForm";
import "./AddCardPage.css";

function AddCardPage() {
    // i cards ska samtliga kort sparas. arrayen kommer att hålla alla kort som användaren lägger till
    const [cards, setCards] = useState([]);
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expireMonth, setExpireMonth] = useState("");
    const [expireYear, setExpireYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [vendor, setVendor] = useState("");



    //  handleSubmit-funktionen ska validering av kortnummer, utgångsdatum, kortinnehavarens namn och CVC ske . Om något av fälten inte uppfyller kraven, visas ett felmeddelande och kortet läggs INTE till.
    const handleSubmit = (e) => {
        e.preventDefault();

        // validering av kortuppgifterna
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

        // Ett nytt kortobjekt (newCard) skapas med hjälp av de fält som användaren har fyllt i( cardNumber, cardHolder, expireMonth, expireYear, cvc, vendor/utgivare).
        const newCard = {
            cardNumber,
            cardHolder,
            expireMonth,
            expireYear,
            cvc,
            vendor,
        };

        // Lägger till det nya kortet i kortlistan (cards-arrayen). Använder ... spread operatorn för att kopiera den befintliga arrayen och lägga till det nya kortet.
        // Likt som att pusha. Jag kommer att behöva ändra detta när jag ska använda Redux, tänker jag mig.
        setCards([...cards, newCard]);

        console.log("Kort tillagt!", newCard); // För D-bugging, SKA  tas bort sen

        // Rensar formulärfält efter att kortet har lagts till för att på så sätt kunna lägga till fler kort.Det ska dock vara max 4 kort som ska kunna läggas till.
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
                handleSubmit={handleSubmit} // Skickar med handleSubmit-funktionen
            />
        </>
    );
}

export default AddCardPage;
