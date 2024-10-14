import sebLogo from "../../assets/SEB-logo.png";
import swedbankLogo from "../../assets/Swedbank-logo.png";
import handelsbankenLogo from "../../assets/Handelsbanken-logo.jpg";
import styles from './CardPreview.module.css';

const getCardStyle = (vendor) => {
    switch (vendor) {
        case "SEB":
            return { className: styles.green, logo: sebLogo, name: "SEB" };
        case "Swedbank":
            return { className: styles.orange, logo: swedbankLogo, name: "Swedbank" };
        case "Handelsbanken":
            return { className: styles.blue, logo: handelsbankenLogo, name: "Handelsbanken" };
        default:
            return { className: styles.gray, logo: "", name: "Unknown" };
    }
};


function CardPreview({ cardNumber, cardHolder, expireMonth, expireYear, cvc, vendor }) {
    const cardStyle = getCardStyle(vendor);

    return (
        <div className={`${styles["preview-wrapper"]} ${cardStyle.className}`}>
            {/* Logotypen för kortutgivaren */}
            {cardStyle.logo && <img src={cardStyle.logo} alt={`${vendor} logo`} className={styles.logo} />}

            {/* Kortuppgifterna */}
            <p>{cardNumber || "########"}</p>
            <p>{cardHolder || "Cardholder's Name"}</p>
            <p>{expireMonth && expireYear ? `${expireMonth}/${expireYear}` : "MM/YY"}</p>
            <p>{cvc || "***"}</p>
        </div>
    );
}

export default CardPreview;
