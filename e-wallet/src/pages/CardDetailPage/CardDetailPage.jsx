import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { activateCard, deleteCard, updateCard } from "../../redux/cardSlice";
import CardItem from "../../components/CardItem/CardItem";
import styles from "./CardDetailPage.module.css";

function CardDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Hämta kortet baserat på id (cardNumber)
    const card = useSelector((state) => state.cards.cards.find(c => c.cardNumber === id));
    const [editedCard, setEditedCard] = useState(card ? { ...card } : null);

    if (!card) {
        return <p>Card not found</p>;
    }

    const handleInputChange = (e, field) => {
        setEditedCard({
            ...editedCard,
            [field]: e.target.value
        });
    };

    const handleSaveChanges = () => {
        console.log("Attempting to save changes...");  
        console.log("Edited card: ", editedCard);  

        // Uppdaterar kortet i Redux store
        dispatch(updateCard({ oldCardNumber: card.cardNumber, updatedCard: editedCard }));

        // 
        setTimeout(() => {
            navigate("/");  
        }, 500);
    };

    const handleActivateCard = () => {
        dispatch(activateCard(card.cardNumber));
        navigate("/");
    };

    const handleDeleteCard = () => {
        if (!card.active) {
            dispatch(deleteCard(card.cardNumber));
            navigate("/");
        } else {
            alert("Cannot delete an active card.");
        }
    };

    return (
        <div className={styles["card-detail-page-wrapper"]}>
            <h2>Edit Card Details</h2>

            {/* Visar rätt meddelande beroende på kortets status */}
            {card.active ? (
                <p>This is an active card. <b>No</b> changes are allowed!</p>
            ) : (
                <p>This is an inactive card. You can make changes.</p>
            )}

            <CardItem card={editedCard} /> 

            {!card.active && (
                <div>
                    <p>
                        Card Number:
                        <input
                            type="text"
                            value={editedCard.cardNumber}
                            onChange={(e) => handleInputChange(e, "cardNumber")}
                        />
                    </p>
                    <p>
                        Cardholder's Name:
                        <input
                            type="text"
                            value={editedCard.cardHolder}
                            onChange={(e) => handleInputChange(e, "cardHolder")}
                        />
                    </p>
                    <p>
                        Expiry Date:
                        <input
                            type="text"
                            value={editedCard.expireMonth}
                            onChange={(e) => handleInputChange(e, "expireMonth")}
                        />{" "}
                        /
                        <input
                            type="text"
                            value={editedCard.expireYear}
                            onChange={(e) => handleInputChange(e, "expireYear")}
                        />
                    </p>
                    <p>
                        CVC:
                        <input
                            type="text"
                            value={editedCard.cvc}
                            onChange={(e) => handleInputChange(e, "cvc")}
                        />
                    </p>
                    <p>
                        Vendor:
                        <select
                            value={editedCard.vendor}
                            onChange={(e) => handleInputChange(e, "vendor")}
                        >
                            <option value="SEB">SEB</option>
                            <option value="Swedbank">Swedbank</option>
                            <option value="Handelsbanken">Handelsbanken</option>
                        </select>
                    </p>

                    <button onClick={handleActivateCard} className={styles.button}>
                        Activate Card
                    </button>

                    <button onClick={handleDeleteCard} className={styles.button}>
                        Delete Card
                    </button>

                    <button onClick={handleSaveChanges} className={styles.button}>
                        Save Changes
                    </button>
                </div>
            )}

            <Link to="/" className={styles["link-button"]}>Go back</Link>
        </div>
    );
}

export default CardDetailPage;
