import { getCardStyle } from "../../utils/cardHelpers";
import styles from './CardItem.module.css'; 

function CardItem({ card }) {
    const cardStyle = getCardStyle(card.vendor, styles); 

    return (
        <div className={`${styles["preview-wrapper"]} ${cardStyle.className}`}>
            {cardStyle.logo && <img src={cardStyle.logo} alt={`${card.vendor} logo`} className={styles.logo} />}
            <p>{card.cardNumber || "########"}</p>
            <p>{card.cardHolder || "Cardholder's Name"}</p>
            <p>Expires: {card.expireMonth && card.expireYear ? `${card.expireMonth}/${card.expireYear}` : "MM/YY"}</p>
            <p>CVC: {card.cvc || "***"}</p>
        </div>
    );
}

export default CardItem;
