import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import CardPreview from "../../components/CardPreview/CardPreview";

// Skickar in cards som props (från App.js)
function HomePage({ cards }) {
    // Hämtar det AKTIVA kortet
    const activeCard = cards.find(card => card.active);

    // Hämta INAKTIVA kort
    const inactiveCards = cards.filter(card => !card.active);

    return (
        <div className={styles["home-page-wrapper"]}>
            <h1 className={styles["home-page-title"]}>Your e-card(s)</h1>

            {/* Visa det aktiva kortet OM det finns ett */}
            {activeCard && (
                <div>
                    <h2>Active card</h2>
                    <Link to={`/card/${activeCard.cardNumber}`}>
                        <CardPreview
                            cardNumber={activeCard.cardNumber}
                            cardHolder={activeCard.cardHolder}
                            expireMonth={activeCard.expireMonth}
                            expireYear={activeCard.expireYear}
                            cvc={activeCard.cvc}
                            vendor={activeCard.vendor}
                            active={activeCard.active}
                        />
                    </Link>
                </div>
            )}

            {/* Visa inaktiva kort */}
            {inactiveCards.length > 0 && (
                <div>
                    <h2>Inactive cards</h2>
                    {inactiveCards.map((card) => (
                        <Link to={`/card/${card.cardNumber}`} key={card.cardNumber}>
                            <CardPreview
                                cardNumber={card.cardNumber}
                                cardHolder={card.cardHolder}
                                expireMonth={card.expireMonth}
                                expireYear={card.expireYear}
                                cvc={card.cvc}
                                vendor={card.vendor}
                                active={card.active}
                            />
                        </Link>
                    ))}
                </div>
            )}

            {/* Visar knappen ENDAST om det finns färre än 4 kort */}
            {cards.length < 4 && (
                <Link to="/addcard">
                    <button>Add new card!</button>
                </Link>
            )}
        </div>
    );
}

export default HomePage;