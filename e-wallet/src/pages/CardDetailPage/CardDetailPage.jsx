import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // för att hantera redigering
import {
  isValidCardNumber,
  isExpirationDateValid,
  isValidCardHolderName,
  isCVCValid,
} from "../../utils/validationHelpers";
import styles from "./CardDetailPage.module.css";

function CardDetailPage({ cards, setCards }) {
  const { id } = useParams(); // hämtar id från URL:en
  const navigate = useNavigate();
  const card = cards.find((c) => c.cardNumber === id); // hittar kort baserat på cardNumber

  // nytt state för att hålla reda på det redigerade kortnumret. Jag kan annars ej redigera kortnumret direkt i inputfältet eftersom det är en del av card-objektet som är en del av cards-arrayen.
  const [editedCardNumber, setEditedCardNumber] = useState(card.cardNumber);

  if (!card) {
    return <p>Card not found</p>;
  }

  // Funktion för att aktivera kortet
  const activateCard = () => {
    const updatedCards = cards.map((c) => ({
      ...c,
      active: c.cardNumber === id, // Endast kortet med rätt cardNumber blir aktivt
    }));
    setCards(updatedCards);
  };

  // Funktion för att hantera och spara ändringar
  const saveChanges = () => {
    // Validera kortnumret och andra fält först när "Save Changes" trycks
    if (
      !isValidCardNumber(
        editedCardNumber,
        cards.filter((c) => c.cardNumber !== id)
      )
    ) {
      alert("Ogiltigt kortnummer. Det måste vara exakt 16 siffror och unikt. Du behöver fylla i detta fält.");
      return;
    }

    if (!isExpirationDateValid(card.expireMonth, card.expireYear)) {
      alert("Utgångsdatumet får inte lämnas tomt eller ha passerat.");
      return;
    }

    if (!isValidCardHolderName(card.cardHolder)) {
      alert("Namnet får inte lämnas tomt eller innehålla siffror.");
      return;
    }

    if (!isCVCValid(card.cvc)) {
      alert("Ogiltig CVC-kod. Måste vara exakt 3 siffror.");
      return;
    }

    const updatedCards = cards.map((c) =>
      c.cardNumber === id ? { ...c, cardNumber: editedCardNumber } : c
    );
    setCards(updatedCards);

    // Omdirigera till startsidan
    navigate("/"); // Skickar användaren tillbaka till startsidan efter att ändringar har sparats
  };

  const handleInputChange = (e, field) => {
    const updatedCards = cards.map((c) => {
      if (c.cardNumber === id) {
        return { ...c, [field]: e.target.value };
      }
      return c;
    });
    setCards(updatedCards);
  };

  const deleteCard = () => {
    const updatedCards = cards.filter((c) => c.cardNumber !== id);
    setCards(updatedCards);
    navigate("/"); // länkar till startsidan när kortet är borttaget
  };
  return (
    <>
      <div>
        <h2>{card.cardHolder}'s Card</h2>

        {/* Om kortet är aktivt, visa texten och dölj input-fälten */}
        {card.active ? (
          <>
            <p>
              This card is <b>active</b>. No changes allowed.
            </p>
            <Link to="/" className={styles.link}>
              Go back
            </Link>
          </>
        ) : (
          <div>
            <p>
              Card Number:
              <input
                type="text"
                value={editedCardNumber}
                onChange={(e) => setEditedCardNumber(e.target.value)}
              />
            </p>
            <p>
              Expiry Date:
              <input
                type="text"
                value={card.expireMonth}
                onChange={(e) => handleInputChange(e, "expireMonth")}
              />{" "}
              /
              <input
                type="text"
                value={card.expireYear}
                onChange={(e) => handleInputChange(e, "expireYear")}
              />
            </p>
            <p>
              CVC:
              <input
                type="text"
                value={card.cvc}
                onChange={(e) => handleInputChange(e, "cvc")}
              />
            </p>
            <p>
              Vendor:
              <select
                value={card.vendor}
                onChange={(e) => handleInputChange(e, "vendor")}
              >
                <option value="SEB">SEB</option>
                <option value="Swedbank">Swedbank</option>
                <option value="Handelsbanken">Handelsbanken</option>
              </select>
            </p>
            <button onClick={activateCard}>Activate Card</button>
            <button onClick={deleteCard}>Delete Card</button>
            <button onClick={saveChanges}>Save Changes</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CardDetailPage;
