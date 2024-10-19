import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from "../../redux/themeSlice"; 
import { deleteCard } from '../../redux/cardSlice'; 
import styles from './SettingsPage.module.css';

function SettingsPage() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme); // Hämtar nuvarande tema från store
    const cards = useSelector((state) => state.cards.cards); // Hämtar kort från  store

    // Funktion för att uppdatera valt tema
    const handleThemeChange = (e) => {
        dispatch(setTheme(e.target.value)); // Uppdaterar temat
    };

    // Funktion för att radera alla INAKTIVA  kort
    const handleDeleteInactive = () => {
        const inactiveCards = cards.filter(card => !card.active); // Filtrera inaktiva kort
        inactiveCards.forEach(card => {
            dispatch(deleteCard(card.cardNumber)); // Radera varje inaktivt kort
        });
    };

    return (
        <div className={styles["settings-wrapper"]}>
            <h2>Settings</h2>

            {/* Välj teman */}
            <div>
                <label>Select theme: </label>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Day Light</option>
                    <option value="dark">Night</option>
                    <option value="green">Forest</option>
                </select>
            </div>

            {/* Radera alla inaktiva kort */}
            <div>
                <button onClick={handleDeleteInactive} className={styles["settings-btn"]}>
                    Delete All Inactive Cards
                </button>
            </div>
        </div>
    );
}

export default SettingsPage;
