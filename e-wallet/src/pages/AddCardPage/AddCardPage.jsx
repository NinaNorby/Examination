import { useState } from "react";
import CardPreview from "../../components/CardPreview/CardPreview";
import CardForm from "../../components/CardForm/CardForm";
import { useDispatch, useSelector } from 'react-redux';
import { addCard, resetNewCard } from "../../redux/cardSlice";
import { validateCard } from "../../utils/validationHelpers";
import styles from "./AddCardPage.module.css";

function AddCardPage() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const newCard = useSelector((state) => state.cards.newCard);

    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validateCard(newCard, cards);
        if (!validation.valid) {
            setErrors(validation.errors);
            setGeneralError(validation.errors.general || "Please correct the errors below");
            return;
        }

        dispatch(addCard());
        dispatch(resetNewCard());
        setErrors({});
        setGeneralError("");

        setSuccessMessage("Card added successfully!");

        setTimeout(() => { setSuccessMessage("") }, 5000);
    };

    return (
        <div className={styles["add-card-page-wrapper"]}>
            {generalError && <p className={styles.error}>{generalError}</p>}
            <div className={styles["card-preview-wrapper"]}>
                <CardPreview />
            </div>
            <div className={styles["form-wrapper"]}>
                <CardForm handleSubmit={handleSubmit} errors={errors} />
                {successMessage && <p className={styles.success}>{successMessage}</p>}
            </div>
        </div>
    );
}

export default AddCardPage;
