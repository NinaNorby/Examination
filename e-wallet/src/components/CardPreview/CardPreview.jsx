import { useSelector } from 'react-redux';
import { getCardStyle } from "../../utils/cardHelpers";
import styles from './CardPreview.module.css';

function CardPreview() {
    // Hämtar kortuppgifter från Redux för förhandsvisning
    const cardNumber = useSelector((state) => state.cards.newCard.cardNumber);
    const cardHolder = useSelector((state) => state.cards.newCard.cardHolder);
    const expireMonth = useSelector((state) => state.cards.newCard.expireMonth);
    const expireYear = useSelector((state) => state.cards.newCard.expireYear);
    const cvc = useSelector((state) => state.cards.newCard.cvc);
    const vendor = useSelector((state) => state.cards.newCard.vendor);

    const cardStyle = getCardStyle(vendor, styles); // Hämtar korrekt stil för kortutgivaren

    return (
        <div className={`${styles["preview-wrapper"]} ${cardStyle.className}`}>
            {cardStyle.logo && <img src={cardStyle.logo} alt={`${vendor} logo`} className={styles.logo} />}
            <p>{cardNumber || "########"}</p>
            <p>{cardHolder || "Cardholder's Name"}</p>
            <p>{expireMonth && expireYear ? `${expireMonth}/${expireYear}` : "MM/YY"}</p>
            <p>{cvc || "***"}</p>
        </div>
    );
}

export default CardPreview;
