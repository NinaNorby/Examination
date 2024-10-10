import sebLogo from "../../assets/SEB-logo.png";
import swedbankLogo from "../../assets/Swedbank-logo.png";
import handelsbankenLogo from "../../assets/Handelsbanken-logo.jpg";
import "../CardPreview/CardPreview.css";

const getCardStyle = (vendor) => {
    switch (vendor) {
        case "SEB":
            return { className: "green", logo: sebLogo, name: "SEB" };
        case "Swedbank":
            return { className: "orange", logo: swedbankLogo, name: "Swedbank" };
        case "Handelsbanken":
            return { className: "blue", logo: handelsbankenLogo, name: "HandelsBanken" };
        default:
            return { className: "gray", logo: "", name: "Unknown" };
    }
};

function CardPreview({ cardNumber, cardHolder, expireMonth, expireYear, cvc, vendor }) {
    const cardStyle = getCardStyle(vendor);  // Hämtar kortets stil beroende på vendor

    // Returnerar kortet med rätt färg, logotyp och information.
    return (

        //Testar att göra en dynamisk klass som hämtas från cardStyle-objektet baserat på den valda kortutgivaren (vendor) ( ${cardStyle.className}: ) (Stackoverflow)
        <div className={`preview-wrapper ${cardStyle.className}`}>
            {/* Om cardStyle.logo finns (inte är null eller undefined), renderas <img>-taggen med src satt till cardStyle.logo och alt-texten satt till ${vendor} logo. */}
            {cardStyle.logo && <img src={cardStyle.logo} alt={`${vendor} logo`} />}
            {/* Antingen visas det inmatade uppgifterna eller de hårdkodade innehållet */}
            <p>{cardNumber || "########"}</p>
            <p>{cardHolder || "Cardholder's Name"}</p>
            <p>{expireMonth && expireYear ? `${expireMonth}/${expireYear}` : "MM/YY"}</p>
            <p>{cvc || "***"}</p>
        </div>
    );
}

export default CardPreview;